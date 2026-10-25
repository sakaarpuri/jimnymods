/* Fitters: city pills, "Can work on my build", workshop cards, shortlist and
   the quote request. Work tags come from each listing's own description
   (assets/fitter-work.js). No ratings, no phone numbers: only what a listing says. */
(() => {
 const esc=escHtml,$=id=>document.getElementById(id),work=window.JIMNY_FITTER_WORK,dir=window.JIMNY_DIRECTORY;
 const KEY='thatsuvmod-shortlist',FIRST=3;
 const read=()=>{try{const v=JSON.parse(localStorage.getItem(KEY));return Array.isArray(v)?v.filter(x=>typeof x==='string'):[];}catch{return [];}};
 const shortlist=new Set(read());
 const save=()=>{try{localStorage.setItem(KEY,JSON.stringify([...shortlist]));}catch{/* Storage can be unavailable. */}};
 let activeArea='all',activeJob='',canWork=false,canWorkTouched=false,showAll=false,lastKey='';

 const rank=s=>/market/i.test(s.tag||'')?2:/^unverified/i.test(s.tag||'')?1:0;
 const listed=()=>SHOPS.map((s,i)=>({s,i,id:work.shopId(s),work:work.deriveWork(s),areas:work.areasFor(s)}));
 const badge=s=>{const t=String(s.tag||'').replace(/^Verified /,'').replace('Unverified — call first','Enquire first').replace(/ · enquire first$/i,'');return t.charAt(0).toUpperCase()+t.slice(1);};

 // Jobs the user's build needs, from the parts and design options in it.
 function buildJobs(){
  let stats;try{stats=getBuildStats();}catch{return {jobs:new Set(),names:[]};}
  const jobs=new Set(),names=[];
  for(const m of stats.items){work.jobsForPart({...m,category:work.partCategory(m)}).forEach(j=>jobs.add(j));names.push(m.name);}
  for(const o of stats.designs.filter(o=>o.price[1]>0)){const j=work.DESIGN_JOB[o.group];if(j)jobs.add(j);names.push(o.label||o.name);}
  return {jobs,names};
 }

 function render(){
  const root=$('shops');if(!root)return;
  const region=window.jimnyRegion,country=dir.countryName(region),all=listed().filter(x=>(x.s.country||'IN')===region);
  const {jobs:needs,names}=buildJobs(),hasBuild=needs.size>0;
  if(!canWorkTouched)canWork=hasBuild;
  if(!hasBuild)canWork=false;
  // Other screens pre-fill the search with a city; turn that into the matching pill.
  let q=$('shopSearch').value.trim();
  if(q){const hit=all.find(x=>x.s.region===q||x.s.city===q);if(hit){activeArea=hit.areas[0];$('shopSearch').value=q='';}}
  const key=[region,q,activeArea,activeJob,canWork].join('|');if(key!==lastKey){showAll=false;lastKey=key;}
  const text=x=>[x.s.name,x.s.city,x.s.region,x.s.tag,x.s.desc,country,...x.work.jobs.map(j=>work.JOB_BY_ID[j].label)].join(' ');
  const hits=x=>x.work.jobs.filter(j=>needs.has(j));
  const base=all.filter(x=>dir.matches(text(x),q)&&(!activeJob||x.work.jobs.includes(activeJob))&&(!canWork||hits(x).length));

  // City pills with real counts; a two-city listing counts in both.
  const totals={};all.forEach(x=>x.areas.forEach(a=>totals[a]=(totals[a]||0)+1));
  const order=Object.keys(totals).sort((a,b)=>totals[b]-totals[a]||a.localeCompare(b));
  if(activeArea!=='all'&&!totals[activeArea])activeArea='all';
  const live={};base.forEach(x=>x.areas.forEach(a=>live[a]=(live[a]||0)+1));
  const pill=(id,label,n)=>`<button type="button" class="fs-pill${activeArea===id?' is-active':''}" data-fs-area="${esc(id)}" aria-pressed="${activeArea===id}">${esc(label)}<span class="fs-pill-count"> ${n}</span></button>`;
  $('shopAreas').innerHTML=pill('all',`All ${country}`,base.length)+order.map(a=>pill(a,a,live[a]||0)).join('');

  const inArea=base.filter(x=>activeArea==='all'||x.areas.includes(activeArea));
  const areaAll=all.filter(x=>activeArea==='all'||x.areas.includes(activeArea));
  inArea.sort((a,b)=>hits(b).length-hits(a).length||rank(a.s)-rank(b.s)||a.i-b.i);
  const shown=showAll?inArea:inArea.slice(0,FIRST),areaLabel=activeArea==='all'?country:activeArea;

  // Controls and summary.
  const box=$('shopCanWork');box.checked=canWork;box.disabled=!hasBuild;
  $('shopCanWorkLabel').innerHTML=`Can work on my build${hasBuild?`<span class="fs-check-count"> · ${areaAll.filter(x=>hits(x).length).length} of ${areaAll.length}</span>`:'<span class="fs-hint"> · add parts to your build first</span>'}`;
  const nouns=[...needs].map(j=>work.JOB_BY_ID[j].label.toLowerCase());
  const chip=activeJob?`<button type="button" class="fs-jobchip" data-fs-clear-job>Showing fitters that list ${esc(work.JOB_BY_ID[activeJob].noun)} work <span aria-hidden="true">✕</span><span class="sr-only">Clear</span></button>`:'';
  $('fitterStatus').innerHTML=(canWork?`<b>${inArea.length} of ${areaAll.length} in ${esc(areaLabel)}</b> list work on parts in your build: ${esc(nouns.join(', '))}.`:`<b>${inArea.length} ${inArea.length===1?'listing':'listings'} in ${esc(areaLabel)}</b>${q?` for “${esc(q)}”`:''}.`)+' '+chip;

  root.innerHTML=shown.map(x=>{
   const s=x.s,h=new Set(hits(x)),isShort=shortlist.has(x.id),map=`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.q||s.name)}`;
   const ordered=[...x.work.jobs].sort((a,b)=>Number(h.has(b))-Number(h.has(a)));
   const tags=ordered.length?`<ul class="fcard-tags" aria-label="Work this listing names">${ordered.map((j,n)=>`<li class="${h.has(j)?'is-hit':''}${n>=3?' is-extra':''}">${esc(work.JOB_BY_ID[j].label)}</li>`).join('')}${ordered.length>3?`<li class="fcard-more" aria-hidden="true">+${ordered.length-3}</li>`:''}</ul>`:'<p class="fcard-ask">This listing doesn’t name specific work. Ask what they do on Jimnys.</p>';
   return `<article class="fcard${h.size?' is-match':''}${isShort?' is-short':''}" data-shop="${esc(x.id)}" data-shop-type="${esc(s.type||'')}">
    <div class="fcard-mono" aria-hidden="true">${esc(work.monogram(s.name))}</div>
    <div class="fcard-main"><h3>${esc(s.name)} <span class="fcard-badge${/^Unverified/.test(s.tag||'')?' is-warn':''}">${esc(badge(s))}</span></h3><p class="fcard-where">${esc(s.city)}</p><p class="fcard-desc">${esc(s.desc)}</p>${tags}</div>
    <div class="fcard-actions"><button type="button" class="fcard-short${isShort?' is-on':''}" data-shortlist="${esc(x.id)}" aria-pressed="${isShort}" aria-label="${isShort?'Remove from shortlist':'Add to shortlist'}: ${esc(s.name)}"><span class="fcard-short-text">${isShort?'✓ Shortlisted':'+ Shortlist'}</span><span class="fcard-short-icon" aria-hidden="true">${isShort?'✓':'+'}</span></button>${s.directory?'':`<a class="fcard-link" href="${map}" target="_blank" rel="noopener">Directions</a>`}${s.web?`<a class="fcard-link" href="${esc(s.web)}" target="_blank" rel="noopener noreferrer">Website</a>`:''}</div>
   </article>`;
  }).join('');
  $('shopNoResults').hidden=inArea.length>0;

  const hidden=inArea.length-shown.length,seeAll=canWork&&areaAll.length>inArea.length;
  $('shopsMore').innerHTML=(hidden>0?`<button type="button" class="fs-more-btn" data-fs-more>Show ${hidden} more</button>`:'')+(seeAll?`<button type="button" class="fs-more-btn" data-fs-all>See all ${areaAll.length} in ${esc(areaLabel)}</button>`:'');
  renderShortlist(all);
 }

 /* ---------- shortlist ---------- */
 function renderShortlist(all=listed()){
  const items=[...shortlist].map(id=>all.find(x=>x.id===id)||listed().find(x=>x.id===id)).filter(Boolean);
  const {names}=buildJobs(),body=bodyStyle==='3door'?'3-door':'5-door',quote=work.buildQuoteRequest({body,parts:names});
  const panel=$('fsShortlist');
  panel.innerHTML=`<h3 id="fsShortlistTitle">Your shortlist <span aria-hidden="true">·</span> ${items.length}</h3>${items.length?`<ul class="fs-chosen">${items.map(x=>`<li><span><b>${esc(x.s.name)}</b> · ${esc(String(x.s.city).split(',')[0])}</span><button type="button" data-shortlist-remove="${esc(x.id)}" aria-label="Remove ${esc(x.s.name)} from shortlist">✕</button></li>`).join('')}</ul>`:'<p class="fs-empty">Add a few workshops with “+ Shortlist”, then copy one quote request to send to each.</p>'}<blockquote class="fs-quote" id="fsQuote">“${esc(quote)}”</blockquote><button type="button" class="fs-copy" id="fsCopy"${items.length?'':' disabled'}>Copy quote request</button><p class="fs-copy-note">Paste it into a message or email to each workshop.</p>`;
  panel.dataset.quote=quote;
  const bar=$('fsBar');bar.hidden=!items.length;
  bar.innerHTML=items.length?`<div class="fs-bar-text"><b>Shortlist · ${items.length}</b><span>${esc(items.map(x=>x.s.name).join(', '))}</span></div><button type="button" class="fs-copy" data-fs-copy>Copy quote request</button>`:'';
 }
 async function copy(button){
  const ok=await copyText($('fsShortlist').dataset.quote||'');
  showToast(ok?'Quote request copied':'Could not copy. Select the text and copy it.');
  if(ok&&button){const label=button.textContent;button.textContent='Copied';setTimeout(()=>{if(button.isConnected)button.textContent=label;},2000);}
 }

 /* ---------- events ---------- */
 document.addEventListener('click',e=>{
  const t=e.target;
  const area=t.closest('[data-fs-area]');if(area){activeArea=area.dataset.fsArea;render();return;}
  const short=t.closest('[data-shortlist]');
  if(short){const id=short.dataset.shortlist;shortlist.has(id)?shortlist.delete(id):shortlist.add(id);save();render();document.querySelector(`[data-shortlist="${CSS.escape(id)}"]`)?.focus({preventScroll:true});return;}
  const remove=t.closest('[data-shortlist-remove]');if(remove){shortlist.delete(remove.dataset.shortlistRemove);save();render();return;}
  if(t.closest('[data-fs-more]')){showAll=true;render();return;}
  if(t.closest('[data-fs-all]')){canWork=false;canWorkTouched=true;render();return;}
  if(t.closest('[data-fs-clear-job]')){activeJob='';render();return;}
  const cp=t.closest('#fsCopy,[data-fs-copy]');if(cp){copy(cp);return;}
  if(t.closest('[data-reset-fitters]')){activeArea='all';activeJob='';canWorkTouched=true;canWork=false;render();}
 });
 $('shopCanWork').addEventListener('change',e=>{canWork=e.target.checked;canWorkTouched=true;render();});
 window.addEventListener('jimny-build-change',()=>{if(document.body.dataset.mode==='fitters')requestAnimationFrame(render);});
 window.addEventListener('jimny-model-change',()=>{if(document.body.dataset.mode==='fitters')render();});

 // From a part: show fitters who list that job, in your region.
 function openForJob(job){activeJob=job&&work.JOB_BY_ID[job]?job:'';activeArea='all';canWorkTouched=true;canWork=false;$('shopSearch').value='';render();setWorkbenchMode('fitters',{scroll:true});}

 window.JimnyFitters={render,openForJob,get shortlist(){return [...shortlist];}};
 render();
})();
