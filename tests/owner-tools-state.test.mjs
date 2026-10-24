import test from'node:test';import assert from'node:assert/strict';import'../assets/owner-tools-state.js';
const T=globalThis.JimnyOwnerTools;
test('unknown load figures stay unknown, not zero; arithmetic detects exceeding entered limits',()=>{
 assert.equal(T.load().remaining,null);assert.equal(T.load().roofRemaining,null);assert.equal(T.load({gvm:1500,weighed:1450,extra:80}).remaining,-30);assert.equal(T.load({gvm:1500,weighed:1300,extra:100,roofLimit:30,roof:32}).roofRemaining,-2);assert.equal(T.load({gvm:1500,weighed:1300,extra:100}).remaining,100);
});
test('invalid, negative, infinite or excessive numeric inputs do not produce reassuring answers',()=>{
 for(const value of ['',null,undefined,'wrong',Infinity,-1,100000000])assert.equal(T.number(value),null);assert.equal(T.number('0'),0);assert.equal(T.load({gvm:'wrong',weighed:1200}).remaining,null);
});
test('quote subtotal never treats unpriced parts as a complete estimate',()=>{
 const items=[{id:'a'},{id:'b'}],partial=T.quotes(items,{a:'1000'},'50','10');assert.equal(partial.total,1060);assert.equal(partial.unpriced,1);assert(!partial.complete);assert(T.quotes(items,{a:1000,b:0},0,0).complete);assert(!T.quotes(items,{a:1000,b:100}).complete);
});
