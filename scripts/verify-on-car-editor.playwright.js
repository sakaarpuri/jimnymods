async(page)=>{
 const c=await page.context().browser().newContext({viewport:{width:1512,height:982}}),p=await c.newPage(),errors=[],checks=[];
 const ok=(condition,message)=>{if(!condition)throw new Error(message);checks.push(message);};p.on('pageerror',e=>errors.push(e.message));
 const ready=()=>p.waitForFunction(()=>window.jimny3D?.getState().detailedReady&&!window.jimny3D.getState().modelLoading);
 const clickCar=async(x,y)=>{const b=await p.locator('#viewer3d canvas').boundingBox();await p.mouse.click(b.x+b.width*x,b.y+b.height*y);};
 try{
  await p.goto('http://localhost:8080/dist/#garage');await ready();
  await clickCar(.6,.5);ok(await p.evaluate(()=>JimnyPartEditor.getState()?.target==='body'),'actual geometry click selects body');
  await p.locator('[data-part-swatch="#364b72"]').click();ok(await p.evaluate(()=>jimny3D.getState().colour==='#364b72'),'body colour updates actual model');
  await p.locator('[data-part-tab="finish"]').click();await p.locator('[data-part-finish="matte"]').click();ok(await p.evaluate(()=>jimny3D.getState().design.partFinishes.body==='matte'),'matte updates saved model design');
  await p.locator('[data-part-undo]').click();ok(await p.evaluate(()=>!jimny3D.getState().design.partFinishes.body),'undo restores finish');
  await p.locator('[data-part-close]').click();const b=await p.locator('#viewer3d canvas').boundingBox(),before=await p.evaluate(()=>jimny3D.getState().camera.position);
  await p.mouse.move(b.x+b.width*.6,b.y+b.height*.5);await p.mouse.down();await p.mouse.move(b.x+b.width*.8,b.y+b.height*.55,{steps:12});await p.mouse.up();
  ok(await p.evaluate(()=>JimnyPartEditor.getState()===null),'orbit drag never opens inspector');ok(JSON.stringify(before)!==JSON.stringify(await p.evaluate(()=>jimny3D.getState().camera.position)),'drag still rotates camera');
  await p.reload();await ready();ok(await p.evaluate(()=>jimny3D.getState().colour==='#364b72'),'colour survives reload');
  await clickCar(.23,.54);ok(await p.evaluate(()=>JimnyPartEditor.getState()?.target==='grille'),'actual grille opening selects editable assembly');
  await p.locator('[data-part-swatch="#b5a080"]').click();await p.locator('[data-part-tab="variants"]').click();await p.locator('[data-part-choice="grille"][data-part-value="block"]').click();ok(await p.evaluate(()=>jimny3D.getState().design.grille==='block'),'grille shape changes without leaving model');
  await p.locator('[data-part-tab="buy"]').click();await p.locator('#onCarEditor [data-source-design]').click();ok(await p.locator('#partSupplierDialog').isVisible(),'buying options open internally');await p.locator('[data-close-part-suppliers]').click();
  await p.locator('[data-part-target]').selectOption('wheels');await p.locator('[data-part-swatch="#be4937"]').click();ok(await p.evaluate(()=>jimny3D.getState().design.partColours.wheels==='#be4937'),'independent rim colour persists in build');
  await p.locator('[data-part-tab="variants"]').click();await p.locator('[data-part-choice="tyre"][data-part-value="mudterrain"]').click();ok(await p.evaluate(()=>jimny3D.getState().design.tyreType==='mudterrain'),'tread variant independent of rim colour');
  await p.locator('[data-part-tab="colour"]').click();await p.screenshot({path:'/tmp/jimny-direct-editor-desktop.png'});
  await p.locator('[data-part-close]').click();await p.locator('[data-garage-category="cabin"]').click();
  for(const id of ['exea_cupholder','armoro_console_organizer','exea_utility_bars','exea_switch_extensions','maruti_at_mats']){await p.locator(`[data-garage-fit="${id}"]`).click();ok(await p.evaluate(id=>jimny3D.getState().parts.includes(id),id),id+' fitted from cabin card');await p.locator('[data-part-close]').click();}
  await p.locator('[data-garage-fit="exea_roof_net"]').click();ok(await p.evaluate(()=>jimny3D.getState().parts.includes('exea_roof_net')),'net fits only after bars are fitted');await p.locator('[data-part-close]').click();
  await p.evaluate(()=>jimny3D.view('headliner'));await p.locator('#viewer3d').screenshot({path:'/tmp/jimny-new-roof-storage.png'});
  await p.evaluate(()=>jimny3D.view('console'));await p.locator('#viewer3d').screenshot({path:'/tmp/jimny-new-console-storage.png'});
  await p.evaluate(()=>jimny3D.view('interior'));await p.locator('#viewer3d').screenshot({path:'/tmp/jimny-new-cupholder.png'});
  const cabinBox=await p.locator('#viewer3d canvas').boundingBox();await p.mouse.move(cabinBox.x+cabinBox.width*.55,cabinBox.y+cabinBox.height*.45);await p.mouse.down();await p.mouse.move(cabinBox.x+cabinBox.width*.35,cabinBox.y+cabinBox.height*.45,{steps:10});await p.mouse.up();ok(await p.evaluate(()=>JimnyPartEditor.getState()===null),'interior look-around drag never selects');await p.mouse.click(cabinBox.x+cabinBox.width*.468,cabinBox.y+cabinBox.height*.571);ok(await p.evaluate(()=>JimnyPartEditor.getState()?.target==='exea_cupholder'),'actual cabin accessory geometry opens its own editor');
  await p.locator('[data-part-swatch="#eeeeea"]').click();await p.locator('[data-part-tab="buy"]').click();await p.locator('#onCarEditor [data-source-part]').click();ok((await p.locator('#partSupplierTitle').innerText()).includes('EXEA'),'accessory buying options retain selected product');await p.locator('[data-close-part-suppliers]').click();
  await p.locator('#onCarEditor [data-open-kits]').click();await p.locator('#kitKind').selectOption('kit');await p.locator('#kitName').fill('Cabin colour check');await p.locator('#saveKitForm button[type="submit"]').click();ok(await p.evaluate(()=>JSON.parse(localStorage.getItem('thatsuvmod-kits-v1'))[0].data.design.partColours.exea_cupholder==='#eeeeea'),'saved selected-parts kit retains accessory colour');await p.locator('[data-close-kits]').click();
  await p.reload();await ready();ok(await p.evaluate(()=>jimny3D.getState().design.partColours.exea_cupholder==='#eeeeea'&&jimny3D.getState().parts.includes('exea_roof_net')),'accessory colour and complete mounting kit survive reload');
  const name=await p.evaluate(()=>currentPayload());const sanitized=await p.evaluate(v=>sanitizeBuild(v),name);ok(sanitized.design.partColours.exea_cupholder==='#eeeeea','share/save sanitization retains accessory colour');
  ok(errors.length===0,'no browser script errors');return {checks,errors};
 }finally{await c.close();}
}
