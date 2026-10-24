async(page)=>{
 const root='/Volumes/ThatSUVMod/jimnymods/modeling/verification/';
 const context=await page.context().browser().newContext({viewport:{width:1440,height:810}});
 const p=await context.newPage(),errors=[],shots=[];
 p.on('pageerror',error=>errors.push(error.message));
 try{
  await p.goto('http://localhost:8080/modeling/verification/world-previews.html');
  await p.waitForFunction(()=>!!window.worldPreviews);
  for(const [name,point,yaw,mission]of [
   ['approach',[62,96],0,'rock-river-technical'],
   ['climb',[65,142],0,'rock-river-technical'],
   ['bridge',[42,130],-Math.PI/2,'rock-river-technical'],
   ['offroad',[-303.93441275,204.34001808],-.823642,'mountain-ascent'],
   ['asphalt',[-473.24445349,348.49379198],2.620249,'mountain-tarmac']
  ]){
   const options={point,yaw,mission,shot:'chase',width:1440,height:810};
   const state=await p.evaluate(options=>worldPreviews.render('mountain',options),options);
   const path=root+'himachal-current-'+name+'.png';
   await p.locator('canvas').first().screenshot({path});shots.push({name,path,state});
  }
  if(errors.length)throw new Error(errors.join('\n'));
  return {shots,errors,note:'Actual shared game renderer and settled rigid vehicle; no enhancement or generated replacement.'};
 }finally{await context.close();}
}
