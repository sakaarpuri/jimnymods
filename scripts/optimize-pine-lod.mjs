import {NodeIO} from '@gltf-transform/core';
import {ALL_EXTENSIONS} from '@gltf-transform/extensions';
import {weld,prune,meshopt,textureCompress} from '@gltf-transform/functions';
import {MeshoptEncoder,MeshoptDecoder,MeshoptSimplifier} from 'meshoptimizer';
import sharp from 'sharp';
import {mkdir,readFile,writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
await Promise.all([MeshoptEncoder.ready,MeshoptDecoder.ready,MeshoptSimplifier.ready]);
const io=new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({'meshopt.encoder':MeshoptEncoder,'meshopt.decoder':MeshoptDecoder});
const near=process.argv.includes('--near');
const doc=await io.read(near?'/tmp/polyhaven-pine-atlas/pine-tree-b-near.glb':'/tmp/polyhaven-pine-prepared/pine-tree-b-web.glb');await doc.transform(weld());
for(const mesh of doc.getRoot().listMeshes())for(const p of mesh.listPrimitives())if(p.getMaterial().getName()==='Pine bark'){
 const [indices,error]=MeshoptSimplifier.simplify(new Uint32Array(p.getIndices().getArray()),p.getAttribute('POSITION').getArray(),3,3500*3,.004);
 p.getIndices().setArray(indices);console.log('Bounded wood simplification',indices.length/3,error);
}
for(const m of doc.getRoot().listMaterials()){
 m.setMetallicFactor(0).setRoughnessFactor(.94).setDoubleSided(true);
 const foliage=m.getName()==='Pine needles'||m.getName()==='Pine dry branches',family=foliage?'twig':m.getName()==='Pine bark'?'bark':'trunk_b';
 // Blender's merged diffuse/alpha export converted this16-bit source's RGB
 // to linear while labeling it sRGB. Repack the original photographed sRGB
 // pixels directly, avoiding a second gamma decode and nearly-black leaves.
 let colour=sharp('/tmp/polyhaven-pine-source/textures/pine_tree_01_'+family+'_diff_1k.png').removeAlpha();
 if(foliage){const alpha=await sharp('/tmp/polyhaven-pine-source/textures/pine_tree_01_twig_alpha_1k.png').extractChannel(0).toBuffer();colour=colour.joinChannel(alpha);m.setAlphaMode('MASK').setAlphaCutoff(.35);}
 m.getBaseColorTexture().setImage(new Uint8Array(await colour.png().toBuffer())).setMimeType('image/png');
 m.getNormalTexture().setImage(new Uint8Array(await readFile('/tmp/polyhaven-pine-source/textures/pine_tree_01_'+family+'_nor_gl_1k.png'))).setMimeType('image/png');
}
await doc.transform(prune(),textureCompress({encoder:sharp,targetFormat:'webp',resize:[1024,1024],quality:88}),meshopt({encoder:MeshoptEncoder,level:'high',quantizePosition:14,quantizeNormal:10,quantizeTexcoord:14}));
const out='modeling/vendor/pine-tree-01';await mkdir(out,{recursive:true});const basename=near?'pine-tree-b-near':'pine-tree-b-lod',target=out+'/'+basename+'.glb';await io.write(target,doc);
const bytes=await readFile(target),source=JSON.parse(await readFile('/tmp/polyhaven-pine-source/source.json','utf8'));
const parts=doc.getRoot().listMeshes().flatMap(m=>m.listPrimitives().map(p=>({material:p.getMaterial().getName(),triangles:p.getIndices().getCount()/3})));
const report={asset:'pine_tree_01',variant:'pine_tree_01_b_LOD2',authors:['Rico Cilliers','Rob Tuytel'],license:'CC0-1.0',source:'https://polyhaven.com/a/pine_tree_01',licenseSource:'https://polyhaven.com/license',sourceMaster:{url:source.url,md5:source.md5,bytes:source.size},processing:'Offline Blender material-aware reduction plus error-bounded meshoptimizer wood simplification; photographic maps; alpha-tested foliage. Experimental: not wired into renderer.',parts,triangles:parts.reduce((n,p)=>n+p.triangles,0),bytes:bytes.length,sha256:createHash('sha256').update(bytes).digest('hex')};
report.sourceTextures=Object.entries(source.include).filter(([name])=>/pine_tree_01_(bark|trunk_b|twig)_(diff|nor_gl|alpha)_1k\.png$/.test(name)).map(([file,record])=>({file,...record}));
report.review={status:'experimental-not-integrated',evidence:['modeling/verification/pine-authored-lod-front.png','modeling/verification/pine-authored-lod-side.png'],limitations:['Low-detail needle reduction remains angular at close range.','One irregular mature-pine variant, not a lush conical fir.','Use near-only instanced candidates after in-scene review, not wholesale forest replacement.']};
if(near){report.review.evidence=['modeling/verification/pine-authored-near-front.png','modeling/verification/pine-authored-near-side.png'];report.review.limitations[0]='Even 40k triangles retains visibly angular needle clusters: rejected for close runtime use.';}
await writeFile(out+'/'+basename+'.provenance.json',JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify(report));
