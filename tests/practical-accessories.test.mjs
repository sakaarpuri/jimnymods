import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
import {Box3,Group,Vector3} from 'three';
import {practicalAccessory,PRACTICAL_PARTS} from '../src/practical-accessories.js';
import {accessoryBuilder,accessoryMaterials} from '../src/accessories.js';
import {createSurfaceStyler} from '../src/surface-finishes.js';
const mats=accessoryMaterials();
const builder=(body='5door')=>{const rig=new Group();return {rig,build:accessoryBuilder({accessoryRig:rig,mats,modelBody:body,detailed:null,colour:'#aaa',effectiveDesign:{},lampEmitters:{}})};};
test('practical accessories retain real source, dimension and fitment disclosures',()=>{
 assert.equal(Object.keys(PRACTICAL_PARTS).length,20);
 for(const [id,p]of Object.entries(PRACTICAL_PARTS)){assert.equal(p.visual,id);assert.match(p.url,/^https:\/\//);assert.equal(p.stockAtCheck,'unknown');assert.equal(p.checked,'2026-10-23');assert(p.fitment.length>100);assert.equal(p.previewKind,'reference-guided');assert.equal(p.size===null||p.size.length===3,true);}
 assert.deepEqual(PRACTICAL_PARTS.jimsa_tiedowns.bodyStyles,['3door']);assert.deepEqual(PRACTICAL_PARTS.fr_fuelcan20.bodyStyles,['5door']);
 assert.match(PRACTICAL_PARTS.fr_fuelcan20.fitment,/NEVER.*cabin/);assert.match(PRACTICAL_PARTS.fr_watercan20.fitment,/WATER ONLY/);
 assert.deepEqual(PRACTICAL_PARTS.fr_fuelcan20.requires,['fr_slimline2','fr_jerry_holder']);
});
test('new cabin models use open storage geometry, correct transmission scope and net mounting dependencies',()=>{
 assert.equal(PRACTICAL_PARTS.armoro_console_organizer.transmission,'AT');assert.equal(PRACTICAL_PARTS.maruti_at_mats.transmission,'AT');assert.deepEqual(PRACTICAL_PARTS.exea_phone_mount.bodyStyles,['3door']);
 const {rig,build}=builder();assert(!build(new Set(['exea_roof_net']),{}).includes('exea_roof_net'));assert(build(new Set(['exea_roof_net','exea_utility_bars']),{}).includes('exea_roof_net'));
 const models={cup:practicalAccessory('exea_cupholder',mats),pouch:practicalAccessory('armoro_console_organizer',mats),net:practicalAccessory('exea_roof_net',mats),mats:practicalAccessory('maruti_at_mats',mats)};
 assert(models.cup.getObjectByName('Open bottle retaining ring'));assert(models.pouch.getObjectByName('Bound pocket opening'));assert(models.net.getObjectByName('Adjustable corner strap'));assert(models.mats.getObjectByName('Mat retaining clip'));
 assert(new Box3().setFromObject(models.net).min.y>1.50);assert(new Box3().setFromObject(models.pouch).max.y<.92);build(new Set(),{});assert.equal(rig.children.length,0);
});
test('every practical model creates finite bounded geometry with usable surface target',()=>{
 for(const [id,p]of Object.entries(PRACTICAL_PARTS))for(const body of p.bodyStyles){
  const g=practicalAccessory(id,mats,{body});assert.equal(g.userData.finishTarget,id);assert.equal(g.userData.cataloguePart.id,id);let triangles=0;
  g.traverse(o=>{if(o.geometry){for(const n of o.geometry.attributes.position.array)assert(Number.isFinite(n),id);triangles+=(o.geometry.index?.count||o.geometry.attributes.position.count)/3;}});
  const b=new Box3().setFromObject(g),s=b.getSize(new Vector3());assert(s.length()>.03,id);assert(triangles<16000,id+' too heavy');assert(b.min.y>.68,id+' below cabin floor');
 }
 assert.equal(practicalAccessory('fr_fuelcan20',mats,{body:'3door'}),null);
});
test('can and carrier have distinct bodies with visible handles, stamps and latch',()=>{
 const fuel=practicalAccessory('fr_fuelcan20',mats),holder=practicalAccessory('fr_jerry_holder',mats),water=practicalAccessory('fr_watercan20',mats);
 assert(fuel.getObjectByName('Triple carry handle'));assert(fuel.getObjectByName('Cap locking pin'));assert(holder.getObjectByName('Stainless safety catch'));assert(water.getObjectByName('Water tap lever'));
 const b=new Box3().setFromObject(fuel);assert(b.min.y>1.86,'Fuel must be external on rack');assert(b.max.y<2.24,'Can should lie on its narrow side, not tower vertically');
 assert(new Box3().setFromObject(water).max.y<1.20,'Water cargo sits low');
});
test('builder refuses unsupported can placement and avoids overlapping storage systems',()=>{
 const {rig,build}=builder();assert.deepEqual(build(new Set(['fr_fuelcan20']),{}),[]);assert.deepEqual(build(new Set(['fr_jerry_holder']),{}),[]);
 let visible=build(new Set(['fr_fuelcan20','fr_jerry_holder','fr_slimline2']),{});assert(visible.includes('fr_fuelcan20'));assert(visible.includes('fr_jerry_holder'));
 visible=build(new Set(['fr_fuelcan20','fr_jerry_holder','fr_slimline2','rtt']),{});assert(!visible.includes('fr_fuelcan20'));assert(!visible.includes('fr_jerry_holder'));
 visible=build(new Set(['fr_watercan20','touring']),{});assert(!visible.includes('fr_watercan20'));
 visible=build(new Set(['fr_watercan20','arb_airkit','arb_repairkit']),{});assert(visible.includes('arb_airkit'));const water=new Box3().setFromObject(rig.getObjectByName('fr_watercan20')),air=new Box3().setFromObject(rig.getObjectByName('arb_airkit'));assert(!water.intersectsBox(air),'Water can and compressor need separate cargo slots');
 build(new Set(),{});assert.equal(rig.children.length,0);
});
test('new stored equipment rises onto selected drawer, owned fabrics dispose once and finish styles restore',()=>{
 const {rig,build}=builder();build(new Set(['armoro_seat_organizer','fr_wolfpack','drawer']),{});
 const box=rig.getObjectByName('fr_wolfpack');assert(new Box3().setFromObject(box).min.y>.91,'Box must not intersect drawer');
 let geometry=0,materials=0,disposedGeometry=0,disposedMaterial=0;rig.traverse(o=>{if(o.geometry){geometry++;o.geometry.addEventListener('dispose',()=>disposedGeometry++);}for(const m of o.userData.ownedMaterials||[]){materials++;m.addEventListener('dispose',()=>disposedMaterial++);}});
 const style=createSurfaceStyler(),summary=style.apply([rig],{allBlack:true,partFinishes:{fr_wolfpack:'matte'}});assert(summary.targets.includes('fr_wolfpack'));style.clear();
 build(new Set(),{});assert.equal(disposedGeometry,geometry);assert.equal(disposedMaterial,materials);
});
test('catalogue enhances existing source listings without duplicate entries',()=>{
 const context={window:{}};context.globalThis=context;for(const path of ['assets/market-catalog.js','assets/practical-accessories-data.js','assets/interior-products.js'])vm.runInNewContext(readFileSync(new URL('../'+path,import.meta.url),'utf8'),context);
 const products=context.window.JIMNY_MARKET_PRODUCTS;assert.equal(products.filter(p=>p.visual==='jimsa_dash_tray').length,1);assert.equal(products.filter(p=>p.id==='jimsa_dash_tray').length,0);assert.equal(products.find(p=>p.id==='market_4454478184585').visual,'kap_fire');assert.equal(new Set(products.map(p=>p.id)).size,products.length);
});
