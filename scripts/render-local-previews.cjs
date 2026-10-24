// Isolated local browser, without user-profile access or automation-hiding flags.
const fs=require('node:fs/promises');
const path=require('node:path');
let playwright;try{playwright=require('playwright');}catch{playwright=require(path.join(require('node:os').homedir(),'.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright'));}
(async()=>{
 const browser=await playwright.chromium.launch({channel:'chrome',headless:true});
 try{
  const page=await browser.newPage();
  const render=eval('('+await fs.readFile('scripts/render-previews.playwright.js','utf8')+')');
  const result=await render(page,null,process.env.PREVIEW_MODE||'all');await fs.writeFile('/tmp/jimny-preview-inventory.json',JSON.stringify(result));console.log(result.count+' actual-model preview entries verified; '+(process.env.PREVIEW_MODE||'all')+' image set refreshed.');
 }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
