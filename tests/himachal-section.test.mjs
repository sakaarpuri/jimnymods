import test from 'node:test';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import * as T from 'three';
import {COURSES,makeWorld,getMissions,makeGates} from '../src/trail/courses.js';
import {HIMACHAL_SECTION,sectionRiverHeight,sectionWaterLevel,sectionRiverCentre,sectionSupportHeight,sectionHazard,createHimachalSection} from '../src/trail/himachal-section.js';

test('focused Himachal routes start together and offer distinct stone and bypass climbs before a shared bridge',()=>{
 const course=COURSES.find(c=>c.id==='mountain'),missions=getMissions(course).slice(0,2),w=makeWorld(course);
 assert.deepEqual(missions.map(m=>m.id),['rock-river-technical','rock-river-bypass']);
 for(const m of missions){assert.deepEqual(m.spawn,{x:62,z:96,yaw:0});for(const route of Object.values(m.routes))for(const p of route){const b=HIMACHAL_SECTION.bounds;assert(p.x>=b.minX&&p.x<=b.maxX&&p.z>=b.minZ&&p.z<=b.maxZ);}}
 const technical=makeGates(course,'expert',missions[0].id),bypass=makeGates(course,'expert',missions[1].id);
 assert.equal(technical.filter(p=>p.precision&&p.heading===0).length,3);
 assert.equal(bypass.filter(p=>p.precision&&p.heading===0).length,0);
 assert.deepEqual(technical.slice(4),bypass.slice(4).map(p=>({...p,mission:technical[0].mission})));
 assert.deepEqual(w.spawn,{x:0,z:0,yaw:0},'existing expeditions keep their original camp');
 for(const c of COURSES.filter(c=>c.id!=='mountain'))assert.equal(makeWorld(c).himachalSection,null);
});

test('local river has a physical channel, guarded bridge, continuous approaches and exact renderer/collider placements',()=>{
 const w=makeWorld(COURSES.find(c=>c.id==='mountain')),b=HIMACHAL_SECTION.bridge;
 assert.equal(w.supportHeight(b.x,b.z),b.deckTop);assert(w.height(b.x,b.z)<sectionWaterLevel(b.z));
 for(let x=-12;x<52;x+=.25)assert(Math.abs(w.supportHeight(x+.25,b.z)-w.supportHeight(x,b.z))/.25<.27,'no approach cliff');
 assert.equal(sectionSupportHeight(22,130),b.deckTop);assert.equal(sectionSupportHeight(22,150),null);
 assert(sectionHazard({x:sectionRiverCentre(160),z:160}));assert.equal(w.recoveryReason({x:22,z:130}),'');
 for(const [x,z]of [[0,0],[-190,550],[65,151],[105,335]])assert.equal(sectionRiverHeight(25,x,z),25,'local branch must not reshape distant expeditions');
 const root=createHimachalSection(w,new T.Group());assert(root.getObjectByName('SectionClosedRiverWater'));
 let rendered=0;root.traverse(mesh=>{if(mesh.userData.sectionProps)for(const p of mesh.userData.sectionProps){rendered++;assert(w.sceneryObstacles.includes(p));}});assert.equal(rendered,w.sectionProps.length);
 assert(w.sectionProps.some(p=>p.id==='section-bridge-deck'&&p.width===24&&p.depth===6));
 assert(w.sectionProps.filter(p=>p.id.startsWith('section-bank')).length>60);
 const timber=root.getObjectByName('SectionTimberDeck'),matrix=new T.Matrix4(),position=new T.Vector3(),scale=new T.Vector3(),rotation=new T.Quaternion();
 assert(timber?.isInstancedMesh);assert.equal(timber.count,86);assert.equal(timber.material.name,'WeatheredBridgeTimber');
 timber.geometry.computeBoundingBox();
 for(let i=0;i<timber.count;i++){
  timber.getMatrixAt(i,matrix);matrix.decompose(position,rotation,scale);
  assert(Math.abs(position.y+timber.geometry.boundingBox.max.y-b.deckTop)<.00001,'visible timber top matches physical deck');
  assert(position.x+timber.geometry.boundingBox.min.x>=b.x-b.length/2-.00001);
  assert(position.x+timber.geometry.boundingBox.max.x<=b.x+b.length/2+.00001);
 }
 assert.equal(root.children.filter(o=>o.name.startsWith('SectionRockBank')).length,4,'bank mesh variants preserve shared guard placement');
 for(const o of w.obstacles)if(o.z>110&&o.z<205)assert(Math.abs(o.x-sectionRiverCentre(o.z))>=6+(o.radius||0),'unrelated old boulders must not dam the new river channel');
 root.traverse(o=>{o.geometry?.dispose();o.material?.dispose();});
});

test('both complete focused routes pass all difficulty settings with actual rigid physics and river hazard checks',()=>{
 const cwd=fileURLToPath(new URL('../',import.meta.url));
 for(const mission of ['rock-river-technical','rock-river-bypass']){
  const env={...process.env,COURSE:'mountain',MISSION:mission,BODY:'5door'};delete env.DIFFICULTY;
  const output=execFileSync(process.execPath,['scripts/trail-reachability.mjs'],{cwd,env,encoding:'utf8',timeout:90000});
  const lines=output.trim().split('\n').filter(l=>l.startsWith('{')).map(l=>JSON.parse(l)),runs=lines.filter(r=>r.mission===mission);
  assert.equal(runs.length,3);assert(runs.every(r=>r.passed&&r.checkpoints==='14/14'));assert.equal(lines.at(-1).failed,0);
 }
});
