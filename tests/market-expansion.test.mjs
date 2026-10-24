import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
const context={window:{}};
vm.runInNewContext(readFileSync(new URL('../assets/market-catalog.js',import.meta.url),'utf8'),context);
const products=context.window.JIMNY_MARKET_PRODUCTS;
const newModelFamilies={market_skinny_backbone:'skinnyjim_backbone',market_skinny_jerry:'skinnyjim_jerry_tray',market_suzuki_nomade_flatrack:'suzuki_nomade_flatrack',market_suzuki_nomade_steelwheel:'suzuki_nomade_steelwheel'};
const sharedNomadeSource='https://www.suzuki.co.jp/accessory_car/jimny_nomade-accessory.html';
const nomadeSourceKeys={market_suzuki_nomade_grille:'nomade-black-front-grille',market_suzuki_nomade_steelwheel:'nomade-15x5.5j-steel-wheel',market_suzuki_nomade_flatrack:'nomade-flat-roof-rack',market_suzuki_nomade_nostalgic:'nomade-nostalgic-line-decals'};
// Original saved-build selection IDs must survive editorial expansions.
const originalIds=["market_9391581561057","market_9392162734305","market_9391558066401","market_9526256959713","market_8596313309409","market_9549807026401","market_9319614152929","market_9503295668449","market_9404366979297","market_8665904644321","market_8664109088993","market_8665908052193","market_8566320136417","market_8566347104481","market_5572765221031","market_5573463048359","market_9404357935329","market_5424161095847","market_9404357181665","market_9471887311073","market_7877504172257","market_7565731397857","market_5062198722697","market_7565606781153","market_8670080237793","market_8910724006113","market_10339998204129","market_8087496753377","market_8509619044577","market_8239351267553","market_5054541496457","market_9377044693217","market_9377043808481","market_7659525505249","market_7659687805153","market_8211684491489","market_8211683246305","market_7343172255969","market_9654211346657","market_9666733342945","market_8689606459617","market_9426067718369","market_4569208651913","market_4454478184585","market_6579106939047","market_9404365865185","market_8955279868129","market_9696004767969","market_8031550144737","market_9026247786721","market_7602843713761","market_8883947700449","market_8883947372769","market_8883949076705","market_9077797257441","market_8724307345633","market_prad_9879039934763","market_prad_9960612561195","market_prad_9405526278443","market_prad_9997516177707","market_prad_9405561635115","market_prad_9405420110123","market_prad_10017480016171","market_dd_work","market_stedi_spot","market_stedi_flood","market_dd_fog","market_dd_dual","market_lazer750","market_baja_sport"];

test('market expansion at least triples genuine product records without duplicate IDs or URLs',()=>{
 assert.ok(products.length>=210);
 assert.equal(new Set(products.map(p=>p.id)).size,products.length);
 // Suzuki publishes these four distinct products on one real catalogue page;
 // don't invent URL fragments merely to satisfy deduplication.
 const singlePage=products.filter(p=>p.url===sharedNomadeSource);
 assert.equal(singlePage.length,4);
 for(const p of singlePage)assert.equal(p.sourceProductKey,nomadeSourceKeys[p.id],p.id);
 assert.equal(new Set(products.filter(p=>p.url!==sharedNomadeSource).map(p=>p.url)).size,products.length-4);
 assert.equal(new Set(products.map(p=>`${p.url}|${p.sourceProductKey||''}`)).size,products.length);
 for(const id of originalIds)assert.ok(products.some(p=>p.id===id),`Lost saved selection ${id}`);
 for(const category of ['Wheels','Suspension','Protection','Lighting','Roof & carrying','Interior','Camping & storage'])assert.ok(products.filter(p=>p.category===category).length>=15,category);
 for(const country of ['IN','AU','ZA','JP','ID','GB'])assert.ok(products.some(p=>p.countryCode===country),country);
});

test('every market item distinguishes seller evidence, body scope and preview fidelity',()=>{
 for(const p of products){
  assert.equal(new URL(p.url).protocol,'https:');
  assert.ok(/^\d{4}-\d{2}-\d{2}$/.test(p.checked));
  assert.ok(['available','unavailable','unknown'].includes(p.stockAtCheck),p.id);
  assert.ok(Array.isArray(p.bodyStyles));
  assert.ok(p.bodyStyles.every(body=>['3door','5door'].includes(body)),p.id);
  assert.ok(['representative','reference-guided','research-only'].includes(p.previewKind));
  assert.equal(p.previewKind==='research-only',!p.visual,p.id);
  assert.ok(p.fitment.includes('Confirm')||p.fitment.includes('confirm')||p.fitment.includes('Select'),p.id);
  assert.ok(!p.image&&!p.photo,'Seller image rights have not been licensed');
 }
});

test('new imports are distinct current-generation product listings rather than synthetic options',()=>{
 const added=products.filter(p=>!originalIds.includes(p.id));
 assert.ok(added.length>=140);
 assert.ok(added.filter(p=>!newModelFamilies[p.id]).every(p=>p.visual===null&&p.previewKind==='research-only'));
 for(const [id,visual] of Object.entries(newModelFamilies)){
  const p=products.find(p=>p.id===id);assert.ok(p,id);assert.equal(p.visual,visual);assert.equal(p.previewKind,'representative');
 }
 assert.ok(added.every(p=>!/(Keychain|Jibbits|Gift Card|Catless|No Catalytic Converter|GEN3|2005-2017)/i.test(p.name)));
 const apioRack=products.find(p=>p.id==='market_apio_3630_03w');
 assert.deepEqual(Array.from(apioRack.bodyStyles),['3door']);
 const indonesianGrille=products.find(p=>p.id==='market_sga_72110_78r01');
 assert.deepEqual(Array.from(indonesianGrille.bodyStyles),[],'Unconfirmed body fitment must not be invented');
 assert.equal(indonesianGrille.stockAtCheck,'unknown');
});
