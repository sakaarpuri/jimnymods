import test from 'node:test';
import assert from 'node:assert/strict';
import {COURSES,makeWorld} from '../src/trail/courses.js';
import {conceptObstacles} from '../src/trail/concept-setpieces.js';
import {vegetationLayout} from '../src/trail/vegetation-layout.js';

test('concept formations are deterministic, connected geological groups with bounded counts',()=>{
 for(const c of COURSES.filter(c=>c.id!=='school')){
  const w=makeWorld(c),rocks=w.obstacles.filter(o=>o.id.startsWith('concept-'));
  assert.deepEqual(rocks,conceptObstacles(c,w.height,w.routeDistance));
  assert(rocks.length>20&&rocks.length<=(c.id==='urban'?90:64),`${c.id}: ${rocks.length}`);
  const connected=rocks.filter(a=>rocks.some(b=>a!==b&&a.formation===b.formation&&Math.hypot(a.x-b.x,a.z-b.z)<a.radius+b.radius));
  assert(connected.length>=rocks.length*.9,'formations must not turn into evenly spaced isolated boulders');
  assert(new Set(rocks.map(r=>r.formation)).size>=3);
 }
});

test('quarry entrance rubble adds four low embedded clusters clear of missions and access routes',()=>{
 for(const difficulty of ['learn','trail','expert']){
  const w=makeWorld(COURSES.find(c=>c.id==='urban'),difficulty),rocks=w.obstacles.filter(o=>o.formation?.includes('rubble'));
  assert.equal(rocks.length,27);assert.equal(new Set(rocks.map(o=>o.formation)).size,4);
  for(const p of rocks){
   assert(p.height>=.6&&p.height<=1.6,`${p.id}: height ${p.height}`);
   assert(w.landmarkRouteDistance(p.x,p.z)>=p.radius+4.5,`${p.id}: access clearance`);
   assert(p.y<=w.height(p.x,p.z)&&p.y+p.height>w.height(p.x,p.z),'embedded and visibly exposed');
   assert(p.z>=95&&p.z<=150,'groups frame ramp entrance and lower climb, not distant banks');
  }
 }
});

test('solid formations keep every mission/bypass corridor and physical tree trunk clear',()=>{
 for(const c of COURSES.filter(c=>c.id!=='school')){
  const w=makeWorld(c,'expert'),rocks=w.obstacles.filter(o=>o.id.startsWith('concept-')),trees=vegetationLayout(w);
  for(const p of rocks){
   assert.equal(p.type,'rock');assert(w.routeDistance(p.x,p.z)>=p.radius+4.5);
   assert(w.contains(p.x,p.z,p.radius));assert(p.height>0&&p.height<8);
   assert(p.y<=w.height(p.x,p.z),'rocks are embedded, not floating over the ground');
   assert(p.y+p.height>w.height(p.x,p.z),'the formation remains visibly exposed');
   for(const tree of trees)assert(Math.hypot(tree.x-p.x,tree.z-p.z)>=p.radius+3);
  }
 }
});

test('shared lessons and user-created courses do not inherit expedition set pieces',()=>{
 const height=()=>0,clear=()=>Infinity;
 assert.deepEqual(conceptObstacles({id:'school',theme:'urban'},height,clear),[]);
 assert.deepEqual(conceptObstacles({id:'custom',theme:'mountain'},height,clear),[]);
 assert.equal(makeWorld(COURSES[0]).obstacles.filter(p=>p.id.startsWith('concept-')).length,0);
});

test('mountain scan footprints stay fixed while steep shoulders produce embedded ledges, not stretched needles',()=>{
 const course=COURSES.find(c=>c.id==='mountain'),clear=()=>Infinity;
 const flat=conceptObstacles(course,()=>0,clear),slope=conceptObstacles(course,(x,z)=>x*.8+z*.4,clear);
 const footprint=rocks=>rocks.map(({id,x,z,radius,yaw})=>({id,x,z,radius,yaw}));
 assert.deepEqual(footprint(flat),footprint(slope),'slope correction must not enlarge physical route obstruction');
 for(const rock of slope){
  const ground=rock.x*.8+rock.z*.4;
  assert(rock.height<=rock.radius*.9+1e-9,'rock height is capped relative to its existing horizontal footprint');
  assert(rock.y<ground&&rock.y+rock.height>ground,'bedrock is embedded and remains visible');
 }
 for(const difficulty of ['learn','trail','expert']){
  const world=makeWorld(course,difficulty);
  for(const rock of world.obstacles.filter(o=>o.id.startsWith('concept-'))){
   assert(rock.height<=rock.radius*.9+1e-9);
   assert(world.routeDistance(rock.x,rock.z)>=rock.radius+4.5);
  }
 }
});
