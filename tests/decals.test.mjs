import test from 'node:test';
import assert from 'node:assert/strict';
import { BoxGeometry, Mesh, MeshBasicMaterial, Group } from 'three';
import { projectBodyDecals, DECAL_STYLES } from '../src/decals.js';

test('every vinyl style projects onto both actual body surfaces and no-design stays empty',()=>{
  const previous=globalThis.document;
  const context=new Proxy({},{get:()=>()=>{}});
  globalThis.document={createElement:()=>({width:0,height:0,getContext:()=>context})};
  try{
    const body=new Mesh(new BoxGeometry(1.496,.70,3.6),new MeshBasicMaterial());
    body.position.y=.91;
    assert.equal(DECAL_STYLES.length,12);
    for(const id of DECAL_STYLES){
      const parent=new Group();
      assert.equal(projectBodyDecals([body],parent,id,'#c8af7e'),2,id);
      for(const child of parent.children){
        const positions=child.geometry.attributes.position;
        assert.ok(positions.count>0);
        for(let i=0;i<positions.count;i++)assert.ok(Math.abs(Math.abs(positions.getX(i))-.748)<.002,'Vinyl floats away from the body');
        assert.equal(child.material.depthWrite,false);
        assert.equal(child.material.polygonOffset,true);
        child.geometry.dispose();
      }
    }
    assert.equal(projectBodyDecals([body],new Group(),'none','#fff'),0);
    body.geometry.dispose();body.material.dispose();
  }finally{globalThis.document=previous;}
});
