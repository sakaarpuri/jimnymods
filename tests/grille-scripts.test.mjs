import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js';
import {Box3} from 'three';
import {configureScriptGrille} from '../src/grille-scripts.js';
import {applyGrilleColours} from '../src/grille-colours.js';

for(const body of ['lwb','swb'])test(`${body} offers distinct, recolourable 3D script badge choices`,async()=>{
 const bytes=await readFile(new URL(`../assets/models/jimny-${body}-blender.glb`,import.meta.url));
 const root=(await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength),'')).scene;
 root.updateMatrixWorld(true);const grille=root.getObjectByName('ScriptGrille');configureScriptGrille(grille,'script');
 const brush=grille.getObjectByName('Suzuki heritage script badge'),loop=grille.getObjectByName('Suzuki slim vintage script badge'),italic=grille.getObjectByName('ScriptGrille__GrilleLettering');
 assert(brush&&loop&&italic);assert.equal(brush.visible,true);assert.equal(loop.visible,false);assert.equal(italic.visible,false);
 for(const mesh of [brush,loop]){const box=new Box3().setFromObject(mesh,true);assert(box.max.x-box.min.x>.35);assert(box.max.y-box.min.y>.04);}
 assert(brush.geometry.index.count>1000);assert(loop.children.length>5);
 configureScriptGrille(grille,'script-loop');assert.equal(brush.visible,false);assert.equal(loop.visible,true);assert.equal(italic.visible,false);
 assert.equal(grille.getObjectByName('ScriptGrille__GlossBlackGrille').visible,false);
 applyGrilleColours(grille,{badgeColour:'#d4aa53'},'#fff',body==='swb'?'3door':'5door');assert.equal(loop.children[0].material.color.getHexString(),'d4aa53');assert.equal(loop.children[0].material.metalness,.85);
 configureScriptGrille(grille,'script-modern');assert.equal(italic.visible,true);assert.equal(loop.visible,false);assert.equal(grille.getObjectByName('ScriptGrille__GlossBlackGrille').visible,true);
 configureScriptGrille(grille,'script');assert.equal(brush.visible,true);assert.equal(grille.children.filter(o=>o.name==='Suzuki heritage script badge').length,1);
});
