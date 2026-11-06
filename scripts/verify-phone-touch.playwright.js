async(page,baseURL='http://localhost:8088/')=>{
 const browser=page.context().browser(),checks=[],errors=[],ok=(value,label)=>{if(!value)throw Error(label);checks.push(label);};
 for(const width of [390,430]){
  const context=await browser.newContext({viewport:{width,height:844},deviceScaleFactor:1,isMobile:true,hasTouch:true}),p=await context.newPage();p.on('pageerror',e=>errors.push(e.message));
  try{
   await p.addInitScript(()=>{localStorage.setItem('thatsuvmod-welcomed','1');localStorage.setItem('jimnygami-preview-ack-v1','1');});
   await p.goto(baseURL+'#garage',{waitUntil:'load',timeout:120000});await p.waitForFunction(()=>window.jimny3D?.getState().detailedReady&&!jimny3D.getState().modelLoading,null,{timeout:120000});
   await p.evaluate(()=>setWorkbenchMode('garage'));
   ok(await p.evaluate(()=>garageCategory==='paint'),`${width}: Garage starts with Paint`);
   ok(await p.locator('[data-garage-category=popular]').count()===0&&!await p.locator('body').innerText().then(s=>/quick fits/i.test(s)),`${width}: Quick fits is removed`);
   const body=p.locator('#bodyColourControl');
   await body.locator('[data-colour-value="#364b72"]').tap();
   ok(await p.evaluate(()=>selectedPaint==='#364b72'&&jimny3D.getState().colour==='#364b72'),`${width}: a touch on the Paint palette changes the actual car`);
   ok(await body.locator('[data-colour-value="#364b72"]').getAttribute('aria-pressed')==='true',`${width}: tapped paint is visibly selected`);
   await p.evaluate(()=>undoLastChange());ok(await p.evaluate(()=>selectedPaint==='#d9b744'),`${width}: Undo restores the previous paint`);
   await body.locator('[data-colour-mode=custom]').tap();await body.locator('[data-colour-hex]').fill('#4b7d6a');await body.locator('form button').tap();
   ok(await p.evaluate(()=>selectedPaint==='#4b7d6a'&&JSON.parse(localStorage.getItem('thatsuvmod-build')).colour==='#4b7d6a'),`${width}: custom paint applies and autosaves from the same panel`);
   await p.locator('#paint-finish-tab').tap();await p.locator('[data-garage-design=finish][data-garage-option=twotone]').tap();await p.locator('#paint-colour-tab').tap();
   await p.locator('#roofColourPicker [data-colour-value="#eeeeea"]').tap();ok(await p.evaluate(()=>designState.roofColour==='#eeeeea'&&selectedPaint==='#4b7d6a'),`${width}: the roof palette changes the roof without changing body paint`);
   await p.evaluate(()=>JimnyPartEditor.openTarget('body','colour'));await p.locator('#onCarEditor [data-colour-value="#586a45"]').tap();ok(await p.evaluate(()=>selectedPaint==='#586a45'),`${width}: direct-on-car palette also responds to touch`);
   await p.evaluate(()=>{JimnyPartEditor.close();jimny3D.view('orbit');scrollTo(0,0);});await p.waitForFunction(()=>scrollY<2&&!document.body.classList.contains('garage-car-docked'));
   const canvas=p.locator('#viewer3d canvas'),before=await p.evaluate(()=>jimny3D.getState());
   ok(before.touchMode==='orbit'&&await canvas.evaluate(e=>getComputedStyle(e).touchAction)==='none',`${width}: the small viewer accepts car gestures without expansion`);
   const box=await canvas.boundingBox(),x=box.x+box.width*.3,y=box.y+box.height*.6;
   if(browser.browserType().name()==='chromium'){
    const session=await context.newCDPSession(p);
    const touch=(type,points)=>session.send('Input.dispatchTouchEvent',{type,touchPoints:points.map(([x,y,id])=>({x,y,id,radiusX:2,radiusY:2}))});
    await touch('touchStart',[[x,y,1]]);for(let i=1;i<=12;i++){await touch('touchMove',[[x+i*8,y,1]]);await p.waitForTimeout(16);}await touch('touchEnd',[]);
    await p.waitForFunction(position=>Math.hypot(...jimny3D.getState().camera.position.map((v,i)=>v-position[i]))>.15,before.camera.position);
    ok(await p.evaluate(()=>scrollY<2&&document.getElementById('onCarEditor').hidden),`${width}: one-finger rotation neither scrolls the page nor opens a part`);
    const distance=await p.evaluate(()=>{const c=jimny3D.getState().camera;return Math.hypot(...c.position.map((v,i)=>v-c.target[i]));});
    await touch('touchStart',[[width*.35,y,1],[width*.65,y,2]]);for(let i=1;i<=8;i++){await touch('touchMove',[[width*.35-i*3,y,1],[width*.65+i*3,y,2]]);await p.waitForTimeout(16);}await touch('touchEnd',[]);
    ok(await p.evaluate(distance=>{const c=jimny3D.getState().camera;return Math.hypot(...c.position.map((v,i)=>v-c.target[i]))<distance-.1;},distance),`${width}: a two-finger pinch zooms the car`);
    await p.locator('.garage-view-switch [data-camera=interior]').tap();const inside=await p.evaluate(()=>jimny3D.getState().camera.target);
    await touch('touchStart',[[x,y,1]]);for(let i=1;i<=12;i++){await touch('touchMove',[[x+i*7,y,1]]);await p.waitForTimeout(16);}await touch('touchEnd',[]);
    ok(await p.evaluate(target=>Math.hypot(...jimny3D.getState().camera.target.map((v,i)=>v-target[i]))>.1,inside),`${width}: a finger drag looks around the Cabin`);
    await touch('touchStart',[[width-12,700,1]]);for(let i=1;i<=12;i++){await touch('touchMove',[[width-12,700-i*25,1]]);await p.waitForTimeout(16);}await touch('touchEnd',[]);
    await p.waitForFunction(()=>scrollY>100);ok(true,`${width}: the page still scrolls outside the car`);
   }else{
    await p.mouse.move(x,y);await p.mouse.down();await p.mouse.move(x+100,y,{steps:12});await p.mouse.up();
    await p.waitForFunction(position=>Math.hypot(...jimny3D.getState().camera.position.map((v,i)=>v-position[i]))>.15,before.camera.position);ok(true,`${width}: rotation is enabled at phone size in WebKit`);
   }
   await p.evaluate(()=>openGarageCategory('body'));ok(await p.locator('[data-garage-fit=snorkel]').count()===1,`${width}: the snorkel remains available under Body`);
   await p.evaluate(()=>{const select=document.getElementById('bodySelect');select.value='3door';select.dispatchEvent(new Event('change',{bubbles:true}));});await p.waitForFunction(()=>jimny3D.getState().body==='3door'&&!jimny3D.getState().modelLoading,null,{timeout:120000});
   await p.evaluate(()=>openGarageCategory('paint'));await body.locator('[data-colour-mode=palette]').tap();await body.locator('[data-colour-value="#364b72"]').tap();ok(await p.evaluate(()=>selectedPaint==='#364b72'&&jimny3D.getState().colour==='#364b72'),`${width}: paint remains connected after changing to the three-door`);
   await p.evaluate(()=>{jimny3D.view('orbit');scrollTo(0,0);});await p.waitForFunction(()=>scrollY<2&&!document.body.classList.contains('garage-car-docked'));
   const shortBox=await canvas.boundingBox(),shortBefore=await p.evaluate(()=>jimny3D.getState().camera.position),sx=shortBox.x+shortBox.width*.3,sy=shortBox.y+shortBox.height*.6;
   if(browser.browserType().name()==='chromium'){const session=await context.newCDPSession(p);await session.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x:sx,y:sy,id:1}]});for(let i=1;i<=12;i++){await session.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x:sx+i*8,y:sy,id:1}]});await p.waitForTimeout(16);}await session.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});}else{await p.mouse.move(sx,sy);await p.mouse.down();await p.mouse.move(sx+100,sy,{steps:12});await p.mouse.up();}
   await p.waitForFunction(position=>Math.hypot(...jimny3D.getState().camera.position.map((v,i)=>v-position[i]))>.15,shortBefore);ok(true,`${width}: the three-door rotates in the small viewer`);

  }finally{await context.close();}
 }
 ok(!errors.length,'no browser errors: '+errors.join(', '));return{checks,errors};
}
