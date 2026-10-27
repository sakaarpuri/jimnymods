import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const viewer = readFileSync(new URL('../src/viewer3d.js', import.meta.url), 'utf8');
const contact = readFileSync(new URL('../src/contact-shadow.js', import.meta.url), 'utf8');

test('crevice shading cannot bridge the differential ground clearance',()=>{
  const settings=viewer.match(/updateGtaoMaterial\(\{radius:([.\d]+),distanceExponent:1,thickness:([.\d]+)/);
  assert(settings,'Expected explicit metre-scale occlusion settings');
  assert(Number(settings[1])>0&&Number(settings[1])<=.10,'Keep AO local instead of projecting floating drivetrain shadows');
  assert(Number(settings[2])>0&&Number(settings[2])<=.10,'Do not treat thin visible surfaces as metre-thick occluders');
});

test('the car is grounded by a rendered contact shadow, not painted gradient cards', () => {
  assert.match(viewer, /createContactShadow\(renderer,/);
  assert.doesNotMatch(viewer, /contactCanvas|tyreContactCanvas/, 'no canvas gradient shadow blobs');
  assert.match(viewer, /function sync\(payload=current\)\{\n    contactDirty=true;/, 'every build change re-renders the contact shadow');
  assert.match(contact, /OrthographicCamera/);assert.match(contact, /HorizontalBlurShader/);
});
test('ambient occlusion and all renders share one pipeline', () => {
  assert.match(viewer, /new GTAOPass\(/);
  assert.equal(viewer.match(/renderer\.render\(scene,camera\)/g).length, 1, 'Save image and previews also go through draw()');
  assert.match(viewer, /if\(quality\.ambientOcclusion\)composer\.render\(\);else renderer\.render\(scene,camera\);/);
});
