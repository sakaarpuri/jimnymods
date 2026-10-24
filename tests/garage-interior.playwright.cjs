/* Focused browser regression. Run manually: node tests/garage-interior.playwright.cjs
   Own isolated Chrome profile; no automation-hiding flags or user-tab changes. */
const assert=require('node:assert/strict');
const {buildSync}=require('esbuild');
const path=require('node:path');
let playwright;try{playwright=require(process.env.JIMNY_PLAYWRIGHT_PATH||'playwright');}catch{playwright=require(path.join(require('node:os').homedir(),'.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright'));}
const {chromium}=playwright;
buildSync({entryPoints:['src/viewer3d.js'],bundle:true,minify:true,format:'esm',outfile:'/tmp/jimnygami-camera-viewer.js'});
(async()=>{
 const browser=await chromium.launch({channel:'chrome',headless:true});
 try{
  const context=await browser.newContext({viewport:{width:1440,height:1000}}),page=await context.newPage(),errors=[];
  page.on('pageerror',error=>errors.push(error.message));
  await page.route('**/assets/viewer3d.js*',route=>route.fulfill({path:'/tmp/jimnygami-camera-viewer.js',contentType:'application/javascript'}));
  await page.goto('http://localhost:8080/#garage');
  await page.waitForFunction(()=>window.jimny3D?.getState().detailedReady&&!jimny3D.getState().modelLoading,null,{timeout:60000});
  for(const body of ['5door','3door']){
   await page.evaluate(body=>jimny3D.setBody(body),body);
   await page.waitForFunction(body=>jimny3D.getState().body===body&&!jimny3D.getState().modelLoading,body,{timeout:60000});
   await page.evaluate(()=>jimny3D.view('interior'));await page.waitForTimeout(600);
   const before=await page.evaluate(()=>jimny3D.getState());assert.equal(before.camera.mode,'enclosed-look-around');
   assert.equal(before.touchMode,'look-around');assert(before.camera.rotate&&before.camera.pan&&before.camera.zoom);
   const box=await page.locator('#viewer3d').boundingBox(),x=box.x+box.width*.5,y=box.y+box.height*.5;
   await page.mouse.move(x,y);await page.mouse.down();await page.mouse.move(x+100,y+20,{steps:10});await page.mouse.up();
   const after=await page.evaluate(()=>jimny3D.getState());
   assert.deepEqual(after.camera.position,before.camera.position,'Looking around must stay inside the cabin');
   assert.notDeepEqual(after.camera.target,before.camera.target,'Dragging must change the interior orientation');
   await page.mouse.wheel(0,140);await page.waitForTimeout(100);assert((await page.evaluate(()=>jimny3D.getState())).camera.fov>before.camera.fov);
   const preCard=await page.evaluate(()=>jimny3D.getState());
   await page.evaluate(()=>jimny3D.renderPreset(window.getJimnyBuildState(),'doors'));
   const postCard=await page.evaluate(()=>jimny3D.getState());
   assert.deepEqual(postCard.camera,preCard.camera,'Rendering a product thumbnail must not reset a user-rotated/zoomed cabin');
   await page.keyboard.down('Shift');await page.mouse.move(x,y);await page.mouse.down();await page.mouse.move(x+40,y+30,{steps:6});await page.mouse.up();await page.keyboard.up('Shift');
   const panned=await page.evaluate(()=>jimny3D.getState());assert.notDeepEqual(panned.camera.position,after.camera.position,'Shift-drag should move the viewpoint inside its constrained cabin box');
   await page.evaluate(()=>jimny3D.view('interior'));await page.waitForTimeout(400);
   await page.locator('#viewer3d').screenshot({path:path.resolve(`modeling/verification/jimnygami-enclosed-${body}.png`)});
   await page.evaluate(()=>jimny3D.view('doors'));assert.equal((await page.evaluate(()=>jimny3D.getState())).camera.mode,'enclosed-look-around');
   await page.waitForTimeout(350);await page.locator('#viewer3d').screenshot({path:path.resolve(`modeling/verification/jimnygami-door-trim-${body}.png`)});
   await page.evaluate(()=>jimny3D.view('cutaway'));assert.equal((await page.evaluate(()=>jimny3D.getState())).camera.mode,'cutaway');
   await page.evaluate(()=>jimny3D.view('orbit'));const outside=await page.evaluate(()=>jimny3D.getState());
   assert.equal(outside.camera.mode,'exterior-orbit');assert(Math.hypot(...outside.camera.position)>3,'Exterior camera must return outside the body');
   for(const view of ['reference-side','rear']){await page.evaluate(view=>jimny3D.view(view),view);await page.waitForTimeout(350);await page.locator('#viewer3d').screenshot({path:path.resolve(`modeling/verification/jimnygami-shape-${body}-${view}.png`)});}
  }
  assert.deepEqual(errors,[]);console.log('PASS: both bodies; enclosed cabin/door modes; drag; pan; zoom; thumbnail camera restoration; cutaway; exterior restoration; no page errors.');
 }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
