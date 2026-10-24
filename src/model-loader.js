import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js';

// The release build ships each body as a gzip copy (<name>.glb.gz) next to the
// plain .glb. Hosts that do not compress octet-stream assets would otherwise
// send the whole file; the plain model remains the fallback and the test asset.
async function gunzip(response){
  const bytes=new Uint8Array(await response.arrayBuffer());
  if(bytes[0]!==0x1f||bytes[1]!==0x8b)return bytes.buffer;
  const stream=new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'));
  return new Response(stream).arrayBuffer();
}
export async function loadBodyModel(url){
  const loader=new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);
  if(typeof DecompressionStream==='function'){
    try{
      const response=await fetch(url.replace('.glb?','.glb.gz?'));
      if(response.ok)return await loader.parseAsync(await gunzip(response),'');
    }catch{/* fall back to the uncompressed model */}
  }
  return loader.loadAsync(url);
}
