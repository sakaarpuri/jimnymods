import test from 'node:test';
import assert from 'node:assert/strict';
import {MeshStandardMaterial} from 'three';
import {createDriverDetailTextures,applyDriverMaterialDetails} from '../src/trail/driver-materials.js';

test('original driver surface patterns are deterministic, distinct, mipmapped and bounded',()=>{
  const patterns=[];
  for(const kind of ['skin','cotton','denim','hair']){
    const a=createDriverDetailTextures(kind),b=createDriverDetailTextures(kind);
    assert.deepEqual(a.map.image.data,b.map.image.data);
    assert(a.map.generateMipmaps);assert(a.bumpMap.generateMipmaps);
    assert.equal(a.map.image.width,256);assert.equal(a.map.image.data.length,256*256*4);
    const values=new Set(a.map.image.data);assert(values.size>5,`${kind} should not be a flat texture`);
    patterns.push(a.map.image.data);
    for(const t of [...Object.values(a),...Object.values(b)])t.dispose();
  }
  for(let i=1;i<patterns.length;i++)assert.notDeepEqual(patterns[i],patterns[0]);
});
test('both Blender material-name variants receive owned maps and release them on disposal',()=>{
  for(const name of ['DriverSkin','DriverCotton','DriverDenim','DriverHair.001']){
    const material=new MeshStandardMaterial();material.name=name;applyDriverMaterialDetails(material);
    assert(material.map?.isDataTexture);assert(material.bumpMap?.isDataTexture);
    assert(material.bumpScale>0&&material.bumpScale<=.0011);
    let disposed=0;material.map.addEventListener('dispose',()=>disposed++);material.bumpMap.addEventListener('dispose',()=>disposed++);
    material.dispose();assert.equal(disposed,2);
  }
});
test('unrelated eye and shoe materials remain unmodified',()=>{
  const material=new MeshStandardMaterial();material.name='DriverEye';applyDriverMaterialDetails(material);
  assert.equal(material.map,null);assert.equal(material.bumpMap,null);
});
