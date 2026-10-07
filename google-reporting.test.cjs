/* eslint-disable @typescript-eslint/no-require-imports -- Isolated server authorization tests. */
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');
const test = require('node:test');
const assert = require('node:assert/strict');
const source = ts.transpileModule(fs.readFileSync('src/lib/google-reporting.ts','utf8'), {compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;
function fixture(allowed=true, rpcError=null, failGoogle=false, loggedIn=true) {
 const calls=[];
 const env={GCP_PROJECT_NUMBER:'123',GCP_WORKLOAD_IDENTITY_POOL_ID:'pool',GCP_WORKLOAD_IDENTITY_POOL_PROVIDER_ID:'provider',GCP_SERVICE_ACCOUNT_EMAIL:'test@example.iam.gserviceaccount.com',GA4_PROPERTY_ID:'12345',GOOGLE_SEARCH_CONSOLE_SITE_URL:'sc-domain:example.com'};
 const exports={};
 vm.runInNewContext(source,{exports,process:{env},Date,Intl,encodeURIComponent,require(name){
  if(name==='server-only') return {};
  if(name==='@vercel/oidc') return {getVercelOidcToken:async()=>'private-token'};
  if(name==='next/navigation') return {notFound(){throw new Error('denied')}};
  if(name==='./supabase/server') return {requireMember:async()=>{if(!loggedIn)throw new Error('login');return {db:{rpc:async()=>({data:allowed,error:rpcError})}}}};
  if(name==='google-auth-library') return {ExternalAccountClient:{fromJSON(config){calls.push(config);return {request:async(options)=>{calls.push(options);if(failGoogle&&options.url.includes('analyticsdata')) throw (failGoogle === true ? {response:{status:403},message:'private-token'} : failGoogle);return {data:{rows:[]}}}}}}};
  throw new Error(name);
 }});
 return {run:exports.getGoogleReports,calls,env};
}
test('anonymous, denied and failed permission checks cannot call Google',async()=>{
 for(const f of [fixture(false),fixture(true,{message:'db down'}),fixture(true,null,false,false)]){await assert.rejects(f.run());assert.equal(f.calls.length,0);}
});
test('authorized reports use the configured site and 28-day range',async()=>{
 const f=fixture();const r=await f.run();const requests=f.calls.filter(x=>x.url);
 assert.equal(requests.length,2);assert.ok(requests[1].url.includes('sc-domain%3Aexample.com'));
 assert.equal((new Date(r.endDate)-new Date(r.startDate))/86400000,27);
 assert.equal(requests[0].data.dateRanges[0].startDate,r.startDate);
 assert.equal(f.calls[0].audience,'//iam.googleapis.com/projects/123/locations/global/workloadIdentityPools/pool/providers/provider');
});
test('source failures are independent and credentials never enter the result',async()=>{
 const f=fixture(true,null,true);const r=await f.run();assert.ok(r.analytics.error);assert.ok(r.search.data);assert.ok(!JSON.stringify(r).includes('private-token'));
});
test('missing configuration is unavailable, not zero data',async()=>{
 const f=fixture();delete f.env.GCP_PROJECT_NUMBER;const r=await f.run();assert.ok(r.analytics.error);assert.ok(r.search.error);assert.equal(f.calls.length,0);
});

test('diagnostics identify missing config and rejected provider without echoing responses',async()=>{
 const missing=fixture();delete missing.env.GCP_PROJECT_NUMBER;
 assert.match((await missing.run()).analytics.error,/GCP_PROJECT_NUMBER/);
 for(const [error,expected] of [['invalid_target',/identity provider/],['invalid_grant',/rejected the Vercel identity/]]){
  const r=await fixture(true,null,{response:{status:400,data:{error,error_description:'private-token'}}}).run();
  assert.match(r.analytics.error,expected);assert.ok(!JSON.stringify(r).includes('private-token'));
 }
 const r=await fixture(true,null,{response:{status:403,data:{error:{details:[{reason:'SERVICE_DISABLED'}]}}}}).run();
 assert.match(r.analytics.error,/API is disabled/);
});
