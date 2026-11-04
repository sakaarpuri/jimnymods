/* Geometry-pick inspector. Uses the same build state, undo, suppliers and kits
   as the category workbench; never a second, unsaved configurator. */
(() => {
 'use strict';
 const host=document.getElementById('garage'),choices=document.getElementById('garageChoices');if(!host||!choices)return;
 const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const panel=document.createElement('section');panel.id='onCarEditor';panel.className='on-car-editor';panel.hidden=true;panel.setAttribute('aria-labelledby','onCarTitle');choices.before(panel);
 let pick=null,tab='colour',lastTrigger=null,choosingTarget=false,mutating=false;
 const selected=()=>MODS.filter(m=>state[m.id]&&!m.designOnly);
 const product=target=>selected().find(m=>JimnySurfaceStyles.target(m.visual||m.id)===target);
 function label(){if(pick?.tyre)return 'Tyres & wheels';if(pick?.fabric&&pick.target==='cabin')return 'Seat upholstery';if(pick?.target==='headlamps')return 'Factory headlamps';if(/Glass|Lens|Mirror/i.test(pick?.material||''))return 'Glass & optics · material preserved';return surfaceTargetLabel(pick?.target||'body');}
 function targets(){return [...Object.entries(JimnySurfaceStyles.BASE).map(([id,name])=>({id,name})),{id:'headlamps',name:'Factory headlamps'},...selected().filter(m=>garageCanPreview(m.id)).map(m=>({id:JimnySurfaceStyles.target(m.visual||m.id),name:m.name,partId:m.id}))].filter((p,i,a)=>!['cabin','seats','doortrim','mats','steering'].includes(p.id)&&a.findIndex(q=>q.id===p.id)===i);}
 function capabilities(target){const fabric=['seats','doortrim','armoro_console_organizer','armoro_seat_organizer','jimsa_cargo_pouch_5door'].includes(target),protectedSurface=['headlamps','mats','maruti_at_mats','exea_roof_net','ambient'].includes(target);return {target,fabric,colour:!fabric&&!protectedSurface,finish:!fabric&&!protectedSurface};}
 function close({focus=false}={}){panel.hidden=true;host.classList.remove('part-editing');document.body.classList.remove('on-car-editing');pick=null;if(focus)(lastTrigger?.isConnected&&!panel.contains(lastTrigger)&&!lastTrigger.closest('[inert],[aria-hidden=true]')?lastTrigger:document.querySelector('#garage [data-garage-category][aria-selected=true]')||document.getElementById('expandViewer')).focus({preventScroll:true});}
 function frameVariants(){const t=pick?.target,part=product(t),view=t==='grille'?'front':['body','roof','wheels'].includes(t)?'side':t==='doortrim'?'doors-cutaway':['seats','cabin'].includes(t)?'cabin':part?PART_PREVIEW_ANGLES[part.visual||part.id]:null;if(view)window.jimny3D?.view(view);}
 function open(detail){if(['cabin','seats','doortrim','mats','steering'].includes(detail.target)){close();openGarageCategory('cabin');return false;}if(!targets().some(p=>p.id===detail.target)&&!['headlamps'].includes(detail.target))return false;lastTrigger=document.activeElement;pick={...detail};tab='colour';choosingTarget=false;if(document.getElementById('spin360').classList.contains('expanded'))setViewerExpanded(false);setWorkbenchMode('garage');host.classList.add('part-editing');document.body.classList.add('on-car-editing');panel.hidden=false;document.querySelector('.planner-main').scrollTop=0;render();panel.querySelector('#onCarTitle').focus({preventScroll:true});}
 function colourValue(){const t=pick.target;return t==='body'?selectedPaint:t==='roof'?(designState.roofColour==='original'?selectedPaint:designState.roofColour):t==='grille'?(designState.grilleColour==='body'?selectedPaint:designState.grilleColour==='original'?'#202527':designState.grilleColour):designState.partColours?.[t]||'#252a2a';}
 function variantImage(kind,option){
  if(kind==='grille'||kind==='decal')return studioPreviewPath(`design-${kind}-${option.id}`);
  if(kind==='tyre')return studioPreviewPath('tyre-'+option.id);
  if(kind==='wheel'){const wheel=GARAGE_WHEELS.find(w=>w.finish===option.id);return 'assets/previews/wheel-'+wheel.id+'.webp';}
  if(kind==='fabric')return studioPreviewPath('fabric-'+option.id);
  if(kind==='cabin')return studioPreviewPath('cabin-'+option.id);
  if(kind==='part')return option.id==='stock'?studioPreviewPath('design-grille-oem'):garagePartImage(option.id);
 }
 function visualChoices(kind,title,options,value){
  return `<fieldset class="on-car-variant-group"><legend>${esc(title)}</legend><div class="on-car-variant-grid${kind==='grille'?' is-grille':''}" role="radiogroup" aria-label="${esc(title)}">${options.map((o,i)=>{const active=o.id===value,hasValue=options.some(item=>item.id===value);return `<button type="button" class="on-car-variant" role="radio" aria-checked="${active}" tabindex="${active||!hasValue&&i===0?'0':'-1'}" data-part-choice="${kind}" data-part-value="${esc(o.id)}"><span class="on-car-variant-image"><img src="${esc(variantImage(kind,o))}" width="800" height="600" alt="${esc(o.label||o.name)} · 3D appearance preview" loading="lazy" decoding="async"></span><span class="on-car-variant-name">${esc(o.label||o.name)}</span><span class="on-car-variant-state">${active?'Selected':'Try on your Jimny'}</span></button>`;}).join('')}</div></fieldset>`;
 }
 function variants(){
  const t=pick.target,p=product(t);let html='';
  if(t==='grille')html+='<p class="on-car-note">Compare the grille and badge, then pick a look. Colour and finish remain editable in their tabs.</p>'+visualChoices('grille','Grille shape & badge',designGroup('grille').options,selectedDesignOptions().find(o=>o.group==='grille')?.id||designState.grille);
  if(t==='body'||t==='roof')html+=visualChoices('decal','Graphics',designGroup('decal').options,designState.decal);
  if(t==='wheels'){
   html+=visualChoices('tyre','Tyre tread',[{id:'highway',label:'Highway / road'},{id:'allterrain',label:'All-terrain'},{id:'mudterrain',label:'Mud-terrain'}],designState.tyreType||'highway');
   html+=visualChoices('wheel','Wheel finish',[...new Map(GARAGE_WHEELS.map(w=>[w.finish,{id:w.finish,label:w.finish==='oem'?'Factory alloy':w.finish[0].toUpperCase()+w.finish.slice(1)}])).values()],designState.wheelFinish||'oem');
   html+='<p class="on-car-note">Wheel colour and tyre tread are independent. Wheel thumbnails show the finish; your chosen tread stays on the main car.</p>';
  }
  if(['seats','doortrim','cabin'].includes(t)){
   html+=visualChoices('fabric','Seat & door-insert fabric',['canvas','tweed','houndstooth','leather'].map(id=>({id,label:id[0].toUpperCase()+id.slice(1)})),designState.seatFabric||'canvas');
   html+=visualChoices('cabin','Upholstery colour',GARAGE_CABIN_COLOURS.map(([id,name])=>({id,label:name})),designState.cabin||'tan');
   html+='<p class="on-car-note">Applies the chosen seat-cover and upholstered door-insert set. Original textile previews, not exact branded patterns.</p>';
  }
  const family=t==='bumpers'?'bumpers':p?Object.keys(GARAGE_FAMILIES).find(k=>k!=='popular'&&GARAGE_FAMILIES[k].includes(p.id)):null;
  if(family&&['bumpers','roof','rear'].includes(family)){
   const ids=GARAGE_FAMILIES[family].filter(id=>modById[id]&&garageCanPreview(id)&&(t==='bumpers'?['bull','autostylenn_bumper_v1'].includes(modById[id].visual||id):p&&partFamily(id)===partFamily(p.id)));
   if(ids.length>1||t==='bumpers')html+=visualChoices('part','Available fitted assembly',[{id:'stock',label:'Factory / remove this accessory'},...ids.map(id=>({id,label:modById[id].name}))],p?.id||'stock');
  }
  return html||'<p class="on-car-note">No alternative shape is modelled for this exact accessory. Choose a different part from the category tabs; we don’t invent manufacturer variants.</p>';
 }
 function buying(){
  const p=product(pick.target),design=['grille'].includes(pick.target)?'grille':['body','roof','trim','bumpers'].includes(pick.target)?'finish':null;
  return `<p>${p?esc(p.name):esc(label())}</p>${p?.fitment?`<p class="on-car-note">${esc(p.fitment)}</p>`:''}<button type="button" class="on-car-primary" ${p?`data-source-part="${esc(p.id)}"`:design?`data-source-design="${design}"`:`data-source-part="${pick.target==='wheels'?'tires':'seats'}"`}>Show buying options</button><p class="on-car-note">Supplier options open here on the site. Check the exact body, transmission, shipping and fitting before ordering. Custom colours and coatings need a fitter quote.</p><button type="button" data-open-kits>Save build / selected-parts kit</button>`;
 }
 function render(){
  if(!pick)return;const t=pick.target,allowed=pick.colour&&!pick.tyre,coatable=pick.finish&&!pick.tyre;
  const colour=colourValue(),valid=/^#[0-9a-f]{6}$/i.test(colour)?colour:'#252a2a';let content='';
  if(tab==='colour')content=allowed?`<p class="on-car-note">${t==='body'?'Body paint':t==='trim'?'Exterior trim & badges':'Colour for this part'} · glass, rubber and fabric keep their original materials.</p><div data-part-colour-control></div>${t==='grille'&&!['delete','classic','mesh'].includes(designState.grille)?'<h3 class="gc-section-title">Logo colour</h3><div data-part-badge-control></div>':''}<button type="button" data-part-reset="colour">Restore original colour</button>`:'<p class="on-car-note">This material keeps its original finish.</p><button type="button" data-part-tab="variants">See available variants</button>';
  if(tab==='finish')content=coatable?`<p class="on-car-note">Cosmetic coating preview for ${esc(label().toLowerCase())}. Check which real surfaces can safely be coated.</p><div class="on-car-finish">${['original','matte','gloss'].map(mode=>`<button type="button" data-part-finish="${mode}" aria-pressed="${(designState.partFinishes?.[t]||'original')===mode}">${mode[0].toUpperCase()+mode.slice(1)}</button>`).join('')}</div>`:'<p class="on-car-note">Matte/gloss coating isn’t suitable for the surface you clicked. Its material is preserved.</p>';
  if(tab==='variants')content=variants();if(tab==='buy')content=buying();
  const focusKey=document.activeElement?.dataset.partTab,colourMode=panel.querySelector('[data-part-colour-control]')?.dataset.colourMode||'palette',badgeMode=panel.querySelector('[data-part-badge-control]')?.dataset.colourMode||'palette';
  const targetChoices=targets();
  const targetBrowser=`<div class="gc-target-browser"${choosingTarget?'':' hidden'}><label class="gc-field">Find a part<input type="search" data-target-search placeholder="Body, roof, grille…"></label>${[['Body & hardware',targetChoices.filter(p=>!p.partId)],['Fitted parts',targetChoices.filter(p=>p.partId)]].map(([name,items])=>items.length?`<section><h3>${name}</h3><div class="gc-target-grid">${items.map(p=>`<button type="button" data-pick-target="${esc(p.id)}" aria-pressed="${p.id===t}">${p.partId?`<img src="${esc(garagePartImage(p.partId))}" width="160" height="120" alt="">`:JimnyGarageControls.carIcon(p.id==='body'?selectedPaint:'#8c9790',bodyStyle)}<span>${esc(p.name)}</span></button>`).join('')}</div></section>`:'').join('')}<p class="gc-target-empty" hidden>No matching parts in this build.</p></div>`;
  panel.innerHTML=`<div class="on-car-heading"><div><p class="on-car-eyebrow">Editing your build</p><h2 id="onCarTitle" tabindex="-1">${esc(label())}</h2></div><button type="button" data-part-close aria-label="Close part editor">×</button></div><button type="button" class="gc-change-part" data-part-targets aria-expanded="${choosingTarget}">${choosingTarget?'Back to editor':'Change part'}</button>${targetBrowser}<div class="on-car-tabs" role="tablist" aria-label="Part features">${[['colour','Colour'],['finish','Finish'],['variants','Variants'],['buy','Buying options']].map(([id,name])=>`<button type="button" id="part-tab-${id}" role="tab" aria-controls="partEditorContent" data-part-tab="${id}" aria-selected="${tab===id}" tabindex="${tab===id?'0':'-1'}">${name}</button>`).join('')}</div><div id="partEditorContent" role="tabpanel" aria-labelledby="part-tab-${tab}">${content}</div><p class="on-car-help">Click another part to edit it · drag the car to rotate.<br>Changes autosave with your build. <button type="button" data-part-undo${undoHistory.length?'':' disabled'}>Undo</button></p>`;
  const colourRoot=panel.querySelector('[data-part-colour-control]');
  if(colourRoot){const picker=JimnyGarageControls.colour(colourRoot,{label:label(),value:valid,palette:Object.entries(PAINTS),onChange:value=>{const mode=colourRoot.dataset.colourMode||'palette';setColour(value);const root=panel.querySelector('[data-part-colour-control]');root?.querySelector(`[data-colour-mode="${mode}"]`)?.click();root?.querySelector(mode==='custom'?'[data-colour-hex]':`[data-colour-value="${value}"]`)?.focus({preventScroll:true});}});picker.mode(colourMode);}
  const badgeRoot=panel.querySelector('[data-part-badge-control]');if(badgeRoot){const badgePicker=JimnyGarageControls.colour(badgeRoot,{label:'Logo colour',value:JimnyGarageControls.hex(designState.badgeColour)||'#cccccc',palette:[['Silver','#cccccc'],['White','#eeeeea'],['Black','#171b1d'],['Bronze','#a38b69']],onChange:value=>{mutate(()=>{designState.badgeColour=value;});panel.querySelector('[data-part-badge-control] [data-colour-hex]')?.focus({preventScroll:true});}});badgePicker.mode(badgeMode);}
  if(focusKey)panel.querySelector(`[data-part-tab="${focusKey}"]`)?.focus({preventScroll:true});
 }
 function mutate(fn){rememberUndo();mutating=true;try{fn();update();refreshGarage();}finally{mutating=false;}render();}
 function setColour(value){if(!/^#[0-9a-f]{6}$/i.test(value))return;mutate(()=>{const t=pick.target;if(t==='body')selectedPaint=value;else if(t==='roof'){designState.finish='twotone';designState.roofColour=value;}else if(t==='grille')designState.grilleColour=value;else designState.partColours={...designState.partColours,[t]:value};});}
 function variant(kind,value){mutate(()=>{
  if(['grille','decal'].includes(kind)){if(kind==='grille')for(const m of selected())if(/^autostylenn_.*grille$/.test(partVisual(m.id)))state[m.id]=false;chooseDesign(kind,value);}
  else if(kind==='tyre'){setPartSelection('tires',value!=='highway');designState.tyreType=value;}
  else if(kind==='wheel'){designState.wheelFinish=value;const colours={...designState.partColours};delete colours.wheels;designState.partColours=colours;}
  else if(kind==='fabric'||kind==='cabin'){setPartSelection('seats',true);setPartSelection('doortrim',true);designState[kind==='fabric'?'seatFabric':'cabin']=value;}
  else if(kind==='part'){const p=product(pick.target);if(value==='stock'){if(p)setPartSelection(p.id,false);}else if(setPartSelection(value,true)!==false)pick.target=JimnySurfaceStyles.target(modById[value].visual||value);}
 });}
 panel.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;
  if(b.hasAttribute('data-part-targets')){choosingTarget=!choosingTarget;render();panel.querySelector(choosingTarget?'[data-target-search]':'[data-part-targets]')?.focus({preventScroll:true});return;}
  if(b.dataset.pickTarget){const mode=tab;open(capabilities(b.dataset.pickTarget));tab=mode;frameVariants();render();return;}
  if(b.dataset.partChoice){const kind=b.dataset.partChoice,value=b.dataset.partValue;variant(kind,value);panel.querySelector(`[data-part-choice="${kind}"][data-part-value="${value}"]`)?.focus({preventScroll:true});return;}
  if(b.hasAttribute('data-part-close'))close({focus:true});
  if(b.dataset.partTab){tab=b.dataset.partTab;if(tab==='variants')frameVariants();render();panel.querySelector(`[data-part-tab="${tab}"]`)?.focus({preventScroll:true});}
  if(b.dataset.partSwatch)setColour(b.dataset.partSwatch);
  if(b.dataset.partFinish)mutate(()=>{const next={...designState.partFinishes};if(b.dataset.partFinish==='original')delete next[pick.target];else next[pick.target]=b.dataset.partFinish;designState.partFinishes=next;});
  if(b.dataset.partReset)mutate(()=>{const t=pick.target,next={...designState.partColours};delete next[t];designState.partColours=next;if(t==='grille'){designState.grilleColour='original';designState.badgeColour='original';}if(t==='roof'){designState.roofColour='original';if(designState.finish==='twotone')designState.finish='oem';}if(t==='body')selectedPaint='#d9b744';});
  if(b.hasAttribute('data-part-undo')){undoLastChange();render();}
 });
 panel.addEventListener('input',e=>{if(!e.target.hasAttribute('data-target-search'))return;const q=e.target.value.trim().toLowerCase();let found=0;panel.querySelectorAll('[data-pick-target]').forEach(button=>{button.hidden=!button.textContent.toLowerCase().includes(q);if(!button.hidden)found++;});panel.querySelectorAll('.gc-target-browser section').forEach(section=>section.hidden=![...section.querySelectorAll('[data-pick-target]')].some(b=>!b.hidden));panel.querySelector('.gc-target-empty').hidden=found>0;});
 panel.addEventListener('change',e=>{if(e.target.hasAttribute('data-part-colour'))setColour(e.target.value);if(e.target.hasAttribute('data-part-badge'))mutate(()=>designState.badgeColour=e.target.value);if(e.target.hasAttribute('data-part-target'))open(capabilities(e.target.value));});
 panel.addEventListener('keydown',e=>{const choice=e.target.closest('[data-part-choice]');if(!choice||!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','End'].includes(e.key))return;e.preventDefault();const group=choice.closest('[role="radiogroup"]'),buttons=[...group.querySelectorAll('[data-part-choice]')],i=buttons.indexOf(choice),next=e.key==='Home'?0:e.key==='End'?buttons.length-1:(i+(['ArrowRight','ArrowDown'].includes(e.key)?1:buttons.length-1))%buttons.length,kind=buttons[next].dataset.partChoice,value=buttons[next].dataset.partValue;buttons[next].click();panel.querySelector(`[data-part-choice="${kind}"][data-part-value="${value}"]`)?.focus();});
 panel.addEventListener('keydown',e=>{if(e.key==='Escape'){close({focus:true});return;}if(!e.target.dataset.partTab||!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;e.preventDefault();const tabs=['colour','finish','variants','buy'],i=tabs.indexOf(tab);tab=e.key==='Home'?tabs[0]:e.key==='End'?tabs[3]:tabs[(i+(e.key==='ArrowRight'?1:3))%4];if(tab==='variants')frameVariants();render();panel.querySelector(`[data-part-tab="${tab}"]`).focus();});
 window.addEventListener('jimny-part-pick',e=>open(e.detail));
 window.addEventListener('jimny-model-change',()=>close());
 window.addEventListener('jimny-build-change',()=>{if(mutating)return;if(pick&&!Object.hasOwn(JimnySurfaceStyles.BASE,pick.target)&&!product(pick.target)){close();return;}if(pick)render();});
 document.addEventListener('click',e=>{if(e.target.closest('[data-garage-category],[data-primary-mode],[data-mode-select],[data-close-trip-kit]'))close();const reset=e.target.closest('[data-remove-surface-colour]');if(reset){rememberUndo();const next={...designState.partColours};delete next[reset.dataset.removeSurfaceColour];designState.partColours=next;update();refreshGarage();}},true);
 window.JimnyPartEditor={open,close,openTarget:(target,mode='colour')=>{if(open(capabilities(target))===false)return;if(['colour','finish','variants','buy'].includes(mode)){tab=mode;if(tab==='variants')frameVariants();render();}},getState:()=>pick?{...pick,tab}:null};
})();
