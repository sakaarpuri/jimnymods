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
  const camera=rail.querySelector('.camera-controls'),cabinViews=rail.querySelector('.cabin-viewpoints'),scenery=rail.querySelector('.scenery-picker');
  const stage=rail.querySelector('.garage-stage-actions'),tray=rail.querySelector('.garage-selection-tray');
  const hotspot=studio.querySelector('.garage-hotspot-toggle'),expand=$('expandViewer'),hint=studio.querySelector('.garage-pick-direction');
  const exterior=camera.querySelector('[data-camera="orbit"]'),cabin=camera.querySelector('[data-camera="interior"]');
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
<section aria-labelledby="garageAnglesViews"><h3 id="garageAnglesViews">Views</h3><div class="garage-angles-views"></div></section>
<section aria-labelledby="garageAnglesScene"><h3 id="garageAnglesScene">Background</h3><div class="garage-angles-scene"></div></section>
<section aria-labelledby="garageAnglesTools"><h3 id="garageAnglesTools">On the car</h3><div class="garage-angles-tools"></div></section>`;
  const buildbar=document.createElement('div');buildbar.className='garage-buildbar';
  buildbar.innerHTML='<button type="button" class="garage-buildbar-summary" data-build-open><b></b><span></span></button>';
  const thumb=document.createElement('button');thumb.type='button';thumb.className='garage-thumb';thumb.setAttribute('aria-label','Show the car');thumb.innerHTML=icon(ICON.expand);
  const fitted=document.createElement('div');fitted.className='garage-fitted';fitted.setAttribute('role','status');fitted.setAttribute('aria-live','polite');
  fitted.innerHTML='<img alt="" width="800" height="600"><div class="garage-fitted-copy"><b></b><span></span></div><button type="button" class="garage-fitted-undo">Undo</button><button type="button" class="garage-fitted-view">View car</button>';
  if(hint)hint.textContent='Drag to turn · tap a part to edit';
  if(looks)looks.innerHTML=`<span class="looks-long">Or start from one of ${PACKAGES.length} ready-made looks</span><span class="looks-short">Ready-made looks</span>${icon(ICON.arrow,18)}`;
  if(compare)compare.textContent='Compare with stock';
  if(saveImage){saveImage.classList.add('garage-icon-button');saveImage.setAttribute('aria-label','Save an image of your build');saveImage.innerHTML=icon(ICON.camera);}

  // Fixed homes: viewer controls on the car, secondary controls in the panel.
  viewSwitch.append(exterior,cabin);studio.append(top,tools);
  angles.querySelector('.garage-angles-views').append(camera,cabinViews);
  angles.querySelector('.garage-angles-scene').append(scenery);
  drawerHead.after(tray);
  stage.hidden=true;// Its controls now live on the stage; the empty row stays for older selectors.

  // Breakpoint homes.
  let mode='';
  function place(){
    const next=phone.matches?'phone':'desktop';
    body.classList.toggle('phone-garage',next==='phone');
    if(next==='phone'){
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
    const count=buildSelectionCount(),total=$('total')?.textContent||'',quote=total==='Quote required';
    const line=!count?'Nothing fitted yet':quote?'Quote required':`${total} ${mode==='phone'?'est.':'estimated'}`;
    buildbar.querySelector('b').textContent=count?`${count} part${count===1?'':'s'} fitted`:'Stock build';
    buildbar.querySelector('span').textContent=line;
    buildbar.querySelector('.garage-buildbar-summary').setAttribute('aria-label',`My build: ${buildbar.querySelector('b').textContent}. ${line}. Open build summary`);
  }
  window.addEventListener('jimny-build-change',refreshBar);

  // --- Phone: dock the live viewer as a thumbnail ----------------------------
  let docked=false,frame=0;
  function setDocked(on){if(on===docked)return;docked=on;body.classList.toggle('garage-car-docked',on);}
  function checkDock(){
    frame=0;
    if(mode!=='phone'||body.dataset.mode!=='garage'||body.classList.contains('viewer-expanded')){setDocked(false);return;}
    const stripTop=parseFloat(getComputedStyle(strip).top)||0;
    // The stage keeps its height while docked, so this threshold never moves.
    setDocked(studio.getBoundingClientRect().bottom<=stripTop+strip.offsetHeight);
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
    fitted.querySelector('span').textContent=`Shown on ${peek?'your':'the'} car · ${count} part${count===1?'':'s'} in your build`;
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
  function closeAngles(){if(angles.open)angles.close();}
  anglesOpen.addEventListener('click',()=>{
    if(angles.open){closeAngles();return;}
    if(mode==='phone')angles.showModal();else angles.show();
    anglesOpen.setAttribute('aria-expanded','true');
  });
  angles.addEventListener('close',()=>{anglesOpen.setAttribute('aria-expanded','false');if(angles.contains(document.activeElement)||document.activeElement===document.body)anglesOpen.focus({preventScroll:true});});
  angles.querySelector('.garage-angles-close').addEventListener('click',closeAngles);
  angles.addEventListener('click',e=>{
    if(e.target===angles){closeAngles();return;}// Backdrop tap on phones.
    // Choosing a view or tool shows its result on the car straight away.
    if(e.target.closest('[data-camera],.garage-hotspot-toggle,.viewer-fullscreen,[data-garage-stock],[data-garage-image]'))closeAngles();
  });
  angles.addEventListener('keydown',e=>{if(e.key==='Escape'&&!angles.matches(':modal')){e.preventDefault();closeAngles();}});
  document.addEventListener('pointerdown',e=>{if(angles.open&&mode==='desktop'&&!angles.contains(e.target)&&!anglesOpen.contains(e.target))closeAngles();});
  scenery?.addEventListener('change',()=>{if(mode==='phone')closeAngles();});

  // Leaving the Garage returns to the shared app layout from the top.
  new MutationObserver(()=>{if(body.dataset.mode!=='garage'){setDocked(false);closeAngles();if(mode==='phone')scrollTo(0,0);}else checkDock();}).observe(body,{attributes:true,attributeFilter:['data-mode']});
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
