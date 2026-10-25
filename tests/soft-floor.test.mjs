import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { MeshBasicMaterial, Mesh, ShaderLib } from 'three';
import { softenGroundedSkybox, SOFT_FLOOR } from '../src/soft-floor.js';

test('the projected floor blurs with distance; the ground under the car stays sharp', () => {
  assert.ok(SOFT_FLOOR.near >= 3 && SOFT_FLOOR.near < SOFT_FLOOR.far && SOFT_FLOOR.blur > 0);
  const sky = softenGroundedSkybox(new Mesh(undefined, new MeshBasicMaterial()), 1.7);
  const shader = { uniforms: {}, vertexShader: ShaderLib.basic.vertexShader, fragmentShader: ShaderLib.basic.fragmentShader };
  sky.material.onBeforeCompile(shader);
  assert.equal(shader.uniforms.skyHeight.value, 1.7);
  assert.match(shader.vertexShader, /vSkyLocal = position;/);
  assert.match(shader.fragmentShader, /texture2D\( map, vMapUv, skyBias \)/);
  assert.doesNotMatch(shader.fragmentShader, /#include <map_fragment>/);
});
test('every scenery photo is projected with the soft floor', () => {
  assert.match(readFileSync(new URL('../src/viewer3d.js', import.meta.url), 'utf8'), /softenGroundedSkybox\(skybox,config\.height\)/);
});
