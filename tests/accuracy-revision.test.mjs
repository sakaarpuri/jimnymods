import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js';
import {Raycaster,Vector3,Box3,Group,DoubleSide} from 'three';
import {mouldedSpareCover} from '../src/refined-parts.js';
import {accessoryBuilder,accessoryMaterials} from '../src/accessories.js';

test('stock accessories do not place the obsolete blank overlay in front of the shared display',()=>{
 const rig=new Group(),mats=accessoryMaterials(),build=accessoryBuilder({accessoryRig:rig,mats,detailed:true,modelBody:'5door',colour:'#aaa',effectiveDesign:{},lampEmitters:{}});
 build(new Set(),{grille:'oem',decal:'none'});assert.equal(rig.children.length,0);
 for(const m of Object.values(mats))m.dispose();
});

async function model(body){const b=await readFile(new URL(`../assets/models/jimny-${body}-blender.glb`,import.meta.url));const root=(await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength),'')).scene;root.updateMatrixWorld(true);return root;}
for(const body of ['lwb','swb']){
 test(`${body}: approved flat windscreen retains the A-pillar rake`,async()=>{
  const root=await model(body),glass=[];root.getObjectByName('BodyShell').traverse(o=>{if(o.isMesh&&o.material.name==='WindowGlass'){o.material.side=DoubleSide;glass.push(o);}});
  const offset=body==='swb'?-.17:0;
  const hit=(x,y)=>new Raycaster(new Vector3(x,y,1.1+offset),new Vector3(0,0,-1),0,.75).intersectObjects(glass,false)[0]?.point;
  const centre=hit(0,1.416),shoulder=hit(.58,1.416);assert(centre&&shoulder);
  assert(Math.abs(centre.z-shoulder.z)<.001,`The approved flat windscreen acquired a ${centre.z-shoulder.z}m bow`);
  const low=hit(.30,1.23),high=hit(.30,1.60);assert(low&&high);
  const lean=(low.z-high.z)/(high.y-low.y);assert(lean>.40&&lean<.49,`Coordinated windscreen rake ${lean} drifted`);
 });
 test(`${body}: rear glazed closure has modest forward rake, not an upright rectangular end`,async()=>{
  const root=await model(body),glass=[];root.getObjectByName('BodyShell').traverse(o=>{if(o.isMesh&&o.material.name==='WindowGlass'){o.material.side=DoubleSide;glass.push(o);}});
  const offset=body==='swb'?.17:0;
  const hit=y=>new Raycaster(new Vector3(0,y,-2+offset),new Vector3(0,0,1),0,.5).intersectObjects(glass,false)[0]?.point;
  const low=hit(1.23),high=hit(1.57);assert(low&&high);
  const lean=(high.z-low.z)/(high.y-low.y);assert(lean>.11&&lean<.15,`Upper rear closure rake ${lean} should follow the revised rear-quarter reference`);
 });
 test(`${body}: upper rear shut-line rubber stays behind the corner stamping from either side`,async()=>{
  const root=await model(body),shell=root.getObjectByName('BodyShell'),offset=body==='swb'?.17:0;
  for(const side of [-1,1])for(const y of [1.58,1.62]){
   const hit=new Raycaster(new Vector3(side*1.2,y,-1.64+offset),new Vector3(-side,0,0),0,.7).intersectObject(shell,true)[0];
   assert.equal(hit?.object.material.name,'BodyPaint',`Exposed rubber edge at ${side}/${y} creates a false black crack`);
  }
 });
 test(`${body}: rear glass has a photo-guided opening and painted apron stops above the bumper lower edge`,async()=>{
  const root=await model(body),offset=body==='swb'?.17:0,glass=[];
  root.getObjectByName('BodyShell').traverse(o=>{if(o.isMesh&&o.material.name==='WindowGlass'){o.material.side=DoubleSide;glass.push(o);}});
  for(const y of [1.19,1.58])assert(new Raycaster(new Vector3(.30,y,-2+offset),new Vector3(0,0,1),0,.5).intersectObjects(glass,false).length,`Rear glass aperture missing at ${y}`);
  for(const side of [-1,1]){
   const hits=new Raycaster(new Vector3(side*1.2,.52,-1.675+offset),new Vector3(-side,0,0),0,.7).intersectObject(root.getObjectByName('BodyShell'),true);
   assert(!hits.some(h=>h.object.material.name==='BodyPaint'),'Rear quarter still has the low painted fang');
  }
 });
 test(`${body}: registration faces are blank while the actual tailgate emblem remains`,async()=>{
  const root=await model(body),offset=body==='swb'?.17:0,v=new Vector3();
  for(const name of ['BodyShell','StockBumper'])root.getObjectByName(name).traverse(o=>{
   if(!o.isMesh||o.material.name!=='GrilleLettering')return;
   const a=o.geometry.attributes.position;for(let i=0;i<a.count;i++){
    v.fromBufferAttribute(a,i).applyMatrix4(o.matrixWorld);
    assert(!(Math.abs(v.x)<.23&&v.y>.45&&v.y<.62&&(v.z>1.96-offset||v.z< -1.78+offset)),'Vehicle name is still present on a number plate');
   }
  });
  assert(root.getObjectByName('JimnyTailgateWordmark'));
 });
 test(`${body}: nine-inch screen is exposed above the vent fascia, not hidden by it`,async()=>{
  const root=await model(body),cabin=root.getObjectByName('Cabin'),offset=body==='swb'?-.17:0;
  for(const [x,y]of [[0,1.232],[-.095,1.232],[.095,1.232],[0,1.18],[0,1.283]]){
   const hits=new Raycaster(new Vector3(x,y,.29+offset),new Vector3(0,0,1),0,.08).intersectObject(cabin,true);
   assert.equal(hits[0]?.object.material.name,'OpticalGlass',`Screen active area occluded at ${x}/${y}`);
  }
 });
 test(`${body}: front door bins have an open top and separate bottom`,async()=>{
  const root=await model(body),offset=body==='swb'?-.17:0;
  for(const side of [-1,1]){
   const hits=new Raycaster(new Vector3(side*.653,.850,.08+offset),new Vector3(0,-1,0),0,.10).intersectObject(root.getObjectByName('Cabin'),true);
   assert(hits.length);assert(hits[0].point.y<.81&&hits[0].point.y>.78,'Door bin was replaced by a solid block or intersects the sill');
  }
 });
 test(`${body}: revised spare cover follows the shortened rear envelope`,async()=>{
  const root=await model(body),materials={trim:null,darkmetal:null,chrome:null};
  const cover=mouldedSpareCover(materials),assembly=new Group();assembly.add(root.getObjectByName('SpareWheel'),cover);if(body==='swb')cover.position.z+=.17;
  const bounds=new Box3().setFromObject(assembly,true),front=new Box3().setFromObject(root.getObjectByName('StockBumper'),true).max.z;
  assert(Math.abs((front-bounds.min.z)-(body==='lwb'?3.985:3.645))<.008,'Covered-spare length drifted');
 });
}
