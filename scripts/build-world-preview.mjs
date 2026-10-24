import {build} from 'esbuild';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
const url=async body=>{const file=`assets/models/jimny-${body}-blender.glb`;const hash=createHash('sha256').update(await readFile(file)).digest('hex').slice(0,12);return `${file}?v=${hash}`;};
await build({entryPoints:['scripts/world-preview-entry.js'],bundle:true,format:'esm',outfile:'modeling/verification/world-preview-renderer.js',define:{__JIMNY_MODEL_URL__:JSON.stringify(await url('lwb')),__JIMNY_SWB_URL__:JSON.stringify(await url('swb'))}});
