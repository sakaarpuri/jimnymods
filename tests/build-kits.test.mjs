import test from 'node:test';
import assert from 'node:assert/strict';
import '../assets/build-kits.js';
const sanitize=data=>({body:data?.body==='3door'?'3door':'5door',parts:[...new Set((data?.parts||[]).filter(p=>['rack','tires','bull'].includes(p)))],colour:data?.colour||'#586a45',design:data?.design||{},name:data?.name||'My Jimny'});
function setup(){const values=new Map(),storage={getItem:key=>values.get(key)??null,setItem:(key,value)=>values.set(key,value)};return {values,storage,store:JIMNY_BUILD_KITS.createStore(()=>storage,sanitize)};}
test('full builds retain chosen parts, paint and design; kits append transactionally',()=>{
 const {store}=setup(),build=store.save({kind:'build',name:'Western Ghats weekend',data:{parts:['rack','tires'],colour:'#123456',design:{decal:'topo',tyreType:'mudterrain'}}});
 assert(build.ok);assert.equal(store.read().entries[0].data.colour,'#123456');assert.equal(store.read().entries[0].data.design.tyreType,'mudterrain');
 const kit=store.save({kind:'kit',name:'Camping hardware',data:{body:'5door',parts:['rack']}});assert(kit.ok);
 const append=store.save({kind:'kit',name:'Ignored',id:kit.entry.id,append:true,data:{body:'5door',parts:['rack','tires']}});assert(append.ok);assert.deepEqual(append.entry.data.parts,['rack','tires']);assert.equal(append.entry.name,'Camping hardware');
 assert(!store.save({kind:'kit',id:kit.entry.id,name:'Mismatch',append:true,data:{body:'3door',parts:['bull']}}).ok);
 assert(store.remove(kit.entry.id).ok);assert.equal(store.read().entries.length,1);
});
test('empty kits and invalid names cannot be saved, while stock full builds can',()=>{
 const {store}=setup();assert(!store.save({kind:'kit',name:'Empty',data:{parts:[]}}).ok);assert(!store.save({kind:'build',name:'   ',data:{parts:[]}}).ok);
 assert(store.save({kind:'build',name:'Stock paint study',data:{parts:[]}}).ok);
});
test('appending a kit keeps existing colours and retains newly selected part coatings',()=>{
 const {store}=setup(),first=store.save({kind:'kit',name:'Personal hardware',data:{body:'5door',parts:['rack'],design:{partColours:{rack:'#123456'},partFinishes:{rack:'matte'}}}});
 const next=store.save({kind:'kit',id:first.entry.id,name:'Personal hardware',append:true,data:{body:'5door',parts:['bull'],design:{partColours:{bull:'#aabbcc'},partFinishes:{bull:'gloss'}}}});
 assert(next.ok);assert.deepEqual(next.entry.data.design.partColours,{rack:'#123456',bull:'#aabbcc'});assert.deepEqual(next.entry.data.design.partFinishes,{rack:'matte',bull:'gloss'});
});
test('storage failures never report success or replace the saved library',()=>{
 const {store,storage}=setup();const saved=store.save({kind:'kit',name:'Before',data:{parts:['rack']}});storage.setItem=()=>{throw new Error('QuotaExceededError');};
 assert(!store.save({kind:'build',name:'After',data:{parts:['bull']}}).ok);assert(!store.remove(saved.entry.id).ok);assert.equal(store.read().entries[0].name,'Before');
 assert(!JIMNY_BUILD_KITS.createStore(()=>{throw new Error('Blocked');},sanitize).read().ok);
});
test('corrupted libraries are not silently overwritten; unsafe saved entries are filtered',()=>{
 const {values,store}=setup();values.set(JIMNY_BUILD_KITS.key,'broken');assert(!store.read().ok);assert(!store.save({kind:'build',name:'Attempt',data:{}}).ok);assert.equal(values.get(JIMNY_BUILD_KITS.key),'broken');
 values.set(JIMNY_BUILD_KITS.key,JSON.stringify([null,{id:'safe',kind:'kit',name:'<Kit>',data:{parts:['rack','unknown','rack']}}]));const read=store.read();assert(read.ok);assert.equal(read.entries.length,1);assert.equal(read.entries[0].name,'Kit');assert.deepEqual(read.entries[0].data.parts,['rack']);
});
