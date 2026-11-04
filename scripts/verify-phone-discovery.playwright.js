async (page,baseURL='http://localhost:8088/') => {
 const browser=page.context().browser(),checks=[],errors=[];
 const ok=(v,s)=>{if(!v)throw Error(s);checks.push(s);};
 for(const width of [375,390,1440]){
  const c=await browser.newContext({viewport:{width,height:812},deviceScaleFactor:1}),p=await c.newPage();p.on('pageerror',e=>errors.push(e.message));
  try{
   await p.addInitScript(()=>{localStorage.setItem('thatsuvmod-welcomed','1');localStorage.setItem('jimnygami-preview-ack-v1','1');});
   await p.goto(baseURL+'#garage',{waitUntil:'domcontentloaded'});
   ok(await p.locator('#welcome').count()===0,`${width}: returning owners keep the direct entry`);
   ok((await p.locator('#explore .section-lead').innerText()).includes('Plan your Jimny in 3D'),`${width}: home explains the site's purpose`);
   if(width<900){
    const layout=await p.evaluate(()=>{const h=document.querySelector('#explore .section-heading>div').getBoundingClientRect(),b=document.querySelector('#explore .garage-looks-return').getBoundingClientRect();return{body:getComputedStyle(document.body).position,overflow:document.documentElement.scrollWidth-innerWidth,below:b.top>=h.bottom,right:b.right};});
    ok(layout.body==='static'&&layout.overflow<=1&&layout.below&&layout.right<=width,`${width}: home uses the full page and Quick fits does not clip`);
    await p.evaluate(()=>window.originalViewer=document.querySelector('#viewer3d canvas'));
    await p.mouse.wheel(0,800);await p.waitForFunction(()=>document.body.classList.contains('garage-car-docked'));
    const dock=await p.evaluate(()=>({y:scrollY,height:document.getElementById('viewer3d').getBoundingClientRect().height,same:window.originalViewer===document.querySelector('#viewer3d canvas'),mainScroll:document.querySelector('.planner-main').scrollTop}));
    ok(dock.y>300&&dock.height<=60&&dock.same&&dock.mainScroll===0,`${width}: scrolling collapses the same viewer to a small bar`);
    ok(await p.locator('.site-header').evaluate(e=>Math.abs(e.getBoundingClientRect().top)<1),`${width}: the header stays visible while the page scrolls`);
    ok(await p.locator('.garage-thumb-label').isVisible(),`${width}: the collapsed bar clearly offers View your Jimny`);
    await p.screenshot({path:`/tmp/phone-discovery-docked-${width}.png`});
    await p.locator('.garage-thumb').click();await p.waitForFunction(()=>scrollY<5);
    ok(await p.locator('#viewer3d').evaluate(e=>e.getBoundingClientRect().height>180),`${width}: View your Jimny restores the car`);
   }
   await p.locator('.garage-looks-return').click();
   ok(await p.evaluate(()=>document.body.dataset.mode==='garage'),`${width}: Explore Quick fits opens Quick fits`);
   await p.evaluate(()=>{setWorkbenchMode('parts');const s=document.getElementById('bodySelect');s.value='3door';s.dispatchEvent(new Event('change',{bubbles:true}));});
   const media=await p.evaluate(()=>[...document.querySelectorAll('#mods .pcard')].map(card=>{const m=modById[card.dataset.modId],img=card.querySelector('img'),src=img?.getAttribute('src')||'',photo=JimnyProductMedia.photoFor(m,'3door');return{src,valid:!src||src.includes('/swb/')||photo?.local===src,price:card.querySelector('.pcard-price')?.textContent,display:getComputedStyle(card.querySelector('.pcard-price')).display};}));
   ok(media.length>0&&media.every(m=>m.valid&&m.price&&m.display!=='none'),`${width}: three-door cards have body-safe images and visible price signals`);
   ok(await p.evaluate(()=>JimnyProductMedia.photoFor(modById.market_7636363641057,'3door')===null),`${width}: the shared ARB listing does not show its five-door photo for a three-door`);
   await p.evaluate(()=>{const s=document.getElementById('bodySelect');s.value='5door';s.dispatchEvent(new Event('change',{bubbles:true}));activePartFilter='all';JimnyCatalogue.apply();});
   const rackPhotos=[];
   for(const id of ['market_10339998204129','market_9654211346657']){
    await p.locator('#partSearch').fill(await p.evaluate(id=>modById[id].name,id));
    rackPhotos.push(await p.locator(`[data-mod-id="${id}"] .pcard-image img`).getAttribute('src'));
   }
   ok(rackPhotos.every(src=>src.includes('assets/products/'))&&rackPhotos[0]!==rackPhotos[1],`${width}: different branded racks use their own supplier pictures`);
   await p.locator('#partSearch').fill('Mud flap');
   ok((await p.locator('[data-mod-id="mudflaps"] .pcard-price').innerText()).includes('828.50'),`${width}: verified five-door India price appears on the card`);
   await p.evaluate(()=>openDrawer());
   const row=p.locator('.drawer-versions>summary');await row.focus();await p.keyboard.press('Enter');
   ok(await p.locator('.drawer-versions').evaluate(e=>e.open),`${width}: Name & saved versions opens from the keyboard`);
   ok(await row.evaluate(e=>getComputedStyle(e).borderTopStyle==='solid'&&getComputedStyle(e,'::after').content!=='none'),`${width}: saved versions has an obvious bordered disclosure`);
  }finally{await c.close();}
 }
 // Stub map tiles in automated route/resize tests; do not scan the public tile service.
 const c=await browser.newContext({viewport:{width:1440,height:900},deviceScaleFactor:1}),p=await c.newPage();let requests=0,fail=false;
 p.on('pageerror',e=>errors.push(e.message));
 const tile='<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256"><rect width="256" height="256" fill="#e4e9df"/></svg>';
 await p.route('https://tile.openstreetmap.org/**',route=>{requests++;return fail?route.abort():route.fulfill({status:200,contentType:'image/svg+xml',body:tile});});
 try{
  await p.goto(baseURL+'trip-planner.html',{waitUntil:'domcontentloaded'});
  ok(requests===0,'map tiles wait until the map is visible');
  ok(await p.locator('.trip-waypoint-diagram,iframe').count()===0,'the abstract sketch and remote iframe are replaced by one geographic map');
  await p.locator('.trip-route-map').scrollIntoViewIfNeeded();
  await p.waitForFunction(()=>JimnyTripPage.mapState()?.ready&&document.querySelectorAll('.leaflet-tile-loaded').length>0);
  async function fills(){await p.waitForFunction(()=>{const s=JimnyTripPage.mapState();return s?.ready&&s.size.x===s.container.width&&s.size.y===s.container.height;});}
  await fills();ok(true,'map size matches its actual container');
  await p.waitForFunction(()=>{const m=document.querySelector('.trip-route-map').getBoundingClientRect(),tiles=[...document.querySelectorAll('.leaflet-tile-loaded')].map(t=>t.getBoundingClientRect());return [[m.left+2,m.top+2],[m.right-2,m.top+2],[m.left+2,m.bottom-2],[m.right-2,m.bottom-2]].every(([x,y])=>tiles.some(t=>t.left<=x&&t.right>=x&&t.top<=y&&t.bottom>=y));});
  ok(true,'loaded map tiles cover all four map corners');
  ok(await p.locator('.leaflet-control-attribution').innerText()==='© OpenStreetMap contributors','map attribution remains visible');
  ok(await p.locator('.leaflet-control-zoom-in').evaluate(e=>getComputedStyle(e).color==='rgb(24, 32, 29)'),'map controls remain readable in the dark theme');
  await p.locator('[data-trip-waypoint="2"]').click();await p.waitForFunction(()=>JimnyTripPage.mapState().selected===2);
  ok((await p.locator('.trip-map-position').innerText()).includes('Stop 3'),'numbered itinerary selects the matching map stop');
  await p.locator('.trip-tabs [data-trip-tab="readiness"]').click();await p.setViewportSize({width:390,height:812});await p.setViewportSize({width:1440,height:900});
  await p.locator('.trip-tabs [data-trip-tab="route"]').click();await p.locator('.trip-route-map').scrollIntoViewIfNeeded();await fills();
  ok(true,'map redraws at the correct size after a hidden-tab resize');
  for(const width of [390,768,1440]){await p.setViewportSize({width,height:812});await fills();ok(await p.locator('.trip-route-map').evaluate(e=>e.getBoundingClientRect().right<=innerWidth),`${width}: map fits without a blank side column`);}
  fail=true;await p.locator('[data-trip-fit-map]').click();
  // A route change destroys the old map instead of accumulating hidden instances.
  await p.locator('[data-trip-route="spiti"]').click();await p.locator('.trip-route-map').scrollIntoViewIfNeeded();
  await p.waitForFunction(()=>JimnyTripPage.mapState()?.failures>0);
  ok(await p.locator('[data-trip-map-retry]').isVisible(),'tile failures offer an explicit retry instead of an unexplained grey strip');
  fail=false;await p.locator('[data-trip-map-retry]').click();await p.waitForFunction(()=>JimnyTripPage.mapState().failures===0&&document.querySelector('.trip-map-status').textContent.includes('Map ready'));
  ok(await p.locator('.leaflet-container').count()===1,'retry recovers a single map after changing route');
 }finally{await c.close();}
 ok(!errors.length,`no page errors: ${errors.join(', ')}`);return{checks,errors};
}
