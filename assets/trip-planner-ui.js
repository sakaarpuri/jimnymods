/* Dedicated trip page. The same validated worksheet survives navigation. */
(() => {
  'use strict';
  const P=globalThis.JIMNY_TRIP_PLANNER;if(!P||typeof document==='undefined')return;
  const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const months=['January','February','March','April','May','June','July','August','September','October','November','December'];
  const store=P.createStore(()=>localStorage);
  const isPage=!!document.getElementById('tripPage');
  let dialog,form,state,tab='route',returnFocus,storageBlocked=false;
  const $=s=>dialog.querySelector(s);
  const link=s=>'<a href="'+esc(s.url)+'" target="_blank" rel="noopener noreferrer">'+esc(s.label)+' <span class="trip-sr">(opens new tab)</span></a>';
  const field=(name,label,min,max,help,step='1')=>'<label class="trip-field" for="trip-'+name+'"><span>'+label+'</span><input id="trip-'+name+'" name="'+name+'" type="number" min="'+min+'" max="'+max+'" step="'+step+'" inputmode="decimal" required aria-describedby="trip-'+name+'-help trip-'+name+'-error"><small id="trip-'+name+'-help">'+help+'</small><span class="trip-field-error" id="trip-'+name+'-error"></span></label>';
  function build(){
    dialog=document.createElement('section');dialog.id='jimnyTripPlanner';dialog.className='trip-planner';dialog.setAttribute('aria-labelledby','trip-title');
    dialog.innerHTML='<header class="trip-header"><div><p class="trip-kicker">India / real-world preparation</p><h2 id="trip-title">India expedition planner.</h2><p>Choose a long route. Pack the essentials. Prepare your Jimny.</p></div><button type="button" class="trip-close" data-trip-close aria-label="Close trip planner">×</button></header>'+
      '<nav class="trip-tabs" aria-label="Trip planning sections"><button type="button" data-trip-tab="route">1. Your route</button><button type="button" data-trip-tab="readiness">2. Pack & prepare</button><button type="button" data-trip-tab="kits">3. Useful kits</button></nav>'+
      '<div class="trip-scroll"><p class="trip-disclaimer">A preparation worksheet, not live navigation or permission to travel. Conditions and resources change; no road or water crossing is approved here.</p><form class="trip-form" novalidate>'+
      '<section data-trip-panel="route" aria-label="Your route"><div class="trip-route-layout"><div><label class="trip-field" for="trip-routeId"><span>Choose a route</span><select id="trip-routeId" name="routeId">'+P.routes.map(r=>'<option value="'+r.id+'">'+esc(r.name)+'</option>').join('')+'</select><small>Seven established long-route ideas, with route-specific packing and car preparation. Not a popularity ranking.</small></label><div class="trip-fields"><label class="trip-field" for="trip-month"><span>Departure month</span><select id="trip-month" name="month">'+months.map((m,i)=>'<option value="'+(i+1)+'">'+m+'</option>').join('')+'</select></label>'+field('people','People in this Jimny',1,4,'Plan within your vehicle’s registered seating capacity.')+field('days','Total trip days',1,60,'Include rest, delays and any onward / return travel.')+'</div><label class="trip-check trip-confirm"><input type="checkbox" name="accessVerified"><span>I have checked current access, permits and a fallback for my dates.<small>This is your confirmation, not a status feed.</small></span></label></div><aside class="trip-route-brief" id="trip-route-brief"></aside></div><p class="trip-change-note">Changing route clears route confirmations and checklist ticks. Personal fuel / water assumptions stay, so recheck them.</p></section>'+
      '<section data-trip-panel="readiness" aria-label="Readiness" hidden><div class="trip-summary" id="trip-calculation" role="status" aria-live="polite"></div><details class="trip-section" open><summary>Fuel planning inputs <span>Use measured consumption, not brochure mileage</span></summary><div class="trip-fields">'+field('gap','Longest unverified no-fuel gap · km',1,2000,'Conservative example only, NOT a surveyed station-to-station gap. Replace after checking actual operating stops.')+field('kmpl','Loaded fuel consumption · km/L',1,30,'10 km/L starts as an example, not a promise. Allow for your terrain, idling and load.','0.1')+field('tank','Main tank capacity · L',1,150,'40 L is the India stock brochure capacity. Confirm your vehicle.','0.1')+field('reserve','Fuel to keep in reserve · L',0,100,'Editable allowance. Not a guarantee against delays or detours.','0.1')+field('extraFuel','Additional carried fuel · L',0,100,'Default zero. Verify lawful carriage, purpose-rated container, mounting and payload independently.','0.1')+'</div><label class="trip-check"><input type="checkbox" name="fuelVerified"><span>I checked operating fuel sources and replaced the placeholder gap.</span></label><label class="trip-check"><input type="checkbox" name="consumptionVerified"><span>Consumption is based on my loaded vehicle / route planning, not a default example.</span></label></details>'+
      '<details class="trip-section"><summary>Water & vehicle load <span>Set your resupply allowance and weigh the car</span></summary><div class="trip-fields">'+field('waterPerPerson','Your water allowance · L / person / day',1,20,'Example 4 L. Choose your own allowance for drinking, cooking and delays; not medical advice.','0.5')+field('resupplyDays','Days between confirmed water resupply',1,14,'This is not necessarily the whole trip. Include a disruption allowance.')+field('water','Drinking water carried · L',0,300,'Enter what you can safely carry and restrain. Water adds vehicle mass.','0.5')+field('loadedKg','Weighed, ready-to-travel mass · kg',0,4000,'Zero = not yet weighed. Include people, mods, baggage, fuel and water.')+field('gvm','Your vehicle’s rated GVM · kg',500,4000,'1545 kg is an India brochure example. Use your own plate / handbook; axle and roof limits also apply.')+'</div></details><h3 class="trip-checklist-heading">Preparation checklist <span id="trip-check-progress"></span></h3><p class="trip-muted">Tick what you have checked, not merely what you fitted. Completion is not a safety certificate.</p><div id="trip-checks">'+[...new Set(P.checks.map(c=>c.group))].map((g,i)=>'<details class="trip-section"'+(i===0?' open':'')+'><summary>'+esc(g)+'</summary>'+P.checks.filter(c=>c.group===g).map(c=>'<label class="trip-check"><input type="checkbox" name="check:'+c.id+'"><span>'+esc(c.title)+'<small>'+esc(c.note)+'</small></span></label>').join('')+'</details>').join('')+'</div><label class="trip-field" for="trip-notes"><span>Confirmed stops, local contacts & your notes</span><textarea id="trip-notes" name="notes" rows="4" maxlength="1600" placeholder="Record who confirmed the fuel / water stop, when, and the fallback."></textarea><small>Saved only in this browser. Keep sensitive personal information elsewhere.</small></label></section>'+
      '<section data-trip-panel="kits" aria-label="Useful kits" hidden><div class="trip-kit-intro"><h3>Prepare first. Buy what fills a real gap.</h3><p>These are planning prompts, not mandatory upgrades. Stock vehicles still need servicing, legal access and competent driving. Imported products may not ship to India.</p><p id="trip-build-context"></p></div>'+P.kits.map(k=>'<article class="trip-kit"><h4>'+esc(k.name)+'</h4><p>'+esc(k.items)+'</p><div class="trip-kit-products" data-trip-products="'+k.id+'"></div><button type="button" data-trip-kit="'+k.id+'">Explore this kit in Garage</button></article>').join('')+'<p class="trip-muted">No part is added automatically. Check your body style, installed cost, safe fitment, availability and load ratings. “Jerry+” is a named cargo tray, not a fuel can.</p><details class="trip-section"><summary>Why recovery training matters</summary><p>Recovery equipment stores dangerous energy. Do not attach a recovery strap to a tow ball or unapproved tie-down point. Obtain hands-on training and follow the equipment manufacturer’s instructions.</p>'+link({label:'4WD Industry Council — recovery strap safety guidelines',url:'https://www.4wdcouncil.com.au/resources/snatch-strap-guidelines/'})+'</details></section></form><div class="trip-inline-error" id="trip-form-error" role="alert"></div><p class="trip-save-status" id="trip-save-status" role="status" aria-live="polite"></p><details class="trip-section trip-sources"><summary>Sources & limitations</summary><p>Research checked '+P.checked+'. Route ranges are editorial planning envelopes, not measured navigation or driving-time estimates. Suggested months are context only. Default no-fuel gaps are deliberately unverified examples. Check each source’s publication date and obtain current local confirmation.</p><ul id="trip-source-links"></ul><p>We do not fetch live weather, fuel stock, road status, accommodation, rescue coverage or permits. No high-altitude health assurance, crossing depth, legal approval or automatic equipment suitability is provided.</p></details></div>'+
      '<footer class="trip-footer"><div class="trip-export"><button type="button" data-trip-print>Print / PDF</button><button type="button" data-trip-download>Download plan</button><button type="button" data-trip-reset>Reset</button></div><button type="button" class="trip-next" data-trip-next>Pack & prepare →</button><div class="trip-reset" hidden><p>Reset this saved trip and its checklist? Your Garage build and saved parts kits will not change.</p><button type="button" data-trip-reset-confirm>Reset trip</button><button type="button" data-trip-reset-cancel>Keep my plan</button></div></footer>';
    document.getElementById('tripPage').append(dialog);form=$('form');
    $('.trip-header').innerHTML='<div><p class="trip-kicker">India / expedition notebook</p><h1 id="trip-title">A little Jimny.<br>A long way to go.</h1><p>Find your route. Prepare your car. Keep a plan you can take with you.</p></div><a href="index.html#garage" class="trip-header-link">Your build is waiting in Garage ↗</a>';
    const explorer=document.createElement('div');explorer.id='trip-route-explorer';$('[data-trip-panel="route"]').prepend(explorer);
    const extras=document.createElement('div');extras.id='trip-route-extras';$('.trip-change-note').before(extras);
    const photoCredits=document.createElement('details');photoCredits.className='trip-section';photoCredits.innerHTML='<summary>Destination photo credits</summary><ul>'+Object.entries(globalThis.JIMNY_TRIP_PHOTOS||{}).map(([id,p])=>'<li>'+esc(P.routes.find(r=>r.id===id)?.name)+': '+link({label:p.author,url:p.page})+' · '+link({label:p.licence,url:p.licenceUrl})+'. Responsive cropping; no content edits.</li>').join('')+'</ul>';$('.trip-sources').append(photoCredits);
    $('#trip-routeId').closest('.trip-field').querySelector('small').textContent='Or choose a destination photo above. A new route clears its previous checklist ticks.';
    // Packing and vehicle preparation lead this step. Fuel arithmetic is an
    // expandable supporting tool, not a wall of inputs hiding the checklist.
    const heading=$('.trip-checklist-heading'),intro=heading.nextElementSibling;
    $('[data-trip-panel="readiness"]').prepend(heading,intro,$('#trip-checks'));
    $('#trip-calculation').nextElementSibling.open=false;
    dialog.addEventListener('click',onClick);form.addEventListener('input',onInput);form.addEventListener('change',onChange);form.addEventListener('submit',event=>event.preventDefault());
  }
  function populate(){
    renderChecks();
    for(const e of form.elements){if(!e.name)continue;if(e.name.startsWith('check:'))e.checked=!!state.checks[e.name.slice(6)];else if(e.type==='checkbox')e.checked=state[e.name]===true;else e.value=state[e.name]??'';}
    renderRoute();renderTotals(state);renderKits();
  }
  function readForm(){const data={...state,checks:{}};for(const e of form.elements){if(!e.name)continue;if(e.name.startsWith('check:')){if(e.checked)data.checks[e.name.slice(6)]=true;}else data[e.name]=e.type==='checkbox'?e.checked:e.value;}return data;}
  function update({save=true}={}){
    const raw=readForm(),errors=P.validate(raw);
    for(const e of form.elements){if(!e.name||e.type==='checkbox')continue;const invalid=errors[e.name];e.setAttribute('aria-invalid',String(!!invalid));const label=dialog.querySelector('#trip-'+e.name+'-error');if(label)label.textContent=invalid||'';}
    const invalid=Object.keys(errors).length;
    $('#trip-form-error').textContent=invalid?'Correct the highlighted values. Calculations and saving are paused.':'';
    for(const b of dialog.querySelectorAll('[data-trip-print],[data-trip-download]'))b.disabled=!!invalid;
    if(invalid){$('#trip-calculation').innerHTML='<p class="trip-calculation-paused">Enter valid values to update your planning figures. Earlier figures are not being used.</p>';$('#trip-save-status').textContent='Changes not saved: check the highlighted inputs.';return false;}
    state=P.revise(state,raw);
    for(const e of form.elements)if(e.type==='checkbox')e.checked=e.name.startsWith('check:')?!!state.checks[e.name.slice(6)]:state[e.name]===true;
    renderTotals(state);
    if(save){const result=storageBlocked?{ok:false,error:'Saved data could not be read; download this plan or reset it before saving a replacement.'}:store.save(state);$('#trip-save-status').textContent=result.ok?'Saved on this device only. Export a copy before clearing browser data.':result.error;}
    return true;
  }
  function renderRoute(){
    const r=P.routes.find(r=>r.id===state.routeId);
    globalThis.JimnyTripPage?.render($('#trip-route-explorer'),r);
    $('#trip-route-brief').innerHTML='<p class="trip-kicker">'+esc(r.region)+'</p><h3>'+esc(r.name)+'</h3><p class="trip-distance">'+r.distance.join('–')+' <span>km · approximate</span></p><p>'+esc(r.via)+'</p><p class="trip-muted">'+esc(r.scope)+'</p><p>'+esc(r.note)+'</p><p><strong>Permissions</strong><br>'+esc(r.permit)+'</p><p class="trip-muted">Usual planning window: '+r.months.map(m=>months[m-1].slice(0,3)).join(', ')+'. Not an opening forecast.</p>';
    $('#trip-source-links').innerHTML=[...r.sources,...P.commonSources].map(s=>'<li>'+link(s)+'</li>').join('');
    $('#trip-route-brief').insertAdjacentHTML('beforeend','<h4 class="trip-stages-title">Plan the stages</h4><ol class="trip-stages">'+r.guide.stages.map(line=>'<li>'+esc(line)+'</li>').join('')+'</ol><p class="trip-muted">Stage groups, not a driving timetable or altitude schedule. Verify current access and suitable overnight stops.</p><button type="button" data-trip-tab="readiness">See what to carry & prepare →</button>');
  }
  function renderChecks(){
    const list=P.checksFor(state.routeId),groups=['Pack for this route','Prepare this Jimny',...new Set(P.checks.map(c=>c.group))];
    $('.trip-checklist-heading').nextElementSibling.textContent='For '+P.routes.find(r=>r.id===state.routeId).name+'. Tick what you have packed or checked. Completion is not travel or equipment clearance.';
    $('#trip-checks').innerHTML=groups.map((group,i)=>'<details class="trip-section'+(i<2?' trip-route-checks':'')+'"'+(i<2?' open':'')+'><summary>'+esc(group)+'</summary><div class="trip-check-grid">'+list.filter(c=>c.group===group).map(c=>'<label class="trip-check"><input type="checkbox" name="check:'+esc(c.id)+'"><span>'+esc(c.title)+'<small>'+esc(c.note)+'</small></span></label>').join('')+'</div></details>').join('');
  }
  function renderTotals(input){
    const c=P.calculate(input),f=n=>n.toFixed(1);
    $('#trip-calculation').innerHTML='<div class="trip-metrics"><div><span>Fuel for gap + reserve</span><strong>'+f(c.totalFuelLitres)+' <small>L</small></strong><p>'+input.gap+' km ÷ '+input.kmpl+' km/L + '+input.reserve+' L</p></div><div><span>Compared with carried fuel</span><strong>'+(c.shortfallLitres?f(c.shortfallLitres)+' L short':'No arithmetic deficit')+'</strong><p>'+f(c.availableLitres)+' L entered. This does not confirm the next station.</p></div><div><span>Your water resupply allowance</span><strong>'+f(c.waterLitres)+' <small>L</small></strong><p>'+input.people+' people × '+input.waterPerPerson+' L × '+input.resupplyDays+' days. '+(c.waterShortfall?f(c.waterShortfall)+' L below your allowance.':'Allowance entered; verify resupply.')+'</p></div></div><details class="trip-open-checks" open><summary>'+c.warnings.length+' planning points to resolve</summary><ul>'+c.warnings.map(w=>'<li>'+esc(w)+'</li>').join('')+'</ul></details><p class="trip-muted">'+esc(c.status)+'. Approximate corridor fuel: '+c.totalTripFuel.map(f).join('–')+' L before detours / reserve; this is not one tank’s requirement.</p>';
    $('#trip-check-progress').textContent=c.completed+' / '+c.total+' reviewed';
  }
  function renderKits(){
    const route=P.routes.find(r=>r.id===state.routeId);
    for(const k of P.kits)$('[data-trip-kit="'+k.id+'"]').closest('.trip-kit').hidden=!route.guide.kitIds.includes(k.id);
    const products=Array.isArray(globalThis.JIMNY_MARKET_PRODUCTS)?globalThis.JIMNY_MARKET_PRODUCTS:[];
    for(const k of P.kits){const ids=[...new Set([...(k.practicalIds||[]).map(id=>globalThis.JimnyPracticalParts?.[id]).filter(Boolean).map(p=>p.existingId||p.id),...k.productIds])],relevant=ids.map(id=>products.find(p=>p.id===id)).filter(Boolean);$('[data-trip-products="'+k.id+'"]').innerHTML=relevant.slice(0,6).map(p=>{const photo=globalThis.JIMNY_PRODUCT_PHOTOS?.[p.id];return '<button type="button" data-source-part="'+esc(p.id)+'">'+(photo?'<img src="'+esc(photo.local)+'" alt="'+esc(p.name)+' · supplier photo" width="84" height="64" loading="lazy">':'')+'<span>'+esc(p.name)+'<small>Compare sources in Garage'+(photo?' · photo: '+esc(photo.credit):'')+'</small></span></button>';}).join('');}
    let build;try{build=typeof globalThis.getJimnyBuildState==='function'?globalThis.getJimnyBuildState():typeof globalThis.currentPayload==='function'?globalThis.currentPayload():null;}catch{}
    $('#trip-build-context').textContent=Array.isArray(build?.parts)?'Your current Garage build has '+build.parts.length+' selected part'+(build.parts.length===1?'':'s')+'. This planner does not certify that equipment or alter the build.':'You can explore parts without changing your build. Save the finished build or a parts kit separately in Garage.';
  }
  function selectTab(id,focus=true){
    tab=['route','readiness','kits'].includes(id)?id:'route';
    for(const e of dialog.querySelectorAll('[data-trip-panel]'))e.hidden=e.dataset.tripPanel!==tab;
    for(const b of dialog.querySelectorAll('[data-trip-tab]')){const active=b.dataset.tripTab===tab;b.setAttribute('aria-current',active?'step':'false');}
    $('[data-trip-next]').textContent=tab==='route'?'Pack & prepare →':tab==='readiness'?'Explore useful kits →':'Back to route';
    if(focus){$('.trip-tabs').scrollIntoView({block:'start',behavior:'instant'});$('[data-trip-tab="'+tab+'"]').focus({preventScroll:true});}
  }
  function open(){
    if(!isPage){location.href='trip-planner.html';return;}if(!dialog)build();
    const saved=store.read();state=saved.state;storageBlocked=!saved.ok;populate();selectTab('route',false);
    $('#trip-save-status').textContent=saved.ok?'Saved only in this browser. No account or location tracking.':saved.error;
  }
  function onInput(event){if(event.target.name==='routeId')return;update();}
  function onChange(event){
    if(event.target.name==='routeId'){state=P.changeRoute(state,event.target.value);populate();update();$('#trip-save-status').textContent+=' Route checks cleared; review fuel assumptions.';}
  }
  function download(){
    if(!update())return;const blob=new Blob([exportPlan()],{type:'text/plain;charset=utf-8'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='jimnygami-'+state.routeId+'-trip-plan.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
  }
  function print(){
    if(!update())return;
    const iframe=document.createElement('iframe');iframe.className='trip-print-frame';iframe.title='Printable trip plan';document.body.append(iframe);
    const d=iframe.contentDocument;d.title='jimnygami India trip plan';const style=d.createElement('style');style.textContent='body{margin:24px;color:#1b2927;font-family:Arial,sans-serif}pre{white-space:pre-wrap;overflow-wrap:anywhere;font:12px/1.55 Arial,sans-serif}';d.head.append(style);const pre=d.createElement('pre');pre.textContent=exportPlan();d.body.append(pre);
    iframe.contentWindow.focus();iframe.contentWindow.print();setTimeout(()=>iframe.remove(),60000);
  }
  function onClick(event){
    const b=event.target.closest('button');if(!b)return;
    if(b.dataset.tripRoute){$('#trip-routeId').value=b.dataset.tripRoute;$('#trip-routeId').dispatchEvent(new Event('change',{bubbles:true}));$('#trip-route-explorer .trip-destination-grid').scrollIntoView({block:'start',behavior:'instant'});return;}
    if(b.hasAttribute('data-trip-close'))location.href='index.html#garage';
    else if(b.dataset.tripTab)selectTab(b.dataset.tripTab);
    else if(b.hasAttribute('data-trip-next'))selectTab(tab==='route'?'readiness':tab==='readiness'?'kits':'route');
    else if(b.hasAttribute('data-trip-download'))download();
    else if(b.hasAttribute('data-trip-print'))print();
    else if(b.hasAttribute('data-trip-reset')){$('.trip-reset').hidden=false;$('[data-trip-reset-confirm]').focus();}
    else if(b.hasAttribute('data-trip-reset-cancel')){$('.trip-reset').hidden=true;$('[data-trip-reset]').focus();}
    else if(b.hasAttribute('data-trip-reset-confirm')){const result=store.remove();if(!result.ok){$('#trip-save-status').textContent=result.error;return;}storageBlocked=false;state=P.defaults();populate();$('.trip-reset').hidden=true;selectTab('route');update();}
    else if(b.hasAttribute('data-source-part'))location.href='index.html?tripSource='+encodeURIComponent(b.dataset.sourcePart)+'#garage';
    else if(b.dataset.tripKit){const k=P.kits.find(k=>k.id===b.dataset.tripKit);if(!k)return;globalThis.dispatchEvent(new CustomEvent('jimny:trip-kit-request',{detail:{routeId:state.routeId,kitId:k.id}}));location.href='index.html?tripRoute='+encodeURIComponent(state.routeId)+'&tripKit='+encodeURIComponent(k.id)+'#garage';}
  }
  function exportPlan(){return P.exportText(state)+(globalThis.JimnyTripPage?.exportNotes(state.routeId)||'');}
  globalThis.openJimnyTripPlanner=open;
  document.addEventListener('click',event=>{if(!event.target.closest?.('[data-open-trip-planner]'))return;event.preventDefault();open();});
  if(isPage)open();
})();
