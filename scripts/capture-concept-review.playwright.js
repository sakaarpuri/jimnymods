async(page)=>{
  const root='/Volumes/ThatSUVMod/jimnymods/modeling/verification',results=[];
  for(const [driver,body,width,height] of [['man','5door',1440,900],['woman','3door',1440,900],['none','5door',390,844],['none','3door',844,390]]){
    const context=await page.context().browser().newContext({viewport:{width,height}}),p=await context.newPage(),errors=[];
    p.on('pageerror',error=>errors.push(error.message));
    await p.addInitScript(({driver,body})=>{
      localStorage.setItem('thatsuvmod-player-v1',JSON.stringify({driver,name:'',decal:false}));
      localStorage.setItem('thatsuvmod-build',JSON.stringify({body,parts:[],design:{finish:'oem',decal:'none',grille:'oem'}}));
    },{driver,body});
    await p.goto('http://localhost:8080/dist/game.html');
    await p.waitForFunction(()=>!document.getElementById('startButton').disabled);
    await p.locator('#startButton').click();await p.waitForFunction(()=>trailGame.snapshot().running);
    for(const camera of driver==='none'?['interior']:['interior','controls']){
      await p.locator('#cameraButton').selectOption(camera);await p.waitForTimeout(500);
      const file=`${root}/concept-pass-${body}-${driver}-${camera}.png`;await p.screenshot({path:file});
      results.push({driver,body,camera,file,errors:[...errors],state:await p.evaluate(()=>({body:trailGame.snapshot().camera.body,mirrors:trailGame.snapshot().camera.mirrors.map(m=>m.ready),overflow:document.documentElement.scrollWidth>innerWidth}))});
    }
    await context.close();
  }
  const context=await page.context().browser().newContext({viewport:{width:1440,height:1000}}),p=await context.newPage(),errors=[];
  p.on('pageerror',error=>errors.push(error.message));
  await p.goto('http://localhost:8080/dist/#garage');await p.waitForFunction(()=>window.jimny3D?.getState().detailedReady);
  await p.locator('[data-ui-theme-choice]').selectOption('rally');
  await p.locator('[data-garage-fit="tires"]').click();
  await p.locator('[data-garage-category="graphics"]').click();await p.locator('[data-graphic="rally"]').click();
  await p.locator('#vinylInk').fill('#576344');await p.locator('#vinylInk').dispatchEvent('change');
  await p.locator('[data-garage-category="wheels"]').click();await p.evaluate(()=>jimny3D.view('orbit'));
  await p.waitForTimeout(800);
  await p.screenshot({path:`${root}/concept-pass-garage.png`});
  results.push({garage:true,errors,state:await p.evaluate(()=>jimny3D.getState())});await context.close();return results;
}
