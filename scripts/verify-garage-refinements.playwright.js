async(page)=>{
 const context=await page.context().browser().newContext({viewport:{width:1440,height:1000}}),p=await context.newPage(),errors=[],checks=[];
 const root='/Volumes/ThatSUVMod/jimnymods/modeling/verification';
 p.on('pageerror',e=>errors.push(e.message));
 const check=(value,message)=>{if(!value)throw new Error(message);checks.push(message);};
 try{
  await p.goto('http://localhost:8080/dist/#garage');await p.waitForFunction(()=>window.jimny3D?.getState().detailedReady);
  await p.locator('[data-ui-theme-choice]').selectOption('rally');
  await p.locator('[data-garage-category="paint"]').click();
  check(await p.locator('.paint-chip').count()===28,'All 28 compact paint swatches are available');
  check(await p.locator('#paintGallery img').count()===0,'Paint does not load repeated car-photo tiles');
  await p.locator('[data-paint-choice="#397f7e"]').click();
  check(await p.evaluate(()=>jimny3D.getState().colour==='#397f7e'),'Swatch updates live model');
  check(await p.locator('#paintName').textContent()==='Ocean Teal','Selected colour has a readable name');
  await p.locator('#paintHex').fill('#345678');await p.locator('#paintHex').press('Tab');
  check(await p.evaluate(()=>jimny3D.getState().colour==='#345678'),'Custom hex paint updates live model');
  await p.locator('[data-garage-undo]').click();
  check(await p.evaluate(()=>jimny3D.getState().colour==='#397f7e'),'Undo restores paint');
  await p.locator('[data-paint-choice="#d9b744"]').click();
  await p.screenshot({path:`${root}/refinement-paint-desktop.png`});
  await p.setViewportSize({width:390,height:844});
  const dimensions=await p.evaluate(()=>({overflow:document.documentElement.scrollWidth>innerWidth,chip:document.querySelector('.paint-chip').getBoundingClientRect().toJSON(),car:document.querySelector('#viewer3d').getBoundingClientRect().toJSON()}));
  check(!dimensions.overflow,'Compact paint palette has no horizontal overflow at 390px');
  check(dimensions.chip.width>=40&&dimensions.chip.height>=44,'Paint swatches retain usable mobile touch targets');
  await p.locator('[data-paint-choice="#586a45"]').click();
  check(await p.evaluate(()=>jimny3D.getState().colour==='#586a45'),'Mobile paint swatch updates live model');
  await p.screenshot({path:`${root}/refinement-paint-mobile.png`});
  await p.setViewportSize({width:1440,height:1000});
  await p.locator('[data-paint-choice="#d9b744"]').click();
  await p.locator('[data-garage-category="wheels"]').click();await p.locator('[data-wheel-choice="at-graphite"]').click();
  check(await p.evaluate(()=>jimny3D.getState().assemblies.wheels==='all-terrain'),'Revised all-terrain wheels fit');
  await p.waitForTimeout(300);await p.screenshot({path:`${root}/refinement-garage-desktop.png`});
  await p.selectOption('#bodySelect','3door');await p.waitForFunction(()=>jimny3D.getState().body==='3door'&&!jimny3D.getState().modelLoading);
  check(await p.evaluate(()=>jimny3D.getState().detailedReady),'Revised three-door model loads');
  check(!errors.length,'No page errors during targeted garage checks');return {checks,errors};
 }finally{await context.close();}
}
