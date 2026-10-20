import { build } from 'esbuild';
import { mkdir, cp, copyFile } from 'node:fs/promises';

await build({entryPoints:['src/viewer3d.js'],bundle:true,minify:true,format:'esm',outfile:'assets/viewer3d.js',logLevel:'info'});
await mkdir('dist',{recursive:true});
await cp('assets','dist/assets',{recursive:true});
for(const file of ['index.html','design.css','robots.txt','_headers'])await copyFile(file,`dist/${file}`);
console.log('Static release ready in dist/.');
