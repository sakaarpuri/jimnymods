import test from 'node:test';import assert from 'node:assert/strict';import vm from 'node:vm';import{readFileSync}from'node:fs';
const window={};vm.runInNewContext(readFileSync(new URL('../assets/garage-controls.js',import.meta.url),'utf8'),{window});const C=window.JimnyGarageControls;
test('colour input accepts six-digit hex and rejects invalid or injected values',()=>{
 assert.equal(C.hex('#ABCDEF'),'#abcdef');assert.equal(C.hex('ABCDEF'),'#abcdef');
 for(const value of ['#fff','red','#12345g','<script>','#1234567',null,undefined])assert.equal(C.hex(value),null);
});
test('HSV conversion preserves sampled RGB colours, including neutral and boundary colours',()=>{
 const samples=['#000000','#ffffff','#ff0000','#00ff00','#0000ff','#777777','#d9b744','#4b7d6a'];
 for(let r=0;r<=255;r+=51)for(let g=0;g<=255;g+=51)for(let b=0;b<=255;b+=51)samples.push('#'+[r,g,b].map(v=>v.toString(16).padStart(2,'0')).join(''));
 for(const value of samples)assert.equal(C.fromHSV(C.toHSV(value)),value,value);
});
test('saved build artwork keeps untrusted input out of SVG attributes',()=>{
 const svg=C.carIcon('red" onload="bad()','3door');assert(!svg.includes('onload'));assert(svg.includes('#aab3ad'));
 assert.equal(C.esc('<b>Jimny & dune</b>'),'&lt;b&gt;Jimny &amp; dune&lt;/b&gt;');
});
