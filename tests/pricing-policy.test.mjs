import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';

const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');
test('unverified supplier prices and guessed labour are not shown as build totals',()=>{
 const html=read('index.html'),catalogue=read('assets/catalogue-ui.js');
 assert.match(html,/Fitting labour<\/span><b>Unknown/);
 assert.doesNotMatch(html,/fmt\(stats\.fit(?:Lo|Hi)\)|fmt\(meta\.fit\[/);
 assert.doesNotMatch(html,/fmt\(stats\.parts(?:Lo|Hi)\)|data-inr="\$\{lo\}/);
 assert.match(catalogue,/JimnyVerifiedPrices\.get\(m\.id,window\.jimnyRegion,bodyStyle\)/);
});
test('dated exact-SKU prices are scoped, expire, and incomplete totals omit unpriced items',()=>{
 const context=vm.createContext({Intl,Date});vm.runInContext(read('assets/verified-prices.js'),context);
 const api=context.JimnyVerifiedPrices,now=Date.parse('2026-10-30T12:00:00Z');
 assert.equal(api.get('mudflaps','IN','5door',now).amount,828.5);
 assert.equal(api.get('mudflaps','IN','3door',now),null);
 assert.equal(api.get('mudflaps','AU','5door',now),null);
 assert.equal(api.get('mudflaps','IN','5door',Date.parse('2026-12-01T00:00:00Z')),null);
 const total=api.summarize([{id:'mudflaps'},{id:'visors'},{id:'rack'}],'IN','5door',1,now);
 assert.equal(total.total,2663);assert.equal(total.priced.length,2);assert.equal(total.unpriced,2);
 assert.equal(api.summarize([{id:'rack'}],'IN','5door',0,now).priced.length,0);
});
test('new text decals are unavailable but stored names can still be removed',()=>{
 const garage=read('assets/workbench-flow.js'),game=read('src/trail-game.js');
 assert.doesNotMatch(garage,/garageNameDecal|data-name-font|data-name-size/);
 assert.match(garage,/data-remove-name-decal/);
 assert.match(game,/id="playerDecal" type="checkbox" hidden/);
});
