async(page)=>{
 const checks=[],browser=page.context().browser();
 for(const viewport of [{width:1440,height:900},{width:1366,height:620},{width:390,height:844}]){
  const context=await browser.newContext({viewport,isMobile:viewport.width<500,hasTouch:viewport.width<500}),p=await context.newPage(),errors=[];p.on('pageerror',e=>errors.push(e.message));
  const ok=(value,label)=>{if(!value)throw Error(viewport.width+'px: '+label);checks.push(viewport.width+'px: '+label);};
  try{
   await p.goto('http://localhost:8080/dist/#garage');await p.waitForFunction(()=>window.JimnyWorkbenchFlow&&window.jimny3D?.getState().detailedReady&&!jimny3D.getState().modelLoading);
   await p.locator('[data-garage-category="grille"]').click();
   const visible=await p.locator('[data-garage-design="grille"]').first().evaluate(button=>{const b=button.getBoundingClientRect(),main=document.querySelector('.planner-main'),m=main.getBoundingClientRect();return{top:b.top,bottom:b.bottom,mainTop:m.top,mainBottom:m.bottom,scroll:main.scrollTop};});
   ok(visible.top>=visible.mainTop&&visible.bottom<=visible.mainBottom,'pictured grille choice fits on entry without scrolling '+JSON.stringify(visible));
   ok(visible.scroll===0,'category opens at the top');
   await p.locator('[data-garage-design="grille"] img').first().evaluate(i=>i.decode());
   await p.screenshot({path:'/tmp/jimnygami-grille-first-'+viewport.width+'.png'});
   ok(await p.locator('#grilleAppearance').evaluate(e=>!e.open),'appearance tools start collapsed');
   await p.locator('[data-garage-design="grille"][data-garage-option="script"]').click();ok(await p.evaluate(()=>jimny3D.getState().design.grille==='script'),'image choice updates model');
   await p.locator('[data-open-grille-appearance]').click();ok(await p.locator('#grilleAppearance').evaluate(e=>e.open),'colour and finish remain one action away');
   await p.locator('[data-grille-colour="badgeColour"][data-colour-value="#a8322e"]').click();ok(await p.evaluate(()=>jimny3D.getState().design.badgeColour==='#a8322e'),'badge colour still works');
   await p.locator('[data-garage-category="paint"]').click();ok(await p.evaluate(()=>document.querySelector('#garage>.surface-controls')!==null),'global finish tools return to their normal category position');
   await p.locator('[data-garage-category="grille"]').click();ok(await p.locator('#grilleAppearance .surface-controls').count()===1,'one shared finish editor is retained');ok(await p.locator('[data-garage-design="grille"]').first().evaluate(e=>{const r=e.getBoundingClientRect(),m=document.querySelector('.planner-main');return m.scrollTop===0&&r.top>=m.getBoundingClientRect().top&&r.bottom<=m.getBoundingClientRect().bottom;}),'returning from appearance tools restores visible choices without retained scroll');
   ok(await p.evaluate(()=>document.querySelector('.planner-main').scrollWidth<=document.querySelector('.planner-main').clientWidth),'no horizontal overflow');ok(!errors.length,'no browser script errors');
  }finally{await context.close();}
 }
 return{checks};
}
