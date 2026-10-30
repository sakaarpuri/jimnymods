import test from'node:test';import assert from'node:assert/strict';import{readFileSync}from'node:fs';
const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8');
const js=read('assets/garage-stage.js'),css=read('assets/garage-stage.css'),html=read('index.html');

test('the stage relocates existing controls instead of cloning them, at every width',()=>{
 assert.match(js,/matchMedia\('\(max-width:899px\)'\)/);
 assert.doesNotMatch(js,/cloneNode/);
 for(const node of ['exterior','cabin','camera','cabinViews','scenery','hotspot','expand','drive','compare','saveImage','tray'])assert(js.includes(node),node);
 assert.match(html,/assets\/garage-stage\.js/);assert.match(html,/assets\/garage-stage\.css/);assert.match(html,/assets\/garage-panels\.js/);
 assert.match(read('scripts/build.mjs'),/'assets\/garage-stage\.js','assets\/garage-stage\.css','assets\/garage-panels\.js'/);
});

test('desktop follows frame 03: car, category rail, panel; build bar on the car',()=>{
 assert.match(js,/rail\.after\(strip\);\/\/ Vertical rail between the car and the panel\./);
 assert.match(css,/grid-template-columns:minmax\(0,1fr\) 112px minmax\(380px,min\(560px,38vw\)\)!important/);
 assert.match(js,/buildbar\.append\(\.\.\.\[compare,drive\]/);
 assert.match(js,/Compare with stock/);
});

test('on phones the live viewer docks as a thumbnail by resizing, never by re-creating the renderer',()=>{
 assert.doesNotMatch(js,/new THREE|WebGLRenderer|getContext\(/,'no second renderer');
 assert.match(css,/garage-car-docked\[data-mode=garage\] #viewer3d\{position:fixed!important/);
 assert.match(css,/#spin360\{z-index:45!important\}/,'thumbnail sits above the pinned chips');
 assert.match(css,/\.garage-categories\{position:sticky!important;top:var\(--site-header-h\)!important/);
 const viewer=read('src/viewer3d.js');
 assert.match(viewer,/new ResizeObserver\(\(\)=>\{const \{width,height\}=mount\.getBoundingClientRect\(\)/);
 assert.match(viewer,/new IntersectionObserver\(entries=>\{visible=entries\[0\]\.isIntersecting/);
});

test('fitting shows the change on the car with Undo; My build stays reachable',()=>{
 assert.match(js,/if\(fit&&state\[fit\.dataset\.garageFit\]\)showFitted\(/);
 assert.match(js,/garage-fitted-undo[^]*undoLastChange\(\)/);
 assert.match(js,/Shown on \$\{peek\?'your':'the'\} car/);
 assert.match(js,/class="garage-buildbar-summary" data-build-open/);
 assert.match(js,/Prices need confirmation/,'unverified prices are not presented as estimates');
});
