/* Garage-only saved library. Uses the same build sanitizer and update path as Undo. */
(() => {
 const store=JIMNY_BUILD_KITS.createStore(()=>localStorage,sanitizeBuild);
 const dialog=document.createElement('dialog');dialog.id='savedKitsDialog';dialog.className='saved-kits-dialog';dialog.setAttribute('aria-labelledby','savedKitsTitle');
 dialog.innerHTML=`<header class="kits-heading"><div><p class="eyebrow">On this device · no account</p><h2 id="savedKitsTitle">Your builds & parts kits</h2></div><button type="button" data-close-kits aria-label="Close saved builds and kits">Close</button></header><div class="kits-scroll"><p class="kits-note">Save the whole car, or collect selected parts into a reusable kit. Browser data can be cleared; download a parts list for a separate copy.</p><form id="saveKitForm"><div class="kits-fields"><label>Save as<select id="kitKind"><option value="build">Full build · paint, design & all parts</option><option value="kit">Parts kit · selected parts only</option></select></label><label id="kitTargetField" hidden>Add to<select id="kitTarget"><option value="">New parts kit</option></select></label><label id="kitNameField">Name<input id="kitName" maxlength="48" required placeholder="For example: Weekend camping"></label></div><fieldset id="kitPartsField" hidden><legend>Parts to include</legend><div class="kit-pick-actions"><button type="button" data-kit-pick="all">Select all</button><button type="button" data-kit-pick="none">Clear selection</button></div><div id="kitPartChoices"></div><p>Paint and decals are included in full builds, not parts kits. Product compatibility still needs checking.</p></fieldset><div class="kit-save-actions"><button class="action primary" type="submit">Save on this device</button><button class="action" type="button" data-export-current>Download current parts list</button></div></form><p id="kitStatus" role="status" aria-live="polite"></p><section aria-labelledby="savedLibraryTitle"><h3 id="savedLibraryTitle">Saved library</h3><div id="savedKitList"></div></section></div>`;
 document.body.append(dialog);
 const $=id=>document.getElementById(id),kind=$('kitKind'),target=$('kitTarget'),name=$('kitName'),status=$('kitStatus');let trigger=null;
 const tell=(message,error=false)=>{status.textContent=message;status.classList.toggle('kit-error',error);};
 function renderLibrary(){
  const result=store.read();if(!result.ok){tell(result.error,true);$('savedKitList').innerHTML='<p class="kits-empty">Saved entries are unavailable. Your current build has not been changed.</p>';return;}
  const selectedTarget=target.value;target.innerHTML='<option value="">New parts kit</option>'+result.entries.filter(e=>e.kind==='kit'&&e.data.body===bodyStyle).map(e=>`<option value="${escHtml(e.id)}">${escHtml(e.name)} · ${e.data.parts.length} parts</option>`).join('');target.value=selectedTarget;
  $('savedKitList').innerHTML=result.entries.length?result.entries.map(e=>`<article class="saved-kit"><div class="saved-kit-title"><h4>${escHtml(e.name)}</h4><span>${e.kind==='build'?'Full build':'Parts kit'} · ${e.data.body==='3door'?'3-door':'5-door'} · ${e.data.parts.length} parts</span></div><details><summary>Chosen parts & sources</summary>${e.data.parts.length?`<ul>${e.data.parts.map(id=>`<li><span>${escHtml(modById[id]?.name||id)}</span><button type="button" data-source-part="${escHtml(id)}">Sources</button></li>`).join('')}</ul>`:'<p>Stock hardware. Paint and design choices are saved in this build.</p>'}</details><div class="saved-kit-actions"><button type="button" data-kit-restore="${escHtml(e.id)}">${e.kind==='build'?'Restore build':'Fit parts kit'}</button><button type="button" data-kit-export="${escHtml(e.id)}">Download list</button><button type="button" data-kit-remove="${escHtml(e.id)}">Remove saved ${e.kind==='build'?'build':'kit'}</button></div></article>`).join(''):'<p class="kits-empty">No saved builds or kits yet. Name your current build above, or select parts to create your first kit.</p>';
 }
 function formMode(){const isKit=kind.value==='kit';$('kitPartsField').hidden=!isKit;$('kitTargetField').hidden=!isKit;$('kitNameField').hidden=isKit&&!!target.value;name.required=!(isKit&&target.value);}
 function open(){
  trigger=document.activeElement;name.value=buildNameEl.value==='My Jimny'?'':buildNameEl.value;kind.value='build';target.value='';tell('');
  const parts=currentPayload().parts;$('kitPartChoices').innerHTML=parts.length?parts.map(id=>`<label><input type="checkbox" name="kitPart" value="${escHtml(id)}" checked><span>${escHtml(modById[id]?.name||id)}</span><button type="button" data-source-part="${escHtml(id)}">Sources</button></label>`).join(''):'<p class="kits-empty">No selected parts. Fit a part in the garage, or save a full build with your paint and design.</p>';
  renderLibrary();formMode();dialog.showModal();name.focus();
 }
 function download(data,label){
  const clean=sanitizeBuild(data),lines=[label,`Suzuki Jimny ${clean.body==='3door'?'3-door JB74':'5-door / XL'}`,`Paint: ${clean.colour}`,`Design: ${Object.entries(clean.design).map(([k,v])=>`${k}: ${typeof v==='object'?Object.entries(v).map(([id,mode])=>id+'='+mode).join(', '):v}`).join(' · ')}`,'','SELECTED PARTS',...clean.parts.flatMap(id=>{const part=modById[id];return [part?.name||id,...partSupplierOptions(id).rows.slice(0,3).map(r=>`  ${r.kind==='selected-product'?'Product':'Related resource'}: ${r.label} — ${r.url}`),''];}),'Planning shortlist only. The 3D model is representative, not manufacturer CAD. Confirm body/chassis compatibility, mounts, local rules and current prices with the seller.'];
  if(!clean.parts.length)lines.splice(5,0,'Stock hardware; no added parts.');
  const url=URL.createObjectURL(new Blob([lines.join('\n')],{type:'text/plain;charset=utf-8'})),a=document.createElement('a');a.href=url;a.download=(label.replace(/[^a-z0-9_-]+/gi,'-').slice(0,48)||'Jimny-build')+'-parts.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
 }
 document.addEventListener('click',event=>{if(event.target.closest('[data-open-kits]')){if(buildDrawer.classList.contains('open'))closeDrawer();open();}});
 dialog.querySelector('[data-close-kits]').onclick=()=>dialog.close();dialog.addEventListener('close',()=>trigger?.isConnected&&trigger.focus({preventScroll:true}));
 kind.onchange=formMode;target.onchange=formMode;
 $('saveKitForm').onsubmit=event=>{
  event.preventDefault();const data=currentPayload(),isKit=kind.value==='kit',id=isKit?target.value:'';
  if(isKit){data.parts=[...dialog.querySelectorAll('[name=kitPart]:checked')].map(e=>e.value);const targets=new Set(data.parts.map(id=>JimnySurfaceStyles.target(modById[id]?.visual||id)));for(const field of ['partFinishes','partColours'])data.design[field]=Object.fromEntries(Object.entries(data.design[field]||{}).filter(([id])=>targets.has(id)));}
  const label=id?target.selectedOptions[0].textContent:name.value.trim();data.name=name.value.trim()||data.name;
  const result=store.save({id,kind:kind.value,name:label,data,append:!!id});
  if(!result.ok){tell(result.error,true);return;}
  if(!isKit){buildNameEl.value=result.entry.name;persist();}
  renderLibrary();formMode();tell(`${result.entry.name} ${id?'updated':'saved'} on this device. ${result.entry.data.parts.length} parts included.`);
 };
 dialog.addEventListener('click',event=>{
  const pick=event.target.closest('[data-kit-pick]');if(pick){dialog.querySelectorAll('[name=kitPart]').forEach(c=>c.checked=pick.dataset.kitPick==='all');return;}
  if(event.target.closest('[data-export-current]')){download(currentPayload(),name.value.trim()||buildNameEl.value);tell('Parts list downloaded.');return;}
  const action=event.target.closest('[data-kit-restore],[data-kit-remove],[data-kit-export]');if(!action)return;
  const id=action.dataset.kitRestore||action.dataset.kitRemove||action.dataset.kitExport,result=store.read(),entry=result.entries.find(e=>e.id===id);if(!entry){tell(result.error||'That saved entry is no longer available.',true);return;}
  if(action.hasAttribute('data-kit-export')){download(entry.data,entry.name);tell('Parts list downloaded.');return;}
  if(action.hasAttribute('data-kit-remove')){const removed=store.remove(id);if(!removed.ok){tell(removed.error,true);return;}renderLibrary();formMode();tell(`${entry.name} removed from this device. Your current car is unchanged.`);$('savedLibraryTitle').tabIndex=-1;$('savedLibraryTitle').focus();return;}
  if(entry.kind==='kit'&&entry.data.body!==bodyStyle){tell(`This kit is for the ${entry.data.body==='3door'?'3-door':'5-door'} Jimny. Switch body first; fitment is not transferable.`,true);return;}
  rememberUndo();
  if(entry.kind==='build'){loadPayload(entry.data);document.getElementById('bodySelect').value=bodyStyle;}
  else{
   entry.data.parts.forEach(id=>setPartSelection(id,true));
   const finishes={...designState.partFinishes};for(const id of entry.data.parts){const target=JimnySurfaceStyles.target(modById[id]?.visual||id);if(entry.data.design.partFinishes?.[target])finishes[target]=entry.data.design.partFinishes[target];}designState.partFinishes=finishes;
   const colours={...designState.partColours};for(const id of entry.data.parts){const target=JimnySurfaceStyles.target(modById[id]?.visual||id);if(entry.data.design.partColours?.[target])colours[target]=entry.data.design.partColours[target];}designState.partColours=colours;
   if(entry.data.parts.some(id=>partFamily(id)==='tires')){designState.tyreType=entry.data.design.tyreType;designState.wheelFinish=entry.data.design.wheelFinish;}
   if(entry.data.parts.some(id=>['seats','doortrim'].includes(partFamily(id)))){designState.cabin=entry.data.design.cabin;designState.seatFabric=entry.data.design.seatFabric;}
   if(entry.data.parts.includes('touring')){designState.touringMode=entry.data.design.touringMode;designState.touringDrawers=entry.data.design.touringDrawers;}
   update();
  }
  dialog.close();setWorkbenchMode('garage');refreshGarage();showToast(`${entry.name} ${entry.kind==='build'?'restored':'fitted'}`,'Undo',undoLastChange);
 });
 const summary=document.querySelector('.drawer-head .secsub');summary.id='buildStorageStatus';summary.textContent='Working draft saved on this device.';
 persist();
 document.querySelector('#buildDrawer .drawer-more-menu').insertAdjacentHTML('afterbegin','<button class="action" type="button" data-open-kits>Named builds & parts kits</button>');
 // Cargo is a cutaway inspection, not an animated opening tailgate.
 document.querySelectorAll('.camera-controls,.studio-angles').forEach(el=>el.insertAdjacentHTML('beforeend','<button type="button" data-camera="seats">Seats</button><button type="button" data-camera="storage">Storage</button>'));
 GARAGE_FAMILIES.cabin.unshift('touring','doortrim','mod_reardoor_molle','mod_halfmolly_5door','exploresetups_drawer_5door');
 // Keep the actual accessories visible on entry; five upholstery thumbnails
 // should not push the door and cargo models below several screens.
 const cabinPanel=document.getElementById('cabinControls'),palette=cabinPanel.querySelector('.cabin-palette');
 const upholstery=document.createElement('details');upholstery.className='cabin-upholstery';
 upholstery.innerHTML='<summary>Seat colours · 5 illustrative finishes</summary>';
 palette.previousElementSibling.before(upholstery);
 const label=palette.previousElementSibling,note=palette.nextElementSibling;
 upholstery.append(label,palette,note);
 const overview=document.createElement('p');overview.className='editor-note';overview.textContent='Choose a fabric, match the doors, or fit the complete touring interior. The camera moves to show each change.';
 upholstery.before(overview);
 const materials=document.createElement('section');materials.className='cabin-material-studio';materials.setAttribute('aria-label','Interior fabrics and touring layout');
 materials.innerHTML='<h3>Fabric & finish</h3><div class="cabin-fabric-grid">'+[['canvas','Woven canvas'],['tweed','Textured tweed'],['houndstooth','Heritage houndstooth'],['leather','Leather look']].map(([id,label])=>`<button type="button" data-seat-fabric="${id}" aria-pressed="false"><img src="assets/previews/fabric-${id}.webp" width="240" height="180" loading="lazy" decoding="async" alt="${label} on the contoured seat"><span>${label}</span></button>`).join('')+'</div><div class="cabin-match-actions"><button type="button" class="action" data-match-interior>Match seats & door inserts</button><button type="button" class="text-button" data-source-part="seats">Find upholstery sources</button></div><h3>Touring layout</h3><button type="button" class="action" data-fit-tourer>Fit complete touring interior</button><div class="cabin-tour-controls"><button type="button" data-touring-mode="travel" aria-pressed="false">Travel · packed</button><button type="button" data-touring-mode="camp" aria-pressed="false">Camp · single bed</button></div><label class="touring-drawer-toggle"><input type="checkbox" data-touring-drawers> Open drawers</label><p class="editor-note" id="touringLayoutNote">Fit the complete touring interior below to explore its two layouts.</p>';
 upholstery.before(materials);
 const inspiration=document.createElement('details');inspiration.className='cabin-inspiration';
 inspiration.innerHTML='<summary>Real accessories behind these interiors</summary><p>Canvas follows ARMORO-style woven covers; houndstooth takes inspiration from DAMD THE GEAR. The door inserts are an original custom-trim design, informed by GRACE’s upholstered JB74 panels.</p><p>The five-door tourer combines an EXPLORESETUPS-style split deck and drawers with door/window storage. Its passenger extension is a custom piece. The 183 × 65 cm mat uses EXPED dimensions. Camp mode reclines the passenger back and removes its headrest; the game uses the packed travel layout.</p><div class="cabin-research-links"><button type="button" class="text-button" data-source-part="touring">Touring components & custom extension</button><button type="button" class="text-button" data-source-part="doortrim">Door trim reference & fitting</button><button type="button" class="text-button" data-source-part="escapegear_seatcovers_5door">Escape Gear · five-door seat covers</button><button type="button" class="text-button" data-source-part="damd_thegear_seats_3door">DAMD THE GEAR · three-door only</button><button type="button" class="text-button" data-open-mod-guide>More complete build projects</button></div><p>Original representative models. Confirm the component sizes, seat layout and exact body with the seller or trimmer.</p>';
 upholstery.after(inspiration);
 function refreshInterior(){
  const ready=window.jimny3D?.getState().detailedReady&&!window.jimny3D?.getState().modelLoading;
  materials.querySelectorAll('[data-seat-fabric]').forEach(b=>{b.disabled=!ready;b.setAttribute('aria-pressed',String(!!state.seats&&(designState.seatFabric||'canvas')===b.dataset.seatFabric));const src=studioPreviewPath(`fabric-${b.dataset.seatFabric}`);if(b.querySelector('img').getAttribute('src')!==src)b.querySelector('img').src=src;});
  materials.querySelectorAll('[data-touring-mode]').forEach(b=>{b.disabled=!ready||bodyStyle!=='5door'||!state.touring;b.setAttribute('aria-pressed',String(!!state.touring&&(designState.touringMode||'travel')===b.dataset.touringMode));});
  materials.querySelector('[data-match-interior]').disabled=!ready;
  const fit=materials.querySelector('[data-fit-tourer]');fit.disabled=!ready||bodyStyle!=='5door';fit.textContent=state.touring?'Remove touring interior':'Fit complete touring interior';fit.setAttribute('aria-pressed',String(!!state.touring));
  const drawers=materials.querySelector('[data-touring-drawers]');drawers.disabled=!ready||bodyStyle!=='5door'||!state.touring;drawers.checked=!!state.touring&&!!designState.touringDrawers;
  document.getElementById('touringLayoutNote').textContent=bodyStyle!=='5door'?'This touring system is modelled for the five-door / XL.':!state.touring?'Fit the complete touring interior below to explore its two layouts.':designState.touringMode==='camp'?'Single berth · 183 × 65 cm mat. Rear seats folded; passenger back reclined and headrest removed. Custom extension shown.':'Packed for travel · two front seats, folded rear seats, secured storage and rolled sleeping mat.';
 }
 materials.addEventListener('click',e=>{
  const fabric=e.target.closest('[data-seat-fabric]'),mode=e.target.closest('[data-touring-mode]'),match=e.target.closest('[data-match-interior]'),fit=e.target.closest('[data-fit-tourer]');if(!fabric&&!mode&&!match&&!fit)return;
  rememberUndo();
  if(fabric){const value=fabric.dataset.seatFabric;setPartSelection('seats',!(state.seats&&(designState.seatFabric||'canvas')===value));designState.seatFabric=value;}
  if(match){setPartSelection('seats',true);setPartSelection('doortrim',true);}
  if(mode)designState.touringMode=mode.dataset.touringMode;
  if(fit)setPartSelection('touring',!state.touring);
  update();refreshInterior();window.jimny3D?.view(mode||fit?'touring':match?'doors':'seats');
 });
 materials.querySelector('[data-touring-drawers]').addEventListener('change',e=>{rememberUndo();designState.touringDrawers=e.target.checked;update();window.jimny3D?.view('cargo');});
 window.addEventListener('jimny-build-change',refreshInterior);window.addEventListener('jimny-model-ready',refreshInterior);refreshInterior();
 renderVisualEditors();refreshGarage();
})();
