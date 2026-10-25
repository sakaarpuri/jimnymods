import test from'node:test';import assert from'node:assert/strict';import{readFileSync,existsSync}from'node:fs';import vm from'node:vm';
const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8'),html=read('index.html'),flow=read('assets/workbench-flow.js'),catalogue=read('assets/catalogue-ui.js');
test('header has primary destinations and applying a look enters editable build flow',()=>{
 const nav=read('assets/site-header.js').split('const NAV=[')[1].split('];')[0];for(const label of ['Garage','Parts','Fitters & sellers','Drive','Trip planner','Clubs','Owner tools'])assert(nav.includes(`label:'${label}'`));assert(!nav.includes('Resources'));for(const page of ['index.html','trip-planner.html','game.html'])assert.match(read(page),/<header data-site-header data-page="(garage|trip|drive)">/);assert.match(html,/jimny-look-applied/);assert.match(flow,/Customising /);assert.match(flow,/data-edit-fitted/);assert.match(flow,/\.resource-nav.*remove/);
});
test('catalogue separates product photographs, approximate models and archived source records',()=>{
 assert.match(catalogue,/Photo only/);assert.match(catalogue,/3D preview/);assert.match(catalogue,/Upgrade idea/);assert.match(catalogue,/data-source-part/);assert.match(catalogue,/market_onlyjeep_snorkel/);assert.match(catalogue,/market_baja_sport/);assert.match(catalogue,/isActive:m=>!archived\[m\.id\]/);assert.match(read('assets/welcome.js'),/JimnyCatalogue\.isActive/);assert.match(read('assets/catalogue-ui.css'),/grid-template-columns:repeat\(3,minmax\(0,1fr\)\)!important/);
});
test('photo enrichment does not create catalogue entries and all referenced photos exist',()=>{
 const context={window:{}};for(const p of ['market-catalog','practical-accessories-data','interior-products'])vm.runInNewContext(read('assets/'+p+'.js'),context);assert.equal(context.window.JIMNY_MARKET_PRODUCTS.length,344);
 const ids=new Set(context.window.JIMNY_MARKET_PRODUCTS.map(p=>p.id)),manifest=JSON.parse(read('assets/product-photos.json'));assert(Object.keys(manifest.records).length>=338);for(const[id,p]of Object.entries(manifest.records)){assert(ids.has(id));assert(existsSync(new URL('../'+p.local,import.meta.url)));assert.match(p.original,/^https:/);assert.equal(p.rights,'unverified');assert.match(p.page,/^https:/);}
});
test('owner workspace separates practical tools from optional visual research',()=>{
 const owner=read('assets/owner-workspace.js');for(const id of ['Tyre comparison','Load planner','Quotes & budget','Trip preparation'])assert(owner.includes(id));assert.match(owner,/guide.removeAttribute\('data-mode'\)/);assert.match(owner,/purpose-research/);assert.match(owner,/data-purpose-search/);assert.match(owner,/coverage is incomplete|not a count of all clubs/);assert.match(read('assets/mod-guide-ui.js'),/JimnyOwnerWorkspace.openPurpose/);
});
