import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';

const html=readFileSync(new URL('../index.html',import.meta.url),'utf8');
const context={window:{}};
vm.runInNewContext(readFileSync(new URL('../assets/market-catalog.js',import.meta.url),'utf8'),context);
vm.runInNewContext(html.slice(html.indexOf('function catalogueBodyStatus('),html.indexOf('function renderModCards(')),context);
const products=context.window.JIMNY_MARKET_PRODUCTS;

test('selected-body catalogue excludes known incompatible products, not unresolved fitment',()=>{
 for(const body of ['3door','5door']){
  const visible=products.filter(p=>context.catalogueScopeMatches(p,body,'current','all','IN'));
  assert.ok(visible.length>100);
  assert.ok(visible.every(p=>!p.bodyStyles.length||p.bodyStyles.includes(body)));
  assert.equal(visible.filter(p=>!p.bodyStyles.length).length,products.filter(p=>!p.bodyStyles.length).length);
  assert.equal(visible.length,products.length-products.filter(p=>p.bodyStyles.length&&!p.bodyStyles.includes(body)).length);
  assert.equal(products.filter(p=>context.catalogueScopeMatches(p,body,'all','all','IN')).length,products.length);
 }
});

test('local-country filter uses supplier market codes and cannot claim unknown country as local',()=>{
 for(const country of ['IN','AU','ZA','JP','ID','GB']){
  const local=products.filter(p=>context.catalogueScopeMatches(p,'5door','all','local',country));
  assert.ok(local.length>0,country);
  assert.ok(local.every(p=>p.countryCode===country));
 }
 assert.equal(context.catalogueScopeMatches({bodyStyles:[]},'5door','all','local','BR'),false);
});

test('research-only or incompatible records never offer empty 3D actions',()=>{
 for(const p of products.filter(p=>!p.visual))for(const body of ['3door','5door'])assert.equal(context.cataloguePreviewKind(p,body),'research-only');
 const restricted={visual:'rack',previewKind:'representative',bodyStyles:['5door']};
 assert.equal(context.cataloguePreviewKind(restricted,'3door'),'research-only');
 assert.equal(context.cataloguePreviewKind(restricted,'5door'),'representative');
 assert.match(context.catalogueFitmentLabel({bodyStyles:[]},'5door'),/unconfirmed/);
 assert.match(context.catalogueFitmentLabel(restricted,'3door'),/Different body/);
 assert.match(html,/preview!=='research-only'\?`<button/);
 assert.match(html,/Stock can change/);
 assert.match(readFileSync(new URL('../assets/catalogue-ui.js',import.meta.url),'utf8'),/Include other body styles/);
});
