import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
function data(saved){const context={window:{},localStorage:{getItem:()=>saved}};vm.runInNewContext(readFileSync(new URL('../assets/regions.js',import.meta.url),'utf8'),context);return context.window;}
test('ten explicit markets with local sellers and safe saved-region fallback',()=>{
 const d=data('not-a-country');assert.equal(d.JIMNY_REGIONS.length,10);assert.equal(d.jimnyRegion,'IN');assert.equal(data('AU').jimnyRegion,'AU');
 assert.equal(data('ID').jimnyRegion,'ID');assert.equal(data('BR').jimnyRegion,'BR');
 for(const r of d.JIMNY_REGIONS.filter(r=>r.code!=='IN'))assert.ok(d.JIMNY_REGIONAL_STORES.some(s=>s.country===r.code),r.code);
 assert.equal(new Set(d.JIMNY_REGIONAL_STORES.map(s=>s.id)).size,d.JIMNY_REGIONAL_STORES.length);
});
test('new-country resources distinguish official support from verified custom fitting',()=>{
 const d=data();
 for(const country of ['ID','BR']){
  assert.ok(d.JIMNY_REGIONAL_STORES.some(s=>s.country===country&&s.checked==='2026-10-21'));
  const support=d.JIMNY_REGIONAL_SHOPS.filter(s=>s.country===country);
  assert.ok(support.length);assert.ok(support.every(s=>s.type==='service'&&s.directory));
 }
 assert.ok(d.JIMNY_REGIONS.find(r=>r.code==='BR').note.includes('older'));
 assert.ok(d.JIMNY_CLUBS.some(c=>c.country==='ID'&&c.url==='https://skinindonesia.or.id/'));
});
test('Himachal dealer resources are never mislabelled as custom modification fitters',()=>{
 const hp=data().JIMNY_REGIONAL_SHOPS.filter(s=>s.region==='Himachal Pradesh');
 const dealers=hp.filter(s=>s.name.includes('NEXA'));assert.equal(dealers.length,3);
 assert.ok(dealers.every(s=>s.type==='service'));assert.ok(dealers.some(s=>s.city.includes('Shimla')));assert.ok(dealers.some(s=>s.city.includes('Solan')));
 const mandi=hp.find(s=>s.name.includes('Autosmith'));assert.ok(mandi);
 assert.equal(mandi.role,'product-fitting-contact');assert.equal(mandi.type,'unverified');
 assert.match(mandi.desc,/not suspension or fabrication expertise/);assert.match(mandi.web,/windbooster\.in\/partner-network/);
});
test('new directory entries have distinct first-party links, roles and verification dates',()=>{
 const d=data();const all=[...d.JIMNY_REGIONAL_STORES,...d.JIMNY_REGIONAL_SHOPS,...d.JIMNY_CLUBS];
 const additions=all.filter(x=>x.checked==='2026-10-22');assert.equal(additions.length,13);
 const countries=new Set(d.JIMNY_REGIONS.map(x=>x.code));
 const canonical=x=>{const u=new URL(x.web||x.url);return `${u.hostname.replace(/^www\./,'')}${u.pathname.replace(/\/$/,'')}`;};
 for(const x of additions){
  assert.ok(countries.has(x.country),x.name);assert.ok(x.desc.length>70,x.name);
  assert.equal(all.filter(y=>canonical(y)===canonical(x)).length,1,x.name);
  assert.ok(x.role||x.kind,x.name);
 }
 const hype=d.JIMNY_REGIONAL_STORES.find(x=>x.id==='jimnyhype');assert.equal(hype.role,'online-supplier');
 assert.match(hype.desc,/does not offer installation/);assert.ok(!d.JIMNY_REGIONAL_SHOPS.some(x=>/jimnyhype/i.test(x.name)));
 for(const id of ['jaos','4x4engineering'])assert.equal(d.JIMNY_REGIONAL_STORES.find(x=>x.id===id).role,'manufacturer');
 for(const x of d.JIMNY_REGIONAL_SHOPS.filter(x=>x.checked==='2026-10-22'&&x.role==='installer')){
  assert.equal(x.type,'verified');assert.ok(x.q);assert.ok(x.region);
 }
 assert.ok(d.JIMNY_CLUBS.some(x=>x.area==='New South Wales'));
 assert.ok(d.JIMNY_CLUBS.some(x=>x.area==='Victoria'));
 assert.equal(d.JIMNY_CLUBS.find(x=>x.name.startsWith('Team-BHP')).kind,'Owner forum');
});
test('resources use direct HTTPS websites and identify directories, not invented addresses',()=>{
 const d=data();for(const x of [...d.JIMNY_REGIONAL_STORES,...d.JIMNY_REGIONAL_SHOPS,...d.JIMNY_CLUBS])assert.equal(new URL(x.web||x.url).protocol,'https:');
 assert.ok(d.JIMNY_REGIONAL_SHOPS.filter(s=>s.directory).every(s=>!s.q));
 assert.ok(d.JIMNY_CLUBS.some(s=>s.country==='AU'));assert.ok(d.JIMNY_CLUBS.some(s=>s.country==='IN'));
});
