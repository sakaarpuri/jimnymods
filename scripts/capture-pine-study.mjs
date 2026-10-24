import{chromium}from'/Users/sakaarpuri/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
const browser=await chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
try{
 const page=await browser.newPage({viewport:{width:900,height:950}}),errors=[];page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
 for(const mode of ['near','atlas','runtime']){
  await page.goto('http://localhost:8080/modeling/verification/pine-asset-review.html?mode='+mode);await page.waitForFunction(()=>window.treeReady);
  await page.screenshot({path:'modeling/verification/pine-authored-'+mode+'-front.png'});
  await page.evaluate(()=>treeAngle(2.25));await page.screenshot({path:'modeling/verification/pine-authored-'+mode+'-side.png'});
 }
 if(errors.length)throw Error(errors.join('\n'));console.log('Actual near-mesh and atlas captures: zero browser errors.');
}finally{await browser.close();}
