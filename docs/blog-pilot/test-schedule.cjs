const fs = require('node:fs');
const ts = require('typescript');
const Module = require('node:module');
const path = require('node:path');
const assert = require('node:assert/strict');
const filename = path.resolve(__dirname, '../../src/lib/blog.ts');
const loaded = new Module(filename, module);
loaded.filename = filename;
loaded.paths = module.paths;
loaded._compile(ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, resolveJsonModule: true, esModuleInterop: true },
}).outputText, filename);
const {getPublishedPosts, findPost} = loaded.exports;
for (const [date, count] of [
  ['2026-10-08T13:59:59Z', 1], ['2026-10-08T14:00:00Z', 2],
  ['2026-10-09T13:59:59Z', 2], ['2026-10-09T14:00:00Z', 3],
  ['2026-10-10T14:00:00Z', 3], ['2026-10-11T14:00:00Z', 3],
  ['2026-10-12T14:00:00Z', 4], ['2026-10-13T14:00:00Z', 5],
  ['2026-10-14T14:00:00Z', 6],
]) assert.equal(getPublishedPosts(Date.parse(date)).length, count, date);
assert.equal(findPost('amazon-product-launch-checklist', Date.parse('2026-10-08T14:00:00Z')), undefined);
assert.equal(findPost('unknown'), undefined);
console.log('PASS exact release boundaries, weekends, future and unknown article visibility.');
