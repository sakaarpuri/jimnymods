/* One navigation system and one editable build, across looks, parts and sources. */
(() => {
 'use strict';
 const $=id=>document.getElementById(id),esc=escHtml,main=document.querySelector('.planner-main'),nav=document.getElementById('siteNav');
 document.querySelector('.resource-nav')?.remove();
 // Move the already-bound scenery selector into the visible viewer toolbar.
 // Keeping the same node preserves the renderer's change listener and state.
 const scene=document.querySelector('.scenery-picker'),camera=document.querySelector('.planner-rail>.camera-controls');
 if(scene&&camera){scene.classList.add('garage-backgrounds');scene.querySelector('label').textContent='Background';camera.after(scene);}
 const pickHint=document.createElement('p');pickHint.className='garage-pick-direction';pickHint.textContent='Click a part on the car to edit · drag to rotate';document.getElementById('spin360').append(pickHint);
 const cabinViews=document.createElement('div');cabinViews.className='cabin-viewpoints';cabinViews.setAttribute('aria-label','Cabin viewpoints');cabinViews.innerHTML=[['interior','Driver'],['passenger','Passenger'],['driver-door','Driver door'],['passenger-door','Passenger door'],['cutaway','Cutaway']].map(([id,label])=>`<button type="button" data-camera="${id}">${label}</button>`).join('');camera.after(cabinViews);
 camera.querySelector('[data-camera="interior"]').textContent='Cabin';
 camera.querySelector('[data-camera="storage"]')?.setAttribute('data-camera','cargo');
 const promise=document.createElement('p');promise.className='workbench-purpose';promise.innerHTML='<strong>Visualise your Jimny modifications.</strong> Explore a look, then mix parts, colours and decals to make it yours.';document.querySelector('body>header').after(promise);
 const nameForm=document.createElement('form');nameForm.className='garage-name-decal';nameForm.innerHTML='<label for="garageNameDecal">Your name on the front doors <small>Optional · up to 20 characters · visible in saved images and Drive</small></label><div><input id="garageNameDecal" name="nameDecal" maxlength="40" placeholder="Your trail name" autocomplete="off"><button type="submit">Apply name</button><button type="button" data-clear-name>Remove</button></div><p class="name-decal-status" role="status" aria-live="polite"></p>';document.getElementById('graphicsControls').prepend(nameForm);
 const nameInput=nameForm.querySelector('input'),nameStatus=nameForm.querySelector('[role=status]');
 function syncName(){if(document.activeElement!==nameInput)nameInput.value=designState.nameDecal||'';nameForm.querySelector('[data-clear-name]').disabled=!designState.nameDecal;}
 nameForm.onsubmit=e=>{e.preventDefault();rememberUndo();designState.nameDecal=Array.from(nameInput.value.normalize('NFC').replace(/[^\p{L}\p{M}\p{N} ._'’-]/gu,'').trim()).slice(0,20).join('');nameInput.value=designState.nameDecal;update();window.jimny3D?.view('side');nameStatus.textContent=designState.nameDecal?'Name applied to both front doors. Saved with your build; visible in exports.':'Enter a name to add a door decal.';syncName();};
 nameForm.querySelector('[data-clear-name]').onclick=()=>{rememberUndo();designState.nameDecal='';nameInput.value='';update();nameStatus.textContent='Name decal removed.';syncName();};window.addEventListener('jimny-build-change',syncName);syncName();
 // Lettering style and size for the door name. Each style previews the typed name
 // in its own font; choosing one applies immediately and is saved with the build.
 const nameStyles=globalThis.JimnyNameDecalStyles,nameStyle=document.createElement('div');nameStyle.className='name-decal-style';
 nameStyle.innerHTML=`<fieldset class="name-decal-fonts"><legend>Lettering</legend><div>${nameStyles.FONTS.map(f=>`<button type="button" data-name-font="${f.id}" aria-pressed="false"><span class="name-font-sample" style="font-family:'${f.family}',sans-serif;font-weight:${f.weight}"></span><small>${esc(f.label)}</small></button>`).join('')}</div></fieldset><fieldset class="name-decal-sizes"><legend>Size on the door</legend><div>${nameStyles.SIZES.map(z=>`<button type="button" data-name-size="${z.id}" aria-pressed="false" aria-label="${esc(z.name)}">${esc(z.label)}</button>`).join('')}</div></fieldset>`;
 nameForm.querySelector('.name-decal-status').before(nameStyle);
 nameStyles.FONTS.forEach(f=>nameStyles.load(f.id));
 function syncNameStyle(){
  const chosen=nameStyles.clean(designState),sample=(nameInput.value.trim()||designState.nameDecal||'Your name').slice(0,20);
  nameStyle.querySelectorAll('[data-name-font]').forEach(b=>{b.setAttribute('aria-pressed',String(b.dataset.nameFont===chosen.nameFont));b.querySelector('.name-font-sample').textContent=sample;});
  nameStyle.querySelectorAll('[data-name-size]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.nameSize===chosen.nameSize)));
 }
 nameInput.addEventListener('input',syncNameStyle);window.addEventListener('jimny-build-change',syncNameStyle);
 nameStyle.addEventListener('click',e=>{
  const fontButton=e.target.closest('[data-name-font]'),sizeButton=e.target.closest('[data-name-size]');if(!fontButton&&!sizeButton)return;
  rememberUndo();
  if(fontButton)designState.nameFont=fontButton.dataset.nameFont;else designState.nameSize=sizeButton.dataset.nameSize;
  // A typed but unapplied name is applied with its first style choice.
  if(!designState.nameDecal&&nameInput.value.trim()){nameForm.requestSubmit();return;}
  update();window.jimny3D?.view('side');syncNameStyle();
  if(designState.nameDecal){const c=nameStyles.clean(designState);nameStatus.textContent=`${nameStyles.font(c.nameFont).label} lettering, ${nameStyles.size(c.nameSize).name.toLowerCase()} size. Saved with your build.`;}
 });
 syncNameStyle();
 document.addEventListener('click',e=>{if(e.target.closest('[data-remove-name-decal]'))nameForm.querySelector('[data-clear-name]').click();if(e.target.closest('[data-edit-name-decal]')){window.JimnyPartEditor?.close();openGarageCategory('graphics');document.querySelector('.planner-main').scrollTop=0;nameInput.focus({preventScroll:true});}});
 // The category picker and the direct-on-car editor are separate entry paths.
 // Both must show the visual choice before optional paint/finish controls.
 const grillePanel=$('grilleControls'),grilleGrid=grillePanel.querySelector('[aria-label="Grille choices"]'),surfaces=document.querySelector('.surface-controls'),surfaceHome=document.createComment('Shared surface editor home');surfaces.before(surfaceHome);
 const grilleAppearance=document.createElement('details');grilleAppearance.id='grilleAppearance';grilleAppearance.className='grille-appearance';grilleAppearance.innerHTML='<summary>More options <small>Colour, badge & finish</small></summary>';grilleAppearance.append(grillePanel.querySelector('.grille-colour-controls'));grillePanel.prepend(grilleGrid);grilleGrid.after(grilleAppearance);
 const grilleActions=document.createElement('div');grilleActions.className='grille-choice-actions';grilleActions.innerHTML='<button type="button" data-open-grille-appearance>Colour & finish</button><button type="button" data-source-design="grille">Buying options</button>';grilleGrid.before(grilleActions);
 let previousCategory='';
 function syncGarageCategory(){
  $('garage').dataset.category=garageCategory;
  // All black and Matte / gloss appear once: in Grilles' appearance panel or Paint's More options.
  const paintMore=$('paintMore');
  if(garageCategory==='grille'){if(surfaces.parentElement!==grilleAppearance)grilleAppearance.append(surfaces);}else if(garageCategory==='paint'&&paintMore){if(surfaces.parentElement!==paintMore)paintMore.append(surfaces);}else if(surfaces.previousSibling!==surfaceHome)surfaceHome.after(surfaces);
  if(previousCategory!==garageCategory)grilleAppearance.open=false;previousCategory=garageCategory;
 }
 document.addEventListener('click',e=>{if(!e.target.closest('[data-open-grille-appearance]'))return;grilleAppearance.open=true;grilleAppearance.scrollIntoView({block:'start',behavior:'instant'});grilleAppearance.querySelector('summary').focus({preventScroll:true});});
 syncGarageCategory();
 const overview=document.createElement('section');overview.id='buildOverview';overview.setAttribute('aria-labelledby','buildOverviewTitle');$('garageChoices').before(overview);
 let origin='';try{origin=sessionStorage.getItem('jimnygami-build-origin')||'';}catch{}
 const setOrigin=name=>{origin=name||'';try{sessionStorage.setItem('jimnygami-build-origin',origin);}catch{}};
 function selected(){return MODS.filter(m=>state[m.id]&&!m.designOnly);}
 function editTarget(id,tab='colour'){
  const m=modById[id],target=JimnySurfaceStyles.target(m?.visual||id);
  window.JimnyPartEditor?.openTarget(target,tab);main.scrollTop=0;
 }
 function renderOverview(){
  const items=selected();
  const appearance=[['body','Paint',selectedPaint,'colour'],['roof','Roof',designState.roofColour==='original'?'Body-matched':designState.roofColour,'colour'],['body','Graphics',designOption('decal',designState.decal)?.label||'None','variants'],['grille','Grille',selectedDesignOptions().find(o=>o.group==='grille')?.label||'Factory','variants'],['wheels','Wheels & tyres',designState.tyreType||'highway','variants']];
  overview.innerHTML=`<div class="build-overview-heading"><div><p class="flow-kicker">YOUR LIVE BUILD</p><h1 id="buildOverviewTitle" tabindex="-1">${origin?'Customising '+esc(origin):'Make it yours'}</h1></div><button type="button" data-mode-select="explore">Change look</button></div><p class="flow-muted">Edit any choice below, or click a part on the car. Your changes stay in this build.</p><h2 class="flow-section-title">Colours & style</h2><div class="build-appearance">${appearance.map(([target,name,value,tab])=>`<button type="button" data-build-target="${target}" data-build-tab="${tab}">${name==='Paint'||name==='Roof'?`<i style="background:${/^#[0-9a-f]{6}$/i.test(value)?value:selectedPaint}" aria-hidden="true"></i>`:''}<span><strong>${name}</strong><small>${esc(value)}</small></span><b aria-hidden="true">›</b></button>`).join('')}</div><div class="build-parts-heading"><h2 class="flow-section-title">Fitted & shortlisted <span>${items.length}</span></h2><button type="button" data-add-more-parts>Add parts</button></div><div class="build-fitted-parts">${items.length?items.map(m=>{const can=!m.market||cataloguePreviewKind(m,bodyStyle)!=='research-only';return `<article class="build-fitted-part">${can?`<button type="button" class="build-part-photo" data-edit-fitted="${m.id}"><img src="${garagePartImage(m.id)}" width="160" height="120" alt="Representative preview of ${esc(m.name)}" loading="lazy"></button>`:`<div class="build-part-photo source-photo" data-product-photo="${m.id}"></div>`}<div><h3>${esc(m.name)}</h3><p>${can?'Approximate 3D preview':'Shortlisted · no 3D model'}</p><div class="build-part-actions">${can?`<button type="button" data-edit-fitted="${m.id}">Edit</button>`:''}<button type="button" data-source-part="${m.id}">Buying options</button><button type="button" data-remove-part="${m.id}">Remove</button></div></div></article>`;}).join(''):'<p class="flow-muted">Factory hardware. Add a part or start with a ready-made look.</p>'}</div><div class="build-overview-actions"><button type="button" data-open-kits>Save build / parts kit</button><button type="button" data-build-open>Review all choices</button><a href="game.html">Drive this build</a></div>`;
  window.JimnyProductPhotos?.decorate(overview);
 }
 function editBuild(name){if(name)setOrigin(name);window.JimnyPartEditor?.close();openGarageCategory('popular');document.body.classList.add('build-overview');renderOverview();main.scrollTop=0;overview.querySelector('h1').focus({preventScroll:true});}
 const review=document.createElement('button');review.type='button';review.className='edit-build-launch';review.textContent='Edit my build';review.onclick=()=>editBuild();document.querySelector('.garage-selection-heading').append(review);
 function fitPart(id){if(!state[id])return;setWorkbenchMode('garage');const m=modById[id],visual=m?.visual||id;window.jimny3D?.view(PART_PREVIEW_ANGLES[visual]||'orbit');editTarget(id,['seats','doortrim','mats'].includes(visual)?'variants':'colour');}
 window.addEventListener('jimny-look-applied',e=>editBuild(e.detail?.name));
 window.addEventListener('jimny-build-change',()=>{renderOverview();});
 window.addEventListener('jimny-model-change',()=>{setOrigin('');renderOverview();});
 document.addEventListener('click',e=>{
  const target=e.target.closest('[data-build-target]');if(target)editTarget(target.dataset.buildTarget,target.dataset.buildTab);
  const fitted=e.target.closest('[data-edit-fitted]');if(fitted)fitPart(fitted.dataset.editFitted);
  if(e.target.closest('[data-add-more-parts]')){document.body.classList.remove('build-overview');openGarageCategory('popular');}
 },false);
 document.addEventListener('click',e=>{if(e.target.closest('[data-garage-category]'))document.body.classList.remove('build-overview');},true);
 // Source inspection must preserve the draft even when the catalogue uses
 // the full page rather than retaining a hidden half-width car column.
 let partsReturn=null;
 // Inspecting a part from the catalogue borrows the Garage viewer; closing it must put the shopper back on the same card.
 document.addEventListener('click',e=>{const trigger=e.target.closest('[data-part-preview]');if(!trigger||document.body.dataset.mode!=='parts')return;partsReturn={mode:'parts',card:trigger.closest('[data-mod-id]')?.dataset.modId||'',x:window.scrollX,y:window.scrollY,main:document.querySelector('.planner-main')?.scrollTop||0};setWorkbenchMode('garage');},true);
 window.addEventListener('jimny-viewer-closed',()=>{const back=partsReturn;partsReturn=null;if(!back||document.body.dataset.mode!=='garage')return;setWorkbenchMode(back.mode,{history:true});requestAnimationFrame(()=>requestAnimationFrame(()=>{const main=document.querySelector('.planner-main');if(main)main.scrollTop=back.main;window.scrollTo(back.x,back.y);const card=back.card&&document.querySelector('#mods [data-mod-id="'+back.card+'"]');if(card){const r=card.getBoundingClientRect();if(r.bottom<0||r.top>window.innerHeight)card.scrollIntoView({block:'center',behavior:'instant'});}}));});
 new MutationObserver(()=>{
  const mode=document.body.dataset.mode;
  syncGarageCategory();
  document.body.classList.toggle('resource-page',['parts','sources','fitters','clubs','tools'].includes(mode));
  for(const b of nav.querySelectorAll('[data-mode-select="sources"]')){const active=['sources','fitters'].includes(mode);b.classList.toggle('active',active);if(active)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current');}
 }).observe(document.body,{attributes:true,attributeFilter:['data-mode']});
 window.JimnyWorkbenchFlow={editBuild,fitPart,editTarget,renderOverview};renderOverview();
 document.body.classList.toggle('resource-page',['parts','sources','fitters','clubs','tools'].includes(document.body.dataset.mode));
})();
