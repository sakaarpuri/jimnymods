// Official CC0 master, preparation only: never place the571MB source in assets/.
import {mkdir,stat,readFile,writeFile} from 'node:fs/promises';
import {createWriteStream,createReadStream} from 'node:fs';
import {Readable} from 'node:stream';
import {pipeline} from 'node:stream/promises';
import {createHash} from 'node:crypto';
const dir='/tmp/polyhaven-pine-source';await mkdir(dir,{recursive:true});
const metadata=await(await fetch('https://api.polyhaven.com/files/pine_tree_01')).json();
const source=metadata.blend['1k'].blend,path=dir+'/pine_tree_01_1k.blend';
if(source.size>600000000)throw Error('Source size changed, re-evaluate offline preparation budget.');
if(await stat(path).then(s=>s.size!==source.size).catch(()=>true)){
 const response=await fetch(source.url);if(!response.ok)throw Error(`Source download: ${response.status}`);
 await pipeline(Readable.fromWeb(response.body),createWriteStream(path));
}
const hash=createHash('md5');for await(const chunk of createReadStream(path))hash.update(chunk);
if(hash.digest('hex')!==source.md5)throw Error('Official source checksum failed');
await writeFile(dir+'/source.json',JSON.stringify({asset:'pine_tree_01',license:'CC0-1.0',source:'https://polyhaven.com/a/pine_tree_01',api:'https://api.polyhaven.com/files/pine_tree_01',...source},null,2));
console.log(JSON.stringify({path,bytes:source.size,md5:source.md5}));
if(process.argv.includes('--textures')){
 for(const [relative,file] of Object.entries(source.include)){
  if(!/pine_tree_01_(bark|trunk_b|twig)_(diff|nor_gl|alpha)_1k\.png$/.test(relative))continue;
  const output=dir+'/'+relative;await mkdir(dir+'/textures',{recursive:true});
  if(await stat(output).then(s=>s.size===file.size).catch(()=>false))continue;
  const response=await fetch(file.url);if(!response.ok)throw Error(`Texture download ${response.status}`);
  const bytes=Buffer.from(await response.arrayBuffer());if(createHash('md5').update(bytes).digest('hex')!==file.md5)throw Error(`Texture checksum ${relative}`);
  await writeFile(output,bytes);console.log(relative,bytes.length);
 }
}
