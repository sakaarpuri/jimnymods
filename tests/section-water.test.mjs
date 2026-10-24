import test from 'node:test';
import assert from 'node:assert/strict';
import * as T from 'three';
import {sectionWaterMaterial,riverWakeWeight} from '../src/trail/section-water.js';
import {COURSES,makeWorld} from '../src/trail/courses.js';
import {HIMACHAL_SECTION,createHimachalSection,sectionRiverCentre,sectionWaterLevel,sectionRiverEdges,sectionHazard} from '../src/trail/himachal-section.js';

test('river details share physical shoreline envelopes and leave bridge travel volume unobstructed',()=>{
 const w=makeWorld(COURSES.find(c=>c.id==='mountain'),'driver'),b=HIMACHAL_SECTION.bridge;
 const banks=w.sectionProps.filter(p=>p.id.startsWith('section-bank-')),toes=w.sectionProps.filter(p=>p.id.startsWith('section-shore-')),beams=w.sectionProps.filter(p=>p.id.startsWith('section-stringer-'));
 assert(banks.length>60);assert(new Set(banks.map(p=>p.height.toFixed(2))).size>30);
 for(const p of banks){assert(p.height>=1.22&&p.height<=2.02);assert(p.radius>=1.2&&p.radius<=1.5);assert(Math.abs(p.z-b.z)>5.5);}
 assert(toes.length>20);for(const p of toes){assert(p.radius<.77&&p.height<1.5);assert.equal(p.y,w.height(p.x,p.z)-.15,'wet stones remain seated on the real riverbed');assert(Math.abs(p.x-sectionRiverCentre(p.z))>4);assert(Math.abs(p.z-b.z)>5);}
 assert.equal(beams.length,2);for(const p of beams){assert(p.y+p.height<=b.deckTop-.24+.00001);assert(p.depth/2+Math.abs(p.z-b.z)<b.width/2);}
 const root=createHimachalSection(w,new T.Group()),rendered=root.children.flatMap(m=>m.userData.sectionProps||[]);
 assert.deepEqual(new Set(rendered),new Set(w.sectionProps));
 const matrix=new T.Matrix4(),position=new T.Vector3(),rotation=new T.Quaternion(),scale=new T.Vector3();
 for(const mesh of root.children.filter(o=>o.isInstancedMesh&&o.userData.sectionProps?.[0]?.type==='rock'))for(const [i,p]of mesh.userData.sectionProps.entries()){
  mesh.getMatrixAt(i,matrix);matrix.decompose(position,rotation,scale);
  assert(position.distanceTo(new T.Vector3(p.x,p.y+p.height/2,p.z))<.00002);
  assert(scale.distanceTo(new T.Vector3(p.radius,p.height,p.radius))<.00001,'visible scan stays inside its physical cylinder envelope');
 }
 const water=root.getObjectByName('SectionClosedRiverWater'),positions=water.geometry.attributes.position;
 for(let i=0;i<positions.count;i++)assert(Math.abs(positions.getY(i)-sectionWaterLevel(positions.getZ(i)))<.00001,'visual animation cannot raise the closed-water plane');
 root.traverse(o=>{o.geometry?.dispose();o.material?.dispose();});
});
test('irregular wetted edges and solid shoals stay inside the existing closed channel and keep the bridge clear',()=>{
 const w=makeWorld(COURSES.find(c=>c.id==='mountain'),'driver'),widths=[];
 for(let z=110;z<=205;z+=.25){const e=sectionRiverEdges(z),c=sectionRiverCentre(z);assert(e.left>=c-6-.00001&&e.right<=c+6+.00001);assert(e.left<=e.right);if(z>140&&z<195)widths.push(e.right-e.left);}
 assert(Math.max(...widths)-Math.min(...widths)>1.5,'the actual mesh varies its wetted width');
 const shoals=w.sectionProps.filter(p=>p.shoal);assert.equal(shoals.length,15);
 for(const p of shoals){assert(sectionHazard(p));assert(Math.abs(p.z-130)>10);assert(Math.abs(p.x-sectionRiverCentre(p.z))+p.radius<6);assert.equal(p.y,w.height(p.x,p.z)-.12);assert(p.y+p.height>sectionWaterLevel(p.z));}
 for(const side of [-1,1]){const guards=w.sectionProps.filter(p=>p.id.startsWith(`section-bank-${side}-`)).sort((a,b)=>a.z-b.z);
  for(let i=1;i<guards.length;i++){const a=guards[i-1],b=guards[i];if(a.z<130&&b.z>130)continue;assert(Math.hypot(a.x-b.x,a.z-b.z)-a.radius-b.radius<.45,'guard gap cannot admit a vehicle');}
 }
 const material=sectionWaterMaterial(shoals);assert.deepEqual(material.userData.foamSources,shoals.map(p=>({x:p.x,z:p.z,radius:p.radius})));material.dispose();
});
test('shoal foam is concentrated downstream, not an unrelated repeating surface pattern',()=>{
 const rocks=[{x:3,z:10,radius:1.5}];assert.equal(riverWakeWeight(3,12,rocks),0);assert(riverWakeWeight(3,7,rocks)>.65);assert(riverWakeWeight(8,7,rocks)<.01);assert.equal(riverWakeWeight(3,-5,rocks),0);assert.equal(riverWakeWeight(3,7,[]),0);
});
test('river shader uses metre-scaled moving normals and broken foam, not transparent repeated stripe artwork',()=>{
 const m=sectionWaterMaterial();assert(m.isMeshPhysicalMaterial);assert.equal(m.metalness,0);assert.equal(m.ior,1.333);assert.equal(m.transparent,false);assert(m.envMapIntensity>0);
 const shader={uniforms:{},vertexShader:'#include <begin_vertex>',fragmentShader:'#include <color_fragment>\n#include <normal_fragment_maps>'};m.onBeforeCompile(shader);
 assert.equal(shader.uniforms.riverTime,m.userData.flowTime);assert.match(shader.fragmentShader,/riverSlope/);assert.match(shader.fragmentShader,/riverFbm/);assert.match(shader.fragmentShader,/mat3\(viewMatrix\)/);assert.match(shader.vertexShader,/modelMatrix/);
 m.dispose();
});
