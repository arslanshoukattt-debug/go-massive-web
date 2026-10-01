import assert from 'node:assert/strict';
const base = process.env.PREVIEW_URL || 'https://www.go-massive.com';
const canonicalBase = 'https://www.go-massive.com';
const sitemapResponse = await fetch(`${base}/sitemap.xml`);
assert.equal(sitemapResponse.status, 200);
const sitemap = await sitemapResponse.text();
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
const titles = new Set(), descriptions = new Set(), failures = [], warnings = [];
for (const url of urls) {
  const path = new URL(url).pathname;
  const response = await fetch(new URL(path, base));
  const html = await response.text();
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  const description = html.match(/<meta name="description" content="(.*?)"/i)?.[1];
  const canonical = html.match(/<link rel="canonical" href="(.*?)"/i)?.[1];
  try {
    assert.equal(response.status, 200, `${path}: HTTP`);
    assert.equal(url, canonicalBase + (path === '/' ? '' : path), `${path}: sitemap origin`);
    assert.equal(canonical, url, `${path}: canonical`);
    assert.ok(!/<meta name="robots"[^>]*noindex/.test(html), `${path}: noindex`);
    assert.ok(!response.headers.get('x-robots-tag')?.includes('noindex'), `${path}: header noindex`);
    assert.equal((html.match(/<h1[\s>]/g) || []).length, 1, `${path}: H1`);
    assert.ok(title && !titles.has(title), `${path}: unique title`);
    assert.ok(description && !descriptions.has(description), `${path}: unique description`);
    assert.match(html, /<html[^>]*lang="en"/, `${path}: language`);
    assert.match(html, /name="viewport"/, `${path}: viewport`);
    for (const image of html.matchAll(/<img\b[^>]*>/g)) assert.match(image[0], /\balt="[^"]*"/, `${path}: image alt`);
    const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].flatMap(match => JSON.parse(match[1]));
    assert.ok(schemas.some(schema => schema['@type'] === 'Organization'), `${path}: organization schema`);
    if (path.startsWith('/blog/')) {
      assert.ok(schemas.some(schema => schema['@type'] === 'BlogPosting'), `${path}: article schema`);
      assert.match(html, /property="og:type" content="article"/, `${path}: article OG`);
      assert.match(html, /Source &amp; verification/, `${path}: sources in initial HTML`);
    }
  } catch (error) { failures.push(error.message); }
  if (title?.length > 75) warnings.push(`${path}: long title (${title.length} encoded characters)`);
  titles.add(title); descriptions.add(description);
}
const robots = await (await fetch(`${base}/robots.txt`)).text();
assert.ok(robots.includes(`${canonicalBase}/sitemap.xml`));
assert.ok(!sitemap.includes('/pay'));
for (const path of ['/no-such-page-audit', '/blog/no-such-article']) assert.equal((await fetch(base + path)).status, 404, path);
console.log(JSON.stringify({ pages: urls.length, failures, warnings }, null, 2));
assert.deepEqual(failures, []);
