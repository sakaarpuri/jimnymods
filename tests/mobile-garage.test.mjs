import test from'node:test';import assert from'node:assert/strict';import{readFileSync}from'node:fs';
const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8');
const js=read('assets/mobile-garage.js'),css=read('assets/mobile-garage.css'),html=read('index.html');

test('phone Garage relocates existing controls instead of cloning them, and restores them above 900px',()=>{
 assert.match(js,/matchMedia\('\(max-width:899px\)'\)/);
 assert.doesNotMatch(js,/cloneNode/);
 assert.match(js,/function restore\(\)\{for\(const \[node,mark\] of homes\)mark\.after\(node\);\}/);
 for(const node of ['exterior','cabin','camera','cabinViews','scenery','hotspot','expand','drive','tray','...stageButtons'])assert(js.includes(node),node);
 assert.match(html,/assets\/mobile-garage\.js/);assert.match(html,/assets\/mobile-garage\.css/);
 assert.match(read('scripts/build.mjs'),/'assets\/mobile-garage\.js','assets\/mobile-garage\.css'/);
});

test('the live viewer docks as a thumbnail by resizing, never by re-creating the renderer',()=>{
 assert.doesNotMatch(js,/new THREE|WebGLRenderer|getContext\(/,'no second renderer');
 assert.match(css,/garage-car-docked\[data-mode=garage\] #viewer3d\{position:fixed!important/);
 assert.match(css,/#spin360\{z-index:45!important\}/,'thumbnail sits above the pinned chips');
 assert.match(css,/\.garage-categories\{position:sticky!important;top:var\(--site-header-h\)!important/);
 // The viewer already resizes on its own and pauses when off-screen.
 const viewer=read('src/viewer3d.js');
 assert.match(viewer,/new ResizeObserver\(\(\)=>\{const \{width,height\}=mount\.getBoundingClientRect\(\)/);
 assert.match(viewer,/new IntersectionObserver\(entries=>\{visible=entries\[0\]\.isIntersecting/);
});

test('fitting while docked shows the change on the car with Undo and View car; My build stays reachable',()=>{
 assert.match(js,/if\(fit&&active&&docked&&state\[fit\.dataset\.garageFit\]\)peek\(/);
 assert.match(js,/garage-fitted-undo[^]*undoLastChange\(\)/);
 assert.match(js,/Shown on your car · \$\{count\} part/);
 assert.match(js,/class="garage-buildbar-summary" data-build-open/);
 assert.match(css,/body\.phone-garage\[data-mode=garage\] \.garage-buildbar\{position:fixed/);
 assert.match(js,/total==='Quote required'\?'Quote required'/,'estimate wording follows the build summary');
});
