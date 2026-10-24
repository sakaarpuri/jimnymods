import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import vm from 'node:vm';
const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8');
const hash=p=>createHash('sha256').update(readFileSync(new URL('../'+p,import.meta.url))).digest('hex');
test('model-derived images receive one current revision without changing supplier photographs',()=>{
 const fallback={src:''},design={dataset:{modelDesignGroup:'grille',modelDesignOption:'oem'}};
 const context={window:{JIMNY_VISUAL_RELEASE:{previewVersion:'test-current'},addEventListener(){}},URL,location:{origin:'http://localhost:8080'},MutationObserver:class{observe(){}},document:{baseURI:'http://localhost:8080/dist/',documentElement:{style:{setProperty(){}}},addEventListener(){},getElementById:id=>id==='spinImg'?fallback:{value:'3door'},querySelectorAll:()=>[design]}};
 vm.runInNewContext(read('assets/visual-assets.js'),context);
 assert.equal(context.window.jimnyPreviewURL('preset-classic','3door'),'assets/previews/swb/preset-classic.webp?v=test-current');
 assert.equal(context.window.jimnyModelImage('grille','oem','5door'),'assets/previews/design-grille-oem.webp?v=test-current');
 context.window.refreshJimnyVisualAssets('3door');
 assert.equal(design.src,'assets/previews/swb/design-grille-oem.webp?v=test-current');
 assert.equal(fallback.src,'assets/previews/swb/design-finish-oem.webp?v=test-current');
 assert.match(read('assets/visual-assets.js'),/url\.origin!==location\.origin/);
});
test('garage, game and their rendered previews use the same current compressed assets',()=>{
 const context={window:{}};vm.runInNewContext(read('assets/visual-release.js'),context);
 const release=context.window.JIMNY_VISUAL_RELEASE,manifest=JSON.parse(read('assets/previews/manifest.json'));
 for(const [body,stem,key]of [['5door','lwb','modelSha256'],['3door','swb','swbModelSha256']]){
  const current=hash(`assets/models/jimny-${stem}-blender.glb`);
  assert.equal(release.models[body],current.slice(0,12));assert.equal(manifest[key],current);
  for(const bundle of ['assets/viewer3d.js','assets/trail-game.js'])assert(read(bundle).includes(`jimny-${stem}-blender.glb?v=${current.slice(0,12)}`));
 }
 const world=JSON.parse(read('assets/previews/world-manifest.json'));assert.equal(world.modelSha256,manifest.modelSha256);
 for(const [id,sha]of Object.entries(world.images))assert.equal(sha,hash(`assets/previews/world-${id}.webp`));
});
test('all visible legacy galleries use current model images and release builds reject stale previews',()=>{
 const html=read('index.html');assert.match(html,/data-model-design-group/);assert.match(html,/jimnyModelImage\(l\.group,l\.option/);
 assert.match(html,/id="spinImg"[^>]+assets\/previews\/design-finish-oem\.webp/);
 for(const file of ['index.html','game.html']){assert.match(read(file),/assets\/visual-release\.js/);assert.match(read(file),/assets\/visual-assets\.js/);}
 const build=read('scripts/build.mjs');assert.match(build,/stale&&!process\.argv\.includes\('--preview-refresh'\)/);
 assert.match(build,/throw new Error\('Model-derived previews are stale/);
});
