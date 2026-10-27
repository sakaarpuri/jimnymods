import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import vm from 'node:vm';

const html=readFileSync(new URL('../index.html',import.meta.url),'utf8');
const css=readFileSync(new URL('../design.css',import.meta.url),'utf8');
test('ready-made looks launch beside the garage heading and return directly to quick fits',()=>{
 assert.match(html,/garage\.querySelector\('\.garage-heading>div'\)\.insertAdjacentHTML\('beforeend',`<button[^`]*garage-looks-launch/);
 assert.match(html,/PACKAGES\.length\} ready-made looks/);
 assert.match(html,/data-quickfits-return[^\n]*openGarageCategory\('popular',\{focus:true\}\)/);
 assert.match(html,/lookInspoGrid"\)\.innerHTML=PACKAGES\.map/);
});
test('grille category puts pictures before collapsed optional appearance tools',()=>{
 const flow=readFileSync(new URL('../assets/workbench-flow.js',import.meta.url),'utf8');
 assert.match(flow,/grillePanel\.prepend\(grilleGrid\)/);assert.match(flow,/grilleGrid\.after\(grilleAppearance\)/);assert.match(flow,/grilleAppearance\.open=false/);assert.match(flow,/surfaceHome\.after\(surfaces\)/);assert.match(flow,/data-open-grille-appearance/);
});
test('breakpoint navigation preserves focus without cropping the heading and uses one chosen-item count',()=>{
 assert.match(html,/movingFocusedTab=garageCategoryStrip\.contains\(focused\)/);
 assert.match(html,/if\(movingFocusedTab\)focused\.focus\(\{preventScroll:true\}\)/);
 assert.match(css,/\.planner-main\{overflow-anchor:none\}/);
 assert.match(html,/const selectionCount = buildSelectionCount\(stats\)/);
 assert.match(html,/Your build · \$\{buildSelectionCount\(\)\}/);
 assert.match(html,/if\(customWheelFinish\)rows\.push/);
 assert.match(html,/x\.wheelFinish\|\|x\.wheelDesign\|\|x\.colourField\|\|x\.surfaceTarget\|\|x\.surfaceColour\|\|x\.allBlack\?'Price not estimated':optionPrice\(x\)/);
 assert.match(html,/x\.wheelFinish\?'data-remove-wheel-finish'/);
});
test('inline garage application parses without dependencies',()=>{
  for(const script of html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g))if(script[1].trim())new vm.Script(script[1]);
});
test('the six first-screen quick fits all have actual renderer thumbnails',()=>{
  const literal=html.match(/const GARAGE_FAMILIES=(\{[^;]+\});/)[1];
  const families=vm.runInNewContext('('+literal+')');
  assert.equal(families.popular.length,6);
  assert.equal(new Set(families.popular).size,6);
  for(const id of families.popular)assert.ok(existsSync(new URL(`../assets/previews/part-${id}.webp`,import.meta.url)),id);
});
test('short body does not pretend unsupported parts are live previews',()=>{
  // This function is a single source line; a first-closing-brace regex also
  // truncates its empty-object fallback before the actual return expression.
  const fn=html.match(/^function garageCanPreview\(id\)\{[^\n]+/m)[0];
  for(const body of ['3door','5door']){
    const ctx=vm.createContext({bodyStyle:body,catalogueBodyStatus:part=>part.incompatible?'incompatible':'compatible',practicalSpec:id=>id==='door_pocket'?{bodyStyles:['3door','5door']}:null,modById:{market_skinny_backbone:{visual:'skinnyjim_backbone'},market_suzuki_nomade_flatrack:{visual:'suzuki_nomade_flatrack'},wrong_body:{incompatible:true}}});vm.runInContext(fn,ctx);
    assert.equal(vm.runInContext('garageCanPreview("tires")',ctx),true);
    assert.equal(vm.runInContext('garageCanPreview("rack")',ctx),body==='5door');
    assert.equal(vm.runInContext('garageCanPreview("market_skinny_backbone")',ctx),true);
    assert.equal(vm.runInContext('garageCanPreview("market_suzuki_nomade_flatrack")',ctx),body==='5door');
    assert.equal(vm.runInContext('garageCanPreview("door_pocket")',ctx),true);
    assert.equal(vm.runInContext('garageCanPreview("wrong_body")',ctx),false);
  }
  assert.match(html,/button\.disabled=!ready\|\|!supported/);
});
test('garage exposes repeat-to-remove, undo, source separation and accessible categories',()=>{
  assert.match(html,/const id=fit\.dataset\.garageFit;if\(setPartSelection\(id,!state\[id\]\)===false\)return/);
  assert.match(html,/data-garage-undo/);assert.match(html,/data-garage-stock/);
  assert.match(html,/class="garage-source" data-source-part=/);
  assert.match(html,/role="tablist" aria-label="Modification categories"/);
  assert.match(html,/garageChoices.*role="tabpanel"/);
  assert.match(html,/requestedWorkshopHash/);
});
test('vehicle and controls use a bounded two-pane application on desktop and phone',()=>{
  assert.match(css,/\.rally-workshop \.planner-main\{[^}]*overflow-y:auto/);
  assert.match(css,/grid-template-rows:minmax\(190px,44%\) minmax\(0,1fr\)/);
  assert.match(css,/\.rally-workshop \.planner-rail\{[^}]*overflow:hidden/);
});
test('category changes reset the tray after replacing its content without focus scrolling',()=>{
  const reset=html.match(/function resetWorkbenchScroll\(\)\{[\s\S]*?\n\}/)[0];
  const calls=[],frames=[],tray={scrollTo:options=>calls.push(options)};
  vm.runInNewContext(`let workbenchScrollResetFrame=0;${reset};resetWorkbenchScroll()`,{document:{querySelector:()=>tray},cancelAnimationFrame:()=>{},requestAnimationFrame:fn=>{frames.push(fn);return frames.length;}});
  assert.equal(calls.length,1);assert.equal(calls[0].top,0);assert.equal(calls[0].behavior,'instant');
  frames.shift()();frames.shift()();assert.equal(calls.length,3);assert.equal(frames.length,0,'navigation must not keep locking subsequent user scrolling');
  const category=html.match(/function openGarageCategory\([^]*?\n\}/)[0];
  assert.match(category,/b\.focus\(\{preventScroll:true\}\)/);
  assert(category.lastIndexOf('resetWorkbenchScroll()')>category.indexOf('selectEditor(id)'));
  assert.match(css,/\.rally-workshop \.planner-main\{[^}]*overflow-anchor:none/);
  assert.match(css,/\.rally-workshop \.planner-main\{[^}]*scroll-behavior:auto/);
});
test('the Sellers view keeps the Fitters & sellers tab lit and is never mistaken for Parts',()=>{
  assert.match(html,/const navMode=mode==='sources'\?'fitters':mode;/);assert.match(html,/const active=button\.dataset\.modeSelect===navMode/);
  assert(!html.includes("mode==='sources'?'parts':mode"));
});
test('Rally feedback has explicit contrasting colours rather than inheriting a white background',()=>{
  assert.match(css,/\[data-ui-theme=rally\] \.toast\{background:#293135;color:#f2f0e9/);
  assert.match(css,/\[data-ui-theme=rally\] \.toast button\{background:#e59a6c;color:#1b2023/);
});
test('wheel combinations keep finish in saved payloads and factory reset',()=>{
 assert.match(html,/cleanDesign\.wheelFinish=\['oem','graphite','bronze','silver','black'\]/);
 assert.match(html,/data-remove-wheel-finish/);
 assert.match(html,/const GARAGE_WHEELS=/);
 assert.match(html,/wheelFinish:'oem'/);
 assert.match(html,/getJimnyWheelPreviews/);
});
test('interior storage is not buried under a permanently expanded seat gallery',()=>{
 const ui=readFileSync(new URL('../assets/build-kits-ui.js',import.meta.url),'utf8');
 assert.match(ui,/upholstery\.className='cabin-upholstery'/);
 assert.match(ui,/upholstery\.append\(label,palette,note\)/);
 assert.match(ui,/data-seat-fabric/);assert.match(ui,/data-fit-tourer/);assert.match(ui,/data-touring-mode/);
});
