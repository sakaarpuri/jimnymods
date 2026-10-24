import test from 'node:test';
import assert from 'node:assert/strict';
import {courseLighting} from '../src/trail/course-lighting.js';
import {COURSES,makeWorld} from '../src/trail/courses.js';
import {groundGeometry} from '../src/trail/environment.js';

test('course lighting shares a coherent sun and restrained indirect light',()=>{
 for(const theme of ['urban','mountain','sand']){
  const p=courseLighting(theme);assert(Object.isFrozen(p));assert(Object.isFrozen(p.sun));
  assert(p.sun[1]>25&&p.sun[1]<50);assert(p.sunIntensity>=3&&p.sunIntensity<=3.3);
  assert(p.hemisphere<.5&&p.environment<.4);assert(p.exposure>=1&&p.exposure<=1.05);
  assert(p.near>=250&&p.far>800);assert(p.clouds>=0&&p.clouds<.3);
 }
 assert.equal(courseLighting('unknown'),courseLighting('urban'));
 assert.notDeepEqual(courseLighting('sand'),courseLighting('mountain'));
});
test('coarse and fine sand meshes share physical-gradient normals at the same positions',()=>{
 const w=makeWorld(COURSES.find(c=>c.id==='sand')),b={minX:-70,maxX:-62,minZ:190,maxZ:198};
 const coarse=groundGeometry(w,b,4),fine=groundGeometry(w,b,.5);
 for(let z=0;z<=2;z++)for(let x=0;x<=2;x++){
  const a=z*3+x,c=z*8*17+x*8;
  for(const key of ['getX','getY','getZ'])assert(Math.abs(coarse.attributes.normal[key](a)-fine.attributes.normal[key](c))<1e-6);
 }
 coarse.dispose();fine.dispose();
});
