import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {readFileSync} from 'node:fs';

const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8');
const html=read('index.html'),catalogue=read('assets/catalogue-ui.js'),drawer=read('assets/part-drawer.js'),fitters=read('assets/fitters-ui.js');
const css={catalogue:read('assets/catalogue-ui.css'),drawer:read('assets/part-drawer.css'),fitters:read('assets/fitters.css')};
const section=(from,to)=>html.slice(html.indexOf(from),html.indexOf(to));
const parts=section('<!-- ============ MODS ============ -->','<div class="source-back"');

test('Parts is search first, then one row of category pills, with a filter column and results',()=>{
 const order=['id="partSearch"','id="partFilters"','id="partsSidebar"','id="mods"'].map(s=>parts.indexOf(s));
 assert(order.every(i=>i>-1),'all four regions exist');
 assert.deepEqual(order,[...order].sort((a,b)=>a-b),'search, pills, filters, results in that order');
 assert.match(parts,/id="partsFiltersOpen"/,'phones get a Filters button');
 assert.match(catalogue,/Ships from/);assert.match(catalogue,/Show only/);assert.match(catalogue,/Can try on my car/);assert.match(catalogue,/Seller confirms/);assert.match(catalogue,/In stock at last check/);
 for(const label of ['Genuine accessories','Jimny specialists','Marketplaces'])assert(catalogue.includes(label));
});

test('the photo toggle, fitment dropdown and stacked disclaimers are gone',()=>{
 for(const gone of ['catalogueVisualScope','data-card-image','product-media-toggle','catalogueBodyScope','catalogueMarketScope','Fitment & preview details','catalogue-legend','catalog-intro','starter-picks','archived-sources'])assert(!parts.includes(gone)&&!catalogue.includes(gone),gone);
 assert(!/<div class="note" data-mode="parts">/.test(html));
 assert.equal((catalogue.match(/Listings are curated references/g)||[]).length,1,'one place explains listings; the drawer has its own single line');
});

test('cards carry an image, badge, seller, one fit line and two buttons',()=>{
 const card=catalogue.slice(catalogue.indexOf('function card(i)'),catalogue.indexOf('function decorate'));
 for(const part of ['pcard-media','pcard-badge','pcard-seller','pcard-fit','Try on car','Where to buy','data-favorite'])assert(card.includes(part),part);
 assert.match(card,/On your car/);
 assert.equal((card.match(/pcard-btn/g)||[]).length,3,'try, fitted and buy variants only');
});

test('price and fit lines use real data and never invent a price',()=>{
 const src=catalogue.slice(catalogue.indexOf('function priceText'),catalogue.indexOf('function sellerLine'));
 const context=vm.createContext({fmt:n=>'₹'+n,catalogueBodyStatus:m=>m.status,bodyStyle:'5door',escHtml:s=>String(s),esc:s=>String(s),window:{jimnyRegion:'IN'},JimnyVerifiedPrices:{get:()=>null}});
 vm.runInContext(catalogue.match(/const bodyLabels=[^\n]*/)[0],context);
 vm.runInContext(src,context);
 const price=m=>vm.runInContext('priceText',context)(m);
 for(const m of [{market:true,price:[0,0]},{market:true,price:[8000,25000]},{price:[0,0]},{price:[8000,25000]},{price:[21700,21700]}])
  assert.equal(price(m),'ask seller for current price','unverified legacy prices are withheld');
 const fit=m=>vm.runInContext('fitLine',context)(m);
 assert.match(fit({status:'listed',bodyStyles:['3door','5door'],market:true}),/Seller lists 3-door and 5-door · ask seller for current price/);
 assert.match(fit({status:'unknown',price:[8000,25000]}),/ask seller for current price · fitment: ask seller/);
 assert.match(fit({status:'unknown',market:true}),/ask seller for current price · fitment: ask seller/);
});

test('category pills are counted from the catalogue, never typed in',()=>{
 assert.match(catalogue,/live\[i\.category\]=\(live\[i\.category\]\|\|0\)\+1/);
 assert.match(catalogue,/Search \$\{base\.length\} parts and products/);
 assert(!/\b(384|56|46)\b/.test(catalogue),'no illustrative numbers from the design');
 assert.match(catalogue,/pill\('all','All',allCount\)/);
});

