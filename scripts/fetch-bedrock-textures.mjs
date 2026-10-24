// Explicit asset import only. Never run during a visitor request or release build.
import {writeFile,readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {execFile} from 'node:child_process';
import {promisify} from 'node:util';
const run=promisify(execFile);
const files=[
 ['diff','bedrock-face','e4c34abb1aad5befe12754fad507147a'],
 ['disp','bedrock-height','9d51d6b2496de79f97b80d43ff1dd7fb']
];
for(const [kind,name,expected]of files){
 const url=`https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/rock_face_03/rock_face_03_${kind}_1k.jpg`;
 const response=await fetch(url);if(!response.ok)throw new Error(`Asset download: ${response.status}`);
 const bytes=Buffer.from(await response.arrayBuffer());if(createHash('md5').update(bytes).digest('hex')!==expected)throw new Error(`Source changed: ${name}`);
 const temporary=`/tmp/thatsuvmod-${name}.jpg`;await writeFile(temporary,bytes);
 await run('/opt/homebrew/bin/cwebp',['-quiet','-q','90',temporary,'-o',`assets/trail-textures/${name}.webp`]);
 console.log(name,(await readFile(`assets/trail-textures/${name}.webp`)).length);
}
