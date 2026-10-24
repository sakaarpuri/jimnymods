import test from 'node:test';
import assert from 'node:assert/strict';
import * as T from 'three';
import {COURSES,makeWorld,getMissions} from '../src/trail/courses.js';
import {ELEMENT_PRESETS,BUILDER_STORAGE_KEY,createDefaultPlan,validatePlan,addElement,removeElement,loadPlan,savePlan,importPlan,createCustomCourse,terrainElementHeight,createTerrainElements} from '../src/trail/terrain-builder.js';
import {riverCentre,nearbyDiscoveries,createExplorationFeatures,bridgeSurfaceMaterial,riverApproachProtectionDistance} from '../src/trail/world-exploration.js';
import {createVehicle} from '../src/trail/physics.js';
import {createRigidVehicle} from '../src/trail/rigid-vehicle.js';

test('expedition worlds have exactly three times the former area without moving spawn or route gates',()=>{
 for(const c of COURSES){const w=makeWorld(c),b=w.bounds,ratio=(b.maxX-b.minX)*(b.maxZ-b.minZ)/c.size**2;assert(Math.abs(ratio-(c.id==='school'?1:3))<1e-12);assert.equal((b.minZ+b.maxZ)/2,c.size*.3);assert.deepEqual(w.spawn,{x:0,z:0,yaw:0});for(const m of getMissions(c))for(const route of Object.values(m.routes))assert(route.every(p=>w.contains(p.x,p.z)));}
});
test('custom plans validate bounds, rotation, spacing, finite numbers, known types and a bounded element count',()=>{
 const plan=createDefaultPlan();assert(validatePlan(plan).ok);assert.equal(createCustomCourse(plan).id,'custom');
 for(const element of [{id:'x',type:'script',x:20,z:50,yaw:0},{id:'x',type:'ramp',x:NaN,z:50,yaw:0},{id:'x',type:'ramp',x:155,z:50,yaw:Math.PI/2},{id:'x',type:'ramp',x:0,z:10,yaw:0}])assert(!validatePlan({version:1,elements:[element]}).ok);
 assert(!addElement(plan,'ramp',-35,70).ok);assert.equal(removeElement(plan,'ramp-1').elements.length,2);assert.equal(plan.elements.length,3);
 assert(!validatePlan({version:1,elements:Array.from({length:25},(_,i)=>({id:String(i),type:'ramp',x:i,z:70,yaw:0}))}).ok);
 const stripped=validatePlan({version:1,elements:[{id:'one',type:'hill',x:20,z:80,yaw:0,code:'alert(1)'}]});assert(stripped.ok);assert(!('code'in stripped.plan.elements[0]));
});
test('local persistence tolerates corruption and storage denial without losing the playable plan',()=>{
 const values=new Map(),storage={getItem:k=>values.get(k),setItem:(k,v)=>values.set(k,v)},plan=createDefaultPlan();assert(savePlan(plan,storage).saved);assert.deepEqual(loadPlan(storage),plan);
 values.set(BUILDER_STORAGE_KEY,'{"version":99}');assert.deepEqual(loadPlan(storage),createDefaultPlan());const denied={getItem(){throw Error('denied');},setItem(){throw Error('denied');}};
 assert.deepEqual(loadPlan(denied),createDefaultPlan());assert.equal(savePlan(plan,denied).saved,false);assert(!importPlan('oops').ok);assert(!importPlan('x'.repeat(30001)).ok);assert(importPlan(JSON.stringify(plan)).ok);
});
test('element heightfields rotate with the authored position and the renderer reads the same height',()=>{
 const a={id:'r',type:'ramp',x:0,z:80,yaw:0},b={...a,yaw:Math.PI/2};assert.equal(terrainElementHeight(a,0,80),1.2);assert.equal(terrainElementHeight(a,8,80),0);assert.equal(terrainElementHeight(b,8,80),terrainElementHeight(a,0,88));
 const world=makeWorld(createCustomCourse()),root=createTerrainElements(world,new T.Group());assert(world.terrainProps.length>0);
 root.traverse(m=>{if(m.isMesh&&!m.isInstancedMesh){const pos=m.geometry.attributes.position;for(let i=0;i<pos.count;i+=37)assert(Math.abs(pos.getY(i)-world.height(pos.getX(i),pos.getZ(i))-.008)<.0001);}});
});
test('every discovery is bounded, outside existing mission lines and has physical marked elements',()=>{
 for(const c of COURSES.filter(c=>c.id!=='school')){const w=makeWorld(c);assert(w.discoveries.length>=2);for(const d of w.discoveries){assert(w.contains(d.x,d.z,25));assert(w.routeDistance(d.x,d.z)>12);assert.equal(nearbyDiscoveries(w,d).some(n=>n.id===d.id),true);assert(!nearbyDiscoveries(w,d,[d.id]).some(n=>n.id===d.id));}const root=createExplorationFeatures(w,new T.Group());for(const m of root.children.filter(m=>m.isInstancedMesh))for(const p of m.userData.explorationProps)assert(w.sceneryObstacles.some(h=>h.id===p.id));}
});
test('river geometry is visible, guarded and rejects vehicular water access without a wading claim',()=>{
 const w=makeWorld(COURSES.find(c=>c.id==='mountain')),r=w.river;assert(r);const root=createExplorationFeatures(w,new T.Group());assert(root.getObjectByName('ClosedRiverWater'));assert(w.riverProps.length>100);
 assert(w.recoveryReason({x:40,z:riverCentre(40)}));assert.equal(w.recoveryReason({x:r.bridgeX,z:r.bridgeZ}), '');assert.equal(w.supportHeight(r.bridgeX,r.bridgeZ),r.deckTop);assert(w.height(r.bridgeX,r.bridgeZ)<r.waterLevel);assert(w.riverProps.some(p=>p.id==='river-bridge-deck'));
});
test('bridge presentation keeps all physical dimensions and adds bounded original surface details',()=>{
 const world=makeWorld(COURSES.find(c=>c.id==='mountain')),before=JSON.stringify(world.riverProps),root=createExplorationFeatures(world,new T.Group()),details=root.getObjectByName('BridgeSurfaceDetails');assert(details?.userData.decorativeOnly);assert.equal(JSON.stringify(world.riverProps),before);
 assert.equal(details.children.length,3);assert.equal(details.children[0].count,4);assert(details.children[1].count>=20);let triangles=0;details.traverse(m=>{if(m.isInstancedMesh)triangles+=m.geometry.index.count/3*m.count;});assert(triangles<120);
 const materials=['bank','deck','rail'].map(kind=>bridgeSurfaceMaterial(kind,world.river));assert.equal(new Set(materials.map(m=>m.customProgramCacheKey())).size,3);
 for(const material of materials){const shader={uniforms:{},vertexShader:'#include <begin_vertex>',fragmentShader:'#include <color_fragment>'};material.onBeforeCompile(shader);assert.match(shader.vertexShader,/instanceMatrix\*masonryLocal/);assert.match(shader.fragmentShader,/stoneNoise/);assert.equal(shader.uniforms.bridgeOrigin.value.x,world.river.bridgeX);material.dispose();}
});
test('all six custom elements are physically driveable through their intended line',async()=>{
 for(const p of ELEMENT_PRESETS){const course=createCustomCourse({version:1,name:p.name,elements:[{id:'test',type:p.id,x:0,z:80,yaw:0}]}),world=makeWorld(course),state=createVehicle(),engine=await createRigidVehicle(world,state,{terrainStep:3});
  try{state.z=40;state.gear='L';state.range='4L';state.parking=false;engine.reset(state);let maxY=0,maxRoll=0;for(let i=0;i<4200&&state.z<110;i++){engine.step({throttle:.4});maxY=Math.max(maxY,state.y);maxRoll=Math.max(maxRoll,Math.abs(state.roll));}assert(state.z>105,`${p.id}: stalled at ${state.z}`);assert(maxRoll<.9,p.id);if(['hill','ramp'].includes(p.id))assert(maxY>p.height*.8,`${p.id} must physically raise chassis`);}finally{engine.dispose();}
 }
});
test('river bridge supports a rigid vehicle crossing while bank walls stop an unapproved approach',async()=>{
 const world=makeWorld(COURSES.find(c=>c.id==='mountain')),r=world.river,state=createVehicle(),engine=await createRigidVehicle(world,state,{terrainStep:4});
 for(const offset of [-12,0,12])for(let z=390;z<690;z+=.25){if(Math.abs(z-r.bridgeZ)<25)continue;assert(riverApproachProtectionDistance(r.bridgeX+offset,z,r)<=5,'protect the complete original roadbed, not only its centre');assert(Math.abs(world.height(r.bridgeX+offset,z+.25)-world.height(r.bridgeX+offset,z))/.25<.25,`approach cliff at ${offset}, ${z}`);}
 try{state.x=r.bridgeX;state.z=440;state.gear='L';state.range='4L';state.parking=false;engine.reset(state);let low=Infinity;for(let i=0;i<9000&&state.z<r.bridgeZ+60;i++){engine.step({throttle:.24});if(Math.abs(state.z-r.bridgeZ)<20)low=Math.min(low,state.y);assert(!world.recoveryReason(state));assert(Math.abs(state.roll)<.8,'approach must not roll the vehicle');}assert(state.z>r.bridgeZ+55,`bridge stalled ${state.z}`);assert(low>r.deckTop-.25);
  state.x=40;state.z=riverCentre(40)-50;state.yaw=0;engine.reset(state);for(let i=0;i<2400;i++)engine.step({throttle:.35});assert(state.z<riverCentre(40)-10,'guarded bank blocks river access');
 }finally{engine.dispose();}
});
