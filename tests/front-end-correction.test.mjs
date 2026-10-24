import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { correctFrontEnd, stockHeadlampCentre, FRONT_AXLE_Z } from '../src/front-end-correction.js';
import { auditModel } from '../scripts/audit-model-proportions.mjs';

const fixture = JSON.parse(readFileSync(new URL('./fixtures/front-end-correction-samples.json', import.meta.url), 'utf8'));

test('the JavaScript field matches the Blender correction exactly', () => {
  assert.equal(fixture.front_axle_z, FRONT_AXLE_Z['5door']);
  for (const [p, blended, rigid] of fixture.samples) {
    correctFrontEnd(p).forEach((v, i) => assert.ok(Math.abs(v - blended[i]) < 1e-7, `${p} -> ${blended}`));
    correctFrontEnd(p, { rigid: true }).forEach((v, i) => assert.ok(Math.abs(v - rigid[i]) < 1e-7, `${p} rigid`));
  }
});
test('the cabin, cowl, wheels and rear are untouched', () => {
  for (const p of [[0, 1.196, .85], [.7, .9, 0], [.6, 1.5, -1.5], [0, .3, 1.295], [.8, .35, 1.295]]) assert.deepEqual(correctFrontEnd(p), p);
});
test('headlamps move to the measured Suzuki position as rigid units', () => {
  const left = stockHeadlampCentre(1), right = stockHeadlampCentre(-1);
  assert.ok(Math.abs(left.x - .495) < .001 && Math.abs(right.x + .495) < .001);
  assert.ok(Math.abs(left.y - .862) < .001);
  const top = correctFrontEnd([.55, 1.076, 1.9], { rigid: true }), bottom = correctFrontEnd([.55, .878, 1.9], { rigid: true });
  assert.ok(Math.abs((top[1] - bottom[1]) - .198) < 1e-6, 'lamp keeps its diameter');
});
for (const body of ['lwb', 'swb']) test(`${body} model carries the corrected front end`, async () => {
  const m = (await auditModel(body)).measured;
  assert.ok(m.wheelbase > 2000 && Math.abs(m.roofHeight - 1720) < 8, 'envelope unchanged');
  assert.ok(m.approachAngle > 33 && m.approachAngle < 37.5, `approach ${m.approachAngle}`);
});
