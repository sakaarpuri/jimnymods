import test from 'node:test';
import assert from 'node:assert/strict';
import {createWorkshopStage,WORKSHOP_LIGHT_SOURCES,WORKSHOP_CAMERA_RADIUS,WORKSHOP_LAYOUT} from '../src/workshop-stage.js';
import {Box3,Vector3,Matrix4,SRGBColorSpace,NoColorSpace,RepeatWrapping} from 'three';
test('workshop lighting has one dominant daylight opening and weaker unequal practical fixtures',()=>{
 assert.equal(WORKSHOP_LIGHT_SOURCES.length,4);const[key,...practical]=WORKSHOP_LIGHT_SOURCES;assert.equal(key.role,'key');assert(key.width>=4&&key.height>=3);
 const energy=l=>l.width*l.height*l.intensity;assert(energy(key)>practical.reduce((sum,l)=>sum+energy(l),0)*3);
 assert.notEqual(practical[0].intensity,practical[1].intensity);assert(practical.every(l=>Array.isArray(l.target)));
 const stage=createWorkshopStage();assert.equal(stage.root.getObjectByName('Ceiling light diffusers').count,2);assert.equal(stage.root.children.filter(o=>o.name==='Wall light diffuser').length,1);stage.dispose();
});
test('dominant daylight has a matching architectural opening instead of symmetric softboxes',()=>{
 const [key]=WORKSHOP_LIGHT_SOURCES,stage=createWorkshopStage();assert(key.position[0]>10);
 const opening=stage.root.getObjectByName('Open bay daylight');assert(opening);const size=new Box3().setFromObject(opening).getSize(new Vector3());assert(Math.abs(size.y-key.height)<.01&&Math.abs(size.z-key.width)<.01);assert.equal(opening.position.z,key.position[2]);assert(stage.root.getObjectByName('Shaded side wall'));stage.dispose();
});
test('workshop remains outside the rotating vehicle and uses bounded geometry',()=>{
 const stage=createWorkshopStage();assert.equal(stage.root.visible,false);stage.root.updateMatrixWorld(true);
 let triangles=0,meshCount=0;
 stage.root.traverse(mesh=>{
  if(!mesh.isMesh)return;meshCount++;
  const bounds=new Box3().setFromObject(mesh),size=bounds.getSize(new Vector3());
  assert([size.x,size.y,size.z].every(Number.isFinite));
  const occupied=[];
  if(mesh.isInstancedMesh){mesh.geometry.computeBoundingBox();for(let i=0;i<mesh.count;i++){const matrix=new Matrix4();mesh.getMatrixAt(i,matrix);occupied.push(mesh.geometry.boundingBox.clone().applyMatrix4(matrix).applyMatrix4(mesh.matrixWorld));}}
  else occupied.push(bounds);
  if(mesh.parent.name==='WorkshopModificationGear'){
   const vertex=new Vector3(),positions=mesh.geometry.attributes.position;
   for(let i=0;i<positions.count;i++){vertex.fromBufferAttribute(positions,i).applyMatrix4(mesh.matrixWorld);assert(Math.hypot(vertex.x,vertex.z)>WORKSHOP_CAMERA_RADIUS+.25,`${mesh.name} enters inspection orbit`);}
  }else for(const box of occupied){const clear=WORKSHOP_CAMERA_RADIUS+.25;assert(box.max.z < -clear || box.min.z>clear || box.min.x>clear || box.max.x< -clear || box.min.y>9.5,`${mesh.name} enters orbit-camera envelope`);}
  triangles+=mesh.geometry.index.count/3*(mesh.isInstancedMesh?mesh.count:1);
 });
 assert(triangles<18000,`Workshop budget: ${triangles} triangles`);assert(meshCount<75);assert.equal(stage.root.getObjectByName('WorkshopModificationGear').children.length,4,'Tool details are merged into four draw calls');assert(stage.floorMaterial.roughness>.8);assert.ok(stage.floorMaterial.envMapIntensity<.2);
 let disposed=false;stage.floorMaterial.addEventListener('dispose',()=>disposed=true);stage.dispose();assert(disposed);
});
test('high bay roof and light fittings clear the highest permitted orbit',()=>{
 const stage=createWorkshopStage();stage.root.updateMatrixWorld(true);
 const cameraMaxY=.96+WORKSHOP_CAMERA_RADIUS*Math.cos(.15);
 for(const name of ['High bay roof','Roof beam lower flange','Ceiling light housings','Ceiling light diffusers']){
  const mesh=stage.root.getObjectByName(name);assert(mesh,`${name} missing`);
  assert(new Box3().setFromObject(mesh).min.y>cameraMaxY+.2,`${name} can obstruct upper orbit`);
 }
 assert.equal(stage.root.children.some(o=>o.isLight),false,'workshop should not add dynamic-light cost');
 stage.dispose();
});
test('workshop architectural details have human scale without global enlargement',()=>{
 const stage=createWorkshopStage();assert.deepEqual(stage.root.scale.toArray(),[1,1,1]);
 const door=new Box3().setFromObject(stage.root.getObjectByName('Service door')).getSize(new Vector3());
 assert(Math.abs(door.y-2.08)<.01);assert(Math.abs(door.x-.96)<.01);
 const shutter=new Box3().setFromObject(stage.root.getObjectByName('Shutter leaf')).getSize(new Vector3());
 assert(Math.abs(shutter.x-4.2)<.01);assert(Math.abs(shutter.y-3.45)<.01);stage.dispose();
});
test('concrete albedo is colour-managed, independent from height and roughness',()=>{
 const stage=createWorkshopStage(),m=stage.floorMaterial;
 assert.equal(m.map.colorSpace,SRGBColorSpace);assert.equal(m.bumpMap.colorSpace,NoColorSpace);
 assert.notEqual(m.map,m.bumpMap);assert.equal(m.roughnessMap,m.bumpMap);
 assert.equal(m.map.wrapS,RepeatWrapping);assert.deepEqual(m.map.repeat.toArray(),[50,50]);
 assert.equal(m.map.image.width,512);assert.equal(m.map.image.height,512);
 const values=m.map.image.data.filter((_,i)=>i%4===0);assert(Math.max(...values.subarray(0,8000))-Math.min(...values.subarray(0,8000))>40);
 stage.dispose();
});
test('workshop walls are quiet matte surfaces rather than bright competing reflectors',()=>{
 const stage=createWorkshopStage(),wall=stage.root.getObjectByName('Back wall').material;
 const luminance=wall.color.r*.2126+wall.color.g*.7152+wall.color.b*.0722;
 assert(luminance>.6&&luminance<.8,'light plaster must not multiply an already-grey texture into charcoal');
 assert(wall.roughness>=.9);assert(wall.bumpScale<=.0005);assert(wall.envMapIntensity<=.05);
 stage.dispose();
});
test('workshop character stays peripheral and uses matte physical materials',()=>{
 const stage=createWorkshopStage();
 for(const name of ['Equipment locker','Workshop datum stripe','Service station worktop'])assert(stage.root.getObjectByName(name));
 assert.equal(stage.root.getObjectByName('Service station worktop').material.name,'WorkshopTimber');
 assert(stage.root.getObjectByName('Equipment locker').material.roughness>.6);stage.dispose();
});
test('compact workshop retains full-size equipment and a neutral judging environment',()=>{
 const stage=createWorkshopStage();assert(WORKSHOP_LAYOUT.width<21&&WORKSHOP_LAYOUT.depth<21);assert.equal(WORKSHOP_CAMERA_RADIUS,8.1);
 assert.equal(stage.root.userData.gear.length,7);
 for(const item of ['Modification bench','Rolling tool chest','Tyre and expedition','Floor jack','Air compressor','Touring and recovery'])assert(stage.root.userData.gear.some(p=>p.name.startsWith(item)),item);
 for(const name of ['WorkshopGreyEnamel','WorkshopTimber','Gear canvas and bench']){
  let found=false;stage.root.traverse(mesh=>{if(mesh.material?.name===name){found=true;const c=mesh.material.color;assert(Math.max(c.r,c.g,c.b)-Math.min(c.r,c.g,c.b)<.12,`${name} has excessive colour cast`);}});assert(found);
 }
 stage.dispose();
});
test('stage disposal releases every geometry, material and map exactly once',()=>{
 const stage=createWorkshopStage(),resources=new Set([stage.floorMaterial]);
 stage.root.traverse(o=>{if(o.geometry)resources.add(o.geometry);if(o.material)resources.add(o.material);});
 for(const resource of [...resources])if(resource.isMaterial)for(const key of ['map','bumpMap','roughnessMap'])if(resource[key])resources.add(resource[key]);
 const counts=new Map();for(const resource of resources){counts.set(resource,0);resource.addEventListener('dispose',()=>counts.set(resource,counts.get(resource)+1));}
 stage.dispose();stage.dispose();for(const count of counts.values())assert.equal(count,1);
});
