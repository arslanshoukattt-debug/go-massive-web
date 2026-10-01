/* eslint-disable @typescript-eslint/no-require-imports -- standalone CommonJS asset build script */
const fs = require('fs');
const path = require('path');
const ts = require('typescript');
const sharp = require('sharp');
function load(file) {
  const exports = {};
  const js = ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
  new Function('exports', 'require', js)(exports, name => load(path.resolve(path.dirname(file), name + '.ts')));
  return exports;
}
const { serviceList } = load(path.resolve('src/lib/services.ts'));
const escape = s => s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
function lines(text, limit=29) {
  const rows=[''];
  for (const word of text.split(' ')) {
    if ((rows.at(-1)+' '+word).trim().length > limit && rows.at(-1)) rows.push(word);
    else rows[rows.length-1]=(rows.at(-1)+' '+word).trim();
  }
  return rows;
}
function textBlock(text,x,y,size,color,weight=600,limit=29) {
 return `<text x="${x}" y="${y}" font-family="Arial,sans-serif" font-size="${size}" fill="${color}" font-weight="${weight}">${lines(text,limit).map((line,i)=>`<tspan x="${x}" dy="${i ? size*1.2 : 0}">${escape(line)}</tspan>`).join('')}</text>`;
}
(async()=>{
 fs.mkdirSync('public/images/services',{recursive:true});
 for(const service of serviceList) {
  const steps=service.steps;
  const height=310+steps.length*190;
  const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="${height}" viewBox="0 0 1000 ${height}">
   <rect width="1000" height="${height}" fill="#f5f6f8"/>
   <rect width="1000" height="12" fill="#ed1024"/>
   ${textBlock(service.name,64,86,32,'#ed1024',700,44)}
   ${textBlock(service.visualTitle,64,161,49,'#020d1f',700,31)}
   <path d="M112 312 V${height-115}" stroke="#cbd0d8" stroke-width="3"/>
   ${steps.map((step,i)=>{const y=285+i*190;return `<rect x="64" y="${y}" width="872" height="152" rx="4" fill="white" stroke="#d7dce3"/>
    <rect x="64" y="${y}" width="7" height="152" fill="${i===steps.length-1?'#ed1024':'#020d1f'}"/>
    ${textBlock(String(i+1).padStart(2,'0'),95,y+86,40,'#ed1024',700)}
    ${textBlock(step.title,190,y+61,41,'#020d1f',600,29)}
    ${i<steps.length-1?`<path d="M112 ${y+162} v18 m-7-7 7 7 7-7" fill="none" stroke="#ed1024" stroke-width="3"/>`:''}`;}).join('')}
   </svg>`;
  await sharp(Buffer.from(svg)).webp({quality:92}).toFile(`public/images/services/${service.slug}.webp`);
 }
 console.log(`Generated ${serviceList.length} service-specific process diagrams.`);
})();
