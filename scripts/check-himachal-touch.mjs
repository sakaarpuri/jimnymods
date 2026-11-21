// Run after npm run build with Playwright Core and a Chromium executable.
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {spawn} from 'node:child_process';
const require=createRequire(import.meta.url);
const {chromium}=require(process.env.PLAYWRIGHT_PATH || 'playwright-core');
const server=spawn('python3',['-m','http.server','4173','--bind','127.0.0.1','--directory','dist'],{stdio:'ignore'});
let browser;
try{
  browser=await chromium.launch({executablePath:process.env.CHROME_PATH,headless:true,
    args:['--no-sandbox','--disable-dev-shm-usage','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
  const page=await browser.newPage({viewport:{width:390,height:844},deviceScaleFactor:1,hasTouch:true,isMobile:true});
  const errors=[];
  page.on('pageerror',error=>{errors.push(error.message);console.error(error.message);});
  page.setDefaultTimeout(90000);
  await page.addInitScript(()=>localStorage.setItem('jimnygami-graphics-v1','"fast"'));
  await page.goto('http://127.0.0.1:4173/game.html#rock-garden',{waitUntil:'domcontentloaded'});
  const session=await page.context().newCDPSession(page);
  for(const [mission,body] of [['rock-garden','3door'],['hairpin-delivery','5door'],['passing-place','5door']]){
    await page.locator('[data-game-mission="'+mission+'"]').tap();
    assert.equal(await page.locator('#missionChoice').inputValue(),mission);
    assert.equal(await page.locator('#courseList [data-course]').count(),1);
    await page.locator('#bodyChoice').evaluate((select,body)=>{
      select.value=body;select.dispatchEvent(new Event('change',{bubbles:true}));
    },body);
    await page.locator('#startButton').tap();
    await page.waitForFunction(id=>window.trailGame?.snapshot().running&&window.trailGame.snapshot().mission===id,mission);
    const snap=()=>page.evaluate(()=>window.trailGame.snapshot());
    const start=await snap();
    assert.equal(start.physics.engine,'Rapier');assert.equal(start.state.body,body);
    assert.equal(start.camera.tokens,0);
    assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),true);
    await page.waitForFunction(()=>window.trailGame.snapshot().state.elapsed>3.2);
    const gas=page.locator('[data-input="gas"]'),rect=await gas.boundingBox();
    assert(rect && rect.width>20 && rect.height>20);
    await session.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x:rect.x+rect.width/2,y:rect.y+rect.height/2}]});
    try{
      await page.waitForFunction(({x,z})=>{const {state}=window.trailGame.snapshot();return Math.hypot(state.x-x,state.z-z)>.4;},{x:start.state.x,z:start.state.z});
    }finally{await session.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});}
    await page.locator('#pauseButton').tap();
    assert(await page.locator('#retryChallenge').isVisible());
    if(mission==='passing-place'){
      await page.locator('#retryChallenge').tap();
      await page.waitForFunction(()=>window.trailGame.snapshot().running && window.trailGame.snapshot().gate===0);
      assert.equal((await snap()).state.recoveries,0);
    }else{await page.locator('#changeCourse').tap();}
    console.log('Touch HUD, physical movement and pause verified:',mission,body);
  }
  assert.deepEqual(errors,[]);
}finally{await browser?.close();server.kill();}
