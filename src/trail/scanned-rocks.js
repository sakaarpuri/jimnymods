import * as T from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js';

export const SCANNED_ROCK_URL='assets/trail-rocks/scanned-boulder.glb';
let cached=null,pending=null,generation=0;
const identity=new T.Matrix4();

/** Enforce the collider envelope after quantized glTF decoding as well as
 * offline processing. UVs and normal maps remain attached to the scan. */
export function normalizeScannedGeometry(geometry){
 geometry.computeBoundingBox();const b=geometry.boundingBox,centre=b.getCenter(new T.Vector3()),height=b.max.y-b.min.y;
 if(!Number.isFinite(height)||height<=0)throw Error('Invalid scanned rock height');
 let radius=0;const p=geometry.attributes.position;
 for(let i=0;i<p.count;i++)radius=Math.max(radius,Math.hypot(p.getX(i)-centre.x,p.getZ(i)-centre.z));
 if(!Number.isFinite(radius)||radius<=0)throw Error('Invalid scanned rock radius');
 const transform=new T.Matrix4().set(1/radius,0,0,-centre.x/radius,0,1/height,0,-centre.y/height,0,0,1/radius,-centre.z/radius,0,0,0,1);
 geometry.applyMatrix4(transform);geometry.computeBoundingBox();geometry.computeBoundingSphere();
 geometry.userData.scannedRockEnvelope={radius:1,minY:-.5,maxY:.5};return geometry;
}

function release(source){
 if(!source)return;source.geometry.dispose();const textures=new Set();
 for(const value of Object.values(source.material))if(value?.isTexture)textures.add(value);
 textures.forEach(t=>t.dispose());source.material.dispose();
}

/** Optional local asset: failures leave the original procedural rocks usable.
 * Await this before constructing a world, not while a player is driving. */
export function preloadRockAssets(){
 if(cached)return Promise.resolve(true);if(pending)return pending;
 if(typeof document==='undefined')return Promise.resolve(false);
 const ticket=generation;
 pending=new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).loadAsync(SCANNED_ROCK_URL).then(gltf=>{
  gltf.scene.updateMatrixWorld(true);const meshes=[];gltf.scene.traverse(o=>{if(o.isMesh)meshes.push(o);});
  if(meshes.length!==1){for(const m of meshes)release({geometry:m.geometry,material:m.material});throw Error('Scanned rock must contain one complete mesh');}
  const mesh=meshes[0],geometry=mesh.geometry.clone().applyMatrix4(mesh.matrixWorld||identity),material=mesh.material.clone();
  mesh.geometry.dispose();mesh.material.dispose();normalizeScannedGeometry(geometry);
  material.metalness=0;material.envMapIntensity=.45;material.normalScale.set(.8,.8);
  material.userData.scannedRockSource='Poly Haven / Rico Cilliers / CC0 / boulder_01';
  const source={geometry,material};if(ticket!==generation){release(source);return false;}cached=source;return true;
 }).catch(()=>false).finally(()=>{pending=null;});
 return pending;
}

export function createScannedRock(seed=0,theme='mountain'){
 if(!cached)return null;
 const geometry=cached.geometry.clone(),material=cached.material.clone();
 let hash=2166136261;for(const c of String(seed))hash=Math.imul(hash^c.charCodeAt(0),16777619);
 hash=Math.imul(hash^(hash>>>16),0x7feb352d);hash=Math.imul(hash^(hash>>>15),0x846ca68b);hash^=hash>>>16;
 // Rotation changes the viewpoint of the scan without changing its radius or
 // vertical collision envelope. No random aspect-ratio or height distortion.
 geometry.rotateY((hash>>>0)/4294967296*Math.PI*2);geometry.computeBoundingBox();geometry.computeBoundingSphere();
 material.color.set(theme==='sand'?'#ead8bd':theme==='urban'?'#eeeae2':'#ffffff');
 // Neutral grey stone palette follows the selected mountain/quarry concept;
 // keep the scan's photographic fissures and normal/roughness maps intact.
 if(theme!=='sand'){
  material.onBeforeCompile=shader=>{shader.fragmentShader=shader.fragmentShader.replace('#include <map_fragment>',`#include <map_fragment>
   float stoneLuma=dot(diffuseColor.rgb,vec3(.2126,.7152,.0722));
   diffuseColor.rgb=mix(diffuseColor.rgb,vec3(stoneLuma)*vec3(1.01,1.025,1.02),.82);
  `);};
  material.customProgramCacheKey=()=> 'neutral-scanned-rock-v1';
 }
 const mesh=new T.Mesh(geometry,material);mesh.castShadow=mesh.receiveShadow=true;
 mesh.userData.scannedRock={source:'boulder_01',license:'CC0-1.0',seed:String(seed)};
 return mesh;
}

/** Call only after active world clones have been disposed. Clones deliberately
 * share the cached photographic textures but never cached geometry/material. */
export function disposeRockAssets(){generation++;release(cached);cached=null;}
export function rockAssetsReady(){return !!cached;}
