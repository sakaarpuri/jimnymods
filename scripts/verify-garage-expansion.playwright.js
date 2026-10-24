async(page)=>{
 const root='/Volumes/ThatSUVMod/jimnymods/modeling/verification',results=[];
 const context=await page.context().browser().newContext({viewport:{width:1440,height:1000},deviceScaleFactor:1}),p=await context.newPage(),errors=[];
 p.on('pageerror',e=>errors.push(e.message));
 p.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
 const check=(ok,message)=>{if(!ok)throw new Error(message);};
 try{
  await p.goto('http://localhost:8080/dist/#garage');
  await p.waitForFunction(()=>window.jimny3D?.getState().detailedReady&&!window.jimny3D.getState().modelLoading);
  await p.locator('[data-ui-theme-choice]').selectOption('rally');
  await p.locator('[data-garage-category="wheels"]').click();
  await p.locator('[data-wheel-choice="at-bronze"]').click();
  check(await p.evaluate(()=>jimny3D.getState().design.wheelFinish==='bronze'&&jimny3D.getState().assemblies.wheels==='all-terrain'),'Wheel combination did not fit');
  await p.locator('[data-wheel-choice="at-bronze"]').click();
  check(await p.evaluate(()=>jimny3D.getState().design.wheelFinish==='oem'&&jimny3D.getState().assemblies.wheels==='stock'),'Repeated click did not restore stock');
  await p.locator('[data-garage-undo]').click();
  check(await p.evaluate(()=>jimny3D.getState().design.wheelFinish==='bronze'),'Undo lost wheel finish');
  await p.reload();await p.waitForFunction(()=>window.jimny3D?.getState().detailedReady);
  check(await p.evaluate(()=>jimny3D.getState().design.wheelFinish==='bronze'),'Saved finish did not survive reload');
  await p.locator('[data-garage-category="graphics"]').click();await p.locator('[data-graphic="rally"]').click();
  await p.locator('#vinylInk').fill('#576344');await p.locator('#vinylInk').dispatchEvent('change');
  await p.locator('[data-garage-category="wheels"]').click();await p.locator('[data-wheel-choice="at-graphite"]').click();
  await p.waitForTimeout(500);
  await p.screenshot({path:`${root}/garage-expanded-desktop.png`});
  for(const size of [{width:390,height:844},{width:844,height:390},{width:1100,height:800},{width:1440,height:1000}]){
   await p.setViewportSize(size);await p.waitForTimeout(250);
   check(await p.locator('.garage-categories').count()===1,'Duplicated category navigation');
   check(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'Garage horizontal overflow');
   const bounds=await p.locator('#viewer3d').boundingBox();check(bounds.height>85&&bounds.y< size.height,'Car left viewport');
   await p.screenshot({path:`${root}/garage-expanded-${size.width}x${size.height}.png`});
   results.push({mode:'garage',size,bounds});
  }
  await p.setViewportSize({width:390,height:844});await p.locator('[data-primary-mode="resources"]').click();
  const tray=await p.locator('.planner-main').boundingBox();check(tray.height>450,'Resource reading pane remains too small');
  await p.screenshot({path:`${root}/garage-expanded-mobile-resources.png`});results.push({mode:'resources',tray});
  check(!errors.length,errors.join('\n'));return {results,errors};
 }finally{await context.close();}
}
