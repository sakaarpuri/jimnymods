// Original procedural game sound. Not a recording or measured acoustic model of a Jimny.
// No microphone or network. Audio starts only inside a player gesture.
const clamp=(v,a=0,b=1)=>Math.max(a,Math.min(b,v));
const aborted=()=>new DOMException('Coaching playback was cancelled.','AbortError');
export const DEFAULT_MIX={vehicle:.65,environment:.35,coaching:.85,ui:.45,master:.7};
export function audioParameters(state,{surface='loose',interior=false,coaching=false}={}){
  const speed=Math.abs(state.speed||0),load=clamp(state.throttle||0),rpm=clamp(state.rpm||850,600,6500);
  const contact=(state.wheelLoads||state.loads||[1,1,1,1]).filter(x=>x>.08).length/4;
  return {firing:rpm/30,load,engine:(.075+load*.16+rpm/75000)*(interior?.76:1),
    tyre:clamp(speed/15)*contact*(surface==='tarmac'?.018:.055),
    scrub:clamp(state.slip||0)*contact*.12,wind:clamp(speed/24)*.055,
    cutoff:interior?950:4200,duck:coaching?.55:1,
    surfaceHz:surface==='tarmac'?1200:surface==='sand'||surface==='soft-sand'?850:2600};
}
export class TrailAudio{
  constructor({Context=globalThis.AudioContext||globalThis.webkitAudioContext,mix={},fetcher=globalThis.fetch}={}){
    this.Context=Context;this.fetcher=fetcher;this.mix=Object.fromEntries(Object.entries(DEFAULT_MIX).map(([key,value])=>[key,typeof mix?.[key]==='number'&&Number.isFinite(mix[key])?clamp(mix[key]):value]));this.context=null;this.enabled=false;this.lastGear=null;this.lastImpact=0;this.recording=false;this.recordingEffects=true;this.recordingGeneration=0;this.disposed=false;this.generation=0;this.coachingBuffers=new Map();this.coachingSources=new Set();this.coachingPlaybacks=new Set();this.pendingCoaching=new Set();
  }
  async enable(on=true){
    if(this.disposed)return false;
    if(on&&!this.context)this.init();this.enabled=on;
    this.syncBuses();if(this.context){if(on)await this.context.resume();else if(!this.recording&&!this.coachingSources.size)await this.context.suspend();}
    return on;
  }
  init(){
    if(this.disposed)throw aborted();
    if(!this.Context)throw new Error('Audio is unavailable in this browser.');
    const c=this.context=new this.Context();
    this.master=c.createGain();this.master.gain.value=this.mix.master;
    this.limiter=c.createDynamicsCompressor();Object.assign(this.limiter.threshold,{value:-12});this.limiter.ratio.value=5;
    this.master.connect(this.limiter);this.monitor=c.createGain();this.limiter.connect(this.monitor);this.monitor.connect(c.destination);
    if(c.createAnalyser){this.analyser=c.createAnalyser();this.analyser.fftSize=512;this.meter=new Float32Array(512);this.monitor.connect(this.analyser);}
    this.destination=c.createMediaStreamDestination();this.limiter.connect(this.destination);
    this.vehicle=c.createGain();this.ambience=c.createGain();this.coach=c.createGain();this.ui=c.createGain();
    for(const [node,key] of [[this.vehicle,'vehicle'],[this.ambience,'environment'],[this.coach,'coaching'],[this.ui,'ui']]){node.gain.value=this.mix[key];node.connect(this.master);}
    this.engineFilter=c.createBiquadFilter();this.engineFilter.type='lowpass';this.engineFilter.frequency.value=4200;this.engineFilter.connect(this.vehicle);
    // Keep a restrained fundamental, but place audible combustion harmonics
    // above laptop-speaker roll-off. This is not an OEM exhaust recording.
    this.harmonics=[1,2,3,4,6].map((multiple,i)=>{const osc=c.createOscillator(),gain=c.createGain();osc.type=i===0?'sine':'triangle';gain.gain.value=0;osc.connect(gain);gain.connect(this.engineFilter);osc.start();return {osc,gain,multiple,weight:[.38,.6,.4,.3,.16][i]};});
    const noise=c.createBuffer(1,c.sampleRate*3,c.sampleRate),data=noise.getChannelData(0);let seed=123456,brown=0;
    for(let i=0;i<data.length;i++){seed=(1664525*seed+1013904223)>>>0;const white=seed/4294967296*2-1;brown=(brown+.025*white)/1.025;data[i]=white*.65+brown*3;}
    const noiseLayer=(parent,type,hz)=>{const source=c.createBufferSource(),filter=c.createBiquadFilter(),gain=c.createGain();source.buffer=noise;source.loop=true;filter.type=type;filter.frequency.value=hz;gain.gain.value=0;source.connect(filter);filter.connect(gain);gain.connect(parent);source.start();return {source,filter,gain};};
    this.tyres=noiseLayer(this.vehicle,'lowpass',2000);this.scrub=noiseLayer(this.vehicle,'bandpass',1400);this.wind=noiseLayer(this.ambience,'lowpass',350);this.air=noiseLayer(this.ambience,'lowpass',600);
    this.air.gain.gain.value=.012;
    this.syncBuses();
  }
  syncBuses(){
    if(!this.context)return;
    const effects=this.recording?this.recordingEffects:this.enabled;
    for(const [node,key]of [[this.vehicle,'vehicle'],[this.ambience,'environment'],[this.ui,'ui'],[this.coach,'coaching']]){
      const value=this.mix[key]*(key==='coaching'||effects?1:0);
      // A narration-only recording must not capture a tail from the live engine.
      if(this.recording){node.gain.cancelScheduledValues(this.context.currentTime);node.gain.setValueAtTime(value,this.context.currentTime);}
      else node.gain.setTargetAtTime(value,this.context.currentTime,.015);
    }
    this.monitor.gain.value=this.recording&&!this.enabled?0:1;
  }
  setMix(key,value){if(!(key in DEFAULT_MIX))return;this.mix[key]=clamp(Number(value)||0);if(!this.context)return;if(key==='master')this.master.gain.setTargetAtTime(this.mix.master,this.context.currentTime,.04);else this.syncBuses();}
  async loadCoaching(cue,{signal,fetcher=this.fetcher}={}){
    if(this.disposed||signal?.aborted)throw aborted();
    if(!cue?.src)throw new Error('Coaching clip has no local audio source.');
    if(!this.context)this.init();
    if(this.coachingBuffers.has(cue.src))return this.coachingBuffers.get(cue.src);
    const context=this.context,generation=this.generation,controller=new AbortController(),cancel=()=>controller.abort();
    signal?.addEventListener('abort',cancel,{once:true});this.pendingCoaching.add(controller);
    const assertCurrent=()=>{if(this.disposed||generation!==this.generation||controller.signal.aborted||signal?.aborted||context!==this.context)throw aborted();};
    try{
      assertCurrent();const response=await fetcher(cue.src,{signal:controller.signal});assertCurrent();
      if(!response.ok)throw new Error('Coaching clip could not load.');
      const data=await response.arrayBuffer();assertCurrent();
      const buffer=await context.decodeAudioData(data);assertCurrent();
      this.coachingBuffers.set(cue.src,buffer);return buffer;
    }finally{signal?.removeEventListener('abort',cancel);this.pendingCoaching.delete(controller);}
  }
  async playCoaching(cue,{signal,onStart=()=>{},onEnd=()=>{},onError=()=>{},offset=0}={}){
    let source,ended=false;const generation=this.generation,controller=new AbortController();
    const current=()=>!ended&&!this.disposed&&generation===this.generation&&!signal?.aborted;
    const stop=()=>{if(ended)return;ended=true;controller.abort();signal?.removeEventListener('abort',stop);this.coachingPlaybacks.delete(stop);if(source){source.onended=null;try{source.stop();}catch{}source.disconnect();this.coachingSources.delete(source);}};
    this.coachingPlaybacks.add(stop);signal?.addEventListener('abort',stop,{once:true});
    try{
      if(!current()){stop();return {stop};}
      if(!this.context)this.init();const context=this.context;await context.resume();
      if(!current()){stop();return {stop};}
      const buffer=await this.loadCoaching(cue,{signal:controller.signal});
      if(!current()){stop();return {stop};}
      // Sound-effects mute may have suspended the context during the fetch.
      await context.resume();if(!current()){stop();return {stop};}
      source=context.createBufferSource();source.buffer=buffer;source.connect(this.coach);this.coachingSources.add(source);
      source.onended=()=>{if(!current())return;stop();onEnd();};
      if(offset>=buffer.duration){stop();onEnd();return {stop};}
      source.start(0,Math.max(0,offset));onStart();return {stop};
    }catch(error){const notify=current()&&error?.name!=='AbortError';stop();if(notify)onError(error);return {stop};}
  }
  update(state,options={}){
    if(!this.context)return;const c=this.context,t=c.currentTime,p=audioParameters(state,options);
    const set=(a,v)=>a.setTargetAtTime(v,t,.045);
    for(const h of this.harmonics){set(h.osc.frequency,p.firing*h.multiple);set(h.gain.gain,p.engine*h.weight*p.duck);}
    set(this.engineFilter.frequency,p.cutoff);set(this.tyres.gain.gain,p.tyre*p.duck);set(this.tyres.filter.frequency,p.surfaceHz);set(this.scrub.gain.gain,p.scrub*p.duck);set(this.wind.gain.gain,p.wind*p.duck);
    if(this.lastGear!==null&&this.lastGear!==state.gear+state.autoGear)this.cue('shift');this.lastGear=state.gear+state.autoGear;
    if((state.collisionImpulse||0)>100&&t-this.lastImpact>.4){this.cue('impact',clamp(state.collisionImpulse/1500,.1,.7));this.lastImpact=t;}
  }
  cue(kind,volume=.3){if(!this.context||!(this.recording?this.recordingEffects:this.enabled))return;const c=this.context,osc=c.createOscillator(),gain=c.createGain(),t=c.currentTime;
    osc.type=kind==='impact'?'triangle':'sine';osc.frequency.setValueAtTime(kind==='impact'?74:kind==='shift'?145:660,t);osc.frequency.exponentialRampToValueAtTime(kind==='impact'?24:kind==='shift'?70:440,t+.12);
    gain.gain.setValueAtTime(volume*.07,t);gain.gain.exponentialRampToValueAtTime(.0001,t+.18);osc.connect(gain);gain.connect(kind==='impact'?this.vehicle:this.ui);osc.start(t);osc.stop(t+.2);osc.onended=()=>{osc.disconnect();gain.disconnect();};
  }
  pause(){if(!this.recording)this.context?.suspend();}
  resume(){if(this.enabled)this.context?.resume();}
  snapshot(){let rms=0;if(this.analyser&&this.context?.state==='running'){this.analyser.getFloatTimeDomainData(this.meter);rms=Math.sqrt(this.meter.reduce((sum,v)=>sum+v*v,0)/this.meter.length);}return{enabled:this.enabled,state:this.context?.state||'not-started',mix:{...this.mix},rms};}
  async beginRecording({effects=true}={}){if(this.disposed)throw aborted();if(!this.context)this.init();const context=this.context,generation=++this.recordingGeneration;this.recording=true;this.recordingEffects=!!effects;this.syncBuses();await context.resume();if(this.disposed||context!==this.context||!this.recording||generation!==this.recordingGeneration)throw aborted();return this.destination.stream;}
  endRecording(){if(!this.context||!this.recording)return;this.recordingGeneration++;for(const stop of [...this.coachingPlaybacks])stop();this.recording=false;this.recordingEffects=true;this.syncBuses();this.context.suspend();}
  dispose(){if(this.disposed)return;this.disposed=true;this.generation++;for(const stop of [...this.coachingPlaybacks])stop();for(const controller of this.pendingCoaching)controller.abort();this.pendingCoaching.clear();this.coachingSources.clear();this.coachingBuffers.clear();this.context?.close();this.context=null;this.enabled=false;this.recording=false;}
}
