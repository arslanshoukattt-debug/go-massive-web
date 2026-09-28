import assert from "node:assert/strict";
import fs from "node:fs";

const base = process.env.PREVIEW_URL || "http://localhost:3002";
const manifest = JSON.parse(
  fs.readFileSync(".next/prerender-manifest.json", "utf8"),
);
const routes = Object.keys(manifest.routes).filter(
  (path) =>
    !path.startsWith("/_") &&
    path !== "/opengraph-image" &&
    !/\.[a-z]+$/.test(path),
);
const pages = new Map();
const failures = [];
for (const path of routes) {
  const response = await fetch(new URL(path, base));
  const html = await response.text();
  pages.set(path, html);
  try {
    assert.equal(response.status, 200, `${path}: status`);
    assert.equal((html.match(/<h1[\s>]/g) || []).length, 1, `${path}: one H1`);
    assert.ok(html.includes('id="main"'), `${path}: skip-link target`);
    assert.match(html, /<title>[^<]+<\/title>/, `${path}: title`);
    assert.match(html, /rel="apple-touch-icon"/, `${path}: Apple icon`);
    assert.match(
      html,
      /href="\/favicon.ico\?/,
      `${path}: versioned brand favicon`,
    );
  } catch (error) {
    failures.push(error.message);
  }
}
let links = 0;
for (const [path, html] of pages) {
  for (const match of html.matchAll(/<a\b[^>]*href="([^"<>]+)"/g)) {
    if (!/^(\/|#)/.test(match[1])) continue;
    const url = new URL(match[1].replaceAll("&amp;", "&"), new URL(path, base));
    const target = pages.get(url.pathname);
    links++;
    if (!target) {
      failures.push(`${path}: missing route ${url.pathname}`);
      continue;
    }
    if (
      url.hash &&
      !target.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`)
    ) {
      failures.push(`${path}: missing anchor ${url.pathname}${url.hash}`);
    }
  }
}
for (const path of [
  "/favicon.ico",
  "/icon.png",
  "/apple-icon.png",
  "/opengraph-image",
]) {
  const response = await fetch(new URL(path, base));
  if (
    response.status !== 200 ||
    !(response.headers.get("content-type") || "").includes("image/")
  ) {
    failures.push(`${path}: icon/share image not served`);
  }
}
assert.deepEqual(failures, []);
console.log(
  `PASS: ${routes.length} pages; ${links} internal links/anchors; headings, metadata, skip links and all brand/share image endpoints.`,
);
