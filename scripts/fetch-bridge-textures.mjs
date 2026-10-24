// Optional developer import, never executed by the visitor or production build.
// Poly Haven weathered_planks, CC0; exact public manifest fingerprints checked.
import {mkdir,writeFile,readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';
const maps=[['diff','timber','5d7c9e7088bfa54490ba03ba15b660d8'],['nor_gl','timber-normal','119541f6b143f21f0a6e9774e9208905'],['rough','timber-rough','4ca50b076e1fc58f6862a5b039a7d5c9']];
await mkdir('assets/trail-textures',{recursive:true});
for(const [map,name,md5]of maps){
 const url=`https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/weathered_planks/weathered_planks_${map}_1k.jpg`;
 const response=await fetch(url);if(!response.ok)throw Error(`Download failed ${response.status}`);
 const bytes=Buffer.from(await response.arrayBuffer());if(createHash('md5').update(bytes).digest('hex')!==md5)throw Error(`Fingerprint mismatch: ${name}`);
 const tmp=`/tmp/thatsuvmod-weathered-planks-${map}.jpg`;await writeFile(tmp,bytes);
 execFileSync('/opt/homebrew/bin/cwebp',['-quiet','-q',map==='nor_gl'?'92':'86',tmp,'-o',`assets/trail-textures/${name}.webp`]);
 const output=await readFile(`assets/trail-textures/${name}.webp`);console.log(JSON.stringify({name,url,md5,bytes:output.length,sha256:createHash('sha256').update(output).digest('hex')}));
}
