async (page, bodyFilter=null, mode='all') => {
  // Run with the browser runner's filename option. The PNGs are temporary
  // renderer outputs; cwebp converts them to the shipped thumbnails.
  const context=await page.context().browser().newContext({viewport:{width:1600,height:1200},deviceScaleFactor:1});
  const p=await context.newPage();
  await p.addInitScript(()=>localStorage.setItem('thatsuvmod-ui-theme-v1','rally'));
  try {
    await p.goto('http://localhost:8080/');
    await p.waitForFunction(()=>window.jimny3D?.getState().detailedReady&&!window.jimny3D.getState().modelLoading&&window.jimny3D.getState().workshopReady);
    const results=[],studioPreviews={};
    for(const body of ['5door','3door']){
      if(bodyFilter&&body!==bodyFilter)continue;
      if(body==='3door'){
        await p.selectOption('#bodySelect',body,{force:true});
        await p.waitForFunction(()=>window.jimny3D.getState().body==='3door'&&!window.jimny3D.getState().modelLoading);
      }
      const items=await p.evaluate(body=>[
        ...window.getJimnyPresets().map(p=>({...p,file:'preset-'+p.id})),
        ...window.getJimnyPartPreviews().filter(p=>body==='5door'||['tires','seats','doortrim'].includes(p.id)).map(p=>({...p,file:'part-'+p.id,detail:body==='5door',angle:p.id==='tires'?'wheel-detail':p.angle})),
        ...(body==='5door'?window.getJimnyWheelPreviews():[]),
        ...['highway','allterrain','mudterrain'].map(type=>({id:type,file:'tyre-'+type,parts:type==='highway'?[]:['tires'],colour:'#d9b744',design:{finish:'oem',decal:'none',grille:'oem',tyreType:type,wheelFinish:'oem'},angle:'wheel-detail'})),
        ...window.getJimnyStudioPreviews().map(p=>({...p,detail:p.file.startsWith('part-')})),
        ...window.JIMNY_MARKET_PRODUCTS.filter(p=>['mod_reardoor_molle','mod_halfmolly_5door','exploresetups_drawer_5door'].includes(p.id)&&p.bodyStyles.includes(body)).map(p=>({file:'part-'+p.id,id:p.id,parts:[p.id],detail:true,colour:'#b5a080',design:{finish:'oem',decal:'none',grille:'oem',cabin:'tan'},angle:'cargo'})),
        ...(body==='5door'?window.JIMNY_MARKET_PRODUCTS.filter(p=>p.lightProfile).map(p=>({file:'lamp-'+p.id,id:p.id,parts:[p.id],detail:true,colour:'#b5a080',design:{finish:'oem',decal:'none',grille:'oem'},angle:p.lightProfile==='work'?'rear':'front'})):[])
      ],body);
      studioPreviews[body]=await p.evaluate(()=>window.getJimnyStudioPreviews().map(p=>p.file));
      for(const item of [...new Map(items.map(item=>[item.file,item])).values()]){
        const path=`/tmp/jimny-${body}-${item.file}.png`;
        results.push({body,id:item.id,file:item.file,path});
        if(mode==='inventory'||(mode==='storage'&&item.angle!=='storage')||(mode==='headliner'&&item.angle!=='headliner-cutaway'))continue;
        if(item.angle==='storage')item.angle='cargo';
        await p.evaluate(async item=>{
          let img=document.getElementById('preview-export');
          if(!img){img=document.createElement('img');img.id='preview-export';img.style.cssText='position:fixed;left:0;top:0;width:800px;height:600px;z-index:2147483647;max-width:none';document.body.append(img);}
          img.src=window.jimny3D.renderPreset(item,item.angle||'orbit');await img.decode();
        },item);
        await p.locator('#preview-export').screenshot({path});
      }
      await p.evaluate(()=>document.getElementById('preview-export')?.remove());
    }
    const inventory={count:results.length,files:results,studioPreviews,release:await p.evaluate(()=>window.JIMNY_VISUAL_RELEASE),parts:await p.evaluate(()=>window.getJimnyPartPreviews().map(p=>p.id))};
    return inventory;
  } finally {await context.close();}
}
