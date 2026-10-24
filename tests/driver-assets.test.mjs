import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js';
import {Box3,Vector3} from 'three';
import {createDriver,createRiggedDriver,updateDriver,getDriverViewpoint} from '../src/trail/player.js';
async function load(kind){
 const bytes=await readFile(new URL(`../assets/models/drivers/${kind}.glb`,import.meta.url));assert(bytes.length<2_000_000);
 return (await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength),'')).scene;
}
test('no-driver view retains the adult anatomical eye point instead of intersecting the seat',()=>{
 for(const body of ['5door','3door']){
  const driver=createDriver('none',body);driver.rotation.set(.1,1.2,-.08);driver.position.add(new Vector3(4,2,-7));
  const local=driver.worldToLocal(getDriverViewpoint(driver));
  assert(local.distanceTo(new Vector3(0,1.52,.08))<.00001);assert.equal(driver.children.length,0);
 }
});
test('both anatomical drivers contain a real deforming rig and fit above the cabin floor',async()=>{
 for(const kind of ['man','woman']){
  const scene=await load(kind);scene.updateMatrixWorld(true);const bounds=new Box3().setFromObject(scene,true);
  assert(bounds.min.y>.68,`${kind} feet must stay above the floor: ${bounds.min.y}`);
  assert(bounds.max.y<1.635,`${kind} head must fit below headliner: ${bounds.max.y}`);
  assert(bounds.max.z<.83,`${kind} shoes must stay behind firewall: ${bounds.max.z}`);
  const nodes=[];scene.traverse(o=>{if(o.isSkinnedMesh)nodes.push(o);});assert(nodes.length>=6);
  for(const name of ['head','wristL','wristR','footL','footR'])assert(scene.getObjectByName(name)?.isBone,name);
 }
});
test('driver asset cache keys fingerprint the shipped GLBs',async()=>{
 const source=await readFile(new URL('../src/trail/player.js',import.meta.url),'utf8');
 for(const kind of ['man','woman']){
  const bytes=await readFile(new URL(`../assets/models/drivers/${kind}.glb`,import.meta.url));
  assert(source.includes(createHash('sha256').update(bytes).digest('hex').slice(0,12)),`Update ${kind} driver asset version after export`);
 }
});
test('exported skin carries authored tonal variation and both eyes have pupils',async()=>{
 for(const kind of ['man','woman']){
  const scene=await load(kind);
  for(const name of ['DriverHands','DriverHead']){
   const color=scene.getObjectByName(name).geometry.getAttribute('color');assert(color,`${kind}/${name} vertex colour`);
   let low=1,high=0;for(let i=0;i<color.count;i++){low=Math.min(low,color.getX(i));high=Math.max(high,color.getX(i));}
   assert(high-low>.02,`${kind}/${name} must not have a uniform skin tone`);
  }
  for(const side of ['L','R'])assert(scene.getObjectByName(`DriverPupil${side}`));
 }
});
test('rigged drivers hide only head/torso in first person, retaining sleeves and hands on the rim',async()=>{
 for(const kind of ['man','woman'])for(const body of ['5door','3door']){
  const driver=createRiggedDriver(await load(kind),kind,body);
  // Game vehicles yaw and pitch on slopes; IK must not assume world axes.
  driver.rotation.set(.12,.8,-.06);
  for(const steer of [-.3,0,.3]){
   updateDriver(driver,{steer},true);driver.updateMatrixWorld(true);
   assert(driver.visible);assert(driver.userData.headParts.every(o=>!o.visible));
   assert(!driver.getObjectByName('DriverShirt').visible);assert(!driver.getObjectByName('DriverShirtHem').visible);
   for(const name of ['DriverSleeves','DriverSleevesHem','DriverHands','DriverTrousers','DriverFootwear'])assert(driver.getObjectByName(name).visible,`${name} remains visible in first person`);
   assert(driver.getObjectByName('DriverSleeveCaps').visible,'proximal sleeves must be closed for the composed cockpit camera');
   const angle=Math.max(-1.05,Math.min(1.05,-steer*14));
   for(const arm of driver.userData.riggedArms){
    const actual=driver.worldToLocal(arm.palmBase.getWorldPosition(new Vector3()).add(arm.knuckle.getWorldPosition(new Vector3())).multiplyScalar(.5));
    const target=new Vector3(-.01+arm.side*.16*Math.cos(angle),1.16+arm.side*.16*Math.sin(angle),.255);
    assert(actual.distanceTo(target)<.012,`${kind}/${body} palm misses rim by ${actual.distanceTo(target)}`);
   }
  }
  updateDriver(driver,{},false);assert(driver.userData.firstPersonHiddenParts.every(o=>o.visible));assert(!driver.getObjectByName('DriverSleeveCaps').visible);
 }
});
test('baked finger pose wraps the vertical rim tangent instead of drooping toward the lap',async()=>{
 for(const kind of ['man','woman']){
  const driver=createRiggedDriver(await load(kind),kind,'5door');updateDriver(driver,{},true);
  const local=name=>driver.worldToLocal(driver.getObjectByName(name).getWorldPosition(new Vector3()));
  for(const side of ['L','R']){
   const knuckle=local(`finger3-1${side}`),tip=local(`finger3-3${side}`),thumb=local(`finger1-3${side}`);
   assert(Math.abs(tip.y-knuckle.y)<.01,`${kind}/${side} finger curl should lie across the rim, not hang downward`);
   assert(thumb.y>knuckle.y+.045,`${kind}/${side} thumb should oppose the curled fingers on the upper rim`);
  }
 }
});
test('first-person sleeve origins clear the composed camera and third-person anatomy restores exactly',async()=>{
 for(const kind of ['man','woman'])for(const body of ['5door','3door']){
  const driver=createRiggedDriver(await load(kind),kind,body);driver.rotation.set(.1,.8,-.05);driver.position.add(new Vector3(3,1,7));
  for(const steer of [-.3,0,.3]){
   updateDriver(driver,{steer},true);
   for(const arm of driver.userData.riggedArms){
    const origin=driver.worldToLocal(arm.upper.getWorldPosition(new Vector3()));
    assert(Math.abs(origin.y-(arm.shoulder.y-.22))<.00001,'shoulder opening must sit below the cockpit crop');
    assert(Math.abs(origin.z-arm.shoulder.z)<.00001,'forearm reach must not be shortened by moving the shoulder backward');
   }
   updateDriver(driver,{steer},false);
   for(const arm of driver.userData.riggedArms)assert(arm.upper.position.distanceTo(arm.upperPosition)<.00001,'third-person arm must return to anatomical rest origin');
  }
 }
});
test('anatomical first-person camera clears the collar for both bodies and follows vehicle rotation',async()=>{
 for(const kind of ['man','woman'])for(const body of ['5door','3door']){
  const driver=createRiggedDriver(await load(kind),kind,body),eye=getDriverViewpoint(driver);
  const shirt=new Box3().setFromObject(driver.getObjectByName('DriverShirt'),true);
  assert(shirt.max.y<1.405,`${kind} clothing helper must be trimmed to a crew neckline, not rise to the jaw`);
  assert(eye.y>shirt.max.y+.045,`${kind} eye/collar clearance ${eye.y-shirt.max.y}`);
  const local=driver.worldToLocal(eye.clone());assert(local.y>1.50&&local.y<1.54);assert(local.z>.06&&local.z<.10);
  driver.rotation.set(.16,1.2,-.09);driver.position.add(new Vector3(8,2,-4));driver.updateMatrixWorld(true);
  const rotatedLocal=driver.worldToLocal(getDriverViewpoint(driver));
  assert(rotatedLocal.distanceTo(local)<.00001,`${kind}/${body} camera does not follow the seated driver`);
 }
});
