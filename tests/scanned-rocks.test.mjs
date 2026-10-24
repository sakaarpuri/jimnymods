import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {NodeIO} from '@gltf-transform/core';
import {ALL_EXTENSIONS} from '@gltf-transform/extensions';
import {dequantize} from '@gltf-transform/functions';
import {MeshoptDecoder} from 'meshoptimizer';
import {BufferGeometry,Float32BufferAttribute,Matrix4} from 'three';
import {normalizeScannedGeometry,preloadRockAssets,createScannedRock,disposeRockAssets,rockAssetsReady} from '../src/trail/scanned-rocks.js';

test('scanned rock retains real source maps, budget, provenance and exact collision envelope',async()=>{
 await MeshoptDecoder.ready;
 const path='assets/trail-rocks/scanned-boulder.glb',bytes=await fs.readFile(path),report=JSON.parse(await fs.readFile('assets/trail-rocks/scanned-boulder.provenance.json','utf8'));
 assert.ok(bytes.length<900_000);assert.equal(report.license,'CC0-1.0');assert.equal(report.asset,'boulder_01');
 assert.equal(createHash('sha256').update(bytes).digest('hex'),report.sha256);
 assert.ok(report.downloaded.every(f=>f.url.startsWith('https://dl.polyhaven.org/')&&f.md5.length===32));
 const io=new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({'meshopt.decoder':MeshoptDecoder});
 const document=await io.read(path);await document.transform(dequantize());
 const nodes=document.getRoot().listNodes().filter(n=>n.getMesh());assert.equal(nodes.length,1);
 const primitive=nodes[0].getMesh().listPrimitives()[0],material=primitive.getMaterial();
 assert.ok(material.getBaseColorTexture());assert.ok(material.getNormalTexture());assert.ok(material.getMetallicRoughnessTexture());
 assert.ok(primitive.getAttribute('TEXCOORD_0'));assert.ok(primitive.getIndices().getCount()/3<=3200);
 // Weld only positional keys for topology inspection: photographic UV seams
 // duplicate vertices but must not introduce holes or an open cliff backside.
 const positions=primitive.getAttribute('POSITION'),keys=[],value=[],edges=new Map(),indices=primitive.getIndices().getArray();
 for(let i=0;i<positions.getCount();i++){positions.getElement(i,value);keys.push(value.join(','));}
 for(let i=0;i<indices.length;i+=3)for(let j=0;j<3;j++){
  const a=keys[indices[i+j]],b=keys[indices[i+(j+1)%3]],key=a<b?`${a}|${b}`:`${b}|${a}`;
  edges.set(key,(edges.get(key)||0)+1);
 }
 assert.ok([...edges.values()].every(count=>count===2),'Obstacle scan must be a closed manifold, not an open sheet');
 const g=new BufferGeometry();g.setAttribute('position',new Float32BufferAttribute(primitive.getAttribute('POSITION').getArray(),3));
 g.setAttribute('normal',new Float32BufferAttribute(primitive.getAttribute('NORMAL').getArray(),3));g.applyMatrix4(new Matrix4().fromArray(nodes[0].getWorldMatrix()));normalizeScannedGeometry(g);
 assert.ok(Math.abs(g.boundingBox.min.y+.5)<1e-6);assert.ok(Math.abs(g.boundingBox.max.y-.5)<1e-6);
 for(let i=0;i<g.attributes.position.count;i++){
  const p=g.attributes.position,n=g.attributes.normal;assert.ok(Math.hypot(p.getX(i),p.getZ(i))<1.000001);
  assert.ok(Number.isFinite(n.getX(i)+n.getY(i)+n.getZ(i)));
 }
 const clone=g.clone();let originalDisposed=0;g.addEventListener('dispose',()=>originalDisposed++);clone.dispose();assert.equal(originalDisposed,0);g.dispose();
});

test('optional scanned assets fail safely without a browser and cache disposal is repeatable',async()=>{
 assert.equal(await preloadRockAssets(),false);assert.equal(rockAssetsReady(),false);assert.equal(createScannedRock(1),null);
 disposeRockAssets();disposeRockAssets();assert.equal(rockAssetsReady(),false);
});
