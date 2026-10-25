// Brief 3 comparison captures: the same four viewer angles (front three-quarter,
// side, rear three-quarter, cabin) at 1440x900 and 375x812, plus each outdoor
// scenery at front three-quarter. Uses the installed Chrome through playwright-core:
//   npm i --no-save playwright-core && npm run dev
//   node scripts/capture-realism-angles.mjs http://localhost:8080/ screenshots/brief3 label
import {chromium} from 'playwright-core';
import {mkdir} from 'node:fs/promises';

const [base='http://localhost:8735/',out='shots',label='baseline']=process.argv.slice(2);
await mkdir(out,{recursive:true});
const ANGLES=[['front34','orbit'],['side','side'],['rear34','rear'],['cabin','interior']];
const VIEWPORTS=[['desktop',{width:1440,height:900},1],['phone',{width:375,height:812},2]];
const browser=await chromium.launch({channel:'chrome',headless:true,args:['--use-angle=metal','--enable-gpu','--ignore-gpu-blocklist']});
const log=[];
for(const [device,viewport,dpr] of VIEWPORTS){
  const ctx=await browser.newContext({viewport,deviceScaleFactor:dpr,isMobile:device==='phone',hasTouch:device==='phone'});
  await ctx.addInitScript(()=>{try{localStorage.setItem('thatsuvmod-welcomed','1');localStorage.setItem('thatsuvmod-region','IN');localStorage.setItem('thatsuvmod-scenery','studio');}catch{}});
  const page=await ctx.newPage();
  page.on('pageerror',e=>log.push(`${device} pageerror ${e.message}`));
  page.on('console',m=>{if(m.type()==='error')log.push(`${device} console ${m.text()}`);});
  await page.goto(base+'#garage',{waitUntil:'load'});
  const ready=()=>page.waitForFunction(()=>{const s=window.jimny3D?.getState?.();return s&&s.detailedReady&&!s.modelLoading&&s.studioEnvironmentReady&&!s.sceneryLoading;},null,{timeout:60000});
  await ready();
  const shoot=async name=>{
    await page.waitForTimeout(1500);
    await page.locator('#viewer3d').scrollIntoViewIfNeeded();
    await page.waitForTimeout(400);
    await page.screenshot({path:`${out}/${label}-${device}-${name}-page.png`});
    await page.locator('#viewer3d').screenshot({path:`${out}/${label}-${device}-${name}-viewer.png`});
  };
  for(const [name,cam] of ANGLES){
    await page.evaluate(cam=>document.querySelector(`[data-camera="${cam}"]`).click(),cam);
    await shoot(name);
  }
  if(device==='desktop')for(const id of ['mountains','urban','desert']){
    await page.evaluate(id=>{const s=document.querySelector('[data-scenery-select]');s.value=id;s.dispatchEvent(new Event('change',{bubbles:true}));},id);
    await ready();
    await page.evaluate(()=>document.querySelector('[data-camera="orbit"]').click());
    await shoot(`scenery-${id}-front34`);
  }
  const state=await page.evaluate(()=>{const s=jimny3D.getState();return {scenery:s.scenery,renderCalls:s.renderCalls,triangles:s.triangles,camera:s.camera,theme:document.documentElement.dataset.uiTheme,gl:(()=>{const c=document.querySelector('#viewer3d canvas');const g=c.getContext('webgl2');const d=g.getExtension('WEBGL_debug_renderer_info');return d?g.getParameter(d.UNMASKED_RENDERER_WEBGL):'?';})()};});
  log.push(`${device} ${JSON.stringify(state)}`);
  await ctx.close();
}
await browser.close();
console.log(log.join('\n'));
