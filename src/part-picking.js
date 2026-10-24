import {Raycaster,Vector2} from 'three';
import {targetFor,surfaceProperties} from './surface-finishes.js';

export function visibleHit(hit,planes=[]){
 for(let o=hit.object;o;o=o.parent)if(!o.visible)return false;
 return !planes.some(p=>p.distanceToPoint(hit.point)<0);
}
export function describePartHit(hit){
 const mesh=hit.object,material=Array.isArray(mesh.material)?mesh.material[hit.face?.materialIndex||0]:mesh.material;
 if(!material||material.opacity<.2)return null;
 const target=targetFor(mesh);if(!target)return null;
 const {fabric,protectedSurface}=surfaceProperties(material);
 const tyre=/TyreRubber|Tread|Sidewall/i.test(material.name)||material.userData.surfaceKind==='rubber'&&target==='wheels';
 const grilleOpening=target==='grille'&&material.name==='IntakeShadow';
 return {target,material:material.name,colour:grilleOpening||!fabric&&!protectedSurface,finish:grilleOpening||!fabric&&!protectedSurface,fabric,tyre,point:hit.point.toArray()};
}
// A click ends below the movement threshold. Orbit/look handlers keep owning
// drags; multi-touch, cancellation and long presses never produce an edit.
export function createTapTracker(threshold=7){
 let tap=null,active=new Set();
 return {down(e){active.add(e.pointerId);if(active.size>1){tap=null;return;}tap=e.button===0?{id:e.pointerId,x:e.clientX,y:e.clientY,time:e.timeStamp,moved:false}:null;},
 move(e){if(tap?.id===e.pointerId&&Math.hypot(e.clientX-tap.x,e.clientY-tap.y)>threshold)tap.moved=true;},
 cancel(e){active.delete(e.pointerId);tap=null;},
 up(e){active.delete(e.pointerId);const ok=tap?.id===e.pointerId&&!tap.moved&&e.timeStamp-tap.time<700&&Math.hypot(e.clientX-tap.x,e.clientY-tap.y)<=threshold;tap=null;return !!ok;}};
}
export function installPartPicker({canvas,camera,root,planes=()=>[],enabled=()=>true,onPick}){
 const tap=createTapTracker(),ray=new Raycaster(),pointer=new Vector2();
 canvas.addEventListener('pointerdown',e=>tap.down(e));canvas.addEventListener('pointermove',e=>tap.move(e));canvas.addEventListener('pointercancel',e=>tap.cancel(e));
 canvas.addEventListener('pointerup',e=>{
  if(!tap.up(e)||!enabled())return;
  const r=canvas.getBoundingClientRect();pointer.set((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1);
  root.updateMatrixWorld(true);camera.updateMatrixWorld(true);ray.setFromCamera(pointer,camera);
  for(const hit of ray.intersectObject(root,true)){
   if(!visibleHit(hit,planes()))continue;
   const description=describePartHit(hit);
   // Transparent cutaway paint does not block the inspected cabin; actual
   // glass and opaque non-editable objects do, so we never select through them.
   const mat=Array.isArray(hit.object.material)?hit.object.material[hit.face?.materialIndex||0]:hit.object.material;
   if(mat?.opacity<.2)continue;
   if(description)onPick(description);
   break;
  }
 });
}
