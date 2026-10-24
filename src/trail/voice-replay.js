// Game time, not wall-clock time: pauses must not lengthen spoken replay events.
export function voiceReplaySegments(events,start,end){
  if(!Number.isFinite(start)||!Number.isFinite(end)||end<=start)return [];
  return events.filter(e=>Number.isFinite(e.time)&&Number.isFinite(e.end)&&e.end>e.time&&e.time<end&&e.end>start).map(e=>({
    id:e.id,start:Math.max(start,e.time)-start,end:Math.min(end,e.end)-start,offset:Math.max(0,start-e.time)
  }));
}

// The frame clock owns narration playback too. Cancelling a clip, changing a
// camera edit or crossing a recorded interruption cancels pending audio loads.
export class ReplayCoaching{
  constructor(segments,play){this.segments=segments;this.play=play;this.active=null;this.controller=null;this.stopped=false;}
  tick(time){
    if(this.stopped)return;
    const next=this.segments.find(s=>time>=s.start&&time<s.end)||null;
    if(next===this.active)return;
    this.controller?.abort();this.controller=null;this.active=next;
    if(next){this.controller=new AbortController();this.play(next.id,{signal:this.controller.signal,offset:next.offset+Math.max(0,time-next.start)});}
  }
  stop(){this.stopped=true;this.controller?.abort();this.controller=null;this.active=null;}
}
