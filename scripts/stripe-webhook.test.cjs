const fs = require('node:fs');
const ts = require('typescript');
const test = require('node:test');
const assert = require('node:assert/strict');
require.extensions['.ts'] = (module, filename) => module._compile(ts.transpileModule(fs.readFileSync(filename, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, esModuleInterop: true } }).outputText, filename);
const { processReviewPayment, reviewEmail } = require('../src/lib/review-request.ts');
const { POST } = require('../src/app/api/webhooks/stripe/route.ts');
const Stripe = require('stripe');
const now = Date.now();
function fixture() {
  const session = { id:'cs_example', livemode:true, payment_status:'paid', payment_link:'plink_example', customer_details:{email:'customer@example.com'}, metadata:{} };
  const event = { id:'evt_example', type:'checkout.session.completed', livemode:true, created:Math.floor(now/1000), data:{object:{...session}} };
  const sends = [];
  const stripe = { checkout:{sessions:{ retrieve:async()=>session, update:async(_,p)=>Object.assign(session.metadata,p.metadata) }}, paymentLinks:{retrieve:async()=>({url:'https://buy.stripe.com/9B6eVcb8k71Bb7l8kp9R60v'})} };
  const resend = { emails:{send:async(body,options)=>{sends.push({body,options});return {data:{id:'email_example'}};}} };
  return {session,event,stripe,resend,sends};
}
test('paid checkout sends once with all three links and durable marker', async()=>{
  const f=fixture();
  assert.equal(await processReviewPayment(f.event,f.stripe,f.resend,now),'sent');
  assert.equal(await processReviewPayment(f.event,f.stripe,f.resend,now),'already-sent');
  assert.equal(f.sends.length,1);
  assert.equal(f.sends[0].options.idempotencyKey,'review-request/cs_example');
  for(const name of ['Google','Clutch','Trustpilot']) assert.ok(f.sends[0].body.text.includes(name));
});
test('unpaid, test, unrelated events and payment links never send',async()=>{
  for(const change of [f=>f.event.livemode=false,f=>f.event.data.object.payment_status='unpaid',f=>f.event.type='invoice.paid',f=>f.stripe.paymentLinks.retrieve=async()=>({url:'https://buy.stripe.com/another'})]){
    const f=fixture();change(f);assert.equal(await processReviewPayment(f.event,f.stripe,f.resend,now),'ignored');assert.equal(f.sends.length,0);
  }
});
test('async payment success sends after paid confirmation',async()=>{
  const f=fixture();f.event.type='checkout.session.async_payment_succeeded';assert.equal(await processReviewPayment(f.event,f.stripe,f.resend,now),'sent');
});
test('send errors remain retryable; expired ambiguous attempts require reconciliation',async()=>{
  const f=fixture();f.resend.emails.send=async()=>({error:{message:'failure'}});
  await assert.rejects(processReviewPayment(f.event,f.stripe,f.resend,now),/review_send_failed/);
  assert.ok(f.session.metadata.gm_review_started);assert.equal(f.session.metadata.gm_review_email_id,undefined);
  await assert.rejects(processReviewPayment(f.event,f.stripe,f.resend,now+24*3600000),/review_reconciliation_required/);
});
test('concurrent attempts share a Resend key',async()=>{
  const f=fixture();await Promise.all([processReviewPayment(f.event,f.stripe,f.resend,now),processReviewPayment(f.event,f.stripe,f.resend,now)]);
  assert.equal(new Set(f.sends.map(x=>x.options.idempotencyKey)).size,1);
});
test('missing signature, invalid signature and stale signatures rejected without network calls',async()=>{
  assert.equal((await POST(new Request('http://localhost/api/webhooks/stripe',{method:'POST'}))).status,400);
  process.env.STRIPE_SECRET_KEY='sk_test_placeholder';process.env.STRIPE_WEBHOOK_SECRET='whsec_placeholder';process.env.RESEND_API_KEY='re_placeholder';
  const payload=JSON.stringify({type:'ignored',data:{object:{}}});
  for(const signature of ['invalid',Stripe.webhooks.generateTestHeaderString({payload,secret:'whsec_placeholder',timestamp:1})]){
    assert.equal((await POST(new Request('http://localhost/api/webhooks/stripe',{method:'POST',body:payload,headers:{'stripe-signature':signature}}))).status,400);
  }
  const signature=Stripe.webhooks.generateTestHeaderString({payload,secret:'whsec_placeholder'});
  assert.equal((await POST(new Request('http://localhost/api/webhooks/stripe',{method:'POST',body:payload,headers:{'stripe-signature':signature}}))).status,200);
});
test('sender and reply address use the verified domain',()=>{
  assert.equal(reviewEmail('customer@example.com').replyTo,'arslan@go-massive.com');
});
