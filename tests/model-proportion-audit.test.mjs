import test from 'node:test';
import assert from 'node:assert/strict';
import {auditModel} from '../scripts/audit-model-proportions.mjs';

for(const body of ['lwb','swb'])test(`${body} accuracy audit measures actual stock vertices and separates mirror width`,async()=>{
 const result=await auditModel(body),m=result.measured,r=result.reference;
 assert(Object.values(m).every(Number.isFinite));
 assert(Math.abs(m.wheelbase-r.wheelbase)<2);
 assert(Math.abs(m.tyreDiameter-r.tyreDiameter)<2);
 assert(Math.abs(m.roofHeight-r.roofHeight)<8);
 assert(Math.abs(m.frontTrack-r.frontTrack)<2);
 assert(Math.abs(m.rearTrack-r.rearTrack)<2);
 assert(Math.abs(m.bumperToBumperLength-r.bumperToBumperLength)<7);
 assert(m.overallLengthWithoutOptionalSpareCover<r.overallLengthWithFactorySpareCover);
 assert(Math.abs(m.overallLengthWithOptionalSpareCover-r.overallLengthWithFactorySpareCover)<10);
 assert(m.widthIncludingMirrors>m.widthBelowBeltline+250,'Mirror span is not the manufacturer body-width figure');
 assert(m.overallLengthWithoutOptionalSpareCover>3500&&m.overallLengthWithoutOptionalSpareCover<4300);
 assert(result.limits.some(s=>s.includes('not certify')));
});
