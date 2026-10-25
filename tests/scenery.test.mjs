import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, statSync } from 'node:fs';
import { SCENERIES, validScenery, sceneryMessage, sceneryURL } from '../src/scenery.js';
import { groundURL, GROUND_FADE } from '../src/outdoor-ground.js';

const sources = readFileSync(new URL('../modeling/SCENERY_SOURCES.md', import.meta.url), 'utf8');
const outdoor = Object.entries(SCENERIES).filter(([, scene]) => scene.file);

test('Garage is the modelled workshop; three outdoor scenes use photographed HDRIs', () => {
  assert.deepEqual(Object.keys(SCENERIES), ['studio', 'mountains', 'urban', 'desert']);
  assert.equal(SCENERIES.studio.label, 'Garage');
  assert.equal(SCENERIES.studio.file, undefined, 'the Garage needs no photo download');
  assert.deepEqual(outdoor.map(([id]) => id), ['mountains', 'urban', 'desert']);
  for (const [id, scene] of outdoor) {
    assert.match(scene.description, /Poly Haven HDRI/);
    assert.ok(sources.includes(scene.file), `${id} source and licence recorded`);
    if (scene.sun) assert.equal(scene.sun.direction.length, 3);
    for (const [resolution, limit] of [['4k', 2_300_000], ['2k', 650_000]]) {
      const path = new URL('../' + sceneryURL(id, resolution), import.meta.url), image = readFileSync(path);
      assert.equal(image.readUInt16BE(0), 0xffd8, 'JPEG');
      assert.ok(image.includes('hdrgm:'), `${id} ${resolution} carries a gain map`);
      assert.ok(statSync(path).size < limit, `${id} ${resolution} size`);
    }
  }
});
test('each outdoor scene stands on a real textured ground, not the projected photo', () => {
  assert.ok(GROUND_FADE.start > 8.1, 'the ground stays solid out past the camera orbit');
  for (const [id, { ground }] of outdoor) {
    assert.ok(ground.size > 0 && ground.tint.length === 3 && ground.tint.every(v => v > 0 && v < 3), id);
    assert.ok(sources.includes(ground.texture), `${id} ground texture source recorded`);
    let bytes = 0;
    for (const map of ['color', 'normal', 'rough']) {
      const image = readFileSync(new URL('../' + groundURL(ground.texture, map), import.meta.url));
      assert.equal(image.toString('ascii', 8, 12), 'WEBP');bytes += image.length;
    }
    assert.ok(bytes < 1_000_000, `${id} ground maps ${bytes} bytes`);
  }
  assert.doesNotMatch(readFileSync(new URL('../src/viewer3d.js', import.meta.url), 'utf8'), /GroundedSkybox/);
});
test('unknown saved settings safely fall back to the garage', () => {
  for (const input of [null, undefined, '', 'invalid', '__proto__', 'constructor']) assert.equal(validScenery(input), 'studio');
  assert.equal(validScenery('mountains'), 'mountains');
});
test('loading, failure and night disclosures are clear', () => {
  assert.match(sceneryMessage('urban', { loading: true }), /Loading urban/);
  assert.match(sceneryMessage('desert', { failed: true }), /garage is shown/);
  assert.match(sceneryMessage('mountains', { night: true }), /neutral test ground/);
});
