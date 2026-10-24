import test from 'node:test';
import assert from 'node:assert/strict';
import * as T from 'three';
import {COURSES,DIFFICULTIES,makeWorld,mountainShoulderRelief} from '../src/trail/courses.js';
import {createCourseLandmarks,landmarkCollisionHulls} from '../src/trail/course-landmarks.js';
import {vegetationLayout} from '../src/trail/vegetation-layout.js';
import {createVehicle} from '../src/trail/physics.js';
import {createRigidVehicle} from '../src/trail/rigid-vehicle.js';

test('all visible solid landmark parts have identical position and dimensions in collision data',()=>{
 for(const course of COURSES)for(const level of Object.keys(DIFFICULTIES)){
  const world=makeWorld(course,level),hulls=landmarkCollisionHulls(world.landmarks);
  const solid=world.landmarks.flatMap(l=>l.parts.filter(p=>p.solid));
  assert.equal(hulls.length,solid.length);assert.equal(new Set(hulls.map(h=>h.id)).size,hulls.length);
  for(const p of solid){const hull=world.sceneryObstacles.find(h=>h.id===p.id);assert(hull,p.id);
   for(const k of ['x','y','z','width','height','depth'])assert.equal(hull[k],p[k],`${p.id} ${k}`);
   assert(p.width>0&&p.depth>0&&p.height>0);assert(Object.values(p).filter(v=>typeof v==='number').every(Number.isFinite));
   const radius=Math.hypot(p.width,p.depth)/2;
   assert(world.landmarkRouteDistance(p.x,p.z)-radius>1.5,`${course.id}/${level} ${p.id} intrudes on a driving route`);
  }
 }
});

test('landmark instancing uses the shared plan and stays below a small scene budget',()=>{
 for(const course of COURSES){const world=makeWorld(course),scene=new T.Group(),root=createCourseLandmarks(world,scene);let tris=0,count=0;
  assert.equal(scene.children[0],root);assert.equal(root.userData.landmarks.length,world.landmarks.length);
  root.traverse(mesh=>{if(!mesh.isInstancedMesh)return;count++;tris+=(mesh.geometry.index?.count||mesh.geometry.attributes.position.count)/3*mesh.count;
   const matrix=new T.Matrix4(),position=new T.Vector3(),rotation=new T.Quaternion(),scale=new T.Vector3();
   for(let i=0;i<mesh.count;i++){mesh.getMatrixAt(i,matrix);matrix.decompose(position,rotation,scale);const p=world.landmarks.flatMap(l=>l.parts).find(p=>p.id===mesh.userData.landmarkParts[i].id);assert(Math.abs(position.y-(p.y+p.height/2))<.0001);assert(Math.abs(scale.x-p.width)<.0001);}
   mesh.geometry.dispose();mesh.material.dispose();
  });assert(count<=6);assert(tris<12000,`${course.id}: ${tris} triangles`);
 }
});

test('urban and lesson furniture describe the same facility beside the ramp approach',()=>{
 const school=makeWorld(COURSES.find(c=>c.id==='school')),urban=makeWorld(COURSES.find(c=>c.id==='urban'));
 assert.deepEqual(school.landmarks,urban.landmarks.filter(l=>!l.id.startsWith('adventure-sign-')),'the established training facility remains in the same place; expedition-only signs are additional');
 const workshop=urban.landmarks.find(l=>l.kind==='workshop'),container=urban.landmarks.find(l=>l.kind==='container');
 assert(Math.hypot(workshop.x+65,workshop.z-72)<70);assert(Math.hypot(container.x+65,container.z-72)<45);
});

test('survey beacons follow each difficulty and a field camp exists beyond the start',()=>{
 for(const level of Object.keys(DIFFICULTIES)){
  const world=makeWorld(COURSES.find(c=>c.id==='sand'),level),beacons=world.landmarks.filter(l=>l.kind==='beacon'),route=world.missions.find(m=>m.id==='survey').routes[world.settings.route];
  assert.equal(beacons.length,3);for(let i=0;i<3;i++)assert(Math.hypot(beacons[i].x-route[i+2].x,beacons[i].z-route[i+2].z)<30);
  assert(world.landmarks.some(l=>l.kind==='tent'&&l.z>200));
 }
});

test('mountain relief is zero on protected routes and continuous at the shoulder boundary',()=>{
 const world=makeWorld(COURSES.find(c=>c.id==='mountain'));
 for(const route of world.routes)for(let i=1;i<route.length;i++)for(let t=0;t<=1;t+=.1){const a=route[i-1],b=route[i],x=a.x+(b.x-a.x)*t,z=a.z+(b.z-a.z)*t;assert.equal(mountainShoulderRelief(x,z,world.routeDistance(x,z)),0);}
 assert.equal(mountainShoulderRelief(98,190,6),0);assert(Math.abs(mountainShoulderRelief(98,190,6.001))<.000001);
 const relief=Array.from({length:40},(_,i)=>mountainShoulderRelief(110+i*3,160+i*2,20));assert(Math.max(...relief)-Math.min(...relief)>.8);
 const rocks=world.obstacles.filter(o=>o.id.startsWith('garden-shoulder-'));assert(rocks.length>=30&&rocks.length<=50);
 for(const rock of rocks){assert(world.routeDistance(rock.x,rock.z)>5.5);assert.equal(rock.y,world.height(rock.x,rock.z)-.12);assert(rock.radius>=.3&&rock.radius<=.8);}
});

test('all trees in the shared vegetation layout have a matching physical trunk',()=>{
 for(const course of COURSES){const world=makeWorld(course),trees=vegetationLayout(world);
  assert(!world.sceneryObstacles.some(o=>o.id.startsWith('tree-trunk-')));
  for(const tree of trees){const hull=world.sceneryObstacles.find(o=>o.id===tree.id);assert(hull);assert.equal(hull.radius,tree.radius);assert.equal(hull.y,tree.y);assert.equal(hull.height,tree.height);}
 }
});

test('the actual workshop facade stops a driven rigid vehicle',async()=>{
 const world=makeWorld(COURSES.find(c=>c.id==='urban')),building=world.sceneryObstacles.find(o=>o.id==='field-workshop-building'),state=createVehicle();
 state.x=building.x;state.z=building.z-building.depth/2-10;state.gear='D';state.parking=false;
 const start=state.z,engine=await createRigidVehicle(world,state,{terrainStep:3});
 try{for(let i=0;i<600;i++)engine.step({throttle:.5});assert(state.z>start+3);assert(state.z<building.z-building.depth/2-1,'the chassis must not pass through the workshop');assert(Math.abs(state.x-building.x)<2);}finally{engine.dispose();}
});
