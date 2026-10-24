import test from 'node:test';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {DIFFICULTIES} from '../src/trail/courses.js';

test('both Jimny bodies physically finish the closer quarry crest at every difficulty',()=>{
 const cwd=fileURLToPath(new URL('../',import.meta.url));
 for(const body of ['5door','3door']){
  const env={...process.env,COURSE:'urban',MISSION:'ramps',BODY:body};delete env.DIFFICULTY;
  const output=execFileSync(process.execPath,['scripts/trail-reachability.mjs'],{cwd,env,encoding:'utf8',timeout:90000});
  const records=output.trim().split('\n').filter(line=>line.startsWith('{')).map(line=>JSON.parse(line));
  const runs=records.filter(r=>r.mission==='ramps');
  assert.equal(runs.length,3);assert.deepEqual(runs.map(r=>r.difficulty),['explorer','driver','expert']);
  assert(runs.every(r=>r.passed&&r.checkpoints==='10/10'),`${body}: all ramps, summit stop and descent gates must be completed`);
  assert(runs.every(r=>Math.abs(r.speed)<=DIFFICULTIES[r.difficulty].stopTolerance+.005),'the finish meets the actual difficulty stop tolerance (reported speeds round to 0.01 m/s)');
  assert.equal(records.at(-1).failed,0);
 }
});
