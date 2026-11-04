async (page, baseURL='http://localhost:8086/') => {
 const browser=page.context().browser(),checks=[],errors=[];
 const ok=(value,message)=>{if(!value)throw Error(message);checks.push(message);};
 for(const width of [1440,390]){
  const context=await browser.newContext({viewport:{width,height:900},deviceScaleFactor:1}),p=await context.newPage();
  p.on('pageerror',e=>errors.push(e.message));
  try{
   await p.goto(baseURL,{waitUntil:'domcontentloaded',timeout:120000});
   ok(await p.evaluate(w=>innerWidth===w,width),`${width}: verification uses the actual viewport width`);
   ok(await p.getByRole('button',{name:'Customise this Jimny',exact:true}).isVisible(),`${width}: welcome keeps the Customise this Jimny invitation`);
   const image=p.locator('.welcome-car img');
   await p.locator('[name="welcomePage-body"][value="3door"]').check();
   ok((await image.getAttribute('src')).includes('/swb/'),`${width}: welcome changes to a three-door render`);
   await p.locator('[name="welcomePage-body"][value="5door"]').check();
   ok(!(await image.getAttribute('src')).includes('/swb/'),`${width}: welcome changes back to five-door`);
   await p.getByRole('button',{name:'Customise this Jimny',exact:true}).click();
   const loaded=p.locator('.welcome-loaded-notice');
   ok((await loaded.innerText()).includes(`Loaded Heritage Club (${await p.evaluate(()=>buildSelectionCount())} parts)`),`${width}: the one-time message explains the actual loaded count`);
   await p.waitForTimeout(3500);
   ok(await loaded.isVisible(),`${width}: the starter explanation stays until dismissed`);
   await loaded.getByRole('button',{name:'Got it',exact:true}).click();
   ok(await loaded.count()===0&&await p.evaluate(()=>buildSelectionCount()===10),`${width}: Got it dismisses the explanation and keeps the chosen look`);
   await p.waitForFunction(()=>window.jimny3D?.getState().detailedReady&&!jimny3D.getState().modelLoading);
   async function countAgrees(label){
    const result=await p.evaluate(()=>({count:buildSelectionCount(),rows:document.querySelectorAll('.drawer-item').length,header:+document.getElementById('headerBuildCount').textContent,bar:document.querySelector('.garage-buildbar-summary b').textContent,status:document.getElementById('viewerStatus').textContent}));
    ok(result.count===result.rows&&result.count===result.header&&result.bar===`${result.count} item${result.count===1?'':'s'} in build`&&result.status.startsWith(`${result.count} items in build`),`${width}: all build totals agree ${label}`);
   }
   await countAgrees('after loading Heritage Club');
   await p.evaluate(()=>{rememberUndo();setPartSelection('bimbra_snorkel',true);update();});
   await countAgrees('after adding a snorkel');
   await p.evaluate(()=>setWorkbenchMode('parts'));
   await p.locator('#partSearch').fill('Bimbra Jimny Functional Snorkel');
   await p.locator('.pcard-title[data-open-part="bimbra_snorkel"]').click();
   await p.waitForFunction(()=>{const d=document.getElementById('partDrawer');return d?.classList.contains('is-open')&&Math.abs(d.getBoundingClientRect().right-innerWidth)<1;});
   for(const selector of ['.pd-description','.pd-meta','.pd-price','#pdBuy','.pd-notes'])ok(await p.locator(selector).isVisible(),`${width}: ${selector} is available in part details`);
   ok(await p.locator('#pdBuy a[href="https://bimbra.in/products/jimny-functional-snorkel/"]').count()===1,`${width}: Bimbra has its exact product link`);
   ok((await p.locator('.pd-price').innerText()).includes('Quote required'),`${width}: unverified price requires a quote`);
   ok(await p.locator('.pd-hero img').evaluate(el=>getComputedStyle(el).objectFit)==='contain',`${width}: detail image is not cropped`);
   ok(await p.locator('#partDrawer').evaluate(el=>el.scrollWidth<=el.clientWidth),`${width}: part drawer fits the screen`);
   await p.screenshot({path:`/tmp/jimny-shopper-details-${width}.png`});
   await p.locator('#partDrawer [data-fitters-job]:visible').first().click();
   ok(await p.evaluate(()=>document.body.dataset.mode==='fitters'),`${width}: Who can fit it opens the matching directory`);
   await p.evaluate(()=>{const select=document.getElementById('bodySelect');select.value='3door';select.dispatchEvent(new Event('change',{bubbles:true}));openGarageCategory('popular');});
   await p.waitForFunction(()=>jimny3D.getState().body==='3door'&&!jimny3D.getState().modelLoading);
   const quick=await p.evaluate(()=>[...document.querySelectorAll('#garagePartChoices [data-garage-fit]')].map(b=>({id:b.dataset.garageFit,src:b.querySelector('img').getAttribute('src'),can:garageCanPreview(b.dataset.garageFit)})));
   ok(quick.length>0&&quick.every(p=>p.can&&p.src.includes('/swb/')),`${width}: all three-door Quick fits use supported body previews`);
   ok(!quick.some(p=>['bull','market_suzuki_nomade_flatrack','market_suzuki_nomade_steelwheel'].includes(p.id)),`${width}: five-door equipment is absent from three-door Quick fits`);
   const broken=await p.evaluate(async()=>{
    const ids=[...new Set(Object.values(GARAGE_FAMILIES).flat())].filter(id=>modById[id]&&garageCanPreview(id));
    const results=await Promise.all(ids.map(async id=>({id,url:garagePartImage(id),status:(await fetch(garagePartImage(id))).status})));
    return results.filter(r=>r.status!==200||!r.url.includes('/swb/'));
   });
   ok(!broken.length,`${width}: every supported three-door Garage thumbnail exists (${JSON.stringify(broken)})`);
   await p.screenshot({path:`/tmp/jimny-shopper-quickfits-${width}.png`});
   await p.evaluate(()=>setWorkbenchMode('parts'));
   await p.locator('#partSearch').fill('');
   const missingCatalogue=await p.evaluate(async()=>{
    const urls=[...new Set(MODS.filter(m=>!m.designOnly&&JimnyCatalogue.infoFor(m).try).map(m=>JimnyCatalogue.previewImage(m)))];
    return (await Promise.all(urls.map(async url=>({url,status:(await fetch(url)).status})))).filter(r=>r.status!==200||!r.url.includes('/swb/'));
   });
   ok(!missingCatalogue.length,`${width}: all three-door catalogue previews exist and match the body (${JSON.stringify(missingCatalogue)})`);
   const wrong=await p.evaluate(()=>[...document.querySelectorAll('#mods img')].map(el=>el.getAttribute('src')).filter(src=>src.includes('assets/previews/')&&!src.includes('/swb/')));
   ok(!wrong.length,`${width}: Parts never borrows a five-door model image`);
   await p.evaluate(()=>setWorkbenchMode('fitters'));
   ok(await p.evaluate(()=>document.body.dataset.mode==='fitters'),`${width}: fitters links reach the live directory`);
  }finally{await context.close();}
 }
 for(const body of ['3door','5door']){
 const stockContext=await browser.newContext({viewport:{width:390,height:812},deviceScaleFactor:1}),stock=await stockContext.newPage();
 try{
  await stock.goto(baseURL,{waitUntil:'domcontentloaded',timeout:120000});
  await stock.locator(`[name="welcomePage-body"][value="${body}"]`).check();
  await stock.getByRole('button',{name:'Customise this Jimny',exact:true}).click();
  ok(await stock.locator('[data-welcome-stock]').evaluate(button=>{const r=button.getBoundingClientRect();return r.top>=0&&r.bottom<=innerHeight&&document.elementFromPoint(r.left+r.width/2,r.top+r.height/2)?.closest('[data-welcome-stock]')===button;}),`${body}: the stock action is immediately reachable above the phone build bar`);
  await stock.getByRole('button',{name:'Start from stock',exact:true}).click();
  ok(await stock.evaluate(body=>buildSelectionCount()===0&&bodyStyle===body&&designState.decal==='none'&&designState.grille==='oem',body),`${body}: Start from stock removes the look and keeps the chosen body`);
  await stock.reload({waitUntil:'domcontentloaded',timeout:120000});
  ok(await stock.locator('#welcome,.welcome-loaded-notice').count()===0&&await stock.evaluate(()=>buildSelectionCount()===0),`${body}: the explanation does not repeat on a return visit`);
 }finally{await stockContext.close();}
 }
 ok(!errors.length,`no page errors: ${errors.join(', ')}`);
 return {checks,errors};
}
