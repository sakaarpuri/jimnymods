import {mkdir,writeFile,readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';
const api='https://api.polyhaven.com/files/pine_tree_01';
const response=await fetch(api);if(!response.ok)throw new Error(`Metadata ${response.status}`);
const files=await response.json(),include=files.blend['1k'].blend.include;
const folder='assets/vegetation';await mkdir(folder,{recursive:true});await mkdir('/tmp/pine-tree-01-source',{recursive:true});
const records=[];
for(const suffix of ['diff','alpha','nor_gl']){
 const key=`textures/pine_tree_01_twig_${suffix}_1k.png`,source=include[key];if(!source||source.size>7000000)throw new Error('Unexpected twig file');
 const result=await fetch(source.url);if(!result.ok)throw new Error(`Texture ${result.status}`);
 const bytes=Buffer.from(await result.arrayBuffer());if(createHash('md5').update(bytes).digest('hex')!==source.md5)throw new Error('Checksum mismatch');
 const input=`/tmp/pine-tree-01-source/twig-${suffix}.png`,output=`${folder}/pine-twig-${suffix}.webp`;await writeFile(input,bytes);
 execFileSync('/opt/homebrew/bin/cwebp',['-quiet','-q',suffix==='alpha'?'100':'90','-resize','1024','0',input,'-o',output]);
 const encoded=await readFile(output);records.push({source:source.url,sourceMd5:source.md5,sourceBytes:bytes.length,file:output,bytes:encoded.length,sha256:createHash('sha256').update(encoded).digest('hex')});
}
await writeFile(`${folder}/pine-twig.provenance.json`,JSON.stringify({asset:'pine_tree_01',authors:['Rico Cilliers','Rob Tuytel'],license:'CC0-1.0',source:'https://polyhaven.com/a/pine_tree_01',licenseSource:'https://polyhaven.com/license',metadata:api,processing:'1K twig maps only, resized to1024px width, WebP quality90 (alpha100). No full tree model downloaded.',files:records},null,2)+'\n');
console.log(JSON.stringify(records,null,2));
