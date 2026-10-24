import test from'node:test';import assert from'node:assert/strict';import{readFileSync,readdirSync}from'node:fs';
const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8');

test('the game is called Drive everywhere its nav label says so',()=>{
 const sources=['game.html','src/trail-game.js','README.md',...readdirSync(new URL('../src/trail/',import.meta.url)).filter(f=>f.endsWith('.js')).map(f=>'src/trail/'+f)];
 for(const file of sources)assert.doesNotMatch(read(file),/Build (&|&amp;) Trail|BUILD (&|&amp;) TRAIL/,file);
 assert.match(read('game.html'),/<title>Drive — jimnygami<\/title>/);
 assert.match(read('assets/site-header.js'),/label:'Drive',href:'game\.html'/);
});

test('Drive menus use sentence case; in-world 3D signage keeps its own lettering',()=>{
 const game=read('game.html');
 for(const caps of ['CHOOSE YOUR TERRAIN','GET TO KNOW YOUR 4×4','START LESSON','PICK A SKILL','01 / DESTINATION','← GARAGE'])assert(!game.includes(caps),caps);
 assert.match(read('assets/drive-direction-a.css'),/text-transform:none!important;font-style:normal!important/);
 assert.match(read('src/trail/environment.js'),/'CONTROL SCHOOL'/,'scene signs are unchanged');
});

test('the Drive lobby is non-modal under the shared header; in-game dialogs stay modal',()=>{
 const js=read('src/trail-game.js');
 assert.match(js,/if\(id==='lobby'\)showLobby\(\);else \$\(id\)\.showModal\(\)/);
 assert.match(js,/function showLobby\(\)\{const lobby=\$\('lobby'\);\$\('game'\)\.inert=true;/);
 assert.match(js,/\$\('lobby'\)\.addEventListener\('close',\(\)=>\{\$\('game'\)\.inert=false;/);
 assert.doesNotMatch(read('assets/ui-theme.js'),/lobby-style-row/,'the header carries the Style setting');
});

test('Trip planner and Drive take the Direction A layer on top of their own styles',()=>{
 const trip=read('trip-planner.html'),game=read('game.html'),index=read('index.html');
 assert.match(trip,/assets\/direction-a\.css"><link rel="stylesheet" href="assets\/trip-direction-a\.css">/);
 assert.match(index,/assets\/trip-planner\.css">\n<link rel="stylesheet" href="assets\/trip-direction-a\.css">/,'the planner dialog in the Garage matches too');
 assert.match(game,/assets\/direction-a\.css"><link rel="stylesheet" href="assets\/drive-direction-a\.css">/);
 const css=read('assets/trip-direction-a.css');
 assert.match(css,/--trip-ink:var\(--a-text\);--trip-muted:var\(--a-muted\)/);
 assert.match(css,/body\.trip-page\{background:var\(--a-ground\);color:var\(--a-text\);font:16px\/1\.6 var\(--font-body\)\}/);
 const build=read('scripts/build.mjs');
 assert.equal(build.match(/'assets\/trip-direction-a\.css'/g).length,2);
 assert.match(build,/'assets\/drive-direction-a\.css'/);
});
