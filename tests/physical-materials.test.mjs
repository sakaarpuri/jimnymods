import { test } from 'node:test';
import assert from 'node:assert/strict';
import { MeshPhysicalMaterial, MeshStandardMaterial } from 'three';
import { MATERIAL_PROFILES, applyMaterialProfile, paintFinish } from '../src/physical-materials.js';

test('chrome, alloy, plastic and rubber read as different materials', () => {
  const r = name => MATERIAL_PROFILES[name].roughness;
  assert.ok(r('BrightChrome') < r('MachinedAlloy') && r('MachinedAlloy') < r('MouldedPlastic') && r('MouldedPlastic') < r('TyreRubber'));
  assert.equal(MATERIAL_PROFILES.BrightChrome.metalness, 1);
  assert.equal(MATERIAL_PROFILES.TyreRubber.metalness, 0);
  assert.equal(MATERIAL_PROFILES.MouldedPlastic.metalness, 0);
});
test('profiles restore full environment reflections and skip unknown materials', () => {
  const chrome = new MeshPhysicalMaterial({ name: 'BrightChrome', roughness: .5 });chrome.envMapIntensity = .3;
  assert.equal(applyMaterialProfile(chrome), true);
  assert.equal(chrome.roughness, .07);assert.equal(chrome.envMapIntensity, 1);
  const grille = new MeshStandardMaterial({ name: 'GlossBlackGrille' });applyMaterialProfile(grille);
  assert.equal('clearcoat' in grille, false, 'standard materials do not gain clearcoat fields');
  assert.equal(applyMaterialProfile(new MeshStandardMaterial({ name: 'CabinCarpet', roughness: 1 })), false);
});
test('paint finishes: lacquered gloss, softer satin, unlacquered matte', () => {
  assert.equal(paintFinish('oem').clearcoat,.60);
  assert.equal(paintFinish('oem').clearcoatRoughness,.30);
  assert.ok(paintFinish('satin').clearcoatRoughness > paintFinish('oem').clearcoatRoughness);
  assert.equal(paintFinish('matte').clearcoat, 0);
  assert.deepEqual(paintFinish('twotone'), paintFinish('gloss'));
});
