import {readFile,writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {execFile} from 'node:child_process';
import {promisify} from 'node:util';
const exec=promisify(execFile),inventory=JSON.parse(await readFile('/tmp/jimny-world-preview-inventory.json','utf8'));
const hash=async p=>createHash('sha256').update(await readFile(p)).digest('hex');
const modelSha256=await hash('assets/models/jimny-lwb-blender.glb');
if(inventory.release.models['5door']!==modelSha256.slice(0,12))throw new Error('Course preview inventory uses an outdated Jimny.');
if(inventory.files.map(f=>f.id).join(',')!=='mountain,sand,urban')throw new Error('Render all three course cards before finalizing.');
const images={};
for(const {id,path}of inventory.files){const target=`assets/previews/world-${id}.webp`;await exec('/opt/homebrew/bin/cwebp',['-quiet','-q','90',path,'-o',target]);images[id]=await hash(target);}
await writeFile('assets/previews/world-manifest.json',JSON.stringify({generated:new Date().toISOString().slice(0,10),modelSha256,images},null,2)+'\n');
console.log('Three course cards rendered with the current shared model.');
