async(page)=>{
 const browser=page.context().browser(),checks=[],errors=[];
 const ok=(value,label)=>{if(!value)throw Error(label);checks.push(label);};
 const c=await browser.newContext({viewport:{width:1512,height:982}}),p=await c.newPage();p.on('pageerror',e=>errors.push(e.message));
 const ready=()=>p.waitForFunction(()=>jimny3D?.getState().detailedReady&&!jimny3D.getState().modelLoading);
 const decode=async()=>p.locator('#partEditorContent img').evaluateAll(imgs=>Promise.all(imgs.map(i=>i.decode())));
 try{
  await p.goto('http://localhost:8080/dist/#garage');await ready();
  await p.evaluate(()=>JimnyPartEditor.openTarget('grille','variants'));await decode();
  ok(await p.locator('[data-part-choice="grille"]').count()===9,'all nine grille styles are pictured before selection');
  ok(await p.locator('#onCarEditor [data-part-variant]').count()===0,'no text-only variant dropdown remains');
  await p.screenshot({path:'/tmp/jimnygami-visual-grilles-desktop.png'});
  for(const id of ['block','rhino','script','chrome','delete','classic','mesh','smesh','oem']){await p.locator(`[data-part-choice="grille"][data-part-value="${id}"]`).click();ok(await p.evaluate(id=>jimny3D.getState().design.grille===id,id),id+' tile updates actual model');ok(await p.locator(`[data-part-choice="grille"][data-part-value="${id}"]`).getAttribute('aria-checked')==='true',id+' selected state is visible');}
  await p.locator('[data-part-choice="grille"][data-part-value="oem"]').focus();await p.keyboard.press('ArrowRight');ok(await p.evaluate(()=>jimny3D.getState().design.grille==='block'),'arrow keys select pictured options');ok(await p.locator('[data-part-choice="grille"][data-part-value="block"]').evaluate(e=>e===document.activeElement),'keyboard focus survives rerender');
  await p.locator('[data-part-undo]').click();ok(await p.evaluate(()=>jimny3D.getState().design.grille==='oem'),'undo restores previous pictured option');
  for(const target of ['body','wheels','seats']){await p.evaluate(target=>JimnyPartEditor.openTarget(target,'variants'),target);await decode();ok(await p.locator('#partEditorContent [role="radio"]').count()>0,target+' variants have valid image previews');}
  await p.locator('[data-part-choice="fabric"][data-part-value="tweed"]').click();ok(await p.evaluate(()=>jimny3D.getState().design.seatFabric==='tweed'),'fabric tile updates upholstery');await p.locator('[data-part-close]').click();
  await p.locator('.header-setup > summary').click();await p.locator('#bodySelect').selectOption('3door');await p.locator('.header-setup > summary').click();await ready();
  for(const target of ['grille','body','wheels','seats']){await p.evaluate(target=>JimnyPartEditor.openTarget(target,'variants'),target);await decode();ok(await p.locator('#partEditorContent img').count()>0,'three-door '+target+' previews load');}
  ok(!errors.length,'no desktop script errors');
 }finally{await c.close();}
 const mobile=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true}),m=await mobile.newPage();m.on('pageerror',e=>errors.push(e.message));try{
  await m.goto('http://localhost:8080/dist/#garage');await m.waitForFunction(()=>jimny3D?.getState().detailedReady&&!jimny3D.getState().modelLoading);await m.evaluate(()=>JimnyPartEditor.openTarget('grille','variants'));await m.locator('#partEditorContent img').evaluateAll(imgs=>Promise.all(imgs.map(i=>i.decode())));await m.screenshot({path:'/tmp/jimnygami-visual-grilles-phone.png'});
  ok(await m.locator('#viewer3d').isVisible(),'phone keeps live car visible');ok(await m.evaluate(()=>document.querySelector('.planner-main').scrollWidth<=document.querySelector('.planner-main').clientWidth),'phone has no horizontal overflow');await m.locator('[data-part-choice="grille"][data-part-value="script"]').tap();ok(await m.evaluate(()=>jimny3D.getState().design.grille==='script'),'phone tile applies selected grille');await m.reload();await m.waitForFunction(()=>jimny3D?.getState().detailedReady);ok(await m.evaluate(()=>jimny3D.getState().design.grille==='script'),'pictured grille choice survives reload');ok(!errors.length,'no phone script errors');
 }finally{await mobile.close();}
 return{checks,errors};
}
