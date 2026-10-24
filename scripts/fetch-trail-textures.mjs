// Explicit developer asset import, never run by site visitors or by the build.
import {mkdir,writeFile,readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {execFile} from 'node:child_process';
import {promisify} from 'node:util';
const exec=promisify(execFile),files=[
 {id:'brown_mud',file:'brown_mud_diff_1k.jpg',name:'earth',md5:'b141af27b413db140818d0a4998c394c'},
 {id:'brown_mud_leaves_01',file:'brown_mud_leaves_01_diff_1k.jpg',name:'forest',md5:'5340848384f9bb19bfa6e7ac459683d7'},
 {id:'brown_mud',file:'brown_mud_nor_gl_1k.jpg',name:'earth-normal',md5:'62df05266fa5a0adc7733a7184a15dea'},
 {id:'gravelly_sand',file:'gravelly_sand_diff_1k.jpg',name:'gravel',md5:'16b7593a26ce1bd43f1d95e61dc25f05'},
 {id:'gravelly_sand',file:'gravelly_sand_nor_gl_1k.jpg',name:'gravel-normal',md5:'92053a3e135c938def2dc974c76e3763'},
 {id:'rocky_terrain',file:'rocky_terrain_diff_1k.jpg',name:'rocky-slope',md5:'306ae62c38ab1942a63e831a534875ab'}
];
await mkdir('assets/trail-textures',{recursive:true});
for(const f of files){const url=`https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/${f.id}/${f.file}`,r=await fetch(url);if(!r.ok)throw new Error(`Download failed: ${r.status}`);const bytes=Buffer.from(await r.arrayBuffer());if(createHash('md5').update(bytes).digest('hex')!==f.md5)throw new Error('Source fingerprint changed: '+f.file);const tmp='/tmp/thatsuvmod-'+f.file;await writeFile(tmp,bytes);await exec('/opt/homebrew/bin/cwebp',['-quiet','-q',f.name.includes('normal')?'92':'86',tmp,'-o',`assets/trail-textures/${f.name}.webp`]);const size=(await readFile(`assets/trail-textures/${f.name}.webp`)).length;console.log(`${f.name}: ${size} bytes · CC0 Poly Haven`);}
