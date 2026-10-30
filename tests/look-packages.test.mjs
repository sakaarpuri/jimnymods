import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
const context={window:{}};for(const name of ['market-catalog','interior-products','look-packages'])vm.runInNewContext(readFileSync(new URL(`../assets/${name}.js`,import.meta.url),'utf8'),context);
const looks=context.window.JIMNY_LOOK_PACKAGES,products=context.window.JIMNY_MARKET_PRODUCTS;
test('twenty original looks each define paint, full style and a purposeful parts package',()=>{
 assert.equal(looks.length,20);assert.equal(new Set(looks.map(p=>p.id)).size,20);assert(new Set(looks.map(p=>p.colour)).size>=15);
 for(const p of looks){assert.match(p.colour,/^#[0-9a-f]{6}$/);assert(p.name&&p.tag);assert(p.parts.length>=4);assert(p.design.finish&&p.design.grille&&p.design.decal&&p.design.wheelFinish&&p.design.tyreType&&p.design.cabin);assert(!p.parts.includes('grille'),'grille style belongs in design, not duplicate part');}
 for(const id of ['urban','overland','retro','stealth','classic','future'])assert(looks.some(p=>p.id===id));
 assert(looks.filter(p=>p.design.finish==='twotone').length>=3);
});
test('new interior listings distinguish body compatibility, original geometry and unconfirmed stock',()=>{
 const ids=['mod_reardoor_molle','mod_halfmolly_5door','exploresetups_drawer_5door'];
 for(const id of ids){const p=products.find(p=>p.id===id);assert(p);assert.equal(p.visual,id);assert.equal(p.previewKind,'reference-guided');assert.equal(p.stockAtCheck,'unknown');assert.equal(new URL(p.url).protocol,'https:');assert(!p.photo&&!p.image);}
 for(const id of ids.slice(1))assert.deepEqual(Array.from(products.find(p=>p.id===id).bodyStyles),['5door']);
 assert.match(products.find(p=>p.id===ids[2]).fitment,/false-floor/);
});
test('ready-made builds differ in silhouette, graphics, roof treatment and interior fabric',()=>{
 assert.equal(new Set(looks.map(p=>p.vibe)).size,20);
 assert(new Set(looks.map(p=>p.parts.slice().sort().join(','))).size===20);
 assert(new Set(looks.map(p=>p.design.decal)).size>=17);
 const contrasts=looks.filter(p=>p.design.finish==='twotone');assert(contrasts.length>=4);assert(new Set(contrasts.map(p=>p.design.roofColour)).size>=4);
 assert(looks.some(p=>p.parts.includes('rtt'))&&looks.some(p=>p.parts.includes('touring'))&&looks.some(p=>p.parts.includes('winch')));
 assert(looks.some(p=>p.design.seatFabric==='houndstooth')&&looks.some(p=>p.design.seatFabric==='leather'));
});
