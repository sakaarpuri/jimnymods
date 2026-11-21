import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');
test('buying, fitters and the driving game are all live',()=>{
 const css=read('assets/launch-phase.css'),header=read('assets/site-header.js'),build=read('scripts/build.mjs');
 assert(!css.includes('game.html'),'links to Drive are no longer hidden');
 for(const selector of ['[data-mode="fitters"]','[data-mode="sources"]','#pdBuy','.pd-meta','.pd-notes','.garage-source'])assert(!css.includes(selector),selector);
 for(const selector of ['[data-garage-category="cabin"]','[data-editor="cabin"]','#cabinControls'])assert(!css.includes(selector),selector);
 assert(header.includes("label:'Fitters & sellers'"));assert(!header.includes("label:'Play 4×4 game'"));assert(header.includes("{label:'Drive',href:'game.html',page:'drive'}"),'Drive is in the shared navigation');
 assert.doesNotMatch(build,/http-equiv="refresh"/,'production serves the game instead of a redirect');assert.match(build,/previewGame\?game\.replace\([^)]*\):game\)/);
 assert.match(read('game.html'),/<title>Drive — jimnygami/);
 assert.doesNotMatch(read('index.html'),/mode==='sources'\|\|mode==='fitters'\)mode='explore'/);
 assert.doesNotMatch(read('assets/catalogue-ui.js'),/work\.partCategory\(m\)!=='Interior'/);
});
