import { test } from 'node:test';
import assert from 'node:assert/strict';
import { QUALITY, detectQuality } from '../src/quality.js';

test('phones, touch-first and slow devices get the light tier', () => {
  assert.equal(detectQuality({ width: 1440 }).id, 'high');
  assert.equal(detectQuality({ width: 390 }).id, 'low');
  assert.equal(detectQuality({ width: 1440, coarsePointer: true }).id, 'low');
  assert.equal(detectQuality({ width: 1440, deviceMemory: 4 }).id, 'low');
  assert.equal(detectQuality({ width: 1440, cores: 4 }).id, 'low');
  assert.equal(detectQuality({ width: 390, override: 'high' }).id, 'high');
  assert.equal(detectQuality({ width: 1440, override: 'bogus' }).id, 'high');
});
test('the light tier is cheaper on every axis', () => {
  const { high, low } = QUALITY;
  assert.equal(low.hdri, '2k');assert.equal(high.hdri, '4k');
  assert.equal(low.ambientOcclusion, false);
  assert.ok(low.shadowMapSize < high.shadowMapSize && low.contactResolution < high.contactResolution && low.maxPixelRatio < high.maxPixelRatio);
});
