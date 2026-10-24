import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js';
import {Vector3,Raycaster,DoubleSide} from 'three';

async function load(body){
 const data=readFileSync(new URL(`../assets/models/jimny-${body}-blender.glb`,import.meta.url));
 const gltf=await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(data.buffer.slice(data.byteOffset,data.byteOffset+data.byteLength),'');
 gltf.scene.updateMatrixWorld(true);return gltf.scene;
}
function rubberMeshes(root){const meshes=[];root.traverse(o=>{if(o.isMesh&&o.material.name==='TyreRubber'){o.material.side=DoubleSide;meshes.push(o);}});return meshes;}
function radiusAt(meshes,center,angle,axial=0){
 const radial=new Vector3(0,Math.cos(angle),Math.sin(angle));
 const origin=center.clone().addScaledVector(radial,.43);origin.x+=axial;
 const hit=new Raycaster(origin,radial.clone().negate(),0,.22).intersectObjects(meshes,false)[0];
 assert.ok(hit,'Tyre radial sample must intersect real rubber');return .43-hit.distance;
}

for(const body of ['lwb','swb'])test(`${body} tyre channels are recessed geometry, not buried tread marks`,async()=>{
 const root=await load(body),z=body==='lwb'?1.295:1.125;
 for(const [name,radius,track,count,minDepth] of [['StockWheels',.3465,.705,60,.0035],['AllTerrainWheels',.368,.750,44,.006]]){
  const meshes=rubberMeshes(root.getObjectByName(name)),center=new Vector3(track,radius,z);
  const block=radiusAt(meshes,center,0),channel=radiusAt(meshes,center,Math.PI/count);
  assert.ok(Math.abs(block-radius)<.002,`${name} changed rolling radius: ${block}`);
  assert.ok(block-channel>minDepth,`${name} tread buried: only ${(block-channel)*1000}mm deep`);
  assert.ok(block-channel<.012,`${name} channels have become implausibly deep`);
 }
});

for(const body of ['lwb','swb'])test(`${body} AT shoulders have alternating raised sidewall lugs`,async()=>{
 const root=await load(body),meshes=rubberMeshes(root.getObjectByName('AllTerrainWheels'));
 const z=body==='lwb'?1.295:1.125,center=new Vector3(.750,.368,z),radius=.368*.943;
 function axialAt(angle){
  const origin=new Vector3(center.x+.18,center.y+Math.cos(angle)*radius,center.z+Math.sin(angle)*radius);
  const hit=new Raycaster(origin,new Vector3(-1,0,0),0,.18).intersectObjects(meshes,false)[0];
  assert.ok(hit);return hit.point.x-center.x;
 }
 const raised=axialAt(.34/44*Math.PI*2),gap=axialAt((.34+.5)/44*Math.PI*2);
 assert.ok(raised-gap>.0015,`AT shoulder wraps missing: ${(raised-gap)*1000}mm relief`);
 assert.ok(raised<.125,'Shoulder lugs exceed the established tyre section envelope');
});

test('registration faces are neutral and blank while the tailgate badge remains a separate outline',()=>{
 const source=readFileSync(new URL('../modeling/build_jimny.py',import.meta.url),'utf8');
 assert.doesNotMatch(source,/vehicle_lettering\('Showroom (rear|front) plate/);
 assert.match(source,/cube\('Blank front registration face'/);
 const revision=readFileSync(new URL('../modeling/accuracy_revision.py',import.meta.url),'utf8');
 assert.doesNotMatch(revision,/vehicle_lettering\('Revised rear plate/);
 assert.match(revision,/cube\('Inset rear registration mount'/);
 assert.match(source,/geometry\('JimnyTailgateWordmark'/);
});

for(const body of ['lwb','swb'])test(`${body} wheel castings have flat caps, recessed barrels and restrained surfaces`,async()=>{
 const root=await load(body),z=body==='lwb'?1.295:1.125;
 for(const [name,track,radius,half] of [['StockWheels',.6975,.3465,.0975],['AllTerrainWheels',.750,.368,.1175]]){
  const assembly=root.getObjectByName(name),meshes=[];
  assembly.traverse(o=>{if(o.isMesh)meshes.push(o);});
  const barrel=meshes.find(o=>o.material.name==='WheelBarrelDark');
  assert.ok(barrel,`${name} missing independent dark barrel`);
  assert.ok(barrel.material.roughness>=.60,'Inner wheel barrel must not reflect like polished chrome');
  const rubber=meshes.find(o=>o.material.name==='TyreRubber');
  assert.ok(rubber.material.roughness>=.94,'Rubber should remain matte before renderer overrides');
  const finish=meshes.filter(o=>['WheelGunmetal','MachinedAlloy'].includes(o.material.name));
  assert.ok(finish.length,'Existing wheel-finish masks must remain available');
  const origin=new Vector3(track+.20,radius+.014,z+.011);
  const hit=new Raycaster(origin,new Vector3(-1,0,0),0,.25).intersectObjects(finish,false)[0];
  assert.ok(hit,'Wheel centre cap is open/missing');
  const normal=hit.normal.clone().transformDirection(hit.object.matrixWorld);
  assert.ok(Math.abs(normal.x)>.995,`Cap shading is inflated rather than planar: ${normal.x}`);
  assert.ok(hit.point.x-track<half*.88+.006,'Hub/cap protrudes like a bulb above wheel flange');
  assert.ok(hit.point.x-track>half*.88-.010,'Cap is recessed behind the hub');
  for(const side of [-1,1]){
   const lipOrigin=new Vector3(side*(track+.20),radius+.185,z);
   const lip=new Raycaster(lipOrigin,new Vector3(-side,0,0),0,.25).intersectObjects(finish,false)[0];
   assert.ok(lip,`${name} ${side} outer rim lip is back-facing/missing`);
   assert.ok(Math.abs(Math.abs(lip.point.x)-track-half*.88-.005)<.002,'Rim lip should be a narrow flat machined flange');
  }
 }
});
