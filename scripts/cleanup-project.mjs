// Narrow, auditable cleanup. Dry-run by default; never removes source, Git,
// models, references, concept images, final evidence or linked review assets.
import {readdir,readFile,stat,unlink} from 'node:fs/promises';
import {execFileSync} from 'node:child_process';
import {zstdDecompressSync} from 'node:zlib';
import path from 'node:path';

const root=process.cwd(),apply=process.argv.includes('--apply');
if(JSON.parse(await readFile(path.join(root,'package.json'),'utf8')).name!=='jimnygami')throw new Error('Run cleanup from the jimnygami repository root only.');
const ignored=new Set(['.git','node_modules','dist','.gstack']);
const all=[];
async function walk(dir){
 for(const entry of await readdir(dir,{withFileTypes:true})){
  if(entry.isDirectory()&&ignored.has(entry.name))continue;
  const file=path.join(dir,entry.name);
  if(entry.isDirectory())await walk(file);else if(entry.isFile())all.push(file);
 }
}
await walk(root);
const tracked=new Set(execFileSync('git',['ls-files','-z'],{encoding:'utf8'}).split('\0'));
const texts=(await Promise.all(all.filter(f=>/\.(md|html|js|mjs|json|py)$/.test(f)).map(f=>readFile(f,'utf8')))).join('\n');
const iteration=/^(garage-daylight-after[1-5]-|garage-key-fill-(after|balanced|refined)-|obstacles-loop[0-7]-|himachal-art-pass[1-4]-|interior-upgrade-(camp|door)-(first|second)\.)/;
const candidates=[];
for(const file of all){
 const relative=path.relative(root,file),name=path.basename(file);let reason='';
 if(tracked.has(relative))continue;
 if(name==='.DS_Store')reason='Finder cache';
 else if(/^modeling\/[^/]+\.blend1$/.test(relative)){
  const current=file.slice(0,-1);
  try{const a=await stat(current),b=await stat(file),bytes=await readFile(current),header=bytes.readUInt32LE(0)===0xfd2fb528?zstdDecompressSync(bytes):bytes;if(a.mtimeMs>=b.mtimeMs&&a.size>100000&&header.subarray(0,7).toString()==='BLENDER')reason='Blender automatic previous-save copy; validated current native master exists';}catch{}
 }else if(relative.startsWith('modeling/verification/')&&iteration.test(name)&&!texts.includes(name))reason='Unreferenced intermediate render; baseline/final/concept evidence retained';
 if(reason)candidates.push({file:relative,bytes:(await stat(file)).size,reason});
}
if(apply)for(const item of candidates)await unlink(path.join(root,item.file));
console.log(JSON.stringify({mode:apply?'removed':'dry-run',count:candidates.length,bytes:candidates.reduce((n,f)=>n+f.bytes,0),files:candidates},null,2));
