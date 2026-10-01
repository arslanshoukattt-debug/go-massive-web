/* eslint-disable @typescript-eslint/no-require-imports -- standalone CommonJS asset build script */
const sharp = require('sharp');
const fs = require('fs');
(async()=>{
 const source='public/brand/go-massive-source.png';
 await sharp(source).extract({left:210,top:292,width:4740,height:667}).resize(1422).webp({lossless:true}).toFile('public/brand/go-massive.webp');
 const mark=await sharp(source).extract({left:374,top:592,width:486,height:367}).resize(144,144,{fit:'contain',background:'#020d1f'}).extend({top:24,bottom:24,left:24,right:24,background:'#020d1f'}).png().toBuffer();
 await sharp(mark).toFile('src/app/icon.png');
 await sharp(mark).resize(180).toFile('src/app/apple-icon.png');
 const png=await sharp(mark).resize(48).png().toBuffer();
 const head=Buffer.alloc(22);head.writeUInt16LE(1,2);head.writeUInt16LE(1,4);head[6]=48;head[7]=48;head.writeUInt16LE(1,10);head.writeUInt16LE(32,12);head.writeUInt32LE(png.length,14);head.writeUInt32LE(22,18);fs.writeFileSync('src/app/favicon.ico',Buffer.concat([head,png]));
})();
