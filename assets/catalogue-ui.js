/* Parts: search, category pills, filter column and cards.
   One image, one badge, the seller, one fit line and two buttons per card.
   A source photograph is never an exact-3D claim. Details open in the part
   drawer (assets/part-drawer.js). Counts are computed from the catalogue. */
(() => {
 const esc=escHtml,$=id=>document.getElementById(id),work=window.JIMNY_FITTER_WORK;
 const photos=()=>window.JIMNY_PRODUCT_PHOTOS||{},container=$('mods');
 const archived={market_onlyjeep_snorkel:'The former product URL now redirects to a general collection. Exact product and image could not be verified.',market_baja_sport:'Manufacturer marks this older Squadron Sport discontinued (28 April 2026). Existing saved references are retained; no replacement listing was added.'};
 const SELLER_TYPES=[['official','Genuine accessories'],['specialist','Jimny specialists'],['marketplace','Marketplaces']];
 const PAGE=24,VISIBLE_PILLS=7;
 const F={ship:{local:true,overseas:true},tryOnly:false,confirms:false,stock:false,other:false,seller:new Set(),sort:'best',limit:PAGE,moreOpen:false};
 let lastKey='',lastResults=[];
 const bodyLabel=()=>bodyStyle==='3door'?'3-door':'5-door';
 const bodyLabels=list=>list.map(b=>b==='3door'?'3-door':'5-door').join(' and ');

 function canTry(m){return catalogueBodyStatus(m,bodyStyle)!=='incompatible'&&(m.market?cataloguePreviewKind(m,bodyStyle)!=='research-only':garageCanPreview(m.id));}
 function previewImage(m){const grilles={autostylenn_big_suzuki_grille:'block',autostylenn_cursive_grille:'script',autostylenn_s_grille:'smesh'};if(grilles[m.visual||m.id])return studioPreviewPath('design-grille-'+grilles[m.visual||m.id]);const v=m.visual||m.id,specific=window.getJimnyStudioPreviews?.().some(p=>p.id===m.id);return m.lightProfile?garagePartImage(m.id):specific||!m.market?garagePartImage(m.id):garagePartImage(v);}

 // The Parts pills follow the old "popular" shortcuts that other screens still set.
 function categoryKey(){const v=activePartFilter;if(!v||['all','popular','products','exterior','international','verified'].includes(v))return 'all';if(v==='interior')return 'Interior';if(v==='lighting')return 'Lighting';return v;}

 function infoFor(m){
  const country=m.countryCode||(m.realIndia?'IN':null),body=catalogueBodyStatus(m,bodyStyle);
  const types=new Set([...listedStoreIdsForMod(m)].map(id=>ONLINE_STORES.find(s=>s.id===id)?.type).filter(Boolean));
  const category=work.partCategory(m);
  return {m,category,where:country?(country===window.jimnyRegion?'local':'overseas'):null,try:canTry(m),listed:body==='listed',incompatible:body==='incompatible',stock:m.stockAtCheck==='available',types,
   text:[m.id,m.name,m.desc,category,m.region,m.seller,m.usd,m.hot?'popular':'',m.realIndia?'direct india product':'',...(m.in||[]).flat(),...(m.intl||[]).flat()].join(' ').toLowerCase()};
 }
 const activeEntries=()=>MODS.filter(m=>!m.designOnly&&!archived[m.id]);

 function state_(terms,cat){
  return {
   category:i=>cat==='all'||i.category===cat,
   ship:i=>{const {local,overseas}=F.ship;if(local===overseas)return true;return local?i.where==='local':i.where==='overseas';},
   try:i=>!F.tryOnly||i.try,
   confirms:i=>!F.confirms||i.listed,
   stock:i=>!F.stock||i.stock,
   saved:i=>!favoritesOnly||favorites.has(i.m.id),
   seller:i=>!F.seller.size||[...F.seller].some(t=>i.types.has(t)),
   body:i=>F.other||!i.incompatible,
   search:i=>terms.every(t=>i.text.includes(t))
  };
 }

 /* ---------- card text ---------- */
 function priceText(m){if(m.market||!m.price||!(m.price[1]>0))return 'price on seller site';return m.price[0]===m.price[1]?`About ${fmt(m.price[1])}`:`Typical ${fmt(m.price[0])} – ${fmt(m.price[1])}`;}
 function fitLine(m){
  const status=catalogueBodyStatus(m,bodyStyle),price=priceText(m),tick='<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>';
  if(status==='listed')return `<span class="pcard-ok">${tick}</span>Seller lists ${bodyLabels(m.bodyStyles)} · ${esc(price)}`;
  if(status==='incompatible')return `Different body: seller lists ${bodyLabels(m.bodyStyles)} · ${esc(price)}`;
  return `${esc(price)} · fitment: ask seller`;
 }
 function sellerLine(m){
  if(m.market){const local=(m.countryCode||(m.realIndia?'IN':null))===window.jimnyRegion;return `${esc(m.seller)} · ${local?'':'ships from '}${esc(m.region)}`;}
  const store=m.realIndia&&ONLINE_STORES.find(o=>listedStoreIdsForMod(m).has(o.id));
  const first=store?.name||(m.realIndia&&m.in?.[0]?.[0]);
  return `${esc(first||'Several sellers')}${m.in?.length||m.realIndia?' · India':''}`;
 }
 function media(m,i){
  const photo=photos()[m.id];let src=null,badge,alt;
  if(i.try){src=previewImage(m);badge='3D preview';alt=`${m.name} — representative model, not an exact product`;}
  else if(photo){src=photo.local;badge=m.market?'Photo only':'Photo';alt=m.name+(photo.kind==='manufacturer-range-photo'?' — maker range photo, check the exact variant':' — supplier product photo');}
  else if(!m.market){src=previewImage(m);badge='Upgrade idea';alt=`${m.name} — representative upgrade idea`;}
  else badge='No photo yet';
  const image=src?`<img src="${esc(src)}" alt="${esc(alt)}" width="760" height="570" loading="lazy" decoding="async">`:`<span class="pcard-nophoto"><svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3.5" y="5" width="17" height="14" rx="2"/><circle cx="9" cy="10.5" r="1.6"/><path d="m4 17 5-4.5 3.5 3L15 13l5 4.5"/></svg>No photo yet</span>`;
  return {image,badge};
 }
 function card(i){
  const m=i.m,{image,badge}=media(m,i),fitted=!!state[m.id],saved=favorites.has(m.id);
  const tryBtn=i.try?(fitted?`<button type="button" class="pcard-btn pcard-fitted" data-unfit="${m.id}" aria-label="On your car. Remove ${esc(m.name)} from your build"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>On your car</button>`:`<button type="button" class="pcard-btn pcard-try" data-part-preview="${m.id}">Try on car</button>`):'';
  return `<article class="pcard${fitted?' is-fitted':''}${tryBtn?'':' no-try'}" data-mod-id="${m.id}" data-preview-kind="${i.try?'approximate-3d':'source-only'}" data-fitment-status="${i.listed?'listed':i.incompatible?'incompatible':'unknown'}">
   <div class="pcard-media"><button type="button" class="pcard-image" data-open-part="${m.id}" aria-label="Details and buying options for ${esc(m.name)}" tabindex="-1">${image}</button><span class="pcard-badge${fitted?' is-fitted':''}">${fitted?'On your car':badge}</span><button type="button" class="pcard-save" data-favorite="${m.id}" aria-pressed="${saved}" aria-label="Save ${esc(m.name)}"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><path d="M6 3.5h12a.5.5 0 0 1 .5.5v16.5L12 16.8 5.5 20.5V4a.5.5 0 0 1 .5-.5z"/></svg><span class="fav-label">${saved?'Saved':'Save'}</span></button></div>
   <div class="pcard-body"><p class="pcard-seller">${sellerLine(m)}</p><h3><button type="button" class="pcard-title" data-open-part="${m.id}">${esc(m.name)}</button></h3><p class="pcard-fit">${fitLine(m)}</p>
   <div class="pcard-actions">${tryBtn}<button type="button" class="pcard-btn pcard-buy" data-where-to-buy="${m.id}">Where to buy</button></div></div>
  </article>`;
 }
 function decorate(root){for(const node of root.querySelectorAll('[data-product-photo]')){const p=photos()[node.dataset.productPhoto];node.innerHTML=p?`<img src="${esc(p.local)}" width="160" height="120" alt="Supplier product photo" loading="lazy">`:'<span>Source listing</span>';}}
 function render(items){container.innerHTML=items.map(i=>card(i)).join('');}

 /* ---------- filter column ---------- */
 const CHECK=(attr,label)=>`<label class="pp-check"><input type="checkbox" ${attr}><span class="pp-check-box" aria-hidden="true"></span><span class="pp-check-label">${label}</span><b class="pp-count" data-count></b></label>`;
 function buildSidebar(){
  $('partsSidebar').innerHTML=`<div class="pp-sheet-head"><h2 id="ppSheetTitle">Filters</h2><button type="button" class="pp-sheet-close" data-pp-sheet-close aria-label="Close filters">Close</button></div>
  <div class="pp-side-scroll"><fieldset class="pp-group"><legend>Ships from</legend>${CHECK('data-pp-ship="local"','<span data-pp-local-name></span>')}${CHECK('data-pp-ship="overseas"','Overseas')}</fieldset>
  <fieldset class="pp-group"><legend>Show only</legend>${CHECK('data-pp-flag="tryOnly"','Can try on my car')}${CHECK('data-pp-flag="confirms"','Seller confirms <span data-pp-body></span>')}${CHECK('data-pp-flag="stock"','In stock at last check')}${CHECK('id="favoritesOnly" data-pp-saved','Saved')}${CHECK('data-pp-flag="other"','Include other body styles')}</fieldset>
  <fieldset class="pp-group"><legend>Seller</legend>${SELLER_TYPES.map(([id,label])=>CHECK(`data-pp-seller="${id}"`,label)).join('')}</fieldset>
  <div class="pp-links"><button type="button" class="pp-link" data-open-estimates>How listings, prices and 3D previews work</button><button type="button" class="pp-link" data-open-mod-guide>Not sure where to start? Explore modification ideas</button></div></div>
  <div class="pp-sheet-foot"><button type="button" class="pp-apply" data-pp-sheet-close id="ppApply">Show results</button></div>`;
 }
 const COUNTED=['[data-pp-ship="local"]','[data-pp-ship="overseas"]','[data-pp-flag="tryOnly"]'];
 function setCheck(sel,checked,count){const input=document.querySelector(`#partsSidebar ${sel}`);if(!input)return;input.checked=checked;const label=input.closest('label');label.querySelector('[data-count]').textContent=COUNTED.includes(sel)?count:'';label.classList.toggle('is-empty',count===0&&!checked);}

 /* ---------- apply ---------- */
 function apply(){
  if(!container)return;
  const q=$('partSearch').value.trim().toLowerCase(),terms=q.split(/\s+/).filter(Boolean),cat=categoryKey();
  const tests=state_(terms,cat),infos=activeEntries().map(infoFor);
  const pass=(i,skip=[])=>Object.entries(tests).every(([k,t])=>skip.includes(k)||t(i));
  const results=infos.filter(i=>pass(i));
  const count=(skip,extra=()=>true)=>infos.filter(i=>pass(i,skip)&&extra(i)).length;
  const key=[q,cat,JSON.stringify(F.ship),F.tryOnly,F.confirms,F.stock,F.other,[...F.seller].join(),F.sort,favoritesOnly,bodyStyle,window.jimnyRegion].join('|');
  if(key!==lastKey){F.limit=PAGE;lastKey=key;}

  // Pills: fixed order by size across the whole catalogue, counts follow the other filters.
  const base=infos.filter(i=>F.other||!i.incompatible),totals={};base.forEach(i=>totals[i.category]=(totals[i.category]||0)+1);
  const order=Object.keys(totals).sort((a,b)=>totals[b]-totals[a]||a.localeCompare(b));
  const live={};infos.filter(i=>pass(i,['category'])).forEach(i=>live[i.category]=(live[i.category]||0)+1);
  const allCount=count(['category']);
  const head=order.slice(0,VISIBLE_PILLS),tail=order.slice(VISIBLE_PILLS);
  const pill=(id,label,n,extra='')=>`<button type="button" class="pp-pill${cat===id?' is-active':''}${extra}" data-filter="${esc(id)}" aria-pressed="${cat===id}">${esc(label)}<span class="pp-pill-count"> ${n}</span></button>`;
  const open=F.moreOpen||tail.includes(cat);
  $('partFilters').classList.toggle('is-open',open);
  $('partFilters').innerHTML=pill('all','All',allCount)+head.map(c=>pill(c,c,live[c]||0)).join('')+tail.map(c=>pill(c,c,live[c]||0,' pp-tail')).join('')+(tail.length?`<button type="button" class="pp-pill pp-morebtn" data-pp-more aria-expanded="${open}">${open?'Fewer':'More'}<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg></button>`:'');

  // Sort and page.
  const sorted=results.slice();
  const localFirst=(a,b)=>Number(b.where==='local')-Number(a.where==='local');
  sorted.sort(F.sort==='name'?(a,b)=>a.m.name.localeCompare(b.m.name):F.sort==='try'?(a,b)=>Number(b.try)-Number(a.try)||localFirst(a,b):localFirst);
  lastResults=sorted;
  const shown=sorted.slice(0,F.limit);
  render(shown);
  $('partNoResults').hidden=sorted.length>0;
  $('partSort').value=F.sort;

  // Filter column.
  if(!$('partsSidebar').firstElementChild)buildSidebar();
  const sb=$('partsSidebar');
  sb.querySelector('[data-pp-local-name]').textContent=regionName();
  sb.querySelector('[data-pp-body]').textContent=bodyLabel();
  setCheck('[data-pp-ship="local"]',F.ship.local,count(['ship'],i=>i.where==='local'));
  setCheck('[data-pp-ship="overseas"]',F.ship.overseas,count(['ship'],i=>i.where==='overseas'));
  setCheck('[data-pp-flag="tryOnly"]',F.tryOnly,count(['try'],i=>i.try));
  setCheck('[data-pp-flag="confirms"]',F.confirms,count(['confirms'],i=>i.listed));
  setCheck('[data-pp-flag="stock"]',F.stock,count(['stock'],i=>i.stock));
  setCheck('[data-pp-saved]',favoritesOnly,count(['saved'],i=>favorites.has(i.m.id)));
  setCheck('[data-pp-flag="other"]',F.other,count(['body'],i=>i.incompatible));
  for(const [id] of SELLER_TYPES)setCheck(`[data-pp-seller="${id}"]`,F.seller.has(id),count(['seller'],i=>i.types.has(id)));
  $('ppApply').textContent=`Show ${sorted.length} result${sorted.length===1?'':'s'}`;
  const active=[F.ship.local!==F.ship.overseas,F.tryOnly,F.confirms,F.stock,favoritesOnly,F.other,F.seller.size>0].filter(Boolean).length,badge=$('partsFiltersCount');
  badge.hidden=!active;badge.textContent=active;

  // Header and status line.
  $('partsContextValue').textContent=`${bodyLabel()} · ${regionName()} first`;
  $('catalogStatus').innerHTML=`<b>${sorted.length} result${sorted.length===1?'':'s'}</b>${F.sort==='best'?` · ${esc(regionName())} sellers first`:''}`;
  $('partSearch').placeholder=matchMedia('(max-width:700px)').matches?'Snorkel, roof rack, ARB…':`Search ${base.length} parts and products: snorkel, roof rack, ARB, PRAD…`;
  const more=$('loadMoreParts');more.hidden=shown.length>=sorted.length;more.textContent=`Show ${Math.min(PAGE,sorted.length-shown.length)} more of ${sorted.length-shown.length}`;
  const compare=$('comparePanel');if(compare&&typeof renderCompare==='function')renderCompare();
 }
 function reset(){Object.assign(F,{ship:{local:true,overseas:true},tryOnly:false,confirms:false,stock:false,other:false,seller:new Set(),limit:PAGE});favoritesOnly=false;activePartFilter='all';apply();}

 /* ---------- events ---------- */
 const side=$('partsSidebar');
 side.addEventListener('change',e=>{
  const t=e.target;
  if(t.dataset.ppShip){F.ship[t.dataset.ppShip]=t.checked;if(!F.ship.local&&!F.ship.overseas)F.ship[t.dataset.ppShip]=true;}
  else if(t.dataset.ppFlag)F[t.dataset.ppFlag]=t.checked;
  else if(t.dataset.ppSaved!==undefined)favoritesOnly=t.checked;
  else if(t.dataset.ppSeller)t.checked?F.seller.add(t.dataset.ppSeller):F.seller.delete(t.dataset.ppSeller);
  apply();
 });
 $('partFilters').addEventListener('click',e=>{
  if(e.target.closest('[data-pp-more]')){F.moreOpen=!F.moreOpen;apply();return;}
  const b=e.target.closest('[data-filter]');if(!b)return;activePartFilter=b.dataset.filter;apply();
 });
 $('partSort').addEventListener('change',e=>{F.sort=e.target.value;apply();});
 $('loadMoreParts').addEventListener('click',()=>{F.limit+=PAGE;apply();});

 // Phone filter sheet.
 let backdrop=null;
 function sheet(open){
  const trigger=$('partsFiltersOpen');document.body.classList.add('pp-sheet-anim');setTimeout(()=>document.body.classList.remove('pp-sheet-anim'),320);side.classList.toggle('is-open',open);trigger.setAttribute('aria-expanded',String(open));
  document.body.classList.toggle('pp-sheet-open',open);
  if(open){side.setAttribute('role','dialog');side.setAttribute('aria-modal','true');side.setAttribute('aria-labelledby','ppSheetTitle');backdrop??=Object.assign(document.createElement('div'),{className:'pp-backdrop'});backdrop.addEventListener('click',()=>sheet(false));document.body.append(backdrop);side.querySelector('[data-pp-sheet-close]').focus({preventScroll:true});}
  else{side.removeAttribute('role');side.removeAttribute('aria-modal');backdrop?.remove();if(document.body.dataset.mode==='parts')trigger.focus({preventScroll:true});}
 }
 $('partsFiltersOpen').addEventListener('click',()=>sheet(true));
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&side.classList.contains('is-open'))sheet(false);});
 document.addEventListener('click',e=>{if(e.target.closest('[data-pp-sheet-close]'))sheet(false);});

 // Cards: open the drawer from the image, title or anywhere on the card that is not a control.
 container.addEventListener('click',e=>{
  const unfit=e.target.closest('[data-unfit]');
  if(unfit){const id=unfit.dataset.unfit;rememberUndo();setPartSelection(id,false);update();showToast('Removed from your build','Undo',undoLastChange);apply();return;}
  const buy=e.target.closest('[data-where-to-buy]');
  if(buy){window.JimnyPartDrawer?.open({partId:buy.dataset.whereToBuy,focus:'buy',trigger:buy});return;}
  const open=e.target.closest('[data-open-part]')||(!e.target.closest('button,a')&&e.target.closest('[data-mod-id]'));
  if(open){const id=open.dataset.openPart||open.dataset.modId;window.JimnyPartDrawer?.open({partId:id,trigger:open.closest('.pcard')?.querySelector('.pcard-title')});}
 });
 window.addEventListener('jimny-build-change',()=>{if(document.body.dataset.mode==='parts')requestAnimationFrame(apply);});
 document.addEventListener('click',e=>{if(e.target.closest('[data-pp-category]')){activePartFilter=e.target.closest('[data-pp-category]').dataset.ppCategory;favoritesOnly=false;$('partSearch').value='';apply();}});

 // How listings, prices and 3D previews work; archived sources live here, not on the page.
 const explainer=document.createElement('dialog');explainer.id='estimatesDialog';explainer.className='estimates-dialog';explainer.setAttribute('aria-labelledby','estimatesTitle');
 explainer.innerHTML='<div class="estimates-head"><h2 id="estimatesTitle">How listings, prices and 3D previews work</h2><button type="button" data-close-estimates aria-label="Close explainer">Close</button></div><dl><dt>3D preview</dt><dd>The 3D shape is a representative model made for this planner. It is not manufacturer CAD and not an exact copy of any listed product.</dd><dt>Upgrade idea</dt><dd>A general type of upgrade, not a particular SKU. Choose an exact compatible product before buying.</dd><dt>Photo</dt><dd>An image supplied by the seller or maker. It may show an optional configuration, or a range rather than your exact variant.</dd><dt>Listings</dt><dd>Listings are curated references, not live stock and not a fitment guarantee. Confirm chassis, mounts and the delivered price with the seller.</dd><dt>Prices</dt><dd>Where a part has no price we show “price on seller site”. A typical range is a planning estimate only. Unpriced products are left out of build totals, not treated as free. Shipping, duty and returns need confirming with the seller.</dd><dt>Archived sources</dt><dd>Two products are no longer current listings. They stay available as history only.<ul class="estimates-archived">'+Object.entries(archived).map(([id,note])=>`<li><strong>${esc(modById[id].name)}</strong><br>${esc(note)} <button type="button" data-source-part="${id}" data-close-estimates>Historical source details</button></li>`).join('')+'</ul></dd></dl>';
 document.body.append(explainer);
 document.addEventListener('click',e=>{if(e.target.closest('[data-open-estimates]')){e.preventDefault();e.stopPropagation();sheet(false);explainer.showModal();}else if(e.target.closest('[data-close-estimates]')||e.target===explainer)explainer.close();},true);

 window.JimnyCatalogue={render,decorate,apply,reset,get results(){return lastResults;},isActive:m=>!archived[m.id],canTry,previewImage,fitLine,sellerLine,priceText,infoFor};
 window.JimnyProductPhotos={decorate};apply();window.JimnyWorkbenchFlow?.renderOverview();
})();
