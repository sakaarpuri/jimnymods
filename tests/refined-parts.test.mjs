import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {Box3,MeshStandardMaterial,Vector3,Raycaster} from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js';
import {SLIMLINE_TRAY,slimlineRack,fittedVisors,mouldedSpareCover,extractFactoryBadge} from '../src/refined-parts.js';

const material=new MeshStandardMaterial();
const materials={trim:material,darkmetal:material,metal:material,rubber:material,chrome:material};
test('reference-guided Slimline tray retains published footprint and eight mounting legs',()=>{
  for(const tall of [false,true]){
    const rack=slimlineRack(materials,tall);rack.updateMatrixWorld(true);
    assert.equal(rack.children.filter(c=>c.name==='Gutter mounting leg').length,8);
    const rails=rack.children.slice(0,6);const bounds=new Box3();for(const rail of rails)bounds.union(new Box3().setFromObject(rail));
    const size=bounds.getSize(new Vector3());
    assert.ok(Math.abs(size.x-SLIMLINE_TRAY.width)<.001);
    assert.ok(Math.abs(size.z-SLIMLINE_TRAY.length)<.001);
    assert.ok(Math.abs(bounds.min.y-(tall?1.855:1.805))<.001);
  }
});
test('visors follow all four door window frames without crossing the roof',()=>{
  const visors=fittedVisors(material);visors.updateMatrixWorld(true);assert.equal(visors.children.length,4);
  const bounds=new Box3().setFromObject(visors);
  assert.ok(bounds.max.y<1.65&&bounds.min.y>1.35);
  assert.ok(bounds.max.x>.71&&bounds.min.x<-.71);
  assert.ok(bounds.max.z<.51&&bounds.min.z>-1.20);
});
test('spare cover faces the rear viewer instead of disappearing through back-face culling',()=>{
  const cover=mouldedSpareCover(materials);cover.updateMatrixWorld(true);
  const ray=new Raycaster(new Vector3(.05,1.02,-3),new Vector3(0,0,1));
  const hits=ray.intersectObject(cover,true);
  assert.ok(hits.length,'Cover is invisible from behind');
  assert.equal(hits[0].object.name,'Spare cover shell');
  assert.ok(hits[0].point.z<-1.97&&hits[0].point.z>-2.0);
});
test('factory emblem survives quantized glTF decoding and is reused on the spare cover',async()=>{
  const binary=readFileSync(new URL('../assets/models/jimny-lwb-blender.glb',import.meta.url));
  const gltf=await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(binary.buffer.slice(binary.byteOffset,binary.byteOffset+binary.byteLength),'');
  const badge=extractFactoryBadge(gltf.scene.getObjectByName('OEMGrille'));badge.computeBoundingBox();
  assert.ok(badge.attributes.position.count>100,'Factory badge disappeared during normalized-coordinate conversion');
  const size=badge.boundingBox.getSize(new Vector3());
  assert.ok(size.x>.105&&size.x<.13&&size.y>.085&&size.y<.13,'Factory S fits inside the middle slot instead of dominating it');
  const cover=mouldedSpareCover(materials,badge);cover.updateMatrixWorld(true);
  const emblem=cover.getObjectByName('Spare cover Suzuki emblem');assert.ok(emblem);
  const b=new Box3().setFromObject(emblem);assert.ok(b.max.z<-1.98&&b.min.z>-2.0&&b.min.y>1.02&&b.max.y<1.13);
});
