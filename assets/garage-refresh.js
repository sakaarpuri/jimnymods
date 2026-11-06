/* Consistent Garage controls, sharing the existing selection, save and undo handlers. */
(() => {
 'use strict';
 const $=id=>document.getElementById(id),C=window.JimnyGarageControls,esc=C.esc,paint=$('paintControls'),drawer=$('buildDrawer');
 const bindings=[];
 function bindColour(root,input,label,palette,getValue=()=>input.value){
  const control=C.colour(root,{label,value:getValue(),palette,onChange:value=>{input.value=value;input.dispatchEvent(new Event('change',{bubbles:true}));}});
  bindings.push(()=>control.sync(getValue()));return control;
 }
 function tabMarkup(prefix,items){return `<div class="gc-tabs" role="tablist" aria-label="${esc(prefix)}">${items.map(([id,name],i)=>`<button type="button" role="tab" id="${prefix}-${id}-tab" data-gc-tab="${id}" aria-selected="${i===0}" tabindex="${i===0?'0':'-1'}" aria-controls="${prefix}-${id}">${name}</button>`).join('')}</div>`;}
 function pane(prefix,id){const node=document.createElement('section');node.id=prefix+'-'+id;node.dataset.gcPanel=id;node.className='gc-panel';node.setAttribute('role','tabpanel');node.setAttribute('aria-labelledby',prefix+'-'+id+'-tab');node.hidden=id!=='colour'&&id!=='upholstery'&&id!=='parts';return node;}

 // Paint: one palette and two clearly named destinations for finishing work.
 const workspace=document.createElement('div');workspace.id='paintWorkspace';workspace.className='gc-workspace';workspace.innerHTML=tabMarkup('paint',['colour','finish','parts'].map(id=>[id,{colour:'Colour',finish:'Finish',parts:'Apply to parts'}[id]]));
 const colourPane=pane('paint','colour'),finishPane=pane('paint','finish'),partPane=pane('paint','parts');
 const legacy=document.createElement('div');legacy.className='gc-legacy-controls';
 const finishOptions=paint.querySelector('.garage-design-options'),oldMore=$('paintMore');
 for(const selector of ['.paint-label','#paintGallery','#swatches','.custom-paint','.paint-readout','#roofColourControl','#paintDisclaimer','.live-design-field']){const node=paint.querySelector(selector);if(node)legacy.append(node);}
 // Keep the legacy inputs connected before binding the shared colour pickers.
 paint.append(legacy);
 if(finishOptions)finishPane.append(finishOptions);
 const bodyColour=document.createElement('div');bodyColour.id='bodyColourControl';colourPane.append(bodyColour);
 bindColour(bodyColour,$('customPaint'),'Body colour',Object.entries(PAINTS),()=>selectedPaint);
 const roofColour=document.createElement('div');roofColour.id='roofColourPicker';colourPane.append(roofColour);
 bindColour(roofColour,$('roofColour'),'Roof colour',[['Factory black','#141b22'],['Ivory','#e6ddc5'],['White','#eeeeea'],['Silver','#9ba3a7'],['Bronze','#987345'],['Red','#a8322e']],()=>C.hex(designState.roofColour)||'#141b22');
 const black=document.createElement('button');black.type='button';black.className='gc-look-card';black.dataset.blackoutProxy='';black.innerHTML=C.carIcon('#171b1d')+'<span><strong>All black</strong><small>Body, wheels & trim</small></span>';black.onclick=()=>{refreshSurfaceControls();document.querySelector('[data-all-black]').click();};finishPane.append(black);const restoreHardware=document.createElement('button');restoreHardware.type='button';restoreHardware.className='gc-secondary';restoreHardware.textContent='Restore hardware colours';restoreHardware.onclick=()=>{refreshSurfaceControls();document.querySelector('[data-restore-hardware]').click();};finishPane.append(restoreHardware);
 const resetRoof=document.createElement('button');resetRoof.type='button';resetRoof.className='gc-secondary';resetRoof.textContent='Remove two-tone roof';resetRoof.onclick=()=>{rememberUndo();designState.roofColour='original';selectDesign('finish','oem');};roofColour.append(resetRoof);
 const roofLink=document.createElement('button');roofLink.type='button';roofLink.className='gc-secondary';roofLink.textContent='Choose roof colour';finishPane.append(roofLink);
 const partHome=document.createElement('section');partHome.id='paintMore';partPane.append(partHome);partHome.innerHTML='<h3 class="gc-section-title">Finish selected parts</h3><p class="gc-note">Choose the parts, then apply one finish.</p>';
 oldMore?.replaceWith(workspace);workspace.append(colourPane,finishPane,partPane);
 const paintTabs=C.tabs(workspace);paintTabs.select('colour');roofLink.onclick=()=>{paintTabs.select('colour');roofColour.scrollIntoView({block:'nearest'});};
 const surfaces=document.querySelector('.surface-controls');surfaces.querySelector('details').open=true;surfaces.querySelector('details>summary').classList.add('gc-legacy-control');surfaces.querySelector('.surface-actions').classList.add('gc-legacy-control');
 function syncAppearance(){roofColour.hidden=designState.finish!=='twotone';roofLink.hidden=roofColour.hidden;black.setAttribute('aria-pressed',String(!!designState.allBlack));black.disabled=!window.jimny3D?.getState().detailedReady||!!window.jimny3D?.getState().modelLoading;restoreHardware.hidden=!designState.allBlack;bindings.forEach(sync=>sync());}

 // Grille editing opens the same part editor instead of a second nested form.
 $('grilleAppearance').classList.add('gc-legacy-control');
 document.addEventListener('click',e=>{if(!e.target.closest('[data-open-grille-appearance]'))return;e.preventDefault();e.stopImmediatePropagation();JimnyPartEditor.openTarget('grille','colour');},true);
 for(const label of document.querySelectorAll('#garage .live-design-field'))label.classList.add('gc-legacy-control');
 // Vinyl colour uses the same picker while keeping its original-palette action.
 const vinyl=$('vinylInk');if(vinyl){const box=$('decalMore'),root=document.createElement('div');root.className='gc-vinyl-colour';const section=document.createElement('section');section.className='gc-section';section.innerHTML='<h3 class="gc-section-title">Vinyl colour</h3>';vinyl.closest('label').classList.add('gc-legacy-control');section.append(root,box.querySelector('.vinyl-ink'));box.replaceWith(section);bindColour(root,vinyl,'Vinyl colour',Object.entries(PAINTS),()=>C.hex(designState.decalColour)||'#26332f');}

 // Cabin choices use the same navigation and tile treatment, without nested menus.
 const cabin=$('cabinControls'),materials=cabin.querySelector('.cabin-material-studio'),upholstery=cabin.querySelector('.cabin-upholstery');
 const fabric=materials.querySelector('.cabin-fabric-grid'),match=materials.querySelector('.cabin-match-actions'),fit=materials.querySelector('[data-fit-tourer]'),tour=materials.querySelector('.cabin-tour-controls'),drawers=materials.querySelector('.touring-drawer-toggle'),tourNote=$('touringLayoutNote'),accessories=cabin.querySelector('.cabin-options');
 const upPane=pane('cabin','upholstery'),tourPane=pane('cabin','touring'),accessPane=pane('cabin','accessories');
 upholstery.querySelector('.cabin-palette').classList.remove('visual-option-grid');
 const cabinColours={tan:['Sandstone','#a38b69'],saddle:['Saddle','#854d31'],olive:['Olive','#59624d'],stone:['Stone','#b3b1a5'],black:['Charcoal','#303332']};
 upholstery.querySelectorAll('[data-cabin-colour]').forEach(button=>{const [name,value]=cabinColours[button.dataset.cabinColour];button.innerHTML=`<i style="background:${value}" aria-hidden="true"></i><span>${name}</span>`;});
 upPane.innerHTML='<h3 class="gc-section-title">Upholstery colour</h3>';upPane.append(upholstery.querySelector('.cabin-palette'));upPane.insertAdjacentHTML('beforeend','<h3 class="gc-section-title">Fabric</h3>');upPane.append(fabric,match);
 tourPane.innerHTML='<h3 class="gc-section-title">Touring layout</h3>';tourPane.append(fit,tour,drawers,tourNote);
 accessPane.innerHTML='<h3 class="gc-section-title">Cabin accessories</h3>';if(accessories)accessPane.append(accessories);
 materials.replaceChildren();materials.insertAdjacentHTML('afterbegin',tabMarkup('cabin',[['upholstery','Upholstery'],['touring','Touring'],['accessories','Accessories']]));materials.append(upPane,tourPane,accessPane);const cabinTabs=C.tabs(materials);cabinTabs.select('upholstery');upholstery.remove();
 cabin.querySelector('.editor-heading')?.remove();cabin.querySelector('.cabin-views')?.remove();
 for(const node of [...cabin.querySelectorAll(':scope > .editor-note')])node.remove();
 tour.querySelectorAll('[data-touring-mode]').forEach(button=>{const id=button.dataset.touringMode;button.innerHTML=`<img src="assets/previews/touring-${id}.webp" width="800" height="600" loading="lazy" alt="Representative five-door touring layout"><span>${id==='travel'?'Travel':'Camp'}</span><small>${id==='travel'?'Packed for the road':'Single-bed layout'}</small>`;});
 drawers.classList.add('gc-switch');drawers.append(document.createElement('i'));drawers.lastElementChild.setAttribute('aria-hidden','true');
 function syncCabin(){const palette=cabin.querySelector('.cabin-palette');palette.classList.remove('visual-option-grid');palette.querySelectorAll('[data-cabin-colour]').forEach(button=>{button.classList.remove('visual-option');if(button.querySelector('img,small')){const [name,value]=cabinColours[button.dataset.cabinColour];button.innerHTML=`<i style="background:${value}" aria-hidden="true"></i><span>${name}</span>`;}});const short=bodyStyle==='3door';materials.querySelector('[data-gc-tab="touring"]').hidden=short;if(short&&!tourPane.hidden)cabinTabs.select('upholstery');accessories?.querySelectorAll('label').forEach(label=>{const id=label.querySelector('[data-id]')?.dataset.id;label.hidden=short&&id&&!garageCanPreview(id);});}

 // One build list; saved versions are named cards rather than a select menu.
 drawer.classList.add('gc-build-drawer');const versions=drawer.querySelector('.drawer-versions'),buildNameField=$('buildName').closest('.field');versions.classList.add('gc-legacy-control');
 const buildWorkspace=document.createElement('div');buildWorkspace.id='buildWorkspace';buildWorkspace.innerHTML=tabMarkup('build',[['parts','Parts & costs'],['saved','Saved builds']]);
 const partsPane=pane('build','parts'),savedPane=pane('build','saved');partsPane.append($('drawerItems'),$('costTable'),$('nextSteps'));savedPane.innerHTML='<div class="gc-saved-list" aria-live="polite"></div>';
 buildWorkspace.append(partsPane,savedPane);drawer.querySelector('.drawer-head').after(buildWorkspace);buildWorkspace.before(buildNameField);
 const saveRow=document.createElement('div');saveRow.className='gc-save-row';buildNameField.before(saveRow);saveRow.append(buildNameField,$('saveSnapshot'));$('saveSnapshot').textContent='Save build';
 const buildTabs=C.tabs(buildWorkspace);buildTabs.select('parts');drawer.querySelector('.garage-selection-tray')?.classList.add('gc-legacy-control');
 function renderSaved(){savedPane.querySelector('.gc-saved-list').innerHTML=buildSnapshots.length?buildSnapshots.map(snapshot=>{const data=sanitizeBuild(snapshot.data),stamp=new Date(snapshot.createdAt||(Number.isFinite(Number(snapshot.id))?Number(snapshot.id):NaN)),date=Number.isFinite(stamp.getTime())?new Intl.DateTimeFormat('en-GB',{day:'numeric',month:'short',year:'numeric'}).format(stamp):'Saved on this device';return `<article class="gc-saved-card" data-saved-card="${esc(snapshot.id)}"><div class="gc-saved-preview">${C.carIcon(data.colour,data.body)}</div><div><h3>${esc(data.name||'My Jimny')}</h3><p>${data.body==='3door'?'3-door':'5-door'} · ${esc(date)}</p><div class="gc-saved-actions"><button type="button" data-saved-load="${esc(snapshot.id)}">Load build</button><button type="button" data-saved-rename="${esc(snapshot.id)}">Rename</button></div><form class="gc-rename" novalidate hidden><label class="gc-field">Build name<input maxlength="48" value="${esc(data.name||'My Jimny')}" required></label><button type="submit">Save name</button><button type="button" data-rename-cancel>Cancel</button><p role="alert" hidden></p></form></div></article>`;}).join(''):'<div class="gc-empty"><h3>No saved builds yet</h3><p>Name your build above and choose Save build to keep a version here.</p></div>';}
 savedPane.addEventListener('click',e=>{const load=e.target.closest('[data-saved-load]'),rename=e.target.closest('[data-saved-rename]'),cancel=e.target.closest('[data-rename-cancel]');if(load){$('savedBuilds').value=load.dataset.savedLoad;$('loadSnapshot').click();buildTabs.select('parts');}if(rename){const form=rename.closest('article').querySelector('form');form.hidden=false;form.querySelector('input').focus();form.querySelector('input').select();}if(cancel)cancel.closest('form').hidden=true;});
 savedPane.addEventListener('submit',e=>{e.preventDefault();const card=e.target.closest('[data-saved-card]'),rawName=e.target.querySelector('input').value.trim(),name=rawName.replace(/[<>]/g,'').slice(0,48);if(!name){const input=e.target.querySelector('input'),error=e.target.querySelector('[role=alert]');input.setAttribute('aria-invalid','true');error.hidden=false;error.textContent='Enter a build name.';input.focus();return;}const next=buildSnapshots.map(s=>String(s.id)===card.dataset.savedCard?{...s,data:{...sanitizeBuild(s.data),name}}:s);try{localStorage.setItem('thatsuvmod-snapshots',JSON.stringify(next));}catch{const error=e.target.querySelector('[role=alert]');error.hidden=false;error.textContent='Could not save the name. Your saved build is unchanged.';return;}buildSnapshots=next;renderSnapshots();});
 $('saveSnapshot').addEventListener('click',()=>{renderSaved();buildTabs.select('saved');});
 drawer.addEventListener('click',e=>{if(e.target.closest('[data-load-version]')){buildTabs.select('saved');buildWorkspace.scrollIntoView({block:'nearest'});}const edit=e.target.closest('[data-drawer-edit]');if(edit){closeDrawer();const id=edit.dataset.drawerEdit,kind=edit.dataset.drawerKind;if(kind==='part'){const part=modById[id];if(part?.interior||['seats','doortrim','mats','steering'].includes(part?.visual||id))openGarageCategory('cabin');else JimnyPartEditor.openTarget(JimnySurfaceStyles.target(part?.visual||id),'colour');}else if(kind==='finish'){openGarageCategory('paint');paintTabs.select('finish');}else if(kind==='surface'){openGarageCategory('paint');paintTabs.select('parts');}else if(kind==='colour')JimnyPartEditor.openTarget(id,'colour');else JimnyPartEditor.openTarget(kind==='grille'?'grille':kind==='wheels'?'wheels':'body',kind==='colour'?'colour':'variants');}});
 window.addEventListener('jimny-snapshots-change',renderSaved);
 window.addEventListener('jimny-build-change',()=>{syncAppearance();syncCabin();});window.addEventListener('jimny-model-change',syncCabin);window.addEventListener('jimny-model-ready',syncAppearance);
 document.addEventListener('click',e=>{if(e.target.closest('[data-edit-surface]'))paintTabs.select('parts');});
 syncAppearance();syncCabin();renderSaved();
 window.JimnyGarageRefresh={paintTab:id=>paintTabs.select(id),buildTab:id=>buildTabs.select(id)};
})();
