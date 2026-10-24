import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import vm from 'node:vm';

const root=new URL('../',import.meta.url);
const manifest=JSON.parse(readFileSync(new URL('assets/previews/manifest.json',root)));
test('six cosmetic wheel combinations use distinct local close-ups from the real model',()=>{
 assert.equal(new Set(manifest.wheelVariants).size,6);const hashes=new Set();
 for(const id of manifest.wheelVariants){const bytes=readFileSync(new URL(`assets/previews/wheel-${id}.webp`,root));assert.equal(bytes.toString('ascii',8,12),'WEBP');hashes.add(createHash('sha256').update(bytes).digest('hex'));}
 assert.equal(hashes.size,6,'different finishes must not reuse the same image');
});
test('every selectable lamp has its own local render and the removed beam view stays absent',()=>{const context={window:{}};vm.runInNewContext(readFileSync(new URL('assets/market-catalog.js',root),'utf8'),context);const lamps=context.window.JIMNY_MARKET_PRODUCTS.filter(p=>p.lightProfile);assert.equal(lamps.length,9);for(const lamp of lamps){const image=readFileSync(new URL(`assets/previews/lamp-${lamp.id}.webp`,root));assert.equal(image.toString('ascii',8,12),'WEBP');}const html=readFileSync(new URL('index.html',root),'utf8');assert.ok(html.includes('id="lampChoices"'));assert.ok(!html.includes('data-beam-view'));assert.ok(!html.includes('data-light-demo'));});
test('both bodies have three distinct tyre-tread renders from their actual live geometry',()=>{
 assert.deepEqual(manifest.tyreTypes,['highway','allterrain','mudterrain']);
 for(const folder of ['','swb/']){
  const hashes=new Set();for(const type of manifest.tyreTypes){const bytes=readFileSync(new URL(`assets/previews/${folder}tyre-${type}.webp`,root));assert.equal(bytes.toString('ascii',8,12),'WEBP');hashes.add(createHash('sha256').update(bytes).digest('hex'));}
  assert.equal(hashes.size,3,'different tread choices must not reuse the same render');
 }
});
test('preview material and accessory renderer fingerprints are current',()=>{
  assert.equal(Object.keys(manifest.renderSources).length,26);
  for(const file of ['src/garage-cameras.js','src/trail/player.js','src/trail/replay.js'])assert.ok(manifest.renderSources[file]);
  assert.ok(manifest.renderSources['src/scenery.js'],'HDRI scenery lights every preview');
  assert.ok(manifest.renderSources['src/viewer3d.js'],'Camera framing must invalidate old product previews');
  assert.ok(manifest.renderSources['src/surface-finishes.js']);
  assert.ok(manifest.renderSources['assets/surface-style-state.js']);
  assert.ok(manifest.renderSources['assets/look-packages.js']);
  assert.ok(manifest.renderSources['src/grille-colours.js']);
  assert.ok(manifest.renderSources['src/steering-badge.js']);
  assert.ok(manifest.renderSources['src/interior-storage.js']);
  assert.ok(manifest.renderSources['src/catalogue-parts.js']);
  assert.ok(manifest.renderSources['src/tyre-types.js']);
  assert.ok(manifest.renderSources['src/wheel-finishes.js']);
  assert.ok(manifest.renderSources['src/accessories.js']);
  assert.ok(manifest.renderSources['src/trail/cabin-materials.js']);
  for(const [path,hash] of Object.entries(manifest.renderSources))assert.equal(createHash('sha256').update(readFileSync(new URL(path,root))).digest('hex'),hash,`Regenerate previews after changing ${path}`);
});
test('reference-guided catalogue and interior parts have distinct body-compatible live-model previews',()=>{
  const expected={'5door':['market_skinny_backbone','market_skinny_jerry','market_suzuki_nomade_flatrack','market_suzuki_nomade_steelwheel','mod_reardoor_molle','mod_halfmolly_5door','exploresetups_drawer_5door'],'3door':['market_skinny_backbone','market_skinny_jerry','mod_reardoor_molle']};
  const context={};vm.runInNewContext(readFileSync(new URL('assets/practical-accessories-data.js',root),'utf8'),context);
  for(const body of ['5door','3door'])for(const part of Object.values(context.JimnyPracticalParts))if(part.bodyStyles.includes(body))expected[body].push(part.existingId||part.id);
  assert.deepEqual(manifest.catalogueParts,expected);
  for(const [body,ids]of Object.entries(expected)){
    const hashes=new Set();for(const id of ids){const image=readFileSync(new URL(`assets/previews/${body==='3door'?'swb/':''}part-${id}.webp`,root));assert.equal(image.toString('ascii',8,12),'WEBP');hashes.add(createHash('sha256').update(image).digest('hex'));}
    assert.equal(hashes.size,ids.length,'Distinct sourced products must not share a generic thumbnail');
  }
});
test('all ten curated looks have local WebP renders from the current Blender model',()=>{
  const model=readFileSync(new URL('assets/models/jimny-lwb-blender.glb',root));
  assert.equal(manifest.modelSha256,createHash('sha256').update(model).digest('hex'),'Regenerate preset renders after changing the model');
  assert.equal(new Set(manifest.presets).size,10);
  for(const id of manifest.presets){
    const image=readFileSync(new URL(`assets/previews/preset-${id}.webp`,root));
    assert.equal(image.toString('ascii',0,4),'RIFF');
    assert.equal(image.toString('ascii',8,12),'WEBP');
    assert.ok(image.length>10000&&image.length<100000,`${id}: unexpected thumbnail transfer size`);
  }
});
test('preset cards share a live 3D preview rather than opening an unrelated photo',()=>{
  const html=readFileSync(new URL('index.html',root),'utf8');
  assert.ok(html.includes('jimnyPreviewURL(`preset-${id}`'));
  assert.ok(!html.includes('PACKAGE_IMAGE_GROUPS'));
  assert.ok(html.includes('window.jimny3D.beginPreview(presetPayload(pkg))'));
  assert.ok(html.includes('data-look-preview="${p.id}"'));
});
test('all forty-two part cards use their actual renderer preview, not interchangeable stock photos',()=>{
  assert.equal(new Set(manifest.parts).size,42);
  for(const id of manifest.parts){
    const image=readFileSync(new URL(`assets/previews/part-${id}.webp`,root));
    assert.equal(image.toString('ascii',8,12),'WEBP');
    assert.ok(image.length>8000&&image.length<100000,`${id}: invalid preview size`);
  }
  const html=readFileSync(new URL('index.html',root),'utf8');
  assert.ok(html.includes('assets/previews/part-${m.id}.webp'));
  assert.ok(html.includes('data-part-preview="${m.id}"'));
  assert.ok(html.includes('Representative geometry · not an exact supplier model.'));
});
test('part audit distinguishes representation from exact SKU fidelity and covers every base preview',()=>{
  const audit=JSON.parse(readFileSync(new URL('modeling/part-model-audit.json',root)));
  assert.deepEqual(audit.parts.map(p=>p.id).sort(),[...manifest.parts].sort());
  assert.equal(audit.additionalLamps.length,8);
  assert.ok(audit.parts.every(p=>p.result.length>35));
  assert.ok(audit.standard.includes('No asset'));
});
