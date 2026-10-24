import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import vm from 'node:vm';
import {createHash} from 'node:crypto';
const html=readFileSync(new URL('../index.html',import.meta.url),'utf8');

test('garage design choices use actual model images, not text-only substitutes',()=>{
  assert.match(html,/studioPreviewPath\(`design-\$\{group\}-\$\{o.id\}`\)/);
  assert.match(html,/studioPreviewPath\(`design-decal-\$\{o.id\}`\)/);
  assert.match(html,/data-paint-choice=/);
  assert.match(html,/studioPreviewPath\(`cabin-\$\{id\}`\)/);
  assert.match(html,/document.getElementById\('lampChoices'\).innerHTML=garagePartCards/);
  assert.match(html,/document.querySelector\('\.cabin-options'\).innerHTML=garagePartCards/);
});

test('paint uses compact accessible swatches rather than repeated car-photo tiles',()=>{
  const renderer=html.slice(html.indexOf("if(!document.getElementById('paintGallery'))"),html.indexOf('window.getJimnyStudioPreviews'));
  assert.match(renderer,/class=\"paint-chip\"/);
  assert.match(renderer,/aria-label=\"\$\{escHtml\(name\)\}/);
  assert.doesNotMatch(renderer,/<img|more-paint/);
  assert.match(html,/Tap a swatch to repaint your Jimny instantly/);
});

test('all published design/paint thumbnails exist for both bodies',()=>{
 const manifest=JSON.parse(readFileSync(new URL('../assets/previews/manifest.json',import.meta.url)));
 for(const body of ['5door','3door']){
  const files=manifest.studioPreviews?.[body]||[];
  assert.equal(files.filter(f=>f.startsWith('design-')).length,28);
  assert.equal(files.filter(f=>f.startsWith('paint-')).length,28);
  for(const file of files){const bytes=readFileSync(new URL(`../assets/previews/${body==='3door'?'swb/':''}${file}.webp`,import.meta.url));assert.equal(bytes.toString('ascii',8,12),'WEBP');}
 }
});

test('every named garage family option has a shipped image, including market aliases',()=>{
 const families=vm.runInNewContext('('+html.match(/const GARAGE_FAMILIES=(\{[^;]+\});/)[1]+')');
 for(const id of new Set(Object.values(families).flat()))assert(existsSync(new URL(`../assets/previews/part-${id}.webp`,import.meta.url)),`Missing image for ${id}`);
});

test('seat covers support repeat-to-remove, selected state and body guards',()=>{
 assert.match(html,/const remove=state.seats&&designState.cabin===cover.dataset.cabinColour/);
 assert.match(html,/setPartSelection\('seats',!remove\)/);
 assert.match(html,/b.disabled=!ready;/);
 assert.match(html,/window.addEventListener\('jimny-model-change',\(\)=>\{renderVisualEditors\(\);renderGarageParts\(\);\}\)/);
});

test('seat palettes have visibly different renderer images, not relabelled copies',()=>{
 const hashes=['tan','saddle','olive','stone','black'].map(id=>createHash('sha256').update(readFileSync(new URL(`../assets/previews/cabin-${id}.webp`,import.meta.url))).digest('hex'));
 assert.equal(new Set(hashes).size,5);
});
