/* Part detail: a drawer on desktop, a full screen on phones.
   Where to buy, and who can fit it with links into Fitters. It opens from a
   Parts card, from any "buying options" button, and for design options such as
   wheel finishes. Listings are references, never live stock or a fitment promise. */
(() => {
 const esc=escHtml,$=id=>document.getElementById(id),work=window.JIMNY_FITTER_WORK;
 const MORE_NOUN={Intake:'snorkels','Roof & carrying':'racks and carriers',Lighting:'lights',Protection:'protection parts',Wheels:'wheels',Suspension:'suspension parts',Interior:'interior parts',Recovery:'recovery gear','Camping & storage':'camping and storage items',Grilles:'grilles',Exterior:'exterior parts',Drivetrain:'drivetrain parts'};
 const archivedNotes={market_onlyjeep_snorkel:'The former product URL now redirects to a general collection. Exact product and image could not be verified.',market_baja_sport:'Manufacturer marks this older Squadron Sport discontinued (28 April 2026). No replacement listing was added.'};
 const MAX_ROWS=3,MAX_FITTERS=3,MAX_COMPARE=12;
 let el=null,backdrop=null,trigger=null,request=null;

 const ext='<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>';
 const tick='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>';
 const bookmark='<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><path d="M6 3.5h12a.5.5 0 0 1 .5.5v16.5L12 16.8 5.5 20.5V4a.5.5 0 0 1 .5-.5z"/></svg>';

 function ensure(){
  if(el)return;
  el=document.createElement('aside');el.id='partDrawer';el.className='pd';el.hidden=true;el.setAttribute('role','dialog');el.setAttribute('aria-modal','true');el.setAttribute('aria-labelledby','pdTitle');
  backdrop=document.createElement('div');backdrop.className='pd-backdrop';backdrop.hidden=true;
  document.body.append(backdrop,el);
  backdrop.addEventListener('click',()=>close());
  el.addEventListener('click',onClick);
  el.addEventListener('keydown',e=>{
   if(e.key!=='Tab')return;
   const items=[...el.querySelectorAll('a[href],button:not([disabled])')].filter(n=>n.offsetParent!==null);if(!items.length)return;
   const first=items[0],last=items[items.length-1];
   if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
  });
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!el.hidden&&!document.querySelector('dialog[open]'))close();});
 }

 const sellerNoun=job=>work.JOB_BY_ID[job]?.noun||job;
 const joinNames=l=>l.length<2?l.join(''):l.slice(0,-1).join(', ')+' and '+l[l.length-1];
 function fittersFor(jobs){
  const rank=s=>/market/i.test(s.tag||'')?2:/^unverified/i.test(s.tag||'')?1:0;
  return SHOPS.filter(s=>(s.country||'IN')===window.jimnyRegion&&work.deriveWork(s).jobs.some(j=>jobs.includes(j))).map((s,i)=>({s,i})).sort((a,b)=>rank(a.s)-rank(b.s)||a.i-b.i).map(x=>x.s);
 }
 function moreOptions(m){
  if(!m.market)return [];
  const category=work.partCategory(m);
  return MODS.filter(o=>o.id!==m.id&&!o.designOnly&&o.market&&work.partCategory(o)===category&&catalogueBodyStatus(o,bodyStyle)!=='incompatible'&&window.JimnyCatalogue.isActive(o)&&o.seller!==m.seller)
   .sort((a,b)=>Number((b.countryCode||null)===window.jimnyRegion)-Number((a.countryCode||null)===window.jimnyRegion)).map(o=>({m:o,name:o.name,seller:o.seller,region:o.region,url:o.url})).filter(o=>/^https?:/.test(o.url||''));
 }

 function hero(m,info,option){
  if(!m){return '';}
  const photo=(window.JIMNY_PRODUCT_PHOTOS||{})[m.id];let src=null,badge,alt;
  if(info.try){src=window.JimnyCatalogue.previewImage(m);badge='3D preview · shape is representative';alt=`${m.name} — representative model, not an exact product`;}
  else if(photo){src=photo.local;badge='Seller photo · check the exact variant';alt=`${m.name} — supplier product photo`;}
  else if(!m.market){src=window.JimnyCatalogue.previewImage(m);badge='Upgrade idea · not a specific product';alt=`${m.name} — representative upgrade idea`;}
  if(!src)return '';
  return `<div class="pd-hero"><img src="${esc(src)}" alt="${esc(alt)}" width="1000" height="560"><span class="pd-badge">${badge}</span></div>`;
 }

 function render(req){
  const {partId,group}=req,result=partSupplierOptions(partId,group),{part:m,option,rows}=result,region=regionName();
  const info=m?window.JimnyCatalogue.infoFor(m):null,saved=m&&favorites.has(m.id),fitted=m&&!!state[m.id];
  const title=result.title,category=m?work.partCategory(m):'',jobs=m?work.jobsForPart(m):[work.DESIGN_JOB[group]].filter(Boolean);
  const kicker=m?`${esc(category)} · ${esc(m.seller||'Several sellers')}`:'Design option';
  const meta=m?window.JimnyCatalogue.fitLine(m):'Pick an exact product and confirm fitment with the seller.';
  const primary=m&&info.try?(fitted?`<button type="button" class="pd-primary is-fitted" data-unfit="${m.id}">${tick}On your car</button>`:`<button type="button" class="pd-primary" data-part-preview="${m.id}">Try on my car</button>`):'';
  const saveBtn=m?`<button type="button" class="pd-save${primary?'':' pd-save-wide'}" data-favorite="${m.id}" aria-pressed="${saved}" aria-label="Save ${esc(m.name)}">${bookmark}<span class="fav-label">${saved?'Saved':'Save'}</span></button>`:'';
  const actions=primary||saveBtn?`<div class="pd-actions">${primary}${saveBtn}</div>`:'';

  // Where to buy.
  const shownRows=rows.slice(0,MAX_ROWS),restRows=rows.slice(MAX_ROWS);
  const rowHtml=(r,compact)=>`<li class="pd-row"><div><b>${esc(r.seller)}</b>${r.label&&r.label!==r.seller&&r.label!==title&&!compact?`<span class="pd-row-name">${esc(r.label)}</span>`:''}<span>${esc(r.coverage)}${r.country===window.jimnyRegion?' · your region':''}</span>${r.kind==='alternative'?'<span class="pd-note">Related product · not an exact model match</span>':r.kind==='supplier'?'<span class="pd-note">Supplier lead · no specific product match</span>':''}</div><a class="pd-open" href="${esc(r.url)}" target="_blank" rel="noopener noreferrer">${r.kind==='supplier'?'Open supplier':'Open listing'} ${ext}</a></li>`;
  const compare=m?moreOptions(m):[],compareShown=compare.slice(0,MAX_COMPARE);
  const buy=`<section class="pd-section" id="pdBuy" tabindex="-1" aria-labelledby="pdBuyTitle"><h3 id="pdBuyTitle">Where to buy</h3>${rows.length?`<ul class="pd-rows">${shownRows.map(r=>rowHtml(r)).join('')}</ul>${restRows.length?`<details class="pd-more"><summary>${restRows.length} more source${restRows.length===1?'':'s'}</summary><ul class="pd-rows">${restRows.map(r=>rowHtml(r)).join('')}</ul></details>`:''}`:`<p class="pd-empty">No specific online product is linked for this yet. Keep it in your build and show it to a local fitter.</p>`}${compareShown.length?`<details class="pd-compare"><summary>Compare ${compare.length} more ${MORE_NOUN[category]||'parts'} from other sellers</summary><ul class="pd-rows">${compareShown.map(o=>`<li class="pd-row"><div><b>${esc(o.name)}</b><span>${esc(o.seller)} · ${esc(o.region)}</span></div><a class="pd-open" href="${esc(o.url)}" target="_blank" rel="noopener noreferrer">Open listing ${ext}</a></li>`).join('')}</ul>${compare.length>compareShown.length?`<button type="button" class="pd-textlink" data-pp-category="${esc(category)}" data-pd-close>See all ${esc(category)} parts</button>`:''}</details>`:''}</section>`;

  // Who can fit it.
  const fitters=jobs.length?fittersFor(jobs):[],nouns=jobs.map(sellerNoun).join(' and '),names3=joinNames(fitters.slice(0,MAX_FITTERS).map(s=>s.name));
  const fit=`<section class="pd-section" aria-labelledby="pdFitTitle"><h3 id="pdFitTitle">Who can fit it</h3>${jobs.length?(fitters.length?`<ul class="pd-fitters">${fitters.slice(0,MAX_FITTERS).map(s=>`<li><button type="button" class="pd-fitter" data-fitters-job="${jobs[0]}"><b>${esc(s.name)}</b><span>${esc(String(s.city).split(',')[0])}</span></button></li>`).join('')}</ul><p class="pd-fit-note pd-fit-desktop">These workshops list ${esc(nouns)} work. <button type="button" class="pd-textlink" data-fitters-job="${jobs[0]}">See all fitters</button></p><p class="pd-fit-note pd-fit-phone">${esc(names3)} list ${esc(nouns)} work. <button type="button" class="pd-textlink" data-fitters-job="${jobs[0]}">See fitters</button></p>`:`<p class="pd-fit-note">No workshop in ${esc(region)} lists ${esc(nouns)} work yet. <button type="button" class="pd-textlink" data-fitters-job="${jobs[0]}">See all fitters</button></p>`):`<p class="pd-fit-note">No listed workshop names this kind of work. Ask any fitter for an itemised quote. <button type="button" class="pd-textlink" data-fitters-job="">See all fitters</button></p>`}</section>`;

  // Notes: stock and fitment as the seller states them, photo credit, archive status.
  const photo=m&&(window.JIMNY_PRODUCT_PHOTOS||{})[m.id];
  const stock=m?.market?{available:'Seller reported available',unavailable:'Seller reported unavailable',unknown:'Stock not confirmed'}[m.stockAtCheck]||'Stock not confirmed':'';
  const notes=[m?.market?`${stock} at ${esc(m.checked||'last catalogue check')}.`:'',m?.fitment?esc(m.fitment):'',m?.market?'':'',archivedNotes[m?.id]?esc(archivedNotes[m.id]):'',photo?`Photo: <a href="${esc(photo.page)}" target="_blank" rel="noopener noreferrer">${esc(photo.credit)}</a>. May show an optional configuration.`:''].filter(Boolean);
  const cmp=m?`<button type="button" class="pd-textlink" data-compare="${m.id}" aria-pressed="${compareIds.has(m.id)}">${compareIds.has(m.id)?'Comparing':'Add to compare'}</button>`:'';

  el.innerHTML=`<button type="button" class="pd-close" data-pd-close aria-label="Close part details"><svg class="pd-x" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg><svg class="pd-back" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 5-7 7 7 7"/></svg></button><div class="pd-scroll">${hero(m,info,option)}
   <div class="pd-body"><p class="pd-kicker">${kicker}</p><h2 id="pdTitle" tabindex="-1">${esc(title)}</h2><p class="pd-meta">${meta}</p>${actions}${buy}${fit}${notes.length?`<div class="pd-notes">${notes.map(n=>`<p>${n}</p>`).join('')}${cmp?`<p>${cmp}</p>`:''}</div>`:cmp?`<div class="pd-notes"><p>${cmp}</p></div>`:''}<p class="pd-foot">Listings aren’t live stock or a fitment guarantee. Confirm chassis, mounts and the delivered price with the seller.</p></div></div>`;
 }

 function open(req={}){
  ensure();
  if(!req.partId&&!req.group)return;
  if(el.hidden)trigger=req.trigger||document.activeElement;
  request=req;render(req);
  el.hidden=false;backdrop.hidden=false;document.body.classList.add('pd-open');
  requestAnimationFrame(()=>el.classList.add('is-open'));
  const scroll=el.querySelector('.pd-scroll');scroll.scrollTop=0;
  if(req.focus==='buy'){const buy=$('pdBuy');buy?.scrollIntoView({block:'start'});buy?.focus({preventScroll:true});}
  else $('pdTitle').focus({preventScroll:true});
 }
 function close({restore=true}={}){
  if(!el||el.hidden)return;
  el.classList.remove('is-open');el.hidden=true;backdrop.hidden=true;document.body.classList.remove('pd-open');request=null;
  if(restore&&trigger?.isConnected)trigger.focus({preventScroll:true});
 }

 function onClick(e){
  if(e.target.closest('[data-pd-close]')&&!e.target.closest('[data-pp-category]'))return close();
  const unfit=e.target.closest('[data-unfit]');
  if(unfit){const id=unfit.dataset.unfit;rememberUndo();setPartSelection(id,false);update();showToast('Removed from your build','Undo',undoLastChange);render(request);$('pdTitle').focus({preventScroll:true});window.JimnyCatalogue.apply();return;}
  if(e.target.closest('[data-part-preview]')){close({restore:false});return;}
  const jobBtn=e.target.closest('[data-fitters-job]');
  if(jobBtn){close({restore:false});window.JimnyFitters?.openForJob(jobBtn.dataset.fittersJob||'');return;}
  if(e.target.closest('[data-pp-category]')){close({restore:false});setWorkbenchMode('parts',{scroll:true});return;}
 }
 // Compare is toggled by the shared handler; keep this label in step.
 document.addEventListener('click',e=>{if(el&&!el.hidden&&e.target.closest('#partDrawer [data-compare]'))requestAnimationFrame(()=>{if(request)render(request);});});
 document.addEventListener('click',e=>{if(el&&!el.hidden&&e.target.closest('#partDrawer [data-favorite]'))requestAnimationFrame(()=>{const b=el.querySelector('[data-favorite]');if(b)b.querySelector('.fav-label').textContent=b.getAttribute('aria-pressed')==='true'?'Saved':'Save';});});

 window.JimnyPartDrawer={open,close,get isOpen(){return !!el&&!el.hidden;}};
})();
