async (page,baseURL='http://localhost:8087/') => {
 const browser=page.context().browser(),checks=[],errors=[];
 const ok=(value,message)=>{if(!value)throw Error(message);checks.push(message);};
 for(const width of [1440,390]){
  const c=await browser.newContext({viewport:{width,height:900},deviceScaleFactor:1}),p=await c.newPage();
  p.on('pageerror',e=>errors.push(e.message));
  try{
   await p.goto(baseURL,{waitUntil:'domcontentloaded'});
   await p.getByRole('button',{name:'Customise this Jimny',exact:true}).click();
   await p.waitForFunction(()=>window.jimny3D?.getState().detailedReady,null,{timeout:120000});
   ok(await p.locator('#previewExplanation').isVisible(),`${width}: one preview explanation appears initially`);
   ok(await p.locator('.model-accuracy-note,.garage-honesty').count()===0,`${width}: duplicate warning paragraphs are removed`);
   await p.locator('[data-preview-got-it]').click();
   for(const category of ['popular','paint','graphics','wheels','grille','cabin']){
    await p.locator(`[data-garage-category="${category}"]`).click();
    ok(await p.locator('#previewExplanation').isHidden(),`${width}: ${category} keeps the explanation dismissed`);
   }
   await p.locator('[data-garage-category="paint"]').click();
   const selected=()=>p.evaluate(()=>[...document.querySelectorAll('#paintGallery [aria-pressed=true]')].map(b=>b.dataset.paintChoice));
   ok(JSON.stringify(await selected())===JSON.stringify(['#c17a34']),`${width}: Heritage Club's custom paint is selected`);
   ok(await p.locator('#paintGallery [aria-pressed=true]').evaluate(b=>getComputedStyle(b).outlineStyle!=='none'&&getComputedStyle(b,'::after').content.includes('✓')),`${width}: selected paint has a ring and tick`);
   await p.locator('[data-paint-choice="#586a45"]').click();
   ok(JSON.stringify(await selected())===JSON.stringify(['#586a45']),`${width}: choosing a named paint moves selection`);
   await p.evaluate(()=>undoLastChange());
   ok(JSON.stringify(await selected())===JSON.stringify(['#c17a34']),`${width}: Undo restores the selected custom swatch`);
   await p.evaluate(()=>{rememberUndo();selectedPaint='#123456';update();});
   ok(JSON.stringify(await selected())===JSON.stringify(['#123456']),`${width}: an arbitrary custom paint remains visibly selected`);
   await p.locator('[data-garage-category="graphics"]').click();
   await p.waitForFunction(()=>document.querySelector('.garage-view-switch [data-camera="orbit"]').getAttribute('aria-pressed')==='true');
   ok(await p.evaluate(()=>jimny3D.getState().view==='side'),`${width}: Decals uses Side view`);
   ok(await p.locator('.garage-view-switch button.active').count()===1,`${width}: Side view keeps exactly one broad view selected`);
   await p.locator('.garage-view-switch [data-camera="interior"]').click();
   await p.waitForFunction(()=>document.querySelector('.garage-view-switch [data-camera="interior"]').getAttribute('aria-pressed')==='true');
   ok(await p.locator('.garage-view-switch button.active').count()===1,`${width}: Cabin has exactly one selected toggle`);
   await p.locator('[data-garage-category="graphics"]').click();
   await p.waitForFunction(()=>document.querySelector('.garage-view-switch [data-camera="orbit"]').getAttribute('aria-pressed')==='true');
   await p.screenshot({path:`/tmp/garage-polish-${width}.png`});
   await p.reload({waitUntil:'domcontentloaded'});
   ok(await p.locator('#previewExplanation').isHidden(),`${width}: Got it persists after reload`);
   await p.getByRole('button',{name:'Preview, not exact',exact:true}).click();
   ok(await p.locator('#previewExplanation').isVisible(),`${width}: the compact label reopens the explanation`);
   await p.locator('[data-preview-got-it]').click();
   ok(await p.locator('.site-nav [data-mode-select="clubs"],.site-nav [data-mode-select="tools"]').count()===0,`${width}: paused destinations are absent from the shared menu`);
   for(const mode of ['clubs','tools']){
    await p.evaluate(mode=>setWorkbenchMode(mode),mode);
    ok(await p.evaluate(()=>document.body.dataset.mode==='garage'&&location.hash==='#garage'),`${width}: ${mode} routes to Garage`);
   }
   for(const theme of ['rally','daylight']){
    await p.evaluate(theme=>document.documentElement.dataset.uiTheme=theme,theme);
    ok(await p.locator('.footer-logo').evaluate(e=>getComputedStyle(e).backgroundColor==='rgba(0, 0, 0, 0)'),`${width}: ${theme} footer logo has no white backing`);
   }
   ok(await p.locator('.footer-logo img').getAttribute('src')==='assets/jimnygami-logo-sticker.webp',`${width}: footer reuses the header logo`);
   ok(await p.locator('.footer-logo img').getAttribute('loading')==='eager',`${width}: footer logo is requested early`);
   ok(await p.locator('footer a[href="mailto:garage@jimnygami.com"]').count()===1,`${width}: working mailbox is linked in the footer`);
   ok(!(await p.locator('body').innerText()).includes('mailbox coming soon'),`${width}: obsolete mailbox warnings are removed`);
  }finally{await c.close();}
 }
 // Hold image responses to prove loading feedback exists before the bytes arrive.
 for(const kind of ['decals','looks','trip']){
  const c=await browser.newContext({viewport:{width:390,height:900},deviceScaleFactor:1}),p=await c.newPage();
  let release;const gate=new Promise(resolve=>release=resolve);
  const pattern=kind==='trip'?'**/assets/trips/*.jpg*':kind==='looks'?'**/assets/previews/preset-*.webp*':'**/assets/previews/design-decal-*.webp*';
  await p.route(pattern,async route=>{await gate;await route.continue();});
  try{
   await p.addInitScript(()=>{localStorage.setItem('thatsuvmod-welcomed','1');localStorage.setItem('jimnygami-preview-ack-v1','1');});
   await p.goto(baseURL+(kind==='trip'?'trip-planner.html':'#garage'),{waitUntil:'domcontentloaded'});
   if(kind!=='trip')await p.evaluate(()=>setWorkbenchMode('garage'));
   if(kind==='decals')await p.locator('[data-garage-category="graphics"]').click();
   if(kind==='looks')await p.locator('.garage-looks-launch').click();
   const selector=kind==='trip'?'.trip-route-gallery img':kind==='looks'?'#lookInspoGrid img':'.graphic-grid img';
   const row=p.locator(selector);await row.first().scrollIntoViewIfNeeded();
   const count=kind==='trip'?3:4;
   await p.waitForFunction(({selector,count})=>[...document.querySelectorAll(selector)].slice(0,count).every(img=>img.dataset.imageState==='loading'),{selector,count});
   ok(await row.first().evaluate(img=>img.classList.contains('image-pending')&&getComputedStyle(img).animationName==='image-shimmer'&&img.getBoundingClientRect().height>60),`${kind}: delayed images have a reserved shimmer placeholder`);
   ok(await row.evaluateAll((images,count)=>images.slice(0,count).every(img=>img.loading==='eager'&&img.fetchPriority==='high'),count),`${kind}: the first row is requested early`);
   await p.emulateMedia({reducedMotion:'reduce'});
   ok(await row.first().evaluate(img=>getComputedStyle(img).animationName==='none'),`${kind}: reduced motion disables shimmer animation`);
   await p.screenshot({path:`/tmp/garage-polish-${kind}-loading.png`});
   release();
   await p.waitForFunction(({selector,count})=>[...document.querySelectorAll(selector)].slice(0,count).every(img=>img.dataset.imageState==='loaded'&&!img.classList.contains('image-pending')&&img.naturalWidth>0),{selector,count});
   ok(true,`${kind}: decoded images replace their placeholders`);
  }finally{release();await c.close();}
 }
 ok(!errors.length,`no page errors: ${errors.join(', ')}`);
 return{checks,errors};
}
