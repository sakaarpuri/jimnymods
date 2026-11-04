import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js';
import {Raycaster,Vector3,DoubleSide,Group,Box3,MeshStandardMaterial} from 'three';
import {accessoryBuilder,accessoryMaterials} from '../src/accessories.js';
import {applyMaterialProfile} from '../src/physical-materials.js';
const file=process.env.JIMNY_TEST_MODEL||new URL('../assets/models/jimny-lwb-blender.glb',import.meta.url);
async function model(){const b=readFileSync(file);const {scene}=await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength),'');scene.updateMatrixWorld(true);return scene;}
test('bonnet shoulders have no secondary trough before their outer roll',async()=>{
 const scene=await model(),meshes=[];scene.getObjectByName('BodyShell').traverse(o=>{if(o.isMesh&&o.material.name==='BodyPaint'){o.material.side=DoubleSide;meshes.push(o);}});
 for(const z of [1.60,1.65,1.70])for(const side of [-1,1]){
  let previous=Infinity;
  for(const x of [.40,.45,.50,.55,.60,.65,.70]){
   const hit=new Raycaster(new Vector3(side*x,1.45,z),new Vector3(0,-1,0),0,.4).intersectObjects(meshes,false)[0];assert(hit,'Missing bonnet skin');
   assert(hit.point.y<=previous+.0005,`Secondary shoulder dent at ${side*x}/${z}: rises ${hit.point.y-previous} m`);previous=hit.point.y;
  }
 }
});
test('front inner structure remains opaque with the stock bumper removed',async()=>{
 const scene=await model(),body=scene.getObjectByName('BodyShell');
 for(const x of [-.55,0,.55])for(const y of [.70,.76,.81]){
  const hits=new Raycaster(new Vector3(x,y,2.12),new Vector3(0,0,-1),0,.55).intersectObject(body,true);
  assert(hits.some(h=>h.object.material.name==='IntakeShadow'),`Open view through engine bay at ${x}/${y}`);
 }
 const bumper=scene.getObjectByName('StockBumper');
 assert(bumper.getObjectByName('Front_Jimny_registration_lettering'),'Kimi registration lettering must belong to the stock bumper');
 bumper.removeFromParent();
 assert(!scene.getObjectByName('Front_Jimny_registration_lettering'),'Removing the stock bumper must also remove its plate lettering');
});
test('replacement lamps fit the new centre and bumper tray meets the lower grille',()=>{
 const rig=new Group(),mats=accessoryMaterials(),builder=accessoryBuilder({accessoryRig:rig,mats,detailed:true,modelBody:'5door',colour:'#aaa',lampEmitters:{}});
 builder(new Set(['headlamps']),{});rig.updateMatrixWorld(true);
 for(const lamp of rig.children.filter(o=>o.userData.finishTarget==='headlamps')){
  assert(Math.abs(lamp.position.y-.955)<1e-7);const b=new Box3().setFromObject(lamp);assert(b.max.z>1.76&&b.max.z<1.81);assert(b.max.y-b.min.y<.205);
 }
 builder(new Set(['bull']),{});rig.updateMatrixWorld(true);
 const backing=rig.children.find(o=>o.geometry?.parameters?.width===1.38);assert(backing);
 const b=new Box3().setFromObject(backing);assert(Math.abs(b.max.y-.830)<.002);assert(b.max.z<1.66);
});
test('grille word lettering uses an opaque solid paint finish',()=>{
 const m=new MeshStandardMaterial({name:'GrilleLettering',metalness:.9,roughness:.18});applyMaterialProfile(m);assert.equal(m.metalness,0);assert(m.roughness>=.65);assert.equal(m.transparent,false);
});
test('restored centre mirror sits on the cabin side of the windscreen',async()=>{
 const scene=await model();const hits=new Raycaster(new Vector3(0,1.522,.46),new Vector3(0,0,1),0,.10).intersectObject(scene,true);
 assert.equal(hits[0]?.object.material.name,'BrightChrome');assert(hits[0].point.z<.50);
});
test('optional grille surrounds stay inside the new fascia envelope',async()=>{
 const scene=await model();
 for(const name of ['BlockGrille','RhinoGrille','ScriptGrille','GlossGrille','DeleteGrille','ClassicGrille','MeshGrille']){
  const b=new Box3();scene.getObjectByName(name).traverse(o=>{if(o.isMesh&&!o.name.includes('fitted_outer_grille_return'))b.union(new Box3().setFromObject(o,true));});
  assert(b.min.y>=.829&&b.max.y<=1.081,`${name}: lower surround overlaps the painted frame`);
  assert(b.max.z<1.79,`${name}: grille stands forward of the revised lamps`);
 }
});
