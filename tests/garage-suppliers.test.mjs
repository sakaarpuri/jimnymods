import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
const html=readFileSync(new URL('../index.html',import.meta.url),'utf8'),css=readFileSync(new URL('../design.css',import.meta.url),'utf8');
const supplierFn=html.match(/function partSupplierOptions\([^]*?\n\}/)[0];
function fixture(body='5door'){
 const generic={id:'rack',name:'Rack idea',in:[['Indian supplier','https://india.test/']],intl:[]};
 const local={id:'local-rack',name:'Named local rack',seller:'Local maker',market:true,visual:'rack',countryCode:'IN',bodyStyles:['5door'],url:'https://india.test/products/exact-rack',in:[['Local maker','https://india.test/products/exact-rack']],intl:[]};
 const overseas={...local,id:'au-rack',name:'Australian rack',countryCode:'AU',bodyStyles:['3door','5door'],url:'https://au.test/products/rack',in:[],intl:[['AU maker','https://au.test/products/rack']]};
 const mods=[generic,overseas,local],context=vm.createContext({URL,MODS:mods,modById:Object.fromEntries(mods.map(m=>[m.id,m])),bodyStyle:body,window:{jimnyRegion:'IN'},designState:{},designOption:()=>null,ONLINE_STORES:[{name:'Indian supplier',match:['india.test'],country:'IN',coverage:'India'}],partFamily:id=>mods.find(m=>m.id===id)?.visual||id,catalogueBodyStatus:(p,b)=>p.bodyStyles?.includes(b)?'listed':'incompatible'});
 vm.runInContext(supplierFn,context);return context;
}
test('generic selected part gets contextual product alternatives without mislabelling an exact SKU',()=>{
 const c=fixture(),r=vm.runInContext('partSupplierOptions("rack")',c);
 assert.equal(r.title,'Rack idea');assert(r.rows.some(r=>r.kind==='supplier'));assert.equal(r.rows.filter(r=>r.kind==='alternative').length,2);assert(!r.rows.some(r=>r.kind==='selected-product'));
 assert.equal(r.rows.find(r=>r.kind==='alternative').country,'IN');
});
test('selected product retains its exact URL and different-body alternatives are excluded',()=>{
 const c=fixture(),r=vm.runInContext('partSupplierOptions("local-rack")',c);
 assert.equal(r.rows.length,1);assert.equal(r.rows[0].url,'https://india.test/products/exact-rack');assert.equal(r.rows[0].kind,'selected-product');
 const swb=vm.runInContext('partSupplierOptions("rack")',fixture('3door'));
 assert(!swb.rows.some(r=>r.product?.id==='local-rack'));assert(swb.rows.some(r=>r.product?.id==='au-rack'));
});
test('selected tray reserves height and preserves scroll while part drawer opens from the garage',()=>{
 assert.match(css,/\.garage-selection-tray\{flex:0 0 auto/);assert.match(css,/\.garage-selection-tray \.garage-chips\{[^}]*overflow:auto/);
 assert.match(html,/chips\.scrollTop=top;chips\.scrollLeft=left/);assert.match(html,/if\(partSource\)\{openPartSuppliers\(partId\);return;\}/);
 assert.match(html,/if\(renderedGarageChips!==chipMarkup\)/);assert(!html.includes('chips.innerHTML!==chipMarkup'),'DOM serialisation must not trigger a chip rebuild every second');
 assert.match(html,/function openPartSuppliers\(partId='',group=''\)\{window\.JimnyPartDrawer\?\.open\(\{partId,group\}\);\}/);assert(!html.includes('partSupplierDialog'));assert.match(html,/data-source-design/);assert.match(html,/data-remove-part/);
});
test('tyre tread selection is distinct from wheel finish and saved safely',()=>{
 assert.match(html,/\['highway','allterrain','mudterrain'\]/);assert.match(html,/data-tyre-choice/);assert.match(html,/cleanDesign\.tyreType=/);
 const wheel=html.match(/const wheel=e\.target\.closest\('\[data-wheel-choice\]'\);[^]*?return;\}/)[0];
 assert(!wheel.includes('setPartSelection'));assert(wheel.includes('designState.wheelFinish'));
 assert.match(html,/tyreType:'highway'/);
});
test('tyre choices use matching-body rendered images with labels below and honest size notes',()=>{
 assert.match(html,/studioPreviewPath\('tyre-'\+id\)/);
 assert.match(html,/data-tyre-choice="\$\{id\}"[^]*?<img[^]*?<strong>\$\{name\}<\/strong>/);
 assert(!html.includes('Preview diameter stays the same'));
 assert.match(html,/736 mm versus 693 mm/);assert.match(html,/Game grip and handling remain stock/);
 assert.match(css,/\.tyre-type-options img\{display:block;width:100%;height:auto/);
});
