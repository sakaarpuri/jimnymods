async(page)=>{
 const browser=page.context().browser(),captures=[],checks=[];
 for(const viewport of [{width:1600,height:1060},{width:390,height:844}]){
  const c=await browser.newContext({viewport}),p=await c.newPage(),errors=[],requests=[];
  p.on('pageerror',e=>errors.push(e.message));
  p.on('request',r=>{if(/jimny-(lwb|swb)-blender\.glb/.test(r.url()))requests.push(r.url());});
  try{
   await p.goto('http://localhost:8080/dist/#garage');
   const actual=await p.evaluate(()=>({width:innerWidth,height:innerHeight}));
   if(actual.width!==viewport.width||actual.height!==viewport.height)throw Error('Browser zoom changed the requested viewport; use an isolated browser for valid captures');
   const ready=()=>p.waitForFunction(()=>window.jimny3D?.getState().detailedReady&&!jimny3D.getState().modelLoading,null,{timeout:90000});
   await ready();
   for(const body of ['5door','3door']){
    if(body==='3door'){await p.selectOption('#bodySelect',body,{force:true});await ready();}
    await p.evaluate(()=>jimny3D.beginPreview({parts:[],colour:'#d9b744',design:{finish:'oem',decal:'none',grille:'oem'}}));
    const views=viewport.width>500?['orbit','reference-rear','rear','reference-side']:['orbit','reference-rear'];
    for(const view of views){
     await p.evaluate(v=>jimny3D.view(v),view);await p.waitForTimeout(180);
     const path=`/tmp/jimny-bodyshape-${body}-${viewport.width}-${view}.png`;
     await p.locator('#viewer3d').screenshot({path});captures.push({body,viewport,view,path});
    }
    const s=await p.evaluate(()=>jimny3D.getState());
    if(s.body!==body||s.modelLoading||s.assetError||!s.detailedReady)throw Error('Wrong or incomplete model: '+body);
    checks.push(`${viewport.width}px ${body}: detailed shared model and views loaded`);
    await p.evaluate(()=>jimny3D.endPreview());
   }
   const release=await p.evaluate(()=>JIMNY_VISUAL_RELEASE);
   for(const [body,stem]of [['5door','lwb'],['3door','swb']]){
    if(!requests.some(url=>url.includes(`jimny-${stem}-blender.glb?v=${release.models[body]}`)))throw Error('Stale asset '+body);
   }
   if(await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth))throw Error('Horizontal overflow');
   if(errors.length)throw Error(errors.join('\n'));
   checks.push(`${viewport.width}px: current fingerprints, no script errors or horizontal overflow`);
  }finally{await c.close();}
 }
 return {checks,captures};
}
