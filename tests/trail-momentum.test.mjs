import test from 'node:test';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {COURSES,makeWorld,getMission,makeGates} from '../src/trail/courses.js';

test('Expert momentum uses the lower shoulder without removing the difficult soft bowl',()=>{
 const course=COURSES.find(c=>c.id==='sand'),w=makeWorld(course,'expert');
 const routes=getMission(course,'momentum').routes,p=routes.expert;
 assert.deepEqual(p[4],{x:-100,z:260});
 assert.equal(w.surface(-128.6,341.5),'soft-sand','the original uphill shortcut still teaches line choice');
 for(const i of [4,5]){
  const a=p[i-1],b=p[i],length=Math.hypot(b.x-a.x,b.z-a.z),ux=(b.x-a.x)/length,uz=(b.z-a.z)/length;
  for(let d=0;d<=length;d++){
   const x=a.x+ux*d,z=a.z+uz*d;
   assert.equal(w.surface(x,z),'sand','the escape line follows existing sand, not artificially boosted grip');
   assert(w.height(x+ux,z+uz)-w.height(x,z)<.23,'the lower shoulder avoids an uphill traction trap');
  }
 }
 const distance=points=>points.slice(1).reduce((sum,p,i)=>sum+Math.hypot(p.x-points[i].x,p.z-points[i].z),0);
 assert(distance(routes.expert)>distance(routes.trail));assert(distance(routes.trail)>distance(routes.learn));
 assert(makeGates(course,'expert','momentum')[0].radius<makeGates(course,'driver','momentum')[0].radius);
});

test('the complete Expert momentum route is reachable with unmodified rigid-vehicle physics',()=>{
 const cwd=fileURLToPath(new URL('../',import.meta.url));
 const output=execFileSync(process.execPath,['scripts/trail-reachability.mjs'],{
  cwd,env:{...process.env,COURSE:'sand',MISSION:'momentum',DIFFICULTY:'expert',BODY:'5door'},encoding:'utf8',timeout:60000
 });
 const lines=output.trim().split('\n').filter(l=>l.startsWith('{')).map(l=>JSON.parse(l));
 const run=lines.find(r=>r.mission==='momentum');assert(run,'the filter must run a mission, not silently pass zero runs');
 assert.equal(run.passed,true);assert.equal(run.checkpoints,'8/8');assert.equal(lines.at(-1).runs,1);
});
