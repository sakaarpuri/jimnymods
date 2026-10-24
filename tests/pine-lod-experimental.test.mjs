import test from 'node:test';import assert from 'node:assert/strict';
import{readFile}from'node:fs/promises';import{createHash}from'node:crypto';
import{NodeIO}from'@gltf-transform/core';import{ALL_EXTENSIONS}from'@gltf-transform/extensions';import{MeshoptDecoder}from'meshoptimizer';
import sharp from'sharp';
test('experimental CC0 pine is pinned, browser-sized and explicitly not a finished live replacement',async()=>{
 const path='modeling/vendor/pine-tree-01/pine-tree-b-lod.glb',data=await readFile(path),report=JSON.parse(await readFile(path.replace('.glb','.provenance.json'),'utf8'));
 assert.equal(report.license,'CC0-1.0');assert.equal(report.review.status,'experimental-not-integrated');
 assert.equal(createHash('sha256').update(data).digest('hex'),report.sha256);assert(data.length<2000000);assert.equal(report.sourceTextures.length,7);
 await MeshoptDecoder.ready;const doc=await new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({'meshopt.decoder':MeshoptDecoder}).read(path);
 let triangles=0;for(const mesh of doc.getRoot().listMeshes())for(const p of mesh.listPrimitives()){
  triangles+=p.getIndices().getCount()/3;
  for(const semantic of ['POSITION','NORMAL','TEXCOORD_0'])assert([...p.getAttribute(semantic).getArray()].every(Number.isFinite));
  assert(p.getMaterial().getBaseColorTexture());assert(p.getMaterial().getNormalTexture());assert.equal(p.getMaterial().getMetallicFactor(),0);
  if(/needles|dry branches/.test(p.getMaterial().getName()))assert.equal(p.getMaterial().getAlphaMode(),'MASK');
 }
 assert.equal(triangles,report.triangles);assert(triangles<16000);assert.equal(doc.getRoot().listMeshes().length,4);
});
test('authored pine atlas preserves eight transparent, individually framed views and object normals',async()=>{
 const root='modeling/vendor/pine-tree-01/',report=JSON.parse(await readFile(root+'pine-tree-b-atlas.provenance.json','utf8'));
 assert.equal(report.status,'experimental-not-integrated');assert.equal(report.license,'CC0-1.0');assert.equal(report.views.length,8);
 for(const [file,hash]of[['pine-tree-b-atlas.webp',report.sha256],[report.normalAtlas.file,report.normalAtlas.sha256]]){
  const bytes=await readFile(root+file);assert.equal(createHash('sha256').update(bytes).digest('hex'),hash);assert(bytes.length<2000000);
  const {data,info}=await sharp(bytes).ensureAlpha().raw().toBuffer({resolveWithObject:true});assert.equal(info.width,2048);assert.equal(info.height,2048);
  for(let tile=0;tile<8;tile++){
   let opaque=0,border=0;const left=(tile%4)*512,top=Math.floor(tile/4)*1024;
   for(let y=0;y<1024;y++)for(let x=0;x<512;x++){
    const alpha=data[((top+y)*2048+left+x)*4+3];if(alpha>128)opaque++;
    if((x===0||x===511||y===0||y===1023)&&alpha>128)border++;
   }
   assert(opaque>30000&&opaque<300000,'Tree silhouette must occupy a meaningful but transparent tile.');assert.equal(border,0,'Original crown must not be cropped by atlas tile.');
  }
 }
});
