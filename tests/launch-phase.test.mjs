import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');
test('launch hides planned features without deleting their implementations',()=>{
 const css=read('assets/launch-phase.css'),header=read('assets/site-header.js'),build=read('scripts/build.mjs');
 for(const selector of ['[data-mode="fitters"]','[data-mode="sources"]','[data-garage-category="cabin"]','[data-editor="cabin"]','a[href*="game.html"]'])assert(css.includes(selector),selector);
 assert(!header.includes("label:'Fitters & sellers'"));assert(!header.includes("label:'Play 4×4 game'"));
 assert.match(build,/meta http-equiv="refresh" content="0;url=index\.html#garage"/);
 assert.match(read('game.html'),/<title>Drive — jimnygami/);
 assert.match(read('index.html'),/mode==='sources'\|\|mode==='fitters'/);
 assert.match(read('assets/catalogue-ui.js'),/work\.partCategory\(m\)!=='Interior'/);
});
