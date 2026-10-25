import test from'node:test';import assert from'node:assert/strict';import{readFileSync,existsSync}from'node:fs';import vm from'node:vm';
const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8');
const load=file=>{const ctx={Math,Promise};vm.runInNewContext(read(file),{globalThis:ctx,Math,Promise});return ctx;};

test('door name decals offer five bundled lettering styles and three sizes',()=>{
 const S=load('assets/name-decal-styles.js').JimnyNameDecalStyles;
 assert.equal(S.FONTS.length,5);assert.equal(S.SIZES.length,3);
 for(const f of S.FONTS){assert(existsSync(new URL('../'+f.file,import.meta.url)),f.file);}
 for(const lic of ['racing-sans-one-OFL.txt','saira-stencil-one-OFL.txt','alfa-slab-one-OFL.txt','yellowtail-LICENSE.txt'])assert(existsSync(new URL('../assets/fonts/'+lic,import.meta.url)),lic);
 assert.deepEqual({...S.clean({nameFont:'stencil',nameSize:'large'})},{nameFont:'stencil',nameSize:'large'});
 assert.deepEqual({...S.clean({nameFont:'<script>',nameSize:99})},{nameFont:'clean',nameSize:'medium'},'unknown values fall back');
 const player=read('src/trail/player.js');assert.match(player,/createNameDecals\(name,body,paintMeshes,parent,style=\{\},onRedraw/);assert.match(player,/\.13\*scale/);
 assert.match(read('src/trail/scene.js'),/profile\.nameStyle/);assert.match(read('src/trail-game.js'),/nameStyle:build\.design/);
 assert.match(read('index.html'),/Object\.assign\(cleanDesign,JimnyNameDecalStyles\.clean\(source\.design\)\)/);
});

test('at least five spoke alloy styles besides the factory wheel, built from one outline',()=>{
 const W=load('assets/wheel-designs.js').JimnyWheelDesigns;
 const spoke=W.DESIGNS.filter(d=>d.id!=='factory');assert(spoke.length>=5,`${spoke.length} spoke styles`);
 for(const d of spoke){assert(W.windows(d.id).length>=5,d.id+' has spoke windows');assert.match(W.svg(d.id),/^<svg/);}
 assert.equal(W.clean({wheelDesign:'nope'}).wheelDesign,'factory');
 const src=read('src/wheel-designs.js');assert.match(src,/W\.windows\(id\)/,'3D face uses the thumbnail outline');
 assert.match(read('src/viewer3d.js'),/if\(steel\)\{applyWheelDesign\(group,\{wheelDesign:'factory'\}\);applyCatalogueWheel\(group,true\);\}/,'the steel wheel part takes priority');
 assert.match(read('src/trail/scene.js'),/applyWheelDesign\(spare,design\)/,'Drive matches the spare');
});

test('night mode is gone from the Garage; the logo is the garage-wall sticker',()=>{
 const html=read('index.html');
 assert.match(html,/id="viewNight" hidden tabindex="-1" aria-hidden="true"/);
 assert.doesNotMatch(html,/jimny-preview-night|night-studio-controls|Night appearance controls/);
 assert.match(html,/Universal lamps need suitable mounts, fused wiring and local approval\./,'lamp safety note is kept');
 assert.match(read('assets/site-header.js'),/jimnygami-logo-sticker\.webp/);
 assert(existsSync(new URL('../assets/jimnygami-logo-sticker.webp',import.meta.url)));
});
