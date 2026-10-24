import test from 'node:test';
import assert from 'node:assert/strict';
import * as T from 'three';
import {COURSES,makeWorld} from '../src/trail/courses.js';
import {mountainRoadGeometry,createMountainRoads} from '../src/trail/mountain-road-render.js';
import {groundGeometry} from '../src/trail/environment.js';
import {sectionGreenWeight} from '../src/trail/himachal-dressing.js';

test('paved finish follows shared graded mountain terrain, not an independent flat road',()=>{
 const world=makeWorld(COURSES.find(c=>c.id==='mountain'));
 const road=world.mountainExtension.roads.find(r=>r.kind==='asphalt');
 const g=mountainRoadGeometry(world,road),p=g.attributes.position;
 for(let i=0;i<p.count;i++)assert(Math.abs(p.getY(i)-world.height(p.getX(i),p.getZ(i))-.035)<.001);
 assert(g.index.count>1000);assert.equal(p.count,road.points.length*9);g.dispose();
});
test('extended mountain verges never paint over the original technical line or bridge junction',()=>{
 const world=makeWorld(COURSES.find(c=>c.id==='mountain')),g=groundGeometry(world,world.himachalSection.bounds,2);
 const p=g.attributes.position,green=g.attributes.trailGreen;
 for(let i=0;i<p.count;i++)assert(Math.abs(green.getX(i)-sectionGreenWeight(world,p.getX(i),p.getZ(i)))<.0001);
 g.dispose();
});
test('only mountain gets paved ribbon, leaving a loose transfer turnout',()=>{
 for(const course of COURSES){
  const world=makeWorld(course),parent=new T.Group(),group=createMountainRoads(world,parent);
  if(course.id!=='mountain'){assert.equal(group,null);continue;}
  const mesh=group.getObjectByName('Ridge road asphalt');assert(mesh);
  assert(mesh.geometry.attributes.uv.getY(0)>=14);
  assert.equal(world.surface(-340,450),'loose');
  assert.equal(mesh.material.roughness,.94);
  group.traverse(o=>{o.geometry?.dispose();o.material?.dispose();});
 }
});
