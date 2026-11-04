import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {readFileSync} from 'node:fs';

function media(photos){const window={JIMNY_PRODUCT_PHOTOS:photos};vm.runInNewContext(readFileSync(new URL('../assets/product-media.js',import.meta.url),'utf8'),{window});return window.JimnyProductMedia;}
test('shared-body supplier photos do not masquerade as a three-door image',()=>{
 const photo={local:'shared.webp'},m=media({shared:photo}),part={id:'shared',bodyStyles:['3door','5door']};
 assert.equal(m.photoFor(part,'3door'),null);assert.equal(m.photoFor(part,'5door'),photo);
});
test('a single-body product photo remains available for that exact body',()=>{
 const photo={local:'three-door.webp'},m=media({short:photo});
 assert.equal(m.photoFor({id:'short',bodyStyles:['3door']},'3door'),photo);
 assert.equal(m.photoFor({id:'short',bodyStyles:[]},'3door'),null);
});
test('a maker range picture cannot inherit exact-body status from a listing',()=>{
 const photo={kind:'manufacturer-range-photo'},m=media({range:photo});
 assert.equal(m.photoFor({id:'range',bodyStyles:['3door']},'3door'),null);
});
test('visually checked rack photos follow their pictured body rather than shared fitment',()=>{
 const photo={local:'arb-five-door.webp'},m=media({market_7636363641057:photo}),part={id:'market_7636363641057',bodyStyles:['3door','5door']};
 assert.equal(m.photoFor(part,'3door'),null);assert.equal(m.photoFor(part,'5door'),photo);
});
test('an isolated product can be shown without implying a pictured vehicle body',()=>{
 const photo={local:'basket.webp'},m=media({market_6813435658407:photo});
 for(const body of ['3door','5door'])assert.equal(m.photoFor({id:'market_6813435658407'},body),photo);
});
test('a pickup and roof-tent scene is excluded from the Jimny load-bar listing',()=>{
 const m=media({market_9526256959713:{local:'pickup.webp'}});
 for(const body of ['3door','5door'])assert.equal(m.photoFor({id:'market_9526256959713'},body),null);
});
