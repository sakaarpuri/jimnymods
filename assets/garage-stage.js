/* Garage stage (Direction A frames 03, 04, 07–10).
   One arrangement at every width, styled by breakpoint in garage-stage.css:
   - the car carries Exterior/Cabin and an "Angles & scenery" panel holding the
     other views, background and area shortcuts;
   - a build bar gives the count, estimate, Compare with stock and Drive this build;
   - categories are a vertical rail on desktop and a pinned chip row on phones.
   Below 900px the Garage scrolls as one page, and once the car scrolls away the
   same live viewer docks as a thumbnail beside the chips. WebGL never
   re-initialises: the viewer's own ResizeObserver refits it on every resize.
   Existing nodes are relocated, never cloned, so their handlers and state stay shared. */
(() => {
  'use strict';
  const $=id=>document.getElementById(id),body=document.body;
  const phone=matchMedia('(max-width:899px)'),wide=matchMedia('(min-width:1100px)');
  const rail=document.querySelector('.planner-rail'),studio=$('spin360'),mount=$('viewer3d');
  const garage=$('garage'),strip=document.querySelector('.garage-categories');
  if(!rail||!studio||!mount||!garage||!strip)return;
  // One explanation per device, with a compact reminder that can reopen it.
  const guidance=document.createElement('aside');guidance.className='preview-guidance';
  guidance.innerHTML='<button type="button" class="preview-summary" aria-expanded="false" aria-controls="previewExplanation">Preview, not exact</button><div id="previewExplanation" class="preview-explanation"><p><strong>3D preview only.</strong> Colours, proportions and fit may differ from the real Jimny and parts. Check product details and fitment with the seller or installer before buying or modifying your car.</p><button type="button" data-preview-got-it>Got it</button></div>';
  const summary=guidance.querySelector('.preview-summary'),explanation=guidance.querySelector('#previewExplanation'),ackKey='jimnygami-preview-ack-v1';
  let acknowledged=false;try{acknowledged=localStorage.getItem(ackKey)==='1';}catch{}
  function showExplanation(show){explanation.hidden=!show;summary.hidden=show;summary.setAttribute('aria-expanded',String(show));}
  showExplanation(!acknowledged);
  const purpose=document.querySelector('.workbench-purpose');if(purpose)purpose.replaceWith(guidance);else document.querySelector('.site-header').after(guidance);
  guidance.querySelector('[data-preview-got-it]').addEventListener('click',()=>{try{localStorage.setItem(ackKey,'1');}catch{}showExplanation(false);summary.focus({preventScroll:true});});
  summary.addEventListener('click',()=>{showExplanation(true);guidance.querySelector('[data-preview-got-it]').focus({preventScroll:true});});
  const camera=rail.querySelector('.camera-controls'),cabinViews=rail.querySelector('.cabin-viewpoints'),scenery=rail.querySelector('.scenery-picker');
  const stage=rail.querySelector('.garage-stage-actions'),tray=rail.querySelector('.garage-selection-tray');
  const hotspot=studio.querySelector('.garage-hotspot-toggle'),expand=$('expandViewer'),hint=studio.querySelector('.garage-pick-direction');
  const exterior=camera.querySelector('[data-camera="orbit"]'),cabin=camera.querySelector('[data-camera="interior"]');
  cabin.addEventListener('click',()=>openGarageCategory('cabin'));
  const drive=stage.querySelector('a[href="game.html"]'),compare=stage.querySelector('[data-garage-stock]'),saveImage=stage.querySelector('[data-garage-image]');
  const heading=garage.querySelector('.garage-heading'),looks=garage.querySelector('.garage-looks-launch'),intro=garage.querySelector('.garage-intro');
  const drawerHead=document.querySelector('#buildDrawer .drawer-head');
  const icon=(d,size=22)=>`<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${d}"/></svg>`;
  const ICON={angles:'M4 7h16M4 12h11M4 17h7',close:'M6 6l12 12M18 6 6 18',camera:'M4 8h3l2-3h6l2 3h3v11H4z M12 16.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7',expand:'M8 3H3v5M16 3h5v5M3 16v5h5M21 16v5h-5',arrow:'M5 12h14M13 6l6 6-6 6'};

  // --- Pieces added to the stage --------------------------------------------
  const viewSwitch=document.createElement('div');viewSwitch.className='garage-view-switch';viewSwitch.setAttribute('role','group');viewSwitch.setAttribute('aria-label','Outside or inside the car');
  const anglesOpen=document.createElement('button');anglesOpen.type='button';anglesOpen.className='garage-angles-open';anglesOpen.setAttribute('aria-haspopup','dialog');anglesOpen.setAttribute('aria-expanded','false');
  anglesOpen.innerHTML=`${icon(ICON.angles,20)}<span>Angles & scenery</span>`;
  const top=document.createElement('div');top.className='garage-stage-top';top.append(viewSwitch,anglesOpen);
  const tools=document.createElement('div');tools.className='garage-stage-tools';
  const angles=document.createElement('dialog');angles.className='garage-angles';angles.setAttribute('aria-labelledby','garageAnglesTitle');
  angles.innerHTML=`<div class="garage-angles-head"><h2 id="garageAnglesTitle">Angles & scenery</h2><button type="button" class="garage-angles-close" aria-label="Close angles and scenery">${icon(ICON.close)}</button></div>
<div class="garage-angles-tabs" role="tablist" aria-label="View settings"><button type="button" id="angleTabCamera" role="tab" aria-selected="true" aria-controls="anglePanelCamera" data-angle-tab="camera">Camera angles</button><button type="button" id="angleTabScenery" role="tab" aria-selected="false" aria-controls="anglePanelScenery" tabindex="-1" data-angle-tab="scenery">Scenery</button></div>
<p class="garage-angles-ready" role="status" hidden></p>
<div id="anglePanelCamera" role="tabpanel" aria-labelledby="angleTabCamera" data-angle-panel="camera">
<section aria-labelledby="garageAnglesViews"><h3 id="garageAnglesViews">Exterior</h3><div class="garage-angles-views"></div></section>
<section aria-labelledby="garageAnglesCabin"><h3 id="garageAnglesCabin">Cabin</h3><div class="garage-angles-cabin"></div></section>
<section aria-labelledby="garageAnglesInspect"><h3 id="garageAnglesInspect">Doors & cutaways</h3><div class="garage-angles-inspect"></div></section>
<section aria-labelledby="garageAnglesTools"><h3 id="garageAnglesTools">On the car</h3><div class="garage-angles-tools"></div></section></div>
<div id="anglePanelScenery" role="tabpanel" aria-labelledby="angleTabScenery" data-angle-panel="scenery" hidden><div class="garage-angles-scene"></div></div>`;

  // Reuse the camera containers and the renderer's delegated camera handler.
  // All angles are visible in a fixed grid rather than hidden in nested menus.
  const viewPaths={
    orbit:'M4 8 12 4l8 4v9l-8 4-8-4z M4 8l8 4 8-4 M12 12v9',
    front:'M5 17v3 M19 17v3 M3 17V9l3-5h12l3 5v8z M4 9h16 M7 13h2 M15 13h2',
    side:'M3 17V9h3l2-4h9l4 6v6 M8 5v6h12 M12 5v6 M3 11h4 M7 20a3 3 0 1 0 0-6 3 3 0 0 0 0 6 M17 20a3 3 0 1 0 0-6 3 3 0 0 0 0 6',
    rear:'M5 17v3 M19 17v3 M3 17V5h18v12z M6 8h4v4H6z M15 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8',
    interior:'M12 5a7 7 0 1 0 0 14 7 7 0 0 0 0-14 M6 9l6 3 6-3 M12 12v7 M9 12h6',
    passenger:'M8 4h4v9h7v5H6V5z M9 18v3 M17 18v3',
    seats:'M5 4h4v9h3v5H3V5z M16 4h4v9h2v5h-8V5z M6 18v3 M18 18v3',
    storage:'M3 8h18v12H3z M3 8l3-5h12l3 5 M9 8v4h6V8 M8 16h8',
    door:'M5 3h10l4 5v13H5z M6 10h12 M10 14h3',
    cutaway:'M3 18V9l4-5h10l4 5v9 M3 10h18 M8 5v12 M16 5v12 M3 18h18 M7 21v-3 M17 21v-3'
  };
  const angleButton=([id,label,path=id])=>`<button type="button" data-camera="${id}" aria-pressed="false">${icon(viewPaths[path],24)}<span>${label}</span></button>`;
  camera.innerHTML=[['orbit','Overview'],['front','Front'],['side','Side'],['rear','Rear']].map(angleButton).join('');
  cabinViews.innerHTML=[['interior','Driver'],['passenger','Passenger'],['seats','Seats'],['storage','Storage']].map(angleButton).join('');
  angles.querySelector('.garage-angles-inspect').innerHTML=[['driver-door','Driver door','door'],['passenger-door','Passenger door','door'],['cutaway','Cabin cutaway','cutaway'],['cargo','Boot cutaway','cutaway']].map(angleButton).join('');

  // Small native SVG illustrations make every setting recognisable immediately,
  // without fetching full-size HDR photographs just to draw a picker thumbnail.
  const sceneArt={
    gray:'<rect width="160" height="72" fill="#aab1b2"/><path d="M0 48Q80 30 160 48v24H0" fill="#d6dada"/><path d="M18 18h28v18H18z M114 18h28v18h-28z" fill="#eef0ec"/>',
    studio:'<rect width="160" height="72" fill="#343e3b"/><path d="M0 49h160v23H0" fill="#65716b"/><path d="M25 49V13h110v36 M37 49V24h86v25" fill="none" stroke="#a9b5a6" stroke-width="4"/><path d="M49 17h20 M91 17h20" stroke="#f1edcd" stroke-width="4"/>',
    mountains:'<rect width="160" height="72" fill="#adc4cd"/><path d="m0 55 42-43 32 34 29-23 57 39v10H0" fill="#64796b"/><path d="m24 30 18-18 16 18-16-5z" fill="#e3e9df"/><path d="M0 60q40-20 80 0t80 0v12H0" fill="#89986b"/>',
    urban:'<rect width="160" height="72" fill="#c1cfd0"/><path d="M0 59h160v13H0" fill="#8b9187"/><path d="M10 57V21h32v36 M49 57V11h28v46 M85 57V26h27v31 M120 57V17h29v40" fill="#a48f77"/><path d="M17 29h18 M17 39h18 M56 20h14 M56 31h14 M92 35h13 M127 26h15 M127 37h15" stroke="#e3d9bf" stroke-width="3"/>',
    desert:'<rect width="160" height="72" fill="#d6c9a8"/><circle cx="124" cy="18" r="9" fill="#f1e7c9"/><path d="M0 57q35-47 85-5t75-9v29H0" fill="#b79a69"/><path d="M0 65q63-33 103-10t57 0v17H0" fill="#d3b57c"/>'
  };
  const sceneSelect=scenery.querySelector('select');sceneSelect.hidden=true;
  const sceneChoices=document.createElement('div');sceneChoices.className='garage-scene-choices';sceneChoices.setAttribute('role','group');sceneChoices.setAttribute('aria-label','Scenery');
  sceneChoices.innerHTML=[...sceneSelect.options].map(option=>`<button type="button" data-angle-scenery="${option.value}" aria-pressed="false"><svg viewBox="0 0 160 72" aria-hidden="true">${sceneArt[option.value]}</svg><span>${option.textContent}</span><i aria-hidden="true">✓</i></button>`).join('');
  scenery.prepend(sceneChoices);
  sceneChoices.addEventListener('click',e=>{const button=e.target.closest('[data-angle-scenery]');if(!button)return;sceneSelect.value=button.dataset.angleScenery;sceneSelect.dispatchEvent(new Event('change',{bubbles:true}));});

  function setAngleTab(id,{focus=false}={}){
    angles.querySelectorAll('[data-angle-tab]').forEach(tab=>{const on=tab.dataset.angleTab===id;tab.setAttribute('aria-selected',String(on));tab.tabIndex=on?0:-1;if(on&&focus)tab.focus();});
    angles.querySelectorAll('[data-angle-panel]').forEach(panel=>{panel.hidden=panel.dataset.anglePanel!==id;});
  }
  angles.querySelector('.garage-angles-tabs').addEventListener('click',e=>{const tab=e.target.closest('[data-angle-tab]');if(tab)setAngleTab(tab.dataset.angleTab);});
  angles.querySelector('.garage-angles-tabs').addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;e.preventDefault();const current=angles.querySelector('[data-angle-tab][aria-selected=true]').dataset.angleTab;setAngleTab(e.key==='Home'?'camera':e.key==='End'?'scenery':current==='camera'?'scenery':'camera',{focus:true});});
  function syncAngleChoices(){
    const state=window.jimny3D?.getState(),ready=!!state?.detailedReady&&!state.modelLoading;
    angles.querySelectorAll('[data-camera]').forEach(button=>{button.setAttribute('aria-pressed',String(button.dataset.camera===state?.view));button.disabled=!ready;});
    sceneChoices.querySelectorAll('button').forEach(button=>{const on=button.dataset.angleScenery===(state?.scenery||sceneSelect.value);button.setAttribute('aria-pressed',String(on));button.setAttribute('aria-busy',String(on&&!!state?.sceneryLoading));button.disabled=!ready;});
    const status=angles.querySelector('.garage-angles-ready');status.hidden=ready;status.textContent=state?.assetError?'Preview unavailable. Reload to try again.':'Loading the 3D preview…';
  }
  new MutationObserver(syncAngleChoices).observe(mount,{attributes:true,attributeFilter:['data-camera-view','data-scenery','data-scenery-loading','aria-busy']});
  window.addEventListener('jimny-model-ready',syncAngleChoices);syncAngleChoices();
  const buildbar=document.createElement('div');buildbar.className='garage-buildbar';
  buildbar.innerHTML='<button type="button" class="garage-buildbar-summary" data-build-open><b></b><span></span></button>';
  const dockBackdrop=document.createElement('div');dockBackdrop.className='garage-dock-backdrop';document.body.append(dockBackdrop);
  const thumb=document.createElement('button');thumb.type='button';thumb.className='garage-thumb';thumb.setAttribute('aria-label','Show the car');thumb.innerHTML=icon(ICON.expand)+'<span class="garage-thumb-label">View your Jimny</span>';
  const fitted=document.createElement('div');fitted.className='garage-fitted';fitted.setAttribute('role','status');fitted.setAttribute('aria-live','polite');
  fitted.innerHTML='<img alt="" width="800" height="600"><div class="garage-fitted-copy"><b></b><span></span></div><button type="button" class="garage-fitted-undo">Undo</button><button type="button" class="garage-fitted-view">View car</button>';
  if(hint)hint.textContent='Drag to turn · tap a part to edit';
  if(looks)looks.innerHTML=`<span class="looks-long">Or start from one of ${PACKAGES.length} ready-made looks</span><span class="looks-short">Ready-made looks</span>${icon(ICON.arrow,18)}`;
  if(compare)compare.textContent='Compare with stock';
  if(saveImage){saveImage.classList.add('garage-icon-button');saveImage.setAttribute('aria-label','Save an image of your build');saveImage.innerHTML=icon(ICON.camera);}

  // Fixed homes: viewer controls on the car, secondary controls in the panel.
  viewSwitch.append(exterior,cabin);studio.append(top,tools);
  function syncViewSwitch(){
    const view=window.jimny3D?.getState().view||'orbit';
    const inside=['interior','passenger','driver-door','passenger-door','cabin','cutaway','doors','doors-cutaway','headliner-cutaway','cargo','touring','seats','seatbacks','console','footwell','headliner','storage'].includes(view);
    for(const [button,on] of [[exterior,!inside],[cabin,inside]]){
      if(button.classList.contains('active')!==on)button.classList.toggle('active',on);
      if(button.getAttribute('aria-pressed')!==String(on))button.setAttribute('aria-pressed',String(on));
    }
  }
  // The renderer marks the exact angle; these two controls describe the broader view.
  new MutationObserver(records=>{if(records.some(r=>r.target.hasAttribute('data-camera')))syncViewSwitch();}).observe(body,{subtree:true,attributes:true,attributeFilter:['class']});
  window.addEventListener('jimny-model-ready',syncViewSwitch);syncViewSwitch();
  angles.querySelector('.garage-angles-views').append(camera);
  angles.querySelector('.garage-angles-cabin').append(cabinViews);
  angles.querySelector('.garage-angles-scene').append(scenery);
  syncAngleChoices();
  drawerHead.after(tray);
  stage.hidden=true;// Its controls now live on the stage; the empty row stays for older selectors.

  // Breakpoint homes.
  let mode='';
  function place(){
    const next=phone.matches?'phone':'desktop';
    body.classList.toggle('phone-garage',next==='phone');
    if(next==='phone'){
      angles.style.removeProperty('max-height');
      angles.querySelector('.garage-angles-tools').append(...[hotspot,expand,compare,saveImage].filter(Boolean));
      buildbar.append(drive);document.body.append(buildbar,thumb,fitted);document.body.append(angles);
      garage.prepend(strip);// Chips straight under the car.
      heading.querySelector('h1').after(looks);
    }else{
      angles.querySelector('.garage-angles-tools').append(...[hotspot].filter(Boolean));
      tools.append(...[saveImage,expand].filter(Boolean));
      buildbar.append(...[compare,drive].filter(Boolean));studio.append(buildbar,fitted,angles);thumb.remove();
      rail.after(strip);// Vertical rail between the car and the panel.
      intro.after(looks);
      setDocked(false);
    }
    if(mode&&mode!==next&&angles.open)angles.close();
    mode=next;refreshBar();requestAnimationFrame(checkDock);
  }

  // --- Build bar: the same count and estimate text the build summary uses ----
  function refreshBar(){
    const count=buildSelectionCount();
    const line=!count?'Nothing selected yet':'Prices need confirmation';
    buildbar.querySelector('b').textContent=count?`${count} item${count===1?'':'s'} in build`:'Stock build';
    buildbar.querySelector('span').textContent=line;
    buildbar.querySelector('.garage-buildbar-summary').setAttribute('aria-label',`My build: ${buildbar.querySelector('b').textContent}. ${line}. Open build summary`);
  }
  window.addEventListener('jimny-build-change',refreshBar);

  // --- Phone: dock the live viewer as a thumbnail ----------------------------
  let docked=false,frame=0;
  function setDocked(on){if(on===docked)return;docked=on;body.classList.toggle('garage-car-docked',on);}
  function checkDock(){
    frame=0;
    if(mode!=='phone'||!['garage','explore'].includes(body.dataset.mode)||body.classList.contains('viewer-expanded')){setDocked(false);return;}
    const stripTop=body.dataset.mode==='explore'?parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--site-header-h'))||64:parseFloat(getComputedStyle(strip).top)||0;
    // The stage keeps its height while docked, so this threshold never moves.
    setDocked(studio.getBoundingClientRect().bottom<=stripTop+(body.dataset.mode==='garage'?strip.offsetHeight:0));
  }
  addEventListener('scroll',()=>{if(!frame)frame=requestAnimationFrame(checkDock);},{passive:true});
  addEventListener('resize',()=>{if(!frame)frame=requestAnimationFrame(checkDock);});
  function showCar(){endFitted();scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});}
  thumb.addEventListener('click',showCar);
  // A new category is a new view: keep the chips pinned rather than jumping to the car.
  strip.addEventListener('click',e=>{
    if(mode!=='phone'||!docked||!e.target.closest('[data-garage-category]'))return;
    requestAnimationFrame(()=>{const y=garage.getBoundingClientRect().top+scrollY-(parseFloat(getComputedStyle(strip).top)||0);scrollTo({top:Math.max(y,studio.offsetHeight),behavior:'auto'});});
  });

  // --- Just fitted -------------------------------------------------------------
  // Desktop and an in-view phone car: a toast on the stage with Undo.
  // Phone with the car docked: the thumbnail grows into a card with Undo and View car.
  let fittedTimer=0;
  function endFitted(){clearTimeout(fittedTimer);body.classList.remove('garage-peek');fitted.classList.remove('show');}
  function showFitted(id){
    const part=modById[id],count=buildSelectionCount(),peek=mode==='phone'&&docked;
    fitted.querySelector('img').src=garagePartImage(id);
    fitted.querySelector('b').textContent=`${part?.name||'Part'} fitted`;
    fitted.querySelector('span').textContent=`Shown on ${peek?'your':'the'} car · ${count} item${count===1?'':'s'} in your build`;
    body.classList.toggle('garage-peek',peek);
    if(!peek&&mode==='phone')document.body.append(fitted);else if(!peek)studio.append(fitted);
    fitted.classList.add('show');clearTimeout(fittedTimer);fittedTimer=setTimeout(endFitted,peek?3200:4200);
  }
  fitted.addEventListener('pointerenter',()=>clearTimeout(fittedTimer));
  fitted.addEventListener('pointerleave',()=>{if(fitted.classList.contains('show'))fittedTimer=setTimeout(endFitted,1600);});
  fitted.addEventListener('focusin',()=>clearTimeout(fittedTimer));
  fitted.querySelector('.garage-fitted-undo').addEventListener('click',()=>{endFitted();undoLastChange();refreshGarage();});
  fitted.querySelector('.garage-fitted-view').addEventListener('click',showCar);
  // Runs after index.html's quick-fit handler, so state already reflects the tap.
  document.addEventListener('click',e=>{
    const fit=e.target.closest('[data-garage-fit]');
    if(fit&&state[fit.dataset.garageFit])showFitted(fit.dataset.garageFit);
  });

  // --- Angles & scenery: a sheet on phones, a panel under its button on desktop --
  function fitAnglesPanel(){
    if(mode!=='desktop'||!angles.open)return;
    const bottom=Math.min(innerHeight,studio.getBoundingClientRect().bottom)-16;
    angles.style.maxHeight=Math.max(120,bottom-angles.getBoundingClientRect().top)+'px';
  }
  function closeAngles(){if(angles.open)angles.close();}
  anglesOpen.addEventListener('click',()=>{
    if(angles.open){closeAngles();return;}
    syncAngleChoices();
    if(mode==='phone')angles.showModal();else angles.show();
    fitAnglesPanel();
    anglesOpen.setAttribute('aria-expanded','true');
  });
  angles.addEventListener('close',()=>{anglesOpen.setAttribute('aria-expanded','false');if(angles.contains(document.activeElement)||document.activeElement===document.body)anglesOpen.focus({preventScroll:true});});
  angles.querySelector('.garage-angles-close').addEventListener('click',closeAngles);
  angles.addEventListener('click',e=>{
    if(e.target===angles){const r=angles.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeAngles();return;}
    // Choosing a view or tool shows its result on the car straight away.
    if((mode==='phone'&&e.target.closest('[data-camera],.garage-hotspot-toggle'))||e.target.closest('.viewer-fullscreen,[data-garage-stock],[data-garage-image]'))closeAngles();
  });
  angles.addEventListener('keydown',e=>{if(e.key==='Escape'&&!angles.matches(':modal')){e.preventDefault();closeAngles();}});
  document.addEventListener('pointerdown',e=>{if(angles.open&&mode==='desktop'&&!angles.contains(e.target)&&!anglesOpen.contains(e.target))closeAngles();});
  addEventListener('resize',fitAnglesPanel);
  scenery?.addEventListener('change',()=>{if(mode==='phone')closeAngles();});

  // Leaving the Garage returns to the shared app layout from the top.
  new MutationObserver(()=>{if(!['garage','explore'].includes(body.dataset.mode)){setDocked(false);closeAngles();if(mode==='phone')scrollTo(0,0);}else checkDock();}).observe(body,{attributes:true,attributeFilter:['data-mode']});
  // index.html re-places the strip at 1100px first; place() runs after it.
  phone.addEventListener('change',place);wide.addEventListener('change',place);
  place();
  // #garage is also an element id, so the browser would jump past the car on load.
  if(mode==='phone'&&body.dataset.mode==='garage'){
    if('scrollRestoration' in history)history.scrollRestoration='manual';
    const toTop=()=>{if(location.hash==='#garage'||!location.hash)scrollTo(0,0);checkDock();};
    toTop();addEventListener('load',toTop,{once:true});
  }
})();
