import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, statSync } from 'node:fs';
import { SCENERIES, validScenery, sceneryMessage } from '../src/scenery.js';

test('three Indian environments plus neutral studio, with local lightweight assets', () => {
  assert.deepEqual(Object.keys(SCENERIES), ['studio', 'mountains', 'urban', 'desert']);
  for (const scene of Object.values(SCENERIES).filter(s => s.url)) {
    const path = new URL('../' + scene.url, import.meta.url);
    const image = readFileSync(path);
    assert.equal(image.toString('ascii', 0, 4), 'RIFF');
    assert.equal(image.toString('ascii', 8, 12), 'WEBP');
    assert.ok(statSync(path).size < 400_000);
    assert.match(scene.description, /generated scenery/);
  }
});
test('unknown saved settings safely fall back to studio', () => {
  for (const input of [null, undefined, '', 'invalid', '__proto__', 'constructor']) assert.equal(validScenery(input), 'studio');
  assert.equal(validScenery('mountains'), 'mountains');
});
test('loading, failure and night disclosures are clear', () => {
  assert.match(sceneryMessage('urban', { loading: true }), /Loading urban/);
  assert.match(sceneryMessage('desert', { failed: true }), /Studio is shown/);
  assert.match(sceneryMessage('mountains', { night: true }), /neutral test ground/);
});
