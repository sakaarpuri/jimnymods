async(page)=>{
 const results=[];
 for(const [width,height]of [[1440,900],[390,844]]){
  const context=await page.context().browser().newContext({viewport:{width,height}}),p=await context.newPage(),errors=[];
  p.on('pageerror',error=>errors.push(error.message));
  const expect=(condition,message)=>{if(!condition)throw new Error(`${width}px: ${message}`);};
  try{
   await p.goto('http://localhost:8080/dist/game.html#himachal');
   await p.waitForFunction(()=>!document.getElementById('startButton').disabled);
   await p.locator('#startButton').click();await p.waitForFunction(()=>trailGame.snapshot().running);
   await p.waitForTimeout(3500);
   const audio=await p.evaluate(()=>trailGame.audio());expect(audio.enabled&&audio.state==='running'&&audio.rms>0,'engine output must start with the Drive gesture');
   if(width>700){
    await p.locator('#thumbnailToggle').click();await p.waitForTimeout(200);
    const a=await p.evaluate(()=>trailGame.snapshot().camera.thumbnail);
    await p.waitForTimeout(400);const b=await p.evaluate(()=>trailGame.snapshot().camera.thumbnail);
    expect(!b.visible&&a.frames===b.frames,'collapsed thumbnail must stop rendering');
    await p.locator('#thumbnailToggle').click();
   }
   await p.locator('#stage canvas').focus();
   for(const [key,gear,range]of [['KeyE','D','2H'],['KeyQ','N','2H'],['Digit2','N','4H'],['Digit3','N','4L'],['KeyE','D','4L']]){
    await p.keyboard.press(key);await p.waitForTimeout(120);
    const s=await p.evaluate(()=>trailGame.snapshot().state);expect(s.gear===gear&&s.range===range,`${key}: expected ${gear}/${range}, got ${s.gear}/${s.range}`);
   }
   await p.keyboard.press('KeyH');await p.keyboard.down('ArrowUp');await p.waitForTimeout(500);
   expect((await p.locator('#pedalReadout').innerText()).includes('50%'),'normal pedal');
   await p.keyboard.down('KeyF');await p.waitForTimeout(500);
   expect((await p.locator('#pedalReadout').innerText()).includes('100%'),'full pedal');
   await p.keyboard.up('KeyF');await p.keyboard.up('ArrowUp');await p.keyboard.down('Space');await p.waitForTimeout(800);await p.keyboard.up('Space');
   const cameras=await p.locator('#cameraButton option').allTextContents();expect(JSON.stringify(cameras)===JSON.stringify(['Chase','Cockpit','Bonnet','Overview']),'four useful camera choices');
   expect(!await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth),'page overflow');expect(!errors.length,errors.join('\n'));
   results.push({width,audio,cameras,errors});
  }finally{await context.close();}
 }
 return results;
}
