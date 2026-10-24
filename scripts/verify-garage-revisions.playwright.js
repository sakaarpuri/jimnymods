async(page)=>{
 const checks=[],browser=page.context().browser();
 for(const viewport of [{width:1512,height:982},{width:390,height:844}]){
  const c=await browser.newContext({viewport,isMobile:viewport.width<500,hasTouch:viewport.width<500}),p=await c.newPage(),errors=[];
  const ok=(v,label)=>{if(!v)throw Error(viewport.width+'px: '+label);checks.push(viewport.width+'px: '+label);};p.on('pageerror',e=>errors.push(e.message));
  const ready=()=>p.waitForFunction(()=>jimny3D?.getState().detailedReady&&!jimny3D.getState().modelLoading);
  try{
   await p.goto('http://localhost:8080/dist/#garage',{waitUntil:'domcontentloaded'});await ready();
   ok(await p.locator('.workbench-purpose').isVisible(),'purpose and invitation visible');
   const space=await p.evaluate(()=>document.querySelector('#viewer3d').getBoundingClientRect().top-document.querySelector('body>header').getBoundingClientRect().bottom);ok(space>25,'breathing room below header');
   ok(await p.locator('[data-garage-category="popular"]').evaluate(e=>getComputedStyle(e).backgroundColor)==='rgb(212, 217, 214)','selected category uses quiet silver highlight');
   await p.locator('[data-all-black]').click();await p.locator('[data-garage-category="grille"]').click();
   await p.locator('[data-garage-design="grille"][data-garage-option="script"]').click();await p.locator('[data-open-grille-appearance]').click();
   await p.locator('[data-grille-colour="grilleColour"][data-colour-value="#a8322e"]').click();
   ok(await p.evaluate(()=>jimny3D.getState().design.allBlack&&jimny3D.getState().design.grilleColour==='#a8322e'),'grille colour remains editable after All black');
   await p.locator('[data-grille-colour="badgeColour"][data-colour-value="#e6e5de"]').click();ok(await p.evaluate(()=>jimny3D.getState().design.badgeColour==='#e6e5de'),'logo colour remains independent after All black');
   await p.locator('#viewer3d').screenshot({path:'/tmp/jimny-blackout-custom-'+viewport.width+'.png'});
   await p.locator('.camera-controls [data-camera="interior"]').click();
   ok(await p.locator('.cabin-viewpoints').isVisible(),'cabin viewpoint switcher appears');ok((await p.evaluate(()=>jimny3D.getState().camera.position))[0]===-.38,'driver viewpoint is not stuck at centre');
   for(const view of ['passenger','driver-door','passenger-door']){await p.locator('.cabin-viewpoints [data-camera="'+view+'"]').click();ok(await p.locator('#viewer3d').getAttribute('data-camera-view')===view,view+' view available');}
   if(viewport.width>500){await p.locator('.cabin-viewpoints [data-camera=interior]').click();await p.locator('#viewer3d').screenshot({path:'/tmp/jimny-cabin-verified.png'});}
   await p.locator('[data-garage-category="cabin"]').click();await p.locator('[data-garage-fit="drawer"]').click();
   ok(await p.evaluate(()=>jimny3D.getState().camera.mode==='cutaway'),'drawer defaults to cutaway on selection');await p.locator('[data-part-close]').click();
   await p.locator('[data-garage-fit="doortrim"]').click();ok(await p.locator('#viewer3d').getAttribute('data-camera-view')==='doors-cutaway','door insert uses door cutaway');await p.locator('[data-part-close]').click();
   await p.locator('[data-garage-category="graphics"]').click();await p.locator('#garageNameDecal').fill('Trail Sakaar');await p.locator('.garage-name-decal [type=submit]').click();
   ok(await p.evaluate(()=>jimny3D.getState().design.nameDecal==='Trail Sakaar'),'name decal applies in Garage');ok(await p.locator('[data-edit-name-decal]').count()===1,'name decal appears in chosen build list');
   ok(await p.evaluate(()=>sanitizeBuild(currentPayload()).design.nameDecal==='Trail Sakaar'),'name decal retained by share/save schema');
   await p.reload({waitUntil:'domcontentloaded'});await ready();ok(await p.evaluate(()=>jimny3D.getState().design.nameDecal==='Trail Sakaar'),'name decal survives reload');
   await p.locator('[data-edit-name-decal]').click();ok(await p.locator('#garageNameDecal').evaluate(e=>e===document.activeElement),'chosen name opens its editor');
   await p.locator('.garage-name-decal [data-clear-name]').click();ok(await p.evaluate(()=>!jimny3D.getState().design.nameDecal),'name can be removed');
   await p.evaluate(()=>jimny3D.view('orbit'));await p.screenshot({path:'/tmp/jimny-garage-revisions-'+viewport.width+'.png'});
   ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'no horizontal page overflow');ok(errors.length===0,'no application script errors');
  }finally{await c.close();}
 }
 return {passed:checks.length,checks};
}
