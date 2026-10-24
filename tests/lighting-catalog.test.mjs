import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import { LIGHT_PROFILES,resolvePreviewParts,activeLightProfiles } from '../src/lighting.js';
const context={window:{}};
vm.runInNewContext(readFileSync(new URL('../assets/market-catalog.js',import.meta.url),'utf8'),context);
const products=JSON.parse(JSON.stringify(context.window.JIMNY_MARKET_PRODUCTS));
test('damaged local selections do not prevent the Garage or game loading',()=>{
  for(const value of [null,{},42,'rack'])assert.deepEqual(resolvePreviewParts(value,products),[]);
  assert.deepEqual(resolvePreviewParts(['rack',null,42,'rack'],null),['rack']);
});
test('curated catalogue has unique, dated direct product records with explicit fitment',()=>{
  assert.ok(products.length>=60);assert.equal(new Set(products.map(p=>p.id)).size,products.length);
  for(const p of products){const url=new URL(p.url);assert.equal(url.protocol,'https:');assert.ok(!url.searchParams.has('s'));assert.ok(p.name&&p.seller&&p.region&&p.note&&p.fitment);assert.match(p.checked,/^\d{4}-\d{2}-\d{2}$/);assert.equal(p.price,undefined);assert.equal(p.img,undefined);}
});
test('every product lighting preview resolves to a supported, explicitly illustrative profile',()=>{
  const lamps=products.filter(p=>p.lightProfile);assert.ok(lamps.length>=9);
  for(const p of lamps){assert.ok(LIGHT_PROFILES[p.lightProfile]);assert.deepEqual(activeLightProfiles(resolvePreviewParts([p.id],products)),[p.lightProfile]);}
  assert.ok(LIGHT_PROFILES.spot.angle<LIGHT_PROFILES.flood.angle);
  assert.ok(LIGHT_PROFILES.work.aim<0);
});
test('unmodelled products never silently become a made-up 3D part',()=>{
  const unmodelled=products.filter(p=>!p.visual);assert.ok(unmodelled.length>10);
  assert.deepEqual(resolvePreviewParts(unmodelled.map(p=>p.id),products),[]);
});
test('equivalent product previews deduplicate and stock lights have no auxiliary profile',()=>{
  const racks=products.filter(p=>p.visual==='rack').map(p=>p.id);
  assert.deepEqual(resolvePreviewParts(['rack',...racks],products),['rack']);
  assert.deepEqual(activeLightProfiles([]),[]);
  assert.deepEqual(activeLightProfiles(['pods','lamp_cube']),['combo']);
});
test('release fingerprints the market catalogue and does not fetch seller feeds at runtime',()=>{
  const html=readFileSync(new URL('../dist/index.html',import.meta.url),'utf8');
  assert.match(html,/assets\/market-catalog\.js\?v=[a-f0-9]{12}/);
  assert.ok(!html.includes('products.json'));
});
