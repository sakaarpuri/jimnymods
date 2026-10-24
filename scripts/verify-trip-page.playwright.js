async(page)=>{
 const browser=page.context().browser(),checks=[];
 for(const viewport of [{width:1440,height:950},{width:390,height:844}]){
  const c=await browser.newContext({viewport,isMobile:viewport.width<500,hasTouch:viewport.width<500}),p=await c.newPage(),errors=[];
  const ok=(v,label)=>{if(!v)throw Error(viewport.width+'px: '+label);checks.push(viewport.width+'px: '+label);};
  p.on('pageerror',e=>errors.push(e.message));
  const ready=()=>p.waitForFunction(()=>window.jimny3D?.getState().detailedReady&&!jimny3D.getState().modelLoading,null,{timeout:90000});
  try{
   await p.goto('http://localhost:8080/dist/#garage',{waitUntil:'domcontentloaded'});await ready();
   ok(await p.locator('.on-car-launch').count()===0,'redundant edit launcher removed');
   ok(await p.locator('.garage-pick-direction').isVisible(),'click-the-car direction visible');
   ok(await p.locator('#previewScenery').isVisible(),'background chooser visible without expanding viewer');
   const before=await p.evaluate(()=>JSON.stringify(currentPayload()));
   for(const scene of ['mountains','urban','desert','studio']){await p.locator('#previewScenery').selectOption(scene);await p.waitForFunction(id=>jimny3D.getState().scenery===id&&!jimny3D.getState().sceneryLoading,scene,{timeout:45000});ok(await p.evaluate(()=>!jimny3D.getState().sceneryFailed),scene+' background loads');}
   ok(before===await p.evaluate(()=>JSON.stringify(currentPayload())),'background switching preserves build');
   await p.screenshot({path:'/tmp/jimnygami-backgrounds-'+viewport.width+'.png'});
   if(viewport.width>500){const box=await p.locator('#viewer3d canvas').boundingBox();await p.mouse.click(box.x+box.width*.6,box.y+box.height*.5);ok(await p.locator('#onCarEditor').isVisible(),'actual car geometry opens editor without launcher');await p.locator('[data-part-close]').click();}
   if(viewport.width<500)await p.locator('.primary-menu-toggle').click();
   await Promise.all([p.waitForURL('**/trip-planner.html'),p.locator('#primaryNavigation [data-open-trip-planner]').click()]);
   ok(await p.locator('dialog#jimnyTripPlanner').count()===0,'Trip planner navigates to its own page, not modal');
   ok(await p.locator('[data-trip-route]').count()===7,'all seven existing routes have visual choices');
   for(const id of ['manali-leh','srinagar-leh','spiti','rajasthan','kutch','konkan','tawang']){
    await p.locator('[data-trip-route="'+id+'"]').click();
    ok(await p.locator('#trip-routeId').inputValue()===id,id+' picture selects the worksheet route');
    await p.locator('.trip-destination-photo>img').evaluate(i=>i.decode());
    ok(await p.locator('.trip-destination-photo figcaption').innerText().then(t=>/CC BY/.test(t)),id+' photo credit and licence visible');
    ok(await p.locator('.trip-emergency [href="tel:112"]').count()===1,id+' has official emergency contact');
    ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),id+' no horizontal page overflow');
   }
   await p.locator('[data-trip-route="spiti"]').click();
   await p.locator('[data-trip-waypoint="3"]').click();ok((await p.locator('.trip-map-position').innerText()).includes('Kaza'),'waypoint updates map location');ok((await p.locator('.trip-map-frame iframe').getAttribute('src')).includes('marker=32.22'),'map marker uses actual coordinates');
   await p.locator('#trip-people').fill('3');await p.locator('#trip-month').selectOption('9');
   await p.locator('.trip-tabs [data-trip-tab="readiness"]').click();await p.locator('[name="check:pack-warm"]').check();
   await p.locator('#trip-notes').fill('Confirm Kaza fuel with host; backup overnight if exit closes.');
   await p.reload({waitUntil:'domcontentloaded'});ok(await p.locator('#trip-routeId').inputValue()==='spiti','selected route survives reload');ok(await p.locator('#trip-people').inputValue()==='3','traveller assumptions survive reload');
   await p.locator('.trip-tabs [data-trip-tab="readiness"]').click();ok(await p.locator('[name="check:pack-warm"]').isChecked(),'packing checklist survives reload');
   ok((await p.locator('#trip-notes').inputValue()).includes('Kaza fuel'),'personal notes survive reload');
   await p.locator('#trip-notes').scrollIntoViewIfNeeded();await p.screenshot({path:'/tmp/jimnygami-trip-readiness-'+viewport.width+'.png'});
   await p.evaluate(()=>{const original=URL.createObjectURL;URL.createObjectURL=function(blob){blob.text().then(text=>window.__planExport=text);return original.call(this,blob);};});
   const download=p.waitForEvent('download');await p.locator('[data-trip-download]').click();await download;
   await p.waitForFunction(()=>!!window.__planExport);ok(await p.evaluate(()=>__planExport.includes('112')&&__planExport.includes('108')&&__planExport.includes('Kaza fuel')&&__planExport.includes('NOT emergency services')),'download includes personal plan, sourced emergency contacts and caveats');
   await p.locator('.trip-tabs [data-trip-tab="route"]').click();await p.locator('[data-trip-route="kutch"]').click();
   await p.locator('.trip-tabs [data-trip-tab="readiness"]').click();ok(await p.locator('[name="check:pack-sun"]').isChecked()===false,'route change clears route-specific checklist');
   await p.locator('.trip-tabs [data-trip-tab="kits"]').click();
   ok(await p.locator('[data-trip-panel="kits"] .trip-kit-products img').count()>0,'kit buying choices show supplier photographs');
   const kit=await p.locator('.trip-kit:not([hidden]) [data-trip-kit]').first().getAttribute('data-trip-kit');
   await Promise.all([p.waitForURL('**/index.html?tripRoute=kutch&tripKit='+kit+'#garage'),p.locator('.trip-kit:not([hidden]) [data-trip-kit]').first().click()]);await ready();
   ok(await p.locator('.trip-garage-kit').isVisible(),'route kit opens focused Garage choices');ok(before===await p.evaluate(()=>JSON.stringify(currentPayload())),'visiting trip kits never auto-fits parts');
   await p.locator('.trip-garage-kit [data-open-trip-planner]').click();await p.waitForURL('**/trip-planner.html');
   await p.locator('.trip-tabs [data-trip-tab="route"]').click();await p.locator('[data-trip-route="spiti"]').click();await p.evaluate(()=>scrollTo(0,0));
   await p.screenshot({path:'/tmp/jimnygami-trip-final-'+viewport.width+'.png'});
   ok(errors.length===0,'no application script errors');
  }finally{await c.close();}
 }
 return {passed:checks.length,checks};
}
