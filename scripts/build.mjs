import { build } from 'esbuild';
import { mkdir, cp, copyFile, readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';

const modelHash=createHash('sha256').update(await readFile('assets/models/jimny-lwb-blender.glb')).digest('hex').slice(0,12);
await build({entryPoints:['src/viewer3d.js'],bundle:true,minify:true,format:'esm',outfile:'assets/viewer3d.js',logLevel:'info',define:{__JIMNY_MODEL_URL__:JSON.stringify(`assets/models/jimny-lwb-blender.glb?v=${modelHash}`)}});
await mkdir('dist',{recursive:true});
await cp('assets','dist/assets',{recursive:true});
for(const file of ['index.html','design.css','robots.txt','_headers'])await copyFile(file,`dist/${file}`);
// Returning owners must receive the matching viewer and styles, not a cached previous release.
let html=await readFile('dist/index.html','utf8');
for(const file of ['assets/viewer3d.js','design.css']){const hash=createHash('sha256').update(await readFile(file)).digest('hex').slice(0,12);html=html.replace(`"${file}"`,`"${file}?v=${hash}"`);}
await writeFile('dist/index.html',html);
console.log('Static release ready in dist/.');
