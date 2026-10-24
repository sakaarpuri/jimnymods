import test from'node:test';import assert from'node:assert/strict';import{readFileSync}from'node:fs';
const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8');
const html=read('index.html'),panels=read('assets/garage-panels.js'),css=read('assets/garage-stage.css'),flow=read('assets/workbench-flow.js');

test('repeated shortcuts appear once instead of in every category',()=>{
 // Ready-made looks only in Quick fits.
 assert.match(css,/#garage:not\(\[data-category=popular\]\) \.garage-looks-launch\{display:none!important\}/);
 // All black + Matte / gloss move into Paint's More options (or Grilles' panel), never above every category.
 assert.match(css,/#garage>\.surface-controls\{display:none!important\}/);
 assert.match(flow,/garageCategory==='paint'&&paintMore\)\{if\(surfaces\.parentElement!==paintMore\)paintMore\.append\(surfaces\)/);
 assert.match(html,/if\(!\['paint','grille'\]\.includes\(garageCategory\)\)openGarageCategory\('paint'\)/,'editing a surface from My build still reaches the controls');
});

test('advanced controls sit behind one "More options" per category; nothing is removed',()=>{
 assert.match(panels,/more\('paintMore','Custom colour, finish, all black, matte \/ gloss'\)/);
 assert.match(panels,/more\('decalMore','Your name on the doors, vinyl colour'\)/);
 assert.match(html,/<details class="garage-more" data-more="wheels"/);
 assert.match(flow,/<summary>More options <small>Colour, badge & finish<\/small><\/summary>/);
 for(const kept of ['.custom-paint','.paint-readout','.garage-design-options','.garage-name-decal','.vinyl-ink'])assert(panels.includes(kept),kept);
 assert.doesNotMatch(panels,/\.remove\(\)/,'panels only move controls');
});

test('▶ markers are replaced by a labelled chevron, and the heading triangle is gone',()=>{
 assert.match(css,/#garage \.garage-heading h1::after,[^{]*\{content:none!important/);
 assert.match(css,/details>summary\.summary-chevron::-webkit-details-marker\{display:none\}/);
 assert.match(panels,/summary-chevron/);
});

test('My build follows frames 04/10 and keeps every action',()=>{
 for(const id of ['shareBuild','saveSnapshot','drawerMore','undoChange','copyBuild','downloadBuild','printBuild','clearBuild','savedBuilds','buildName'])assert(html.includes(`id="${id}"`),id);
 assert.match(html,/>Share build</);assert.match(html,/data-load-version>Load a saved version</);
 assert.match(panels,/#buildStorageStatus\) still reports whether autosave worked/);
});

test('on-car editor and Try in 3D take the page theme',()=>{
 assert.match(read('assets/on-car-editor.css'),/html\[data-ui-theme\] \.on-car-editor\{background:var\(--a-panel\)/);
 assert.match(css,/html\[data-ui-theme\] \.spin360\.expanded\{background:var\(--a-panel\)!important/);
});
