async(page, options={})=>{
  // Actual render captures only. Generated targets live beside these separately.
  // Reuse identical points and framing for before/after; never replace before.
  const phase=options.phase==='after'?'after':'before';
  const root='/Volumes/ThatSUVMod/jimnymods/modeling/verification';
  const base=options.base||'http://localhost:8080',results=[];
  const poses={mountain:{point:[60,90],yaw:0,mission:'cross-axle'},urban:{point:[-65,72],yaw:0,mission:'ramps'},sand:{point:[-65,185],yaw:.6,mission:'crest'}};
  const context=await page.context().browser().newContext({viewport:{width:1440,height:900}}),preview=await context.newPage(),errors=[];
  preview.setDefaultTimeout(120000);
  preview.on('pageerror',error=>errors.push(error.message));
  preview.on('console',message=>{if(message.type()==='error'||/shader.*(?:error|failed)|VALIDATE_STATUS.*false/i.test(message.text()))errors.push(message.text());});
  try{
    await preview.goto(`${base}/modeling/verification/world-previews.html`);await preview.waitForFunction(()=>window.worldPreviews);
    for(const [id,pose] of Object.entries(poses)){
      const state=await preview.evaluate(async({id,pose})=>worldPreviews.render(id,{...pose,shot:'chase',width:1440,height:900}),{id,pose});
      const file=`${root}/course-${phase}-${id}.png`;await preview.screenshot({path:file});results.push({kind:'engine',phase,id,file,pose,state,errors:[...errors]});
    }
  }finally{await context.close();}
  if(options.engineOnly)return results;
  for(const id of Object.keys(poses)){
    const context=await page.context().browser().newContext({viewport:{width:1440,height:900}}),p=await context.newPage(),errors=[];
    p.setDefaultTimeout(120000);
    p.on('pageerror',error=>errors.push(error.message));
    p.on('console',message=>{if(message.type()==='error'||/shader.*(?:error|failed)|VALIDATE_STATUS.*false/i.test(message.text()))errors.push(message.text());});
    try{
      await p.goto(`${base}/dist/game.html`);await p.waitForFunction(()=>window.trailGame&&!document.querySelector('#startButton').disabled);
      await p.locator('[data-play-mode=explore]').click();await p.locator(`[data-course="${id}"]`).click();await p.locator('#startButton').click();await p.waitForFunction(()=>trailGame.snapshot().running);
      for(const [width,height] of [[1440,900],[390,844],[844,390]]){
        await p.setViewportSize({width,height});await p.waitForTimeout(500);
        const file=`${root}/course-${phase}-game-${id}-${width}x${height}.png`;await p.screenshot({path:file});
        results.push({kind:'gameplay',phase,id,file,viewport:[width,height],state:await p.evaluate(()=>({course:trailGame.snapshot().course,camera:trailGame.snapshot().camera.mode,overflow:document.documentElement.scrollWidth>innerWidth,stage:document.querySelector('#stage').getBoundingClientRect().toJSON()})),errors:[...errors]});
      }
    }finally{await context.close();}
  }
  return results;
}
