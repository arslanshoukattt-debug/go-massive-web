import assert from 'node:assert/strict';
import fs from 'node:fs';
const base = process.env.PREVIEW_URL || 'http://localhost:3002';
const manifest = JSON.parse(fs.readFileSync('.next/prerender-manifest.json', 'utf8'));
const paths = Object.keys(manifest.routes).filter(path => path.startsWith('/services/'));
assert.equal(paths.length, 18, 'Every published service must be pre-rendered');
const sitemap = await (await fetch(`${base}/sitemap.xml`)).text();
const failures = [];
for (const path of ['/services', ...paths]) {
  try {
    const response = await fetch(`${base}${path}`);
    assert.equal(response.status, 200, `${path} status`);
    const html = await response.text();
    assert.equal((html.match(/<h1[\s>]/g) || []).length, 1, `${path} H1`);
    assert.ok(html.includes(`href="https://go-massive.com${path}"`), `${path} canonical`);
    assert.ok(sitemap.includes(`https://go-massive.com${path}</loc>`), `${path} sitemap entry`);
    const jsonLd = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].flatMap(match => JSON.parse(match[1]));
    assert.ok(jsonLd.some(item => item['@type'] === 'BreadcrumbList'), `${path} breadcrumbs`);
    if (path !== '/services') {
      assert.ok(jsonLd.some(item => item['@type'] === 'Service' && item.url === `https://go-massive.com${path}`), `${path} service schema`);
      for (const id of ['scope', 'approach', 'service-fit', 'service-faq']) assert.ok(html.includes(`id="${id}"`), `${path} section ${id}`);
    }
    const serviceLinks = [...html.matchAll(/href="(\/services\/[^"#?]+)"/g)].map(match => match[1]);
    for (const href of serviceLinks) assert.ok(paths.includes(href), `${path} links to unknown service ${href}`);
  } catch (error) { failures.push(String(error)); }
}
const missing = await fetch(`${base}/services/not-a-published-service`);
assert.equal(missing.status, 404, 'Unknown services must return 404');
assert.deepEqual(failures, []);
console.log(`PASS: ${paths.length} service pages + directory; HTTP status, one H1, canonical, sitemap, structured data, service links and unknown-route 404.`);
