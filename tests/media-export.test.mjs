import test from 'node:test';
import assert from 'node:assert/strict';
import {recordCanvas} from '../src/media-export.js';

function recordingBrowser(){
  const originals=new Map(),tracks=[];let originalStopped=false;
  const install=(name,value)=>{originals.set(name,Object.getOwnPropertyDescriptor(globalThis,name));Object.defineProperty(globalThis,name,{configurable:true,writable:true,value});};
  const video={stop(){this.stopped=true;}};tracks.push(video);
  const stream={addTrack(t){tracks.push(t);},getTracks(){return tracks;}};
  const canvas={captureStream(){return stream;}};
  const source={stop(){originalStopped=true;},clone(){return {kind:'audio',stop(){this.stopped=true;}};}};
  class Recorder{
    static isTypeSupported(){return true;}
    constructor(s,options){this.mimeType=options.mimeType;this.state='inactive';}
    start(){this.state='recording';}
    stop(){this.state='inactive';this.ondataavailable?.({data:new Blob(['x'.repeat(1500)])});this.onstop?.();}
  }
  let time=0;
  install('HTMLCanvasElement',class {captureStream(){}});install('MediaRecorder',Recorder);
  install('document',new EventTarget());install('requestAnimationFrame',fn=>setTimeout(()=>fn(time+=34),0));install('cancelAnimationFrame',clearTimeout);
  return {canvas,tracks,audioStream:{getAudioTracks:()=>[source]},originalStopped:()=>originalStopped,restore(){for(const [name,descriptor] of originals){if(descriptor)Object.defineProperty(globalThis,name,descriptor);else delete globalThis[name];}}};
}

test('recap exports clone audio and stop only recording-owned tracks',async()=>{
  const browser=recordingBrowser();try{
    const result=await recordCanvas({...browser,duration:.1,draw(){}});
    assert.ok(result.blob.size>=1500);assert.equal(browser.tracks.length,2);
    assert.ok(browser.tracks.every(t=>t.stopped));assert.equal(browser.originalStopped(),false);
  }finally{browser.restore();}
});
test('cancelling a recap stops video and cloned audio without interrupting the game',async()=>{
  const browser=recordingBrowser(),controller=new AbortController();try{
    const job=recordCanvas({...browser,duration:10,draw(){},signal:controller.signal});controller.abort();
    await assert.rejects(job,{name:'AbortError'});assert.ok(browser.tracks.every(t=>t.stopped));assert.equal(browser.originalStopped(),false);
  }finally{browser.restore();}
});
