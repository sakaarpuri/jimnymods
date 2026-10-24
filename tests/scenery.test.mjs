import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, statSync } from 'node:fs';
import { SCENERIES, validScenery, sceneryMessage, sceneryURL } from '../src/scenery.js';

test('photographed Garage plus three outdoor HDRIs, each an Ultra HDR JPEG at two sizes', () => {
  assert.deepEqual(Object.keys(SCENERIES), ['studio', 'mountains', 'urban', 'desert']);
  assert.equal(SCENERIES.studio.label, 'Garage');
  const sources = readFileSync(new URL('../modeling/SCENERY_SOURCES.md', import.meta.url), 'utf8');
  for (const [id, scene] of Object.entries(SCENERIES)) {
    assert.match(scene.description, /Poly Haven HDRI/);
    assert.ok(sources.includes(scene.file), `${id} source and licence recorded`);
    assert.ok(scene.height > 1 && scene.height < 2.2 && scene.radius > 8.1, `${id} floor projection contains the orbit`);
    if (scene.sun) assert.equal(scene.sun.direction.length, 3);
    for (const [resolution, limit] of [['4k', 2_300_000], ['2k', 650_000]]) {
      const path = new URL('../' + sceneryURL(id, resolution), import.meta.url), image = readFileSync(path);
      assert.equal(image.readUInt16BE(0), 0xffd8, 'JPEG');
      assert.ok(image.includes('hdrgm:'), `${id} ${resolution} carries a gain map`);
      assert.ok(statSync(path).size < limit, `${id} ${resolution} size`);
    }
  }
});
test('only the low-contrast garage gets a reflection band, and it sits below the horizon', () => {
  const bands = Object.entries(SCENERIES).filter(([, scene]) => scene.reflectionBand);
  assert.deepEqual(bands.map(([id]) => id), ['studio']);
  const [low, high] = SCENERIES.studio.reflectionBand.elevation;
  assert.ok(low < high && high < 0 && low > -20);
  assert.ok(SCENERIES.studio.reflectionBand.radiance <= 2, 'subtle enough to keep the paint colour');
});
test('unknown saved settings safely fall back to the garage', () => {
  for (const input of [null, undefined, '', 'invalid', '__proto__', 'constructor']) assert.equal(validScenery(input), 'studio');
  assert.equal(validScenery('mountains'), 'mountains');
});
test('loading, failure and night disclosures are clear', () => {
  assert.match(sceneryMessage('urban', { loading: true }), /Loading urban/);
  assert.match(sceneryMessage('desert', { failed: true }), /plain backdrop is shown/);
  assert.match(sceneryMessage('mountains', { night: true }), /neutral test ground/);
});
