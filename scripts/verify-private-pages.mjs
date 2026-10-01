import assert from 'node:assert/strict';
import fs from 'node:fs';
const base=process.env.PREVIEW_URL || 'http://localhost:3003';
for(const path of ['/pay','/pay/thank-you']) {
  const response=await fetch(base+path);
  const html=await response.text();
  assert.equal(response.status,200,path);
  assert.match(response.headers.get('x-robots-tag') || '',/noindex, nofollow/);
  assert.match(html,/<meta name="robots" content="noindex, nofollow, noarchive"/);
  assert.ok(!html.includes('class="site-footer"') && !html.includes('class="site-header'),'Private pages must not have site navigation');
}
const sitemap=await (await fetch(base+'/sitemap.xml')).text();
assert.ok(!sitemap.includes('/pay'));
const manifest=JSON.parse(fs.readFileSync('.next/prerender-manifest.json','utf8'));
for(const path of Object.keys(manifest.routes).filter(p=>!p.startsWith('/pay') && !p.startsWith('/_') && !/\.[a-z]+$/.test(p) && p!='/opengraph-image')) {
  const html=await (await fetch(base+path)).text();
  assert.ok(!/href="(?:https:\/\/go-massive.com)?\/pay(?:["/#?])/.test(html),`${path} links to checkout`);
}
const payment=(await (await fetch(base+'/pay')).text());
if(!process.env.STRIPE_PAYMENT_LINK) assert.match(payment,/<button[^>]*disabled/,'Unconfigured checkout stays disabled');
console.log('PASS: private-page headers, metadata, no navigation, sitemap exclusion, no public internal links, and unconfigured checkout.');
