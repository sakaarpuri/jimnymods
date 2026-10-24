// Offline study only: authored-tree impostor, intentionally outside assets/.
import sharp from 'sharp';
import{readFile,writeFile,mkdir,copyFile}from'node:fs/promises';
import{createHash}from'node:crypto';
const source='/tmp/polyhaven-pine-atlas',out='modeling/vendor/pine-tree-01';
await mkdir(out,{recursive:true});
const bake=JSON.parse(await readFile(source+'/bake.json','utf8'));
const composite=bake.views.map(view=>({input:view.file,left:(view.index%4)*512,top:Math.floor(view.index/4)*1024}));
const image=await sharp({create:{width:2048,height:2048,channels:4,background:{r:0,g:0,b:0,alpha:0}}}).composite(composite).webp({quality:92,alphaQuality:100,effort:6}).toBuffer();
await writeFile(out+'/pine-tree-b-atlas.webp',image);
const normals=await sharp({create:{width:2048,height:2048,channels:4,background:{r:128,g:255,b:128,alpha:0}}}).composite(bake.views.map(view=>({input:source+'/normal-'+String(view.index).padStart(2,'0')+'.png',left:(view.index%4)*512,top:Math.floor(view.index/4)*1024}))).webp({quality:92,alphaQuality:100,effort:6}).toBuffer();
await writeFile(out+'/pine-tree-b-atlas-normal.webp',normals);
const master=JSON.parse(await readFile('/tmp/polyhaven-pine-source/source.json','utf8'));
const provenance={asset:'pine_tree_01',variant:'pine_tree_01_b_LOD2',authors:['Rico Cilliers','Rob Tuytel'],license:'CC0-1.0',source:'https://polyhaven.com/a/pine_tree_01',licenseSource:'https://polyhaven.com/license',sourceMaster:{url:master.url,md5:master.md5,bytes:master.size},...bake,views:bake.views.map(({file,...view})=>({...view,uvRect:[(view.index%4)/4,Math.floor(view.index/4)/2,1/4,1/2]})),bytes:image.length,sha256:createHash('sha256').update(image).digest('hex'),status:'experimental-not-integrated',usage:{geometry:'Camera-facing quad; choose nearest 45-degree azimuth in tree-local space.',dimensions:[8.15,16.3],quadCentreAboveGround:7.65,uvOrigin:'top-left image coordinates; invert V as required by renderer.',limitations:['Eight discrete azimuths can pop; crossfade adjacent angles for production.','Horizontal orthographic bake is suitable for distant tree crowns, not close views or steep look-down.','Diffuse + local AO only; runtime illumination and shadows remain integration concerns.','One irregular mature pine, not a full conical fir.']}};
provenance.normalAtlas={file:'pine-tree-b-atlas-normal.webp',bytes:normals.length,sha256:createHash('sha256').update(normals).digest('hex'),space:'Object-space XYZ in Three.js Y-up, signed normals remapped 0..1, raw/non-color texture. Rotate by tree azimuth, then view matrix; not tangent-space normalMap.'};
await writeFile(out+'/pine-tree-b-atlas.provenance.json',JSON.stringify(provenance,null,2)+'\n');
if(process.argv.includes('--promote')){
 const runtime='assets/vegetation/authored-pine';await mkdir(runtime,{recursive:true});
 for(const name of ['pine-tree-b-atlas.webp','pine-tree-b-atlas-normal.webp','pine-tree-b-atlas.provenance.json'])await copyFile(out+'/'+name,runtime+'/'+name);
}
await sharp(image).flatten({background:'#c7d0cf'}).png().toFile('modeling/verification/pine-authored-atlas-contact.png');
console.log(JSON.stringify({bytes:image.length,sha256:provenance.sha256,views:8}));
