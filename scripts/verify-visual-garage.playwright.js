async(page)=>{
 const ctx=await page.context().browser().newContext({viewport:{width:1440,height:1000}}),p=await ctx.newPage(),errors=[],results=[];
 const root='/Volumes/ThatSUVMod/jimnymods/modeling/verification';
 p.on('pageerror',e=>errors.push(e.message));p.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
 const check=(ok,message)=>{if(!ok)throw new Error(message);};
 async function ready(){await p.waitForFunction(()=>window.jimny3D?.getState().detailedReady&&!window.jimny3D.getState().modelLoading);await p.waitForTimeout(1100);}
 async function images(){return p.evaluate(async()=>{const images=[...document.querySelectorAll('#garageChoices img')].filter(i=>i.closest('#buildControls')?!i.closest('#buildControls').hidden&&!i.closest('.editor-panel')?.hidden:!i.closest('#garagePartChoices')?.hidden);await Promise.all(images.map(i=>{i.loading='eager';return i.decode().catch(()=>{});}));return images.filter(i=>!i.naturalWidth).map(i=>i.src);});}
 try{
  await p.goto('http://localhost:8080/dist/#garage');await ready();
  for(const category of ['popular','paint','graphics','wheels','grille','bumpers','lighting','roof','rear','cabin']){
   await p.locator(`[data-garage-category="${category}"]`).click();
   const broken=await images();check(!broken.length,`${category}: broken images ${broken}`);
   const pictures=await p.locator('#garageChoices button:visible img').count();check(pictures>0,`${category} has no image choices`);
   check(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`${category} horizontal overflow`);
   const car=await p.locator('#viewer3d').boundingBox();check(car.y>=0&&car.y+car.height<=1000,`${category} car leaves viewport`);
   results.push({category,pictures,broken});
   if(['grille','graphics','cabin','roof','paint'].includes(category))await p.screenshot({path:`${root}/garage-visual-${category}-desktop.png`});
  }
  for(const category of ['popular','wheels','bumpers','lighting','roof','rear','cabin']){
   await p.locator(`[data-garage-category="${category}"]`).click();
   const buttons=p.locator('#garageChoices [data-garage-fit]:visible:not(:disabled)');
   for(let i=0;i<await buttons.count();i++){
    const b=buttons.nth(i),id=await b.getAttribute('data-garage-fit');
    await b.click();check(await b.getAttribute('aria-pressed')==='true',`${id} did not fit`);check(await p.evaluate(id=>getJimnyBuildState().parts.includes(id),id),`${id} not saved`);
    await b.click();check(await b.getAttribute('aria-pressed')==='false',`${id} did not remove`);
   }
  }
  await p.locator('[data-garage-category="wheels"]').click();
  for(const id of ['road-oem','at-graphite','at-bronze','at-silver','road-black','road-bronze']){
   const button=p.locator(`[data-wheel-choice="${id}"]`);await button.click();check(await button.getAttribute('aria-pressed')==='true',`${id} wheel combination did not select`);
   if(id!=='road-oem'){await button.click();check(await p.evaluate(()=>jimny3D.getState().design.wheelFinish==='oem'&&jimny3D.getState().assemblies.wheels==='stock'),`${id} did not restore stock`);}
  }
  await p.locator('[data-garage-category="grille"]').click();const grille=p.locator('[data-garage-design="grille"][data-garage-option="block"]');await grille.click();check(await p.evaluate(()=>jimny3D.getState().design.grille==='block'),'Grille picture mismatch');await grille.click();check(await p.evaluate(()=>jimny3D.getState().design.grille==='oem'),'Grille repeat remove');
  await p.locator('[data-garage-category="graphics"]').click();const graphic=p.locator('[data-graphic="rally"]');await graphic.click();check(await p.evaluate(()=>jimny3D.getState().design.decal==='rally'),'Decal picture mismatch');await graphic.click();check(await p.evaluate(()=>jimny3D.getState().design.decal==='none'),'Decal repeat remove');
  await p.locator('[data-garage-category="paint"]').click();await p.locator('[data-paint-choice="#b94132"]').click();check(await p.evaluate(()=>jimny3D.getState().colour==='#b94132'),'Paint image mismatch');
  await p.locator('[data-garage-category="cabin"]').click();const cover=p.locator('[data-cabin-colour="olive"]');await cover.click();check(await p.evaluate(()=>getJimnyBuildState().parts.includes('seats')&&jimny3D.getState().design.cabin==='olive'),'Seat colour fit');await cover.click();check(await cover.getAttribute('aria-pressed')==='false','Seat colour repeat remove');
  await p.locator('[data-garage-undo]').click();check(await p.evaluate(()=>getJimnyBuildState().parts.includes('seats')),'Undo did not restore covers');
  await p.reload();await ready();check(await p.evaluate(()=>getJimnyBuildState().parts.includes('seats')&&getJimnyBuildState().colour==='#b94132'),'Reload lost choices');
  for(const size of [{width:390,height:844},{width:844,height:390},{width:1100,height:800}]){
   await p.setViewportSize(size);
   for(const category of ['grille','graphics','lighting','cabin']){
    await p.locator(`[data-garage-category="${category}"]`).click();await images();
    check(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`${size.width}/${category} overflow`);
    await p.locator('.planner-main').evaluate(e=>e.scrollTop=e.scrollHeight);const car=await p.locator('#viewer3d').boundingBox();check(car.height>85&&car.y>=0&&car.y+car.height<=size.height,`${category}: car disappeared while scrolling`);
    await p.locator('.planner-main').evaluate(e=>e.scrollTop=0);
   }
   await p.screenshot({path:`${root}/garage-visual-cabin-${size.width}x${size.height}.png`});
  }
  await p.setViewportSize({width:1440,height:1000});await p.selectOption('#bodySelect','3door');await ready();
  await p.locator('[data-garage-category="grille"]').click();check(!(await images()).length,'SWB grille pictures missing');check((await p.locator('[data-garage-design="grille"] img').first().getAttribute('src')).includes('/swb/'),'Wrong body image');
  await p.locator('[data-garage-category="cabin"]').click();check(await p.locator('[data-cabin-colour="tan"]').isDisabled(),'Unsupported SWB seat preview offered');check(await p.locator('#cabinControls [data-garage-fit]:not(:disabled)').count()===0,'Unsupported cabin part offered');
  check(!errors.length,errors.join('\n'));return {results,errors};
 }finally{await ctx.close();}
}
