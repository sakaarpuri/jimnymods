/* Phone Garage (Direction A frames 07–10).
   Below 900px the Garage scrolls as one page: the car first, then category chips
   that pin under the header. When the car scrolls away, the same live viewer
   docks as a thumbnail beside the chips, so WebGL never re-initialises; it only
   resizes (the viewer's own ResizeObserver refits the camera). Fitting a part
   while docked briefly enlarges that thumbnail so the change is seen on the car.
   Existing nodes are relocated, never cloned, and go back above 900px. */
(() => {
  'use strict';
  const $=id=>document.getElementById(id),body=document.body;
  const phone=matchMedia('(max-width:899px)');
  const rail=document.querySelector('.planner-rail'),studio=$('spin360'),mount=$('viewer3d');
  const garage=$('garage'),strip=document.querySelector('.garage-categories');
  if(!rail||!studio||!mount||!garage||!strip)return;
  const camera=rail.querySelector('.camera-controls'),cabinViews=rail.querySelector('.cabin-viewpoints'),scenery=rail.querySelector('.scenery-picker');
  const stage=rail.querySelector('.garage-stage-actions'),tray=rail.querySelector('.garage-selection-tray');
  const hotspot=studio.querySelector('.garage-hotspot-toggle'),expand=$('expandViewer'),hint=studio.querySelector('.garage-pick-direction');
  const exterior=camera.querySelector('[data-camera="orbit"]'),cabin=camera.querySelector('[data-camera="interior"]');
  const drive=stage.querySelector('a[href="game.html"]'),stageButtons=[...stage.querySelectorAll('button')];
  const drawerHead=document.querySelector('#buildDrawer .drawer-head');
  const icon=d=>`<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${d}"/></svg>`;

  // Remember every original position so the desktop layout is restored exactly.
  const homes=new Map();
  function remember(node){if(node&&!homes.has(node)){const mark=document.createComment('phone-garage home');node.before(mark);homes.set(node,mark);}}
  function restore(){for(const [node,mark] of homes)mark.after(node);}
  [exterior,cabin,camera,cabinViews,scenery,hotspot,expand,drive,tray,...stageButtons].forEach(remember);

  // --- New phone-only pieces --------------------------------------------------
  const viewSwitch=document.createElement('div');viewSwitch.className='garage-view-switch';viewSwitch.setAttribute('role','group');viewSwitch.setAttribute('aria-label','Outside or inside the car');
  const anglesOpen=document.createElement('button');anglesOpen.type='button';anglesOpen.className='garage-angles-open';anglesOpen.setAttribute('aria-haspopup','dialog');anglesOpen.setAttribute('aria-label','Angles & scenery');anglesOpen.innerHTML=icon('M4 7h16M4 12h11M4 17h7');
  const angles=document.createElement('dialog');angles.className='garage-angles';angles.setAttribute('aria-labelledby','garageAnglesTitle');
  angles.innerHTML=`<div class="garage-angles-head"><h2 id="garageAnglesTitle">Angles & scenery</h2><button type="button" class="garage-angles-close" aria-label="Close angles and scenery">${icon('M6 6l12 12M18 6 6 18')}</button></div>
<section aria-labelledby="garageAnglesViews"><h3 id="garageAnglesViews">Views</h3><div class="garage-angles-views"></div></section>
<section aria-labelledby="garageAnglesScene"><h3 id="garageAnglesScene">Background</h3><div class="garage-angles-scene"></div></section>
<section aria-labelledby="garageAnglesTools"><h3 id="garageAnglesTools">On the car</h3><div class="garage-angles-tools"></div></section>`;
  const buildbar=document.createElement('div');buildbar.className='garage-buildbar';
  buildbar.innerHTML='<button type="button" class="garage-buildbar-summary" data-build-open><b></b><span></span></button>';
  const thumb=document.createElement('button');thumb.type='button';thumb.className='garage-thumb';thumb.setAttribute('aria-label','Show the car');thumb.innerHTML=icon('M8 3H3v5M16 3h5v5M3 16v5h5M21 16v5h-5');
  const fitted=document.createElement('div');fitted.className='garage-fitted';fitted.setAttribute('role','status');fitted.setAttribute('aria-live','polite');
  fitted.innerHTML='<div class="garage-fitted-copy"><b></b><span></span></div><button type="button" class="garage-fitted-undo">Undo</button><button type="button" class="garage-fitted-view">View car</button>';
  const hintText={desktop:hint?.textContent||'',phone:'Drag to turn · tap a part to edit'};

  let active=false;
  function apply(){
    const on=phone.matches;if(on===active)return;active=on;
    body.classList.toggle('phone-garage',on);
    if(on){
      viewSwitch.append(exterior,cabin);studio.append(viewSwitch,anglesOpen);
      angles.querySelector('.garage-angles-views').append(camera,cabinViews);
      angles.querySelector('.garage-angles-scene').append(scenery);
      angles.querySelector('.garage-angles-tools').append(...[hotspot,expand,...stageButtons].filter(Boolean));
      buildbar.append(drive);drawerHead.after(tray);
      // Chips sit straight under the car (index.html's placement runs first and puts them after the intro).
      garage.prepend(strip);
      document.body.append(angles,buildbar,thumb,fitted);
      if(hint)hint.textContent=hintText.phone;
    }else{
      restore();[viewSwitch,anglesOpen,angles,buildbar,thumb,fitted].forEach(n=>n.remove());
      if(hint)hint.textContent=hintText.desktop;
      setDocked(false);
    }
    refreshBar();requestAnimationFrame(checkDock);
  }

  // --- Build bar: count and the same estimate text the build summary uses ----
  function refreshBar(){
    if(!active)return;
    const count=buildSelectionCount(),total=$('total')?.textContent||'';
    buildbar.querySelector('b').textContent=count?`${count} part${count===1?'':'s'} fitted`:'Stock build';
    // Same figure as the build summary; the drawer carries the full estimate notes.
    buildbar.querySelector('span').textContent=!count?'Nothing fitted yet':total==='Quote required'?'Quote required':`${total} est.`;
    buildbar.querySelector('.garage-buildbar-summary').setAttribute('aria-label',`My build: ${buildbar.querySelector('b').textContent}. ${buildbar.querySelector('span').textContent}. Open build summary`);
  }
  window.addEventListener('jimny-build-change',refreshBar);

  // --- Docking the live viewer as a thumbnail --------------------------------
  let docked=false,frame=0;
  function setDocked(on){if(on===docked)return;docked=on;body.classList.toggle('garage-car-docked',on);if(!on)endPeek();}
  function checkDock(){
    frame=0;
    if(!active||body.dataset.mode!=='garage'){setDocked(false);return;}
    const stripTop=parseFloat(getComputedStyle(strip).top)||0;
    // Dock once the whole stage is under the pinned chips; the stage keeps its
    // height while docked, so the threshold never moves and never flickers.
    setDocked(studio.getBoundingClientRect().bottom<=stripTop+strip.offsetHeight);
  }
  addEventListener('scroll',()=>{if(!frame)frame=requestAnimationFrame(checkDock);},{passive:true});
  addEventListener('resize',()=>{if(!frame)frame=requestAnimationFrame(checkDock);});
  function showCar(){endPeek();scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});}
  thumb.addEventListener('click',showCar);

  // A new category is a new view: keep the chips pinned rather than jumping to the car.
  strip.addEventListener('click',e=>{
    if(!active||!docked||!e.target.closest('[data-garage-category]'))return;
    requestAnimationFrame(()=>{const top=garage.getBoundingClientRect().top+scrollY-(parseFloat(getComputedStyle(strip).top)||0);scrollTo({top:Math.max(top,studio.offsetHeight),behavior:'auto'});});
  });

  // --- Just fitted: enlarge the docked car briefly, with Undo and View car ---
  let peekTimer=0;
  function endPeek(){clearTimeout(peekTimer);body.classList.remove('garage-peek');}
  function peek(id){
    const part=modById[id],count=buildSelectionCount();
    fitted.querySelector('b').textContent=`${part?.name||'Part'} fitted`;
    fitted.querySelector('span').textContent=`Shown on your car · ${count} part${count===1?'':'s'}`;
    body.classList.add('garage-peek');clearTimeout(peekTimer);peekTimer=setTimeout(endPeek,3200);
  }
  fitted.addEventListener('pointerenter',()=>clearTimeout(peekTimer));
  fitted.addEventListener('pointerleave',()=>{if(body.classList.contains('garage-peek'))peekTimer=setTimeout(endPeek,1600);});
  fitted.querySelector('.garage-fitted-undo').addEventListener('click',()=>{endPeek();undoLastChange();refreshGarage();});
  fitted.querySelector('.garage-fitted-view').addEventListener('click',showCar);
  // Runs after index.html's quick-fit handler, so state already reflects the tap.
  document.addEventListener('click',e=>{
    const fit=e.target.closest('[data-garage-fit]');
    if(fit&&active&&docked&&state[fit.dataset.garageFit])peek(fit.dataset.garageFit);
  });

  // --- Angles & scenery sheet ------------------------------------------------
  anglesOpen.addEventListener('click',()=>{angles.showModal();anglesOpen.setAttribute('aria-expanded','true');});
  angles.addEventListener('close',()=>{anglesOpen.setAttribute('aria-expanded','false');anglesOpen.focus({preventScroll:true});});
  angles.querySelector('.garage-angles-close').addEventListener('click',()=>angles.close());
  angles.addEventListener('click',e=>{
    if(e.target===angles){angles.close();return;}// Backdrop tap.
    // Choosing a view or tool shows its result on the car straight away.
    if(e.target.closest('[data-camera],.garage-hotspot-toggle,.viewer-fullscreen,[data-garage-stock],[data-garage-image]'))angles.close();
  });
  scenery?.addEventListener('change',()=>{if(angles.open)angles.close();});

  // Leaving the Garage returns to the shared app layout from the top.
  new MutationObserver(()=>{if(active&&body.dataset.mode!=='garage'){setDocked(false);scrollTo(0,0);}else checkDock();}).observe(body,{attributes:true,attributeFilter:['data-mode']});
  phone.addEventListener('change',apply);
  apply();
  // #garage is also an element id, so the browser would jump past the car on load.
  if(active&&body.dataset.mode==='garage'){
    if('scrollRestoration' in history)history.scrollRestoration='manual';
    const top=()=>{if(location.hash==='#garage'||!location.hash)scrollTo(0,0);checkDock();};
    top();addEventListener('load',top,{once:true});
  }
})();
