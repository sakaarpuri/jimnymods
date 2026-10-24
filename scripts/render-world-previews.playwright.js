async (page) => {
 const context=await page.context().browser().newContext({viewport:{width:1600,height:400},deviceScaleFactor:1});
 const p=await context.newPage(),models=[];
 p.on('request',r=>{if(/jimny-(lwb|swb)-blender\.glb/.test(r.url()))models.push(r.url());});
 try{
  await p.goto('http://localhost:8080/modeling/verification/world-previews.html');
  await p.waitForFunction(()=>window.worldPreviews);
  await p.addScriptTag({url:'http://localhost:8080/assets/visual-release.js'});
  const release=await p.evaluate(()=>window.JIMNY_VISUAL_RELEASE),files=[];
  for(const id of ['mountain','sand','urban']){
   await p.evaluate(id=>window.worldPreviews.render(id,id==='mountain'?{point:[62,96],mission:'rock-river-technical',shot:'front'}:{}),id);
   const path=`/tmp/jimny-world-${id}.png`;
   await p.locator('#preview canvas').screenshot({path});files.push({id,path});
  }
  if(!models.length||models.some(url=>!url.includes(release.models['5door'])))throw new Error('Course renderer did not load the current shared Jimny model.');
  const inventory={release,files,models};
  return inventory;
 }finally{await context.close();}
}
