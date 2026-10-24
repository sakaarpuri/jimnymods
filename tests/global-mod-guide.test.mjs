import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
const context={window:{}};
for(const file of ['market-catalog.js','interior-products.js','global-mod-guide.js'])vm.runInNewContext(readFileSync(new URL(`../assets/${file}`,import.meta.url),'utf8'),context);
const products=context.window.JIMNY_MARKET_PRODUCTS, guide=context.window.JIMNY_GLOBAL_MOD_GUIDE;
context.URL=URL;
vm.runInNewContext(readFileSync(new URL('../assets/mod-guide-ui.js',import.meta.url),'utf8'),context);
const ui=context.window.JIMNY_MOD_GUIDE_UI;
test('upholstery sources do not pretend research listings are exact 3D models or interchangeable bodies',()=>{
 const damd=products.find(p=>p.id==='damd_thegear_seats_3door'),escape=products.find(p=>p.id==='escapegear_seatcovers_5door');
 assert.deepEqual(Array.from(damd.bodyStyles),['3door']);assert.match(damd.fitment,/excludes Nomade/);
 assert.deepEqual(Array.from(escape.bodyStyles),['5door']);
 for(const p of [damd,escape]){assert.equal(p.visual,null);assert.equal(p.previewKind,'research-only');assert.equal(p.stockAtCheck,'unknown');}
 const cabin=guide.categories.find(c=>c.id==='cabin');assert.match(cabin.coverage,/not completed 3D replicas/);
 assert(ui.filterCategories(guide.categories,'door-card',products).includes(cabin));
});

test('global guide provides twenty-four traceable categories including whole build projects',()=>{
 assert.equal(guide.categories.length,24);
 assert.equal(new Set(guide.categories.map(c=>c.id)).size,24);
 assert.match(guide.methodology,/not a sales ranking/i);
 for(const c of guide.categories){
  assert.ok(['high','medium'].includes(c.evidence),c.id);
  assert.ok(['P0','P1','P2','info'].includes(c.priority));
  assert.ok(c.variants.length>=2&&c.coverage&&c.gap,c.id);
  assert.ok(c.sources.length>=1,c.id);
  if(c.evidence==='high')assert.ok(new Set(c.sources.map(s=>new URL(s.url).hostname)).size>=2,c.id);
  for(const s of c.sources){assert.equal(new URL(s.url).protocol,'https:');assert.ok(s.label);}
  for(const id of c.productIds)assert.ok(products.some(p=>p.id===id),`${c.id}: ${id}`);
 }
});

test('regional additions retain uncertainty and measured model constraints',()=>{
 const added=products.filter(p=>p.checked==='2026-10-22');
 assert.ok(added.length>=17);
 for(const p of added){assert.equal(p.stockAtCheck,'unknown',p.id);assert.equal(p.price,undefined);assert.equal(p.mrp,undefined);assert.ok(!p.image&&!p.photo);}
 for(const code of ['JP','NZ','IN','GB','CL'])assert.ok(added.some(p=>p.countryCode===code),code);
 const find=id=>products.find(p=>p.id===`market_${id}`);
 assert.deepEqual(Array.from(find('suzuki_nomade_flatrack').bodyStyles),['5door']);
 assert.equal(find('suzuki_nomade_flatrack').dimensions.lengthMm,1509);
 assert.equal(find('skinny_backbone').dimensions.doorClearanceMm,112);
 assert.deepEqual(Array.from(find('skinny_jerry').requiresVisual),['skinnyjim_backbone']);
 assert.deepEqual(Array.from(find('stl_retro_grille').bodyStyles),[]);
 assert.deepEqual(Array.from(find('onlyjeep_snorkel').bodyStyles),[]);
 assert.deepEqual(Array.from(find('curbover_breather').bodyStyles),[]);
 assert.deepEqual(Array.from(find('apio_nomade_stripes').bodyStyles),['5door']);
});

test('guide search matches variants, regions and product names with all query terms',()=>{
 assert.ok(ui.filterCategories(guide.categories,'pressed steel',products).some(c=>c.id==='wheel-shapes'));
 assert.ok(ui.filterCategories(guide.categories,'New Zealand cargo',products).some(c=>c.id==='rear-carriers'));
 assert.ok(ui.filterCategories(guide.categories,'India cladding',products).some(c=>c.id==='cladding'));
 assert.equal(ui.filterCategories(guide.categories,'nonexistent-zqx',products).length,0);
 assert.equal(ui.filterCategories(guide.categories,'   ',products).length,24);
});

test('category rendering escapes editorial text and rejects unsafe source URLs',()=>{
 const category={id:'x" onfocus="bad',title:'<img src=x onerror=bad>',variants:['<script>bad</script>'],sources:[{label:'Unsafe',url:'javascript:alert(1)'},{label:'Good <source>',url:'https://example.com/path'}],coverage:'Coverage',gap:'Gap',evidence:'medium',productIds:['sample']};
 const html=ui.renderCategory(category,guide,[{id:'sample',name:'A < B',region:'Test',visual:null}],true);
 assert.ok(!html.includes('<img'));assert.ok(!html.includes('<script>'));assert.ok(!html.includes('javascript:'));
 assert.match(html,/&lt;img/);assert.match(html,/data-source-part="sample"/);assert.match(html,/Research listing/);
 assert.match(html,/rel="noopener noreferrer"/);assert.match(html,/name="global-mod-categories" open/);
 assert.ok(!html.includes('data-part-preview'),'The guide must not silently fit items or offer unimplemented previews');
});

test('guide progresses from six categories to all; search, clear and teardown work',()=>{
 function node(){return{value:'',hidden:false,textContent:'',innerHTML:'',attrs:{},events:new Map(),addEventListener(n,fn){this.events.set(n,fn);},removeEventListener(n){this.events.delete(n);},setAttribute(n,v){this.attrs[n]=v;},focus(){this.focused=true;},querySelectorAll(){return[];}};}
 const search=node(),list=node(),status=node(),more=node(),clear=node();
 const nodes={'#globalModGuideSearch':search,'#globalModGuideResults':list,'#globalModGuideStatus':status,'[data-guide-more]':more,'[data-guide-clear]':clear};
 const host={innerHTML:'',querySelector:s=>nodes[s]};
 const dispose=ui.mount(host,{guide,products});
 const count=()=>[...list.innerHTML.matchAll(/<details /g)].length;
 assert.equal(count(),6);assert.equal(more.hidden,false);assert.equal(clear.hidden,true);
 more.events.get('click')();assert.equal(count(),24);assert.equal(more.attrs['aria-expanded'],'true');
 search.value='not-found-zqx';search.events.get('input')();assert.equal(count(),0);assert.match(list.innerHTML,/No matching/);assert.equal(more.hidden,true);
 clear.events.get('click')();assert.equal(count(),24);assert.equal(search.focused,true);
 more.events.get('click')();assert.equal(count(),6);
 search.value='New Zealand';search.events.get('input')();assert.ok(count()>0&&count()<20);assert.equal(clear.hidden,false);
 dispose();assert.equal(search.events.size,0);assert.equal(more.events.size,0);assert.equal(list.events.size,0);
});

test('missing guide data produces an honest fallback instead of an empty tool',()=>{
 const host={textContent:''};const dispose=ui.mount(host,{guide:null,products:[]});
 assert.match(host.textContent,/unavailable/);assert.match(host.textContent,/Parts/);assert.equal(typeof dispose,'function');
});
