import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {readFileSync} from 'node:fs';
const html=readFileSync(new URL('../index.html',import.meta.url),'utf8');
const compatibility=html.slice(html.indexOf('function catalogueBodyStatus('),html.indexOf('function catalogueScopeMatches('));
const source=compatibility+html.slice(html.indexOf('const EXCLUSIVE_PARTS='),html.indexOf('document.addEventListener("change",e=>{const cb='));
test('carrier tray requires explicit selection of its mount; removing mount removes dependent tray',()=>{
  const MODS=[{id:'mount',visual:'skinnyjim_backbone'},{id:'tray',visual:'skinnyjim_jerry_tray',requiresVisual:['skinnyjim_backbone']}],state={},messages=[];
  const context=vm.createContext({MODS,modById:Object.fromEntries(MODS.map(m=>[m.id,m])),state,bodyStyle:'5door',designState:{},catalogueBodyStatus:()=> 'compatible',document:{querySelectorAll:()=>[]},showToast:(message,label,action)=>messages.push({message,label,action}),rememberUndo(){},update(){}});
  vm.runInContext(source,context);
  assert.equal(vm.runInContext("setPartSelection('tray',true)",context),false);
  assert(!state.tray);assert(!state.mount);
  assert.equal(messages.at(-1).label,'Fit both');messages.at(-1).action();
  assert.equal(state.mount,true);assert.equal(state.tray,true);
  vm.runInContext("setPartSelection('mount',false)",context);
  assert.equal(state.mount,false);assert.equal(state.tray,false);
});
test('Nomade compact rack excludes other rack geometry without removing unrelated parts',()=>{
  const MODS=[{id:'rack'},{id:'market_rack',visual:'suzuki_nomade_flatrack'},{id:'tires'}],state={rack:true,tires:true};
  const context=vm.createContext({MODS,modById:Object.fromEntries(MODS.map(m=>[m.id,m])),state,bodyStyle:'5door',designState:{},document:{querySelectorAll:()=>[]},showToast(){}});
  vm.runInContext(source,context);vm.runInContext("setPartSelection('market_rack',true)",context);
  assert.equal(state.rack,false);assert.equal(state.market_rack,true);assert.equal(state.tires,true);
});
test('body-specific touring selections are rejected before removing existing cargo parts',()=>{
 const MODS=[{id:'touring',bodyStyles:['5door']},{id:'drawer'}];
 for(const bodyStyle of ['3door','5door']){
  const state={drawer:true},messages=[];
  const context=vm.createContext({MODS,modById:Object.fromEntries(MODS.map(m=>[m.id,m])),state,bodyStyle,designState:{},document:{querySelectorAll:()=>[]},showToast:message=>messages.push(message)});
  vm.runInContext(source,context);const result=vm.runInContext("setPartSelection('touring',true)",context);
  if(bodyStyle==='3door'){assert.equal(result,false);assert.equal(state.drawer,true);assert(!state.touring);assert.equal(messages.length,1);}
  else{assert.equal(state.touring,true);assert.equal(state.drawer,false);}
 }
});
