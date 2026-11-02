import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js';
import {frontLogoCustomized,separateSpareEmblem,updateSpareEmblem} from '../src/spare-badge.js';
import {mouldedSpareCover} from '../src/refined-parts.js';
import {accessoryMaterials} from '../src/accessories.js';

test('front logo customisation is reversible and does not treat a grille colour alone as a logo edit',()=>{
  assert.equal(frontLogoCustomized({grille:'oem',badgeColour:'original'}),false);
  assert.equal(frontLogoCustomized({grille:'oem',grilleColour:'#202629'}),false);
  assert.equal(frontLogoCustomized({grille:'script',badgeColour:'original'}),true);
  assert.equal(frontLogoCustomized({grille:'oem',badgeColour:'#d4aa53'}),true);
});
for(const [body,file] of [['5door','lwb'],['3door','swb']])test(`${body} spare logo can be hidden and restored without removing the wheel`,async()=>{
  const bytes=await readFile(new URL(`../assets/models/jimny-${file}-blender.glb`,import.meta.url));
  const model=(await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength),'')).scene;
  const spare=model.getObjectByName('SpareWheel');const alloy=spare.getObjectByName('SpareWheel__MachinedAlloy');const before=alloy.geometry.index?.count||alloy.geometry.attributes.position.count;
  const badge=separateSpareEmblem(spare,body);assert.ok(badge,'Factory badge triangles were not found');
  const badgeCount=badge.geometry.attributes.position.count,remaining=alloy.geometry.attributes.position.count;
  assert.ok(badgeCount>=30&&badgeCount<600,'Only the small emblem must be split');assert.equal(remaining+badgeCount,before);assert.ok(spare.getObjectByName('SpareWheel__TyreRubber'));
  updateSpareEmblem(spare,body,{grille:'script'});assert.equal(badge.visible,false);
  updateSpareEmblem(spare,body,{grille:'oem',badgeColour:'#c7cdd1'});assert.equal(badge.visible,false);
  updateSpareEmblem(spare,body,{grille:'oem',badgeColour:'original'});assert.equal(badge.visible,true);
  alloy.visible=false;updateSpareEmblem(spare,body,{grille:'oem'});assert.equal(badge.visible,false,'A hidden factory wheel face must not leave a floating badge');
});
test('spare cover can omit its emblem without removing the shell',()=>{
  const materials=accessoryMaterials();
  const cover=mouldedSpareCover(materials,null,false);assert.ok(cover.getObjectByName('Spare cover shell'));assert.equal(cover.getObjectByName('Spare cover Suzuki emblem'),undefined);
  cover.traverse(o=>o.geometry?.dispose());Object.values(materials).forEach(m=>m.dispose());
});