test('part detail is a drawer on desktop and a full screen on phones, with buying options and fitters',()=>{
 assert.match(drawer,/setAttribute\('role','dialog'\)/);assert.match(drawer,/aria-modal/);
 assert.match(drawer,/Where to buy/);assert.match(drawer,/Who can fit it/);assert.match(drawer,/data-fitters-job/);assert.match(drawer,/See all fitters/);
 assert.match(drawer,/e\.key==='Escape'/);assert.match(drawer,/trigger\.focus/);assert.match(drawer,/e\.key!=='Tab'/);
 assert.match(drawer,/Compare \$\{compare\.length\} more/);
 assert.match(css.drawer,/width:min\(620px,100vw\)/);assert.match(css.drawer,/@media\(max-width:700px\)[^]*\.pd\{width:100vw\}/);
 assert.match(css.drawer,/\.pd-actions\{position:fixed/);
 assert.match(drawer,/Listings aren’t live stock or a fitment guarantee/);
});

test('Fitters is one page with a Fitters/Sellers toggle, city pills, a build filter and a shortlist',()=>{
 const shops=section('<!-- ============ SHOPS ============ -->','<h2 id="clubs-title"');
 for(const part of ['data-fs-view="fitters"','data-fs-view="sellers"','id="shopSearch"','Workshop, city or job','id="shopCanWork"','id="shopAreas"','id="fsShortlist"','Before you book','Ask for a written, itemised quote','Ask to see similar Jimny work','Check warranty, alignment and road-legal needs'])assert(shops.includes(part),part);
 assert.match(html,/data-fs-view="sellers"[^]*id="online-sources-title"|id="online-sources-title"[^]*data-fs-view/);
 assert.match(read('assets/site-header.js'),/\{label:'Fitters & sellers',mode:'fitters',hash:'shops-title'\}/);
 assert.match(html,/const navMode=mode==='sources'\?'fitters':mode;/);
 assert.match(fitters,/Copy quote request/);assert.match(fitters,/buildQuoteRequest/);assert.match(fitters,/Paste it into a message or email to each workshop/);
 assert.match(fitters,/list work on parts in your build/);
 assert(!read('assets/workbench-flow.js').includes('directory-switch'),'the old Vendors/Fitters tabs are replaced by the toggle');
});

test('workshop cards show only what a listing says: no ratings and no phone numbers',()=>{
 const code=source=>source.replace(/\/\*[^]*?\*\//g,'');
 for(const source of [fitters,read('assets/fitter-work.js')])assert(!/rating|stars?\b|★|tel:|phone|\+91|review score/i.test(code(source)));
 assert.match(fitters,/This listing doesn’t name specific work/);
 assert.match(fitters,/fcard-tags/);assert.match(fitters,/is-hit/);
 assert.match(fitters,/try\{localStorage\.setItem\(KEY/,'shortlist storage is guarded');
});

test('new screens meet the readability floor: body text 14px or more, targets 44px or more',()=>{
 for(const [name,source] of Object.entries(css)){
  for(const m of source.matchAll(/(?:font:[^;{}]*?|font-size:)(\d+(?:\.\d+)?)px/g)){
   const rule=source.slice(Math.max(0,m.index-160),m.index);
   if(/sr-only|fav-label/.test(rule))continue;
   assert(Number(m[1])>=14,`${name}.css has ${m[0]}`);
  }
 }
 for(const selector of ['.pp-pill','.fs-pill','.pcard-btn','.pcard-save','.pd-primary','.pd-save','.fcard-short','.fcard-link','.fs-copy','.fs-more-btn','.pp-more-btn','.pp-check']){
  const all=Object.values(css).join('\n'),rule=all.match(new RegExp(selector.replace('.','\\.')+'(?:,[^{]*)?\\{[^}]*?(?:min-)?height:(\\d+)px'));
  assert(rule&&Number(rule[1])>=44,selector);
 }
});

test('colour and type come from the Direction A tokens',()=>{
 for(const source of Object.values(css)){assert.match(source,/var\(--a-lime\)/);assert.match(source,/var\(--font-display\)|var\(--font-body\)/);assert(!/#[0-9a-f]{6}/i.test(source.replace(/rgba?\([^)]*\)/g,'').replace(/#f1f3ea|#151a0b/gi,'')),'only token colours (plus the fixed photo-overlay text colour)');}
});
