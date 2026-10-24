import * as T from 'three';
import {Reflector} from 'three/addons/objects/Reflector.js';

const rendering=new WeakSet();
export function riverReflectionAllowed({mobile=false,offscreen=false,cabin=false,recursive=false,distance=Infinity,elapsed=Infinity}={}){
 return !mobile&&!offscreen&&!cabin&&!recursive&&distance<60&&elapsed>=1000/12;
}

// The addon owns the mirrored camera and oblique near-plane clipping. Its
// mirror material is never shown: the resulting local image is blended into
// the river's existing physical material with Fresnel and moving ripples.
export function attachRiverReflection(water,{origin=new T.Vector3(),normal=new T.Vector3(0,1,0),mobile=()=>typeof matchMedia==='function'&&matchMedia('(max-width:700px), (pointer:coarse)').matches,now=()=>performance.now()}={}){
 const material=water.material,uniforms=material.userData.localReflection;
 if(!uniforms)return {dispose(){},snapshot:()=>({enabled:false,frames:0})};
 const plane=new Reflector(new T.PlaneGeometry(1,1),{textureWidth:512,textureHeight:512,multisample:0,clipBias:.002});
 plane.position.copy(origin);plane.quaternion.setFromUnitVectors(new T.Vector3(0,0,1),normal.clone().normalize());plane.updateMatrixWorld(true);
 const inverse=new T.Matrix4(),worldNormal=new T.Vector3(),cameraPosition=new T.Vector3(),planeOrigin=new T.Vector3(),box=new T.Box3();
 const previous=water.onBeforeRender;let disposed=false,failed=false,last=-Infinity,frames=0,renderMs=0;
 uniforms.map.value=plane.getRenderTarget().texture;
 const before=(renderer,scene,camera,...args)=>{
  previous?.call(water,renderer,scene,camera,...args);uniforms.strength.value=0;
  if(disposed||failed||mobile()||renderer.getRenderTarget()||camera.userData.skipRiverReflection||rendering.has(renderer))return;
  camera.getWorldPosition(cameraPosition);box.setFromObject(water);const distance=box.distanceToPoint(cameraPosition);
  if(distance>=60)return;
  plane.updateMatrix();plane.matrixWorld.multiplyMatrices(water.matrixWorld,plane.matrix);planeOrigin.setFromMatrixPosition(plane.matrixWorld);worldNormal.copy(normal).transformDirection(water.matrixWorld);
  if(cameraPosition.sub(planeOrigin).dot(worldNormal)<=0)return;
  uniforms.strength.value=frames?1:0;
  const time=now();if(!riverReflectionAllowed({distance,elapsed:time-last}))return;
  const target=renderer.getRenderTarget(),xr=renderer.xr.enabled,shadow=renderer.shadowMap.autoUpdate,visible=water.visible,resetInfo=renderer.info?.autoReset;
  if(renderer.info)renderer.info.autoReset=false;
  rendering.add(renderer);water.visible=false;const start=now();
  try{
   plane.onBeforeRender(renderer,scene,camera);
   // Addon's matrix expects reflector-local positions. Water shader uses world
   // positions because this channel is sloped and its mesh uses world vertices.
   inverse.copy(plane.matrixWorld).invert();uniforms.matrix.value.copy(plane.material.uniforms.textureMatrix.value).multiply(inverse);
   frames++;last=time;uniforms.strength.value=1;renderMs=now()-start;
  }catch(error){failed=true;uniforms.strength.value=0;console.warn('Local river reflection unavailable; using environment lighting.',error);}
  finally{water.visible=visible;plane.visible=true;renderer.xr.enabled=xr;renderer.shadowMap.autoUpdate=shadow;if(renderer.info)renderer.info.autoReset=resetInfo;renderer.setRenderTarget(target);rendering.delete(renderer);}
 };
 water.onBeforeRender=before;
 const dispose=()=>{if(disposed)return;disposed=true;uniforms.strength.value=0;uniforms.map.value=null;water.onBeforeRender=previous;plane.dispose();plane.geometry.dispose();material.removeEventListener('dispose',dispose);};
 material.addEventListener('dispose',dispose);
 const api={dispose,snapshot:()=>({enabled:!disposed&&!failed&&!mobile(),frames,renderMs,textureSize:512,maxHz:12})};water.userData.localReflection=api;return api;
}
