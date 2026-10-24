import test from 'node:test';
import assert from 'node:assert/strict';
import {Group,Mesh,BoxGeometry,MeshStandardMaterial} from 'three';
import {applySeatCoverPalette} from '../src/trail/cabin-materials.js';
test('seat-cover colours use existing contoured inserts and restore stock without new geometry',()=>{
 const root=new Group();
 const insert=new Mesh(new BoxGeometry(),new MeshStandardMaterial({color:'#535c62'}));insert.material.name='CabinSeatInsert';
 const dashboard=new Mesh(new BoxGeometry(),new MeshStandardMaterial({color:'#34393c'}));dashboard.material.name='CabinDashboard';root.add(insert,dashboard);
 const geometry=insert.geometry;applySeatCoverPalette(root,true,'#59624d');
 assert.equal(insert.material.color.getHexString(),'59624d');assert.equal(dashboard.material.color.getHexString(),'34393c');assert.equal(root.children.length,2);assert.equal(insert.geometry,geometry);
 applySeatCoverPalette(root,false);assert.equal(insert.material.color.getHexString(),'535c62');
 for(const child of root.children){child.geometry.dispose();child.material.dispose();}
});
