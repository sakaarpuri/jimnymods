import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync}from'node:fs';
const read=f=>readFileSync(new URL('../'+f,import.meta.url),'utf8'),ui=read('assets/on-car-editor.js'),html=read('index.html'),css=read('assets/on-car-editor.css');
test('direct editor is shipped with four keyboard-accessible modes, buying and kit handoff',()=>{
 assert.match(html,/src="assets\/on-car-editor.js"/);assert.match(html,/href="assets\/on-car-editor.css"/);for(const label of ['Colour','Finish','Variants','Buying options'])assert(ui.includes(label));assert.match(ui,/role="tablist"/);assert.match(ui,/ArrowLeft/);assert.match(ui,/Escape/);assert.match(ui,/data-source-part/);assert.match(ui,/data-open-kits/);assert.match(read('scripts/build.mjs'),/assets\/on-car-editor.css/);
});
test('geometry picker is installed once with readiness, stock and preview guards',()=>{
 const viewer=read('src/viewer3d.js');assert.equal(viewer.match(/installPartPicker\(\{/g).length,1);assert.match(viewer,/enabled:\(\)=>!!detailed&&!modelLoading&&!previewRestore&&!stock/);assert.match(viewer,/jimny-part-pick/);
});
test('editor replaces the category grid and makes phone space without hiding the car',()=>{
 assert.match(css,/part-editing #garageChoices\{display:none/);assert.match(css,/grid-template-rows:minmax\(160px,34dvh\) minmax\(0,1fr\)/);assert(!css.includes('.planner-rail{display:none'));assert.match(ui,/focus\(\{preventScroll:true\}\)/);
});
test('appearance variants are pictured radio tiles rather than blind dropdowns',()=>{
 for(const kind of ['grille','decal','tyre','wheel','fabric','cabin','part'])assert(ui.includes("visualChoices('"+kind+"'"));
 assert(!ui.includes('data-part-variant='));assert.match(ui,/role="radiogroup"/);assert.match(ui,/role="radio" aria-checked/);assert.match(ui,/data-part-choice/);assert.match(ui,/variantImage\(kind,o\)/);assert.match(ui,/frameVariants/);assert.match(css,/\.is-grille \.on-car-variant-image/);assert.match(css,/\.on-car-variant-name/);
});
test('colours are sanitised, pruned, counted, exportable and carried by parts kits',()=>{
 assert.match(html,/\['partFinishes','partColours'\]/);assert.match(html,/data-remove-surface-colour/);assert.match(html,/Object.keys\(designState.partColours\|\|\{\}\).length/);assert.match(read('assets/build-kits-ui.js'),/colours\[target\]=entry.data.design.partColours\[target\]/);assert.match(read('src/trail/scene.js'),/JimnyPracticalParts\?\.\[id\]\?\.bodyStyles.includes\(body\)/);
});
