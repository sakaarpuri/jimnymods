import test from'node:test';import assert from'node:assert/strict';import{readFileSync}from'node:fs';
const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8');
const pages={'index.html':'garage','trip-planner.html':'trip','game.html':'drive'};

test('Garage, Trip planner and Drive share one header, theme and Direction A tokens',()=>{
 for(const [file,page] of Object.entries(pages)){
  const html=read(file);
  assert.match(html,new RegExp(`<header data-site-header data-page="${page}"></header>|<header data-site-header data-page="${page}">`),file);
  assert.match(html,/assets\/site-header\.js/,file);
  assert.match(html,/assets\/ui-theme\.js/,file+' applies the Style setting');
  assert.match(html,/assets\/direction-a\.css/,file);
  assert.doesNotMatch(html,/class="(game-header|trip-site-header|brandline)"/,file+' has no page-specific header');
 }
 const header=read('assets/site-header.js');
 assert.match(header,/data-build-open/,'My build opens the drawer on the Garage');
 assert.match(header,/thatsuvmod-open-build/,'My build elsewhere returns to the drawer');
 assert.match(read('index.html'),/sessionStorage\.getItem\('thatsuvmod-open-build'\)/);
 assert.match(read('game.html'),/id="menuButton" type="button" data-site-header-slot/,'Drive keeps its Courses button');
});

test('Style picker lives in the shared header and Rally dark stays the default',()=>{
 const theme=read('assets/ui-theme.js');
 assert.match(theme,/\.site-setup-theme/);
 assert.match(theme,/value==='daylight'\?'daylight':'rally'/);
 const css=read('assets/direction-a.css');
 assert.match(css,/--a-lime:#e2f05a/);assert.match(css,/:root\[data-ui-theme=daylight\]\{/);
 assert.match(css,/font-family:Outfit/);
});

test('build cache-busting covers the shared header files on every page',()=>{
 const build=read('scripts/build.mjs');
 assert.equal(build.match(/'assets\/site-header\.js'/g).length,3);
 assert.equal(build.match(/'assets\/direction-a\.css'/g).length,3);
});

test('off the Garage, the header defaults to India until a region is saved',()=>{
 const header=read('assets/site-header.js');
 assert.match(header,/const DEFAULT_REGION='India';/);
 assert.doesNotMatch(header,/Your region'|Not chosen yet/);
 assert.match(read('assets/regions.js'),/window\.jimnyRegion='IN';/,'matches the Garage default');
});
