// Download only the official CC0 asset source, verify API checksums, retain
// photographic UVs, and package an envelope-normalised browser-sized model.
import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import {createHash} from 'node:crypto';
import {execFile} from 'node:child_process';
import {promisify} from 'node:util';
import sharp from 'sharp';
import {NodeIO} from '@gltf-transform/core';
import {ALL_EXTENSIONS} from '@gltf-transform/extensions';
import {flatten,transformMesh,weld,simplify,meshopt,textureCompress} from '@gltf-transform/functions';
import {MeshoptEncoder,MeshoptDecoder,MeshoptSimplifier} from 'meshoptimizer';

const asset='boulder_01',base=`https://api.polyhaven.com/files/${asset}`,out='assets/trail-rocks',cache=path.join(os.tmpdir(),`thatsuvmod-${asset}`);
await fs.mkdir(cache,{recursive:true});await fs.mkdir(out,{recursive:true});
const api=await fetch(base).then(r=>{if(!r.ok)throw Error(`API ${r.status}`);return r.json();});
const entry=api.gltf['1k'].gltf,manifest=[];
async function download(file,record){
 const target=path.join(cache,file);await fs.mkdir(path.dirname(target),{recursive:true});
 let buffer=await fs.readFile(target).catch(()=>null);
 if(!buffer||createHash('md5').update(buffer).digest('hex')!==record.md5.toLowerCase()){
  const response=await fetch(record.url);if(!response.ok)throw Error(`Download ${response.status}: ${record.url}`);
  buffer=Buffer.from(await response.arrayBuffer());
  if(createHash('md5').update(buffer).digest('hex')!==record.md5.toLowerCase())throw Error(`Checksum mismatch: ${file}`);
  await fs.writeFile(target,buffer);
 }
 manifest.push({file,url:record.url,md5:record.md5,bytes:buffer.length});return target;
}
const source=await download(`${asset}.gltf`,entry);
for(const [file,record]of Object.entries(entry.include))await download(file,record);
await Promise.all([MeshoptEncoder.ready,MeshoptDecoder.ready,MeshoptSimplifier.ready]);
const io=new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({'meshopt.encoder':MeshoptEncoder,'meshopt.decoder':MeshoptDecoder});
// The source UV islands split many vertices: generic glTF simplification stalls
// above 50k faces. Blender welds mesh vertices while retaining per-loop UVs.
const decimated=path.join(cache,'boulder-decimated.glb');
await promisify(execFile)(process.env.BLENDER_PATH||'/Users/sakaarpuri/Applications/Blender.app/Contents/MacOS/Blender',
 ['--background','--python','scripts/decimate-scanned-rock.py','--',source,decimated],{maxBuffer:1024*1024});
const doc=await io.read(decimated);await doc.transform(flatten());
const nodes=doc.getRoot().listNodes().filter(n=>n.getMesh()),identity=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];
for(const node of nodes){transformMesh(node.getMesh(),node.getWorldMatrix());node.setMatrix(identity);}
let min=[Infinity,Infinity,Infinity],max=[-Infinity,-Infinity,-Infinity],element=[];
for(const mesh of doc.getRoot().listMeshes())for(const primitive of mesh.listPrimitives()){
 const a=primitive.getAttribute('POSITION');for(let i=0;i<a.getCount();i++){a.getElement(i,element);for(let k=0;k<3;k++){min[k]=Math.min(min[k],element[k]);max[k]=Math.max(max[k],element[k]);}}
}
const cx=(min[0]+max[0])/2,cz=(min[2]+max[2])/2,cy=(min[1]+max[1])/2;let radial=0;
for(const mesh of doc.getRoot().listMeshes())for(const primitive of mesh.listPrimitives()){
 const a=primitive.getAttribute('POSITION');for(let i=0;i<a.getCount();i++){a.getElement(i,element);radial=Math.max(radial,Math.hypot(element[0]-cx,element[2]-cz));}
}
const sy=1/(max[1]-min[1]),sx=1/radial,transform=[sx,0,0,0,0,sy,0,0,0,0,sx,0,-cx*sx,-cy*sy,-cz*sx,1];
for(const mesh of doc.getRoot().listMeshes())transformMesh(mesh,transform);
let originalTriangles=0;for(const mesh of doc.getRoot().listMeshes())for(const p of mesh.listPrimitives())originalTriangles+=(p.getIndices()?.getCount()||p.getAttribute('POSITION').getCount())/3;
await doc.transform(weld(),simplify({simplifier:MeshoptSimplifier,ratio:3000/originalTriangles,error:.012,lockBorder:false}),
 textureCompress({encoder:sharp,targetFormat:'webp',resize:[1024,1024],quality:85}),
 meshopt({encoder:MeshoptEncoder,level:'high',quantizePosition:14,quantizeNormal:10,quantizeTexcoord:12}));
for(const material of doc.getRoot().listMaterials()){material.setMetallicFactor(0);material.setDoubleSided(false);}
const target=path.join(out,'scanned-boulder.glb');await io.write(target,doc);
let triangles=0;for(const mesh of doc.getRoot().listMeshes())for(const p of mesh.listPrimitives())triangles+=(p.getIndices()?.getCount()||p.getAttribute('POSITION').getCount())/3;
const buffer=await fs.readFile(target),report={asset,author:'Rico Cilliers',source:`https://polyhaven.com/a/${asset}`,license:'CC0-1.0',licenseURL:'https://polyhaven.com/license',checked:'2026-10-21',api:base,downloaded:manifest,originalBounds:{min,max},normalizedEnvelope:{radius:1,minY:-.5,maxY:.5},sourceTriangles:123976,decimatedTriangles:originalTriangles,triangles,bytes:buffer.length,sha256:createHash('sha256').update(buffer).digest('hex')};
await fs.writeFile(path.join(out,'scanned-boulder.provenance.json'),JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify({target,triangles,bytes:buffer.length,originalBounds:report.originalBounds}));
