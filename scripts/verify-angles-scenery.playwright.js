async(page,baseURL='http://localhost:8088/dist/')=>{
 const browser=page.context().browser(),checks=[],errors=[];
 const ok=(v,message)=>{if(!v)throw Error(message);checks.push(message);};
 for(const [width,height] of [[1440,900],[1024,600],[390,812],[375,667]]){
  const context=await browser.newContext({viewport:{width,height},deviceScaleFactor:1}),p=await context.newPage();p.on('pageerror',e=>errors.push(e.message));
  try{
   await p.addInitScript(()=>{localStorage.setItem('thatsuvmod-welcomed','1');localStorage.setItem('jimnygami-preview-ack-v1','1');});
   await p.goto(baseURL+'#garage',{waitUntil:'domcontentloaded',timeout:120000});
   await p.waitForFunction(()=>window.jimny3D?.getState().detailedReady&&!jimny3D.getState().modelLoading,null,{timeout:120000});
   await p.evaluate(()=>{openGarageCategory('popular');window.panelCanvas=document.querySelector('#viewer3d canvas');window.panelBuild=JSON.stringify(currentPayload());});
   const panel=p.locator('.garage-angles'),trigger=p.locator('.garage-angles-open');
   async function open(){if(!await panel.evaluate(e=>e.open))await trigger.click();}
   await open();
   const box=await panel.boundingBox();ok(box.x>=-1&&box.x+box.width<=width+1&&box.y>=0&&box.y+box.height<=height+1,`${width}: panel fits the viewport`);
   ok(await panel.evaluate(e=>e.scrollWidth<=e.clientWidth),`${width}: panel content has no horizontal overflow`);
   ok(await panel.locator('details,summary,select:visible').count()===0,`${width}: no dropdowns or nested menus in the panel`);
   ok(await panel.locator('[data-camera]:visible').count()===12,`${width}: all twelve camera choices are visible`);
   ok(await panel.locator('[data-camera][aria-pressed=true]').count()===1,`${width}: current camera has one selected state`);
   for(const angle of ['front','side','rear','interior','passenger','seats','storage','driver-door','passenger-door','cutaway','cargo','orbit']){
    await open();await panel.locator(`[data-camera="${angle}"]`).click();
    await p.waitForFunction(angle=>jimny3D.getState().view===angle,angle);
    await open();ok(await panel.locator(`[data-camera="${angle}"]`).getAttribute('aria-pressed')==='true',`${width}: ${angle} changes the actual camera and stays selected`);
   }
   await panel.getByRole('tab',{name:'Camera angles',exact:true}).focus();await p.keyboard.press('ArrowRight');
   ok(await panel.getByRole('tab',{name:'Scenery',exact:true}).getAttribute('aria-selected')==='true',`${width}: arrow keys switch tabs`);
   ok(await panel.locator('[data-angle-scenery]:visible').count()===5&&await panel.locator('[data-angle-scenery] svg').count()===5,`${width}: five scenery tiles render without photo requests`);
   await panel.locator('[data-angle-scenery="studio"]').click();
   await p.waitForFunction(()=>jimny3D.getState().scenery==='studio');await open();
   ok(await panel.locator('[data-angle-scenery="studio"]').getAttribute('aria-pressed')==='true',`${width}: scenery tile changes the renderer and is selected`);
   // The original expanded-view control remains in sync with the new picker.
   await p.evaluate(()=>{const s=document.querySelector('.studio-scenery select');s.value='gray';s.dispatchEvent(new Event('change',{bubbles:true}));});
   await p.waitForFunction(()=>document.querySelector('[data-angle-scenery="gray"]').getAttribute('aria-pressed')==='true');
   ok(true,`${width}: external scenery changes update the picker`);
   await open();await p.keyboard.press('Escape');
   await p.waitForFunction(()=>!document.querySelector('.garage-angles').open&&document.querySelector('.garage-angles-open').getAttribute('aria-expanded')==='false'&&document.activeElement===document.querySelector('.garage-angles-open'));
   ok(await trigger.getAttribute('aria-expanded')==='false'&&await trigger.evaluate(e=>e===document.activeElement),`${width}: Escape closes the panel and restores focus`);
   ok(await p.evaluate(()=>window.panelCanvas===document.querySelector('#viewer3d canvas')&&window.panelBuild===JSON.stringify(currentPayload())),`${width}: camera and scenery controls keep the renderer and build intact`);
   if(width===1440){
    await open();await panel.getByRole('tab',{name:'Scenery',exact:true}).click();
    for(const scene of ['mountains','urban','desert']){
     await panel.locator(`[data-angle-scenery="${scene}"]`).click();
     await p.waitForFunction(scene=>jimny3D.getState().scenery===scene&&!jimny3D.getState().sceneryLoading,scene,{timeout:120000});
     ok(await p.evaluate(()=>!jimny3D.getState().sceneryFailed&&jimny3D.getState().sceneryVisible),`${scene}: outdoor scenery finishes loading successfully`);
    }
    await panel.locator('[data-angle-scenery="gray"]').click();
    await panel.getByRole('tab',{name:'Camera angles',exact:true}).click();
    await p.evaluate(()=>{const s=document.getElementById('bodySelect');s.value='3door';s.dispatchEvent(new Event('change',{bubbles:true}));});
    await p.waitForFunction(()=>jimny3D.getState().body==='3door'&&!jimny3D.getState().modelLoading,null,{timeout:120000});
    await open();await panel.locator('[data-camera="rear"]').click();await p.waitForFunction(()=>jimny3D.getState().view==='rear');
    ok(await panel.locator('[data-camera="rear"]').getAttribute('aria-pressed')==='true','body switch keeps the controls working for a three-door Jimny');
   }
  }finally{await context.close();}
 }
 ok(!errors.length,'no page errors: '+errors.join(', '));return{checks,errors};
}
