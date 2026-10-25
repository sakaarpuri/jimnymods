/* Garage category panels, calmer (Brief 2, task 3).
   Each category shows its essentials first; finish, variants and one-off tools
   sit in one "More options" disclosure. All black and Matte / gloss now appear
   once (Paint's More options, or Grilles' appearance panel) instead of above
   every category — workbench-flow.js moves them by category. Nothing is removed. */
(() => {
  'use strict';
  const $=id=>document.getElementById(id);
  function more(id,detail){
    const d=document.createElement('details');d.className='garage-more';d.id=id;d.dataset.more=id;
    d.innerHTML=`<summary>More options <small>${detail}</small></summary>`;return d;
  }

  // Paint: swatches first; custom colour, finish, all black and per-part matte / gloss inside.
  const paint=$('paintControls');
  if(paint){
    const box=more('paintMore','Custom colour, finish, all black, matte / gloss');
    const gallery=$('paintGallery'),disclaimer=$('paintDisclaimer');
    (disclaimer||gallery).after(box);
    box.append(...[paint.querySelector('.custom-paint'),paint.querySelector('.paint-readout'),paint.querySelector('.garage-design-options')].filter(Boolean));
  }

  // Decals: the graphics first, then the door name.
  const graphics=$('graphicsControls');
  if(graphics){
    // The door name stays visible with its own lettering and size; only vinyl colour is tucked away.
    const box=more('decalMore','Vinyl colour');
    const grid=graphics.querySelector('.graphic-grid');grid?.after(box);
    const name=graphics.querySelector('.garage-name-decal');if(name)box.after(name);
    box.append(...[graphics.querySelector('.vinyl-ink')].filter(Boolean));
  }

  // My build (frames 04 and 10): a one-line context, name and saved versions in one
  // disclosure, and "Load a saved version" in the ⋯ menu.
  const drawer=$('buildDrawer');
  if(drawer){
    const head=drawer.querySelector('.drawer-head'),sub=head.querySelector('.secsub');
    const versions=document.createElement('details');versions.className='drawer-versions';
    versions.innerHTML='<summary>Name &amp; saved versions</summary>';
    head.after(versions);
    versions.append(...[drawer.querySelector('#buildName')?.closest('.field'),drawer.querySelector('#savedBuilds')?.closest('.form-grid')].filter(Boolean));
    // The selection tray (moved here by garage-stage.js) sits after the context.
    const tray=drawer.querySelector('.garage-selection-tray');if(tray)versions.after(tray);
    // The existing status line (#buildStorageStatus) still reports whether autosave worked.
    const context=document.createElement('p');context.className='drawer-context';sub?.before(context);
    const describe=()=>{
      const paint=Object.entries(PAINTS).find(([,hex])=>hex.toLowerCase()===String(selectedPaint).toLowerCase())?.[0]||'Custom colour';
      context.textContent=`${bodyStyle==='3door'?'3-door':'5-door'} · ${paint}`;
    };
    describe();addEventListener('jimny-build-change',describe);
    drawer.addEventListener('click',e=>{
      if(!e.target.closest('[data-load-version]'))return;
      versions.open=true;$('drawerMore').open=false;$('savedBuilds')?.focus();
    });
  }

  // Native ▶ disclosure markers become a labelled chevron at the end of the row.
  // Only summaries still using the default marker are touched; custom ones keep theirs.
  const scope='#garage, .planner-main, #buildDrawer';
  function decorate(root=document){
    root.querySelectorAll?.(`:is(${scope}) details:not(.garage-more,.grille-appearance,.drawer-more)>summary:not(.summary-chevron)`).forEach(s=>{
      if(getComputedStyle(s).display==='list-item')s.classList.add('summary-chevron');
    });
  }
  // Runs once every stylesheet has loaded, so custom-styled summaries are never mistaken
  // for default ones; re-rendered panels are decorated as they appear.
  function start(){
    decorate();let queued=false;
    new MutationObserver(()=>{if(queued)return;queued=true;requestAnimationFrame(()=>{queued=false;decorate();});}).observe(document.querySelector('.wrap')||document.body,{childList:true,subtree:true});
  }
  if(document.readyState==='complete')start();else addEventListener('load',start,{once:true});
})();
