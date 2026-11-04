import {assertSameWorldGeometry} from './helpers/world-geometry.mjs';
import test from 'node:test';import assert from 'node:assert/strict';import{readFileSync}from'node:fs';import{GLTFLoader}from'three/addons/loaders/GLTFLoader.js';import{MeshoptDecoder}from'three/addons/libs/meshopt_decoder.module.js';import{Vector3,Raycaster,FrontSide,Box3}from'three';
async function load(path){const b=readFileSync(path);const {scene}=await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength),'');scene.updateMatrixWorld(true);scene.traverse(o=>{if(o.isMesh)o.material.side=FrontSide});return scene;}
const s=await load(process.env.JIMNY_TEST_MODEL||new URL('../assets/models/jimny-lwb-blender.glb',import.meta.url)),old=await load(new URL('./fixtures/r37-lwb.glb',import.meta.url));
const names=['OEMGrille','BlockGrille','RhinoGrille','ScriptGrille','GlossGrille','DeleteGrille','ClassicGrille','MeshGrille'];
test('every grille has a visible outer return ahead of the painted wing on both sides',()=>{for(const n of names)for(const side of[-1,1])for(const z of[1.730,1.734]){const g=s.getObjectByName(n),h=new Raycaster(new Vector3(side,.93,z),new Vector3(-side,0,0),0,.4).intersectObjects([s.getObjectByName('BodyShell'),g],true)[0];assert(h,`${n}: missing side`);let a=h.object;while(a&&a!==g)a=a.parent;assert.equal(a,g,`${n}: painted wing hides side return at ${side}/${z}`);assert(Math.abs(h.point.x)<.762);assert(Math.abs(h.point.x)>.735,`Must hit outer return, not aperture wall: ${n}/${h.point.x}`);}});
test('all alternatives share the factory lower-corner silhouette and closed backing',()=>{const body=s.getObjectByName('BodyShell'),oem=s.getObjectByName('OEMGrille');let checked=0;for(const n of names.slice(1))for(const side of[-1,1])for(const x of[.62,.66,.70,.73])for(const y of[.79,.80,.81,.82,.83]){const ray=new Raycaster(new Vector3(side*x,y,2.0),new Vector3(0,0,-1),0,.35),ref=ray.intersectObjects([body,oem],true)[0],h=ray.intersectObjects([body,s.getObjectByName(n)],true)[0];assert(ref&&h,`Missing lower corner ${n}/${x}/${y}`);assert(Math.abs(ref.point.z-h.point.z)<.001,`${n} lower corner differs from fitted OEM`);checked++;}assert(checked>200);});
test('unchanged body details, roof, lights, cabin and wheels retain decoded world geometry after re-export',()=>{
 // R43 deliberately replaced these surfaces; their shape is covered by the
 // bonnet/wing/cowl tests rather than falsely requiring old encoded arrays.
 // R42 also refitted the four indicator/bezel surfaces with the nose; their
 // size, location and visibility are covered by the indicator/aperture probes.
 const changed=new Set(['NEXA_front_indicator_amber_lens_1','NEXA_front_indicator_amber_lens_-1','NEXA_front_indicator_bezel_1','NEXA_front_indicator_bezel_-1','Revision_37_—_continuous_upper_nose_and_wing_landing','Revision_43_—_continuous_upper_wing_and_nose','Revision_37_—_tapered_smooth_clamshell_bonnet','Revision_37_—_recessed_bonnet_seam_returns','Revision_31_—_continuous_front_body_pressing001','Revision_31_—_continuous_front_body_pressing001_1']);
 let compared=0;
 for(const n of ['BodyShell','RoofShell','StockHeadlamps','StockWheels','AllTerrainWheels','Cabin','SpareWheel']){
  const collect=root=>{const map=new Map();root.traverse(o=>{if(o.isMesh&&!changed.has(o.name)){assert(!map.has(o.name),'Ambiguous preservation mesh '+o.name);map.set(o.name,o);}});return map;};
  const actual=collect(s.getObjectByName(n)),expected=collect(old.getObjectByName(n));assert.deepEqual([...actual.keys()].sort(),[...expected.keys()].sort(),n+' retained mesh inventory changed');
  for(const [name,b]of expected){const a=actual.get(name),seamBatch=name==='BodyShell__IntakeShadow';
   // R39 removed only the obsolete bonnet gasket from this shared batch.
   const filter=seamBatch?(v=>!(Math.abs(v.x)>.718&&Math.abs(v.x)<.762&&v.z>.758&&v.z<1.742&&v.y>1.093&&v.y<1.142)):()=>true;
   compared+=assertSameWorldGeometry(a,b,{filter,checkTriangles:!seamBatch});
  }
 }
 assert(compared>100000,'Preservation check unexpectedly lost assembly coverage');
});
test('wrapped fascia keeps clear headlamp apertures and the amber lenses visible',()=>{for(const n of names){const grille=s.getObjectByName(n),panels=[];for(const g of[s.getObjectByName('BodyShell'),grille,s.getObjectByName('StockHeadlamps')])g.traverse(o=>{if(o.isMesh&&['BodyPaint','GrilleAnthracite','GlossBlackGrille','MouldedPlastic','IntakeShadow'].includes(o.material.name))panels.push(o)});for(const side of[-1,1]){for(const a of[0,Math.PI/2,Math.PI,Math.PI*1.5]){const ray=new Raycaster(new Vector3(side*.55+Math.cos(a)*.075,.955+Math.sin(a)*.075,2.12),new Vector3(0,0,-1),0,.40);assert.equal(ray.intersectObjects(panels,false).length,0,`${n}: blocked lamp aperture`);}for(const [dx,dy]of[[0,0],[.018,0],[-.018,0],[0,.018],[0,-.018]]){const h=new Raycaster(new Vector3(side*.703+dx,1.037+dy,2.0),new Vector3(0,0,-1),0,.30).intersectObjects([s.getObjectByName('BodyShell'),grille],true)[0];assert.equal(h?.object.material.name,'IndicatorAmber',`${n}: wrap obscures amber lens`);}}}});

test('five-door stock bumper keeps the original Kimi shell, optics and plate placement',()=>{
 const bumper=s.getObjectByName('StockBumper');
 const shell=bumper.getObjectByName('StockBumper__MouldedPlastic');
 const bounds=new Box3().setFromObject(shell,true);
 assert(Math.abs(bounds.max.x-bounds.min.x-1.62884)<.001);
 assert(Math.abs(bounds.max.y-.802)<.001 && Math.abs(bounds.min.y-.412)<.001);
 assert(Math.abs(bounds.max.z-1.889)<.001);
 const optics=bumper.getObjectByName('StockBumper__LampLens');
 const lettering=bumper.getObjectByName('Front_Jimny_registration_lettering');
 assert(optics && lettering);
 const letters=new Box3().setFromObject(lettering,true);
 const plate=new Box3().setFromObject(bumper.getObjectByName('StockBumper__WheelGunmetal'),true);
 assert(Math.abs(plate.max.z-1.893)<.001);
 assert(letters.min.z>plate.max.z && letters.max.z<plate.max.z+.008,'Lettering must sit on the stock plate face');
 for(const side of [-1,1]){
  const ray=new Raycaster(new Vector3(side*.607,.5932,2),new Vector3(0,0,-1),0,.25);
  assert.equal(ray.intersectObject(bumper,true)[0]?.object.material.name,'FogLampGlass');
 }
});
