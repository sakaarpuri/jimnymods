/* Route-kit handoff: a small focused collection using the garage's own cards.
   No additions, fitment approvals or checklist completions happen on opening. */
(() => {
  'use strict';
  if(typeof document==='undefined')return;
  const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  let panel,lastEvent=null;
  const catalog=()=>{try{return typeof MODS!=='undefined'?MODS:globalThis.JIMNY_MARKET_PRODUCTS||[];}catch{return globalThis.JIMNY_MARKET_PRODUCTS||[];}};
  function close(){panel?.remove();panel=null;document.getElementById('garage')?.classList.remove('trip-kit-focus');}
  function body(){try{return globalThis.currentPayload?.().body||'5door';}catch{return '5door';}}
  function sourceCard(p){const photo=globalThis.JIMNY_PRODUCT_PHOTOS?.[p.id];return '<article class="trip-garage-source">'+(photo?'<img class="trip-source-photo" src="'+esc(photo.local)+'" alt="'+esc(p.name)+' · supplier photograph" width="320" height="200" loading="lazy"><small>Supplier photo · '+esc(photo.credit)+'</small>':'')+'<p class="trip-kicker">'+esc(p.region||'Supplier location unconfirmed')+'</p><h4>'+esc(p.name)+'</h4><p>'+esc(p.fitment||p.desc||'Confirm body style and exact fitment with the seller.')+'</p><button type="button" data-source-part="'+esc(p.id)+'">Details & buying options</button></article>';}
  function open(event){
    const P=globalThis.JIMNY_TRIP_PLANNER,k=P?.kits.find(k=>k.id===event.detail?.kitId),garage=document.getElementById('garage');
    if(!k||!garage)return;lastEvent=event;
    if(typeof globalThis.openGarageCategory==='function')globalThis.openGarageCategory('popular');
    else if(typeof globalThis.setWorkbenchMode==='function')globalThis.setWorkbenchMode('garage');
    close();garage.classList.add('trip-kit-focus');
    const products=catalog(),byId=new Map(products.map(p=>[p.id,p])),parts=globalThis.JimnyPracticalParts||{};
    const ids=[...new Set([...(k.practicalIds||[]).map(id=>parts[id]).filter(Boolean).map(p=>p.existingId||p.id),...(k.visualIds||[]),...k.productIds])].filter(id=>byId.has(id));
    const compatible=p=>!p.bodyStyles?.length||p.bodyStyles.includes(body());
    const visible=ids.map(id=>byId.get(id)).filter(compatible),preview=[],research=[];
    for(const p of visible){let can=!!p.visual||!p.market;try{if(typeof globalThis.cataloguePreviewKind==='function'&&p.market)can=globalThis.cataloguePreviewKind(p,body())!=='research-only';if(typeof globalThis.garageCanPreview==='function')can=can&&globalThis.garageCanPreview(p.id);}catch{can=false;}if(can&&typeof globalThis.garagePartCards==='function')preview.push(p.id);else research.push(p);}
    const r=P.routes.find(r=>r.id===event.detail.routeId);
    panel=document.createElement('section');panel.className='trip-garage-kit';panel.setAttribute('aria-labelledby','tripGarageKitTitle');
    panel.innerHTML='<div class="trip-garage-kit-heading"><div><p class="trip-kicker">'+esc(r?.name||'Trip preparation')+'</p><h2 id="tripGarageKitTitle" tabindex="-1">'+esc(k.name)+'</h2></div><button type="button" data-close-trip-kit>Back to all Garage choices</button></div><p>'+esc(k.items)+'</p><p class="trip-muted">Tap a model card to try it, or open its buying options. No parts were added by opening this kit. Known different-body products are hidden; other fitment still needs checking.</p>'+
      (preview.length?globalThis.garagePartCards(preview):'')+
      (research.length?'<details class="trip-garage-research"'+(!preview.length?' open':'')+'><summary>'+research.length+' real product sources · no matching 3D preview</summary><div class="trip-garage-source-grid">'+research.map(sourceCard).join('')+'</div></details>':'')+
      (!visible.length?'<p>No matching kit products are loaded for this body. You can still use the preparation checklist and browse the full catalogue.</p>':'')+
      '<div class="trip-garage-kit-actions"><button type="button" data-open-trip-planner>Return to trip worksheet</button><button type="button" data-open-kits>Save selected parts as a kit</button></div>';
    const choices=document.getElementById('garageChoices');if(choices)choices.before(panel);else garage.append(panel);
    if(typeof globalThis.refreshGarage==='function')globalThis.refreshGarage();
    panel.querySelector('#tripGarageKitTitle').focus({preventScroll:true});panel.scrollIntoView({block:'nearest',behavior:'instant'});
  }
  globalThis.addEventListener('jimny:trip-kit-request',open);
  document.addEventListener('click',event=>{
    if(event.target.closest?.('[data-close-trip-kit]')){close();if(typeof globalThis.openGarageCategory==='function')globalThis.openGarageCategory('popular',{focus:true});}
    else if(event.target.closest?.('[data-garage-category],[data-primary-mode],[data-mode-select]'))close();
  },true);
  document.addEventListener('change',event=>{if(event.target.id==='bodySelect'&&panel&&lastEvent)requestAnimationFrame(()=>open(lastEvent));});
  // Explicit cross-page intent only. Opening a kit never fits parts or ticks checks.
  const query=new URLSearchParams(location.search),P=globalThis.JIMNY_TRIP_PLANNER;
  const routeId=query.get('tripRoute'),kitId=query.get('tripKit'),sourceId=query.get('tripSource');
  if(P?.routes.some(r=>r.id===routeId)&&P?.kits.some(k=>k.id===kitId))requestAnimationFrame(()=>open({detail:{routeId,kitId}}));
  if(sourceId&&catalog().some(p=>p.id===sourceId))requestAnimationFrame(()=>{if(typeof openPartSuppliers==='function')openPartSuppliers(sourceId);});
  if(kitId||sourceId){for(const key of ['tripRoute','tripKit','tripSource'])query.delete(key);history.replaceState(null,'',location.pathname+(query.size?'?'+query:'')+location.hash);}
})();
