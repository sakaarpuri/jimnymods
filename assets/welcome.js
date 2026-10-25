/* First-visit welcome (Direction A frames 01/02/05/06).
   The head script in index.html decides before first paint:
   data-welcome="page"  — a first visit to the site root: a full welcome page;
   data-welcome="sheet" — a first visit through a Garage or share link: a sheet over the shared car.
   Both write to the existing #regionSelect / #bodySelect, so the header setup
   stays the single place these live afterwards. */
(() => {
  'use strict';
  const root=document.documentElement,variant=root.dataset.welcome;
  const SEEN_KEY='thatsuvmod-welcomed';
  const esc=escHtml,$=id=>document.getElementById(id);
  const regionSelect=$('regionSelect'),bodySelect=$('bodySelect');
  const partCount=MODS.filter(m=>!m.designOnly&&(!window.JimnyCatalogue||window.JimnyCatalogue.isActive(m))).length;
  const tripCount=globalThis.JIMNY_TRIP_PLANNER?.routes?.length||0;
  const numberWords=['No','One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Eleven','Twelve'];
  const carImage=body=>`assets/previews/${body==='3door'?'swb/':''}design-finish-oem.webp`;
  const arrow='<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

  function markSeen(){try{localStorage.setItem(SEEN_KEY,'1');}catch{/* The welcome may show again next visit. */}}

  function questions(prefix){
    const body=bodyStyle==='3door'?'3door':'5door';
    return `<fieldset class="welcome-field"><legend>Your Jimny</legend><div class="welcome-doors">
${[['5door','5-door','XL · Nomade'],['3door','3-door','Sierra · JB74']].map(([value,title,detail])=>`<label class="welcome-door"><input type="radio" name="${prefix}-body" value="${value}"${value===body?' checked':''}><span><b>${title}</b><small>${detail}</small></span></label>`).join('')}
</div></fieldset>
<label class="welcome-field" for="${prefix}-region"><span class="welcome-label">Where you'll buy and fit parts</span><select id="${prefix}-region">${window.JIMNY_REGIONS.map(r=>`<option value="${r.code}"${r.code===window.jimnyRegion?' selected':''}>${esc(r.name)}</option>`).join('')}</select></label>`;
  }

  // Apply through the existing controls so their handlers (prices, sources, body builds) run once.
  function applyAnswers(container,prefix){
    const region=container.querySelector(`#${prefix}-region`).value,body=container.querySelector(`input[name="${prefix}-body"]:checked`)?.value;
    if(region&&regionSelect.value!==region){regionSelect.value=region;regionSelect.dispatchEvent(new Event('change',{bubbles:true}));}
    if(body&&bodySelect.value!==body){bodySelect.value=body;bodySelect.dispatchEvent(new Event('change',{bubbles:true}));}
    try{localStorage.setItem('thatsuvmod-region',regionSelect.value);}catch{/* Region still applies for this visit. */}
  }

  function trackBodyImage(container,prefix){
    const img=container.querySelector('.welcome-car img');if(!img)return;
    container.addEventListener('change',e=>{if(e.target.name===`${prefix}-body`){img.src=carImage(e.target.value);img.alt=`A ${e.target.value==='3door'?'three':'five'}-door Jimny in the jimnygami garage`;}});
  }

  function renderPage(){
    const page=document.createElement('section');
    page.className='welcome-page';page.id='welcome';page.setAttribute('aria-labelledby','welcomeTitle');
    const body=bodyStyle==='3door'?'3door':'5door';
    page.innerHTML=`<div class="welcome-top"><span class="site-logo welcome-logo"><span class="site-logo-art"><img src="assets/jimnygami-logo-sticker.webp" width="1550" height="341" alt="jimnygami"></span></span><button type="button" class="welcome-skip" data-welcome-go="garage" data-welcome-skip><span class="welcome-skip-long">Skip to the Garage</span><span class="welcome-skip-short">Skip</span> ${arrow}</button></div>
<div class="welcome-main">
 <div class="welcome-copy">
  <p class="welcome-eyebrow">Independent Jimny modification guide</p>
  <h1 id="welcomeTitle" tabindex="-1">Build it<br>here first.</h1>
  <p class="welcome-lede">Try every mod on a live 3D Jimny, then find the parts and the people who fit them. Spend once you're sure.</p>
  <form class="welcome-form" data-welcome-form>${questions('welcomePage')}
   <div class="welcome-actions"><button type="submit" class="welcome-primary" data-welcome-go="garage">Open the Garage ${arrow}</button>
   <nav class="welcome-routes" aria-label="Other places to start"><button type="button" data-welcome-go="parts">Browse parts</button><button type="button" data-welcome-go="fitters">Find a fitter</button><a href="trip-planner.html" data-welcome-go="trip">Plan a trip</a></nav></div>
  </form>
 </div>
 <figure class="welcome-car"><img src="${carImage(body)}" width="800" height="600" alt="A ${body==='3door'?'three':'five'}-door Jimny in the jimnygami garage" fetchpriority="high"><figcaption>Rendered from the live 3D model you'll edit in the Garage</figcaption></figure>
</div>
<ol class="welcome-features">
 <li><b>Try it in 3D</b><span>Try wheels, racks, bumpers, paint and decals on the car before you spend.</span></li>
 <li><b>Find parts and fitters</b><span>${partCount} parts and products, plus sellers, workshops and owner clubs.</span></li>
 <li><b>Plan the trip</b><span>${tripCount?`${numberWords[tripCount]||tripCount} India road-trip ideas`:'India road-trip ideas'} with packing and prep checklists.</span></li>
</ol>`;
    const outside=[document.querySelector('.site-header'),document.querySelector('.wrap'),...document.querySelectorAll('body>footer,.planner-main>footer')].filter(Boolean);
    outside.forEach(el=>{el.inert=true;});
    document.body.prepend(page);trackBodyImage(page,'welcomePage');
    const close=(go,{apply=true}={})=>{
      if(apply)applyAnswers(page,'welcomePage');
      markSeen();outside.forEach(el=>{el.inert=false;});page.remove();delete root.dataset.welcome;
      if(go==='trip')return;// The link navigates.
      const mode={garage:'garage',parts:'parts',fitters:'fitters'}[go]||'garage';
      history.replaceState(null,'',location.pathname+location.search+'#'+MODE_TARGETS[mode]);
      setWorkbenchMode(mode,{history:false});
      (mode==='garage'?document.querySelector('#garage h1,#garage [role=tab][aria-selected=true]'):$(MODE_TARGETS[mode]))?.focus?.({preventScroll:true});
    };
    page.addEventListener('submit',e=>{e.preventDefault();close('garage');});
    page.addEventListener('click',e=>{
      const go=e.target.closest('[data-welcome-go]');if(!go||go.type==='submit')return;
      if(go.tagName!=='A')e.preventDefault();
      close(go.dataset.welcomeGo,{apply:!go.hasAttribute('data-welcome-skip')});
    });
    requestAnimationFrame(()=>page.querySelector('#welcomeTitle').focus({preventScroll:true}));
  }

  function renderSheet(){
    const sheet=document.createElement('dialog');
    sheet.className='welcome-sheet';sheet.id='welcome';sheet.setAttribute('aria-labelledby','welcomeSheetTitle');
    sheet.innerHTML=`<form method="dialog" class="welcome-form" data-welcome-form><span class="welcome-grip" aria-hidden="true"></span>
<p class="welcome-eyebrow">First time here?</p>
<h2 id="welcomeSheetTitle">Build it here first.</h2>
<p class="welcome-lede">Try every mod on this 3D Jimny before you spend, then find who sells and fits it near you. Two quick questions so prices and sellers make sense:</p>
${questions('welcomeSheet')}
<div class="welcome-actions"><button type="submit" class="welcome-primary" value="start">Start building ${arrow}</button><button type="submit" class="welcome-quiet" value="look" formnovalidate>Just look around</button></div></form>`;
    document.body.append(sheet);
    sheet.addEventListener('close',()=>{if(sheet.returnValue==='start')applyAnswers(sheet,'welcomeSheet');markSeen();sheet.remove();delete root.dataset.welcome;});
    sheet.addEventListener('cancel',()=>{sheet.returnValue='look';});
    sheet.showModal();
  }

  // Re-entry from the header setup or the footer: show the full page again.
  document.addEventListener('click',e=>{
    const link=e.target.closest('a[href$="#welcome"]');if(!link||document.getElementById('welcome'))return;
    e.preventDefault();root.dataset.welcome='page';renderPage();
  });

  if(variant==='page')renderPage();
  else if(variant==='sheet')renderSheet();
})();
