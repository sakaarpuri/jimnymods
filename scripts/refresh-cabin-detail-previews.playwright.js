async(page)=>{
 const c=await page.context().browser().newContext({viewport:{width:1600,height:1200}}),p=await c.newPage(),files=[];
 try{await p.goto('http://localhost:8080/');await p.waitForFunction(()=>jimny3D?.getState().detailedReady&&!jimny3D.getState().modelLoading);
  for(const body of ['5door','3door']){
   await p.locator('#bodySelect').selectOption(body,{force:true});await p.waitForFunction(body=>jimny3D.getState().body===body&&!jimny3D.getState().modelLoading,body);
   const items=await p.evaluate(()=>getJimnyStudioPreviews().filter(p=>p.angle==='footwell'));
   for(const item of items){const path=`/tmp/jimny-${body}-${item.file}.png`;await p.evaluate(async item=>{const img=document.createElement('img');img.id='detail-refresh';img.style='position:fixed;left:0;top:0;width:800px;height:600px;z-index:999999';document.body.append(img);img.src=jimny3D.renderPreset({...item,detail:true},item.angle);await img.decode();},item);await p.locator('#detail-refresh').screenshot({path});await p.locator('#detail-refresh').evaluate(el=>el.remove());files.push({body,file:item.file,path});}
  }return files;
 }finally{await c.close();}
}
