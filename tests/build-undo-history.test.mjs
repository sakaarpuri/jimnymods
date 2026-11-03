import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';

test('build undo restores multiple distinct snapshots and skips no-op changes',()=>{
 const html=readFileSync(new URL('../index.html',import.meta.url),'utf8');
 const functions=html.slice(html.indexOf('function rememberUndo()'),html.indexOf('function showToast('));
 const context=vm.createContext({undoHistory:[],value:'initial',document:{getElementById:()=>({disabled:false})},currentPayload(){return {colour:context.value};},loadPayload(v){context.value=v.colour;},refreshGarage(){},showToast(){}});
 vm.runInContext(functions,context);
 for(const colour of ['red','green','blue']){context.rememberUndo();context.value=colour;}
 context.rememberUndo(); // rejected or no-op edit
 for(const colour of ['green','red','initial']){context.undoLastChange();assert.equal(context.value,colour);}
 assert.equal(context.undoHistory.length,0);
});
