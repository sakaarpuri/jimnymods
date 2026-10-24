// Local-only exports. Probe codecs: Safari and Chromium need not agree on format.
export function videoFormat({audio=false}={}){
  if(typeof MediaRecorder==='undefined'||!HTMLCanvasElement.prototype.captureStream)return null;
  const candidates=audio?['video/webm;codecs=vp9,opus','video/webm;codecs=vp8,opus','video/webm','video/mp4;codecs=avc1.42E01E,mp4a.40.2','video/mp4']:['video/webm;codecs=vp9','video/webm;codecs=vp8','video/webm','video/mp4;codecs=avc1.42E01E','video/mp4'];
  for(const mime of candidates)if(MediaRecorder.isTypeSupported(mime))return {mime,extension:mime.includes('mp4')?'mp4':'webm'};
  return null;
}
export const exportSize=format=>format==='portrait'?[720,1280]:format==='square'?[960,960]:[1280,720];
export function downloadBlob(blob,name){const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),60000);}
export function canvasBlob(canvas,type='image/jpeg'){return new Promise((resolve,reject)=>canvas.toBlob(b=>b?resolve(b):reject(new Error('The image could not be created.')),type,.94));}
export async function recordCanvas({canvas,duration,draw,signal,audioStream,onProgress=()=>{}}){
  const format=videoFormat({audio:!!audioStream?.getAudioTracks().length});if(!format)throw new Error('Video recording is unavailable in this browser. You can still save an image.');
  if(signal?.aborted)throw new DOMException('Cancelled','AbortError');
  draw(0);const stream=canvas.captureStream(30),chunks=[];let recorder,frame=0,start=0,framesDrawn=0;
  const captureTrack=stream.getVideoTracks?.()[0];
  // Clone tracks so cleanup never stops the game's original audio destination.
  for(const track of audioStream?.getAudioTracks()||[])stream.addTrack(track.clone());
  try{
    recorder=new MediaRecorder(stream,{mimeType:format.mime,videoBitsPerSecond:5500000});
    await new Promise((resolve,reject)=>{
      let settled=false;
      const cleanup=()=>{cancelAnimationFrame(frame);signal?.removeEventListener('abort',abort);document.removeEventListener('visibilitychange',hidden);};
      const fail=error=>{if(settled)return;settled=true;cleanup();if(recorder.state!=='inactive')recorder.stop();reject(error);};
      const abort=()=>fail(new DOMException('Cancelled','AbortError'));
      const hidden=()=>{if(document.hidden)fail(new Error('Recording paused because this tab was hidden. Keep this tab visible and try again.'));};
      signal?.addEventListener('abort',abort,{once:true});document.addEventListener('visibilitychange',hidden);
      recorder.ondataavailable=e=>{if(e.data.size)chunks.push(e.data);};recorder.onerror=()=>fail(new Error('This browser could not encode the video. Try a shorter clip or save an image.'));
      recorder.onstop=()=>{if(!settled){settled=true;cleanup();resolve();}};
      function tick(now){if(!start)start=now;const t=Math.min((now-start)/1000,duration);try{draw(t);framesDrawn++;captureTrack?.requestFrame?.();onProgress(t/duration);}catch(error){fail(error);return;}if(t>=duration){recorder.stop();return;}frame=requestAnimationFrame(tick);}
      recorder.start(1000);frame=requestAnimationFrame(tick);
    });
    const blob=new Blob(chunks,{type:recorder.mimeType});if(blob.size<1000)throw new Error('The recording was empty. Try again or save an image.');return {blob,extension:format.extension,framesDrawn,approximateFrameRate:framesDrawn/Math.max(duration,.001)};
  }finally{cancelAnimationFrame(frame);stream.getTracks().forEach(track=>track.stop());}
}
export function stampFrame(ctx,{title,detail,width,height}){
  const pad=Math.round(width*.035),h=Math.min(96,Math.round(height*.115));ctx.fillStyle='rgba(15,29,25,.86)';ctx.fillRect(0,height-h,width,h);ctx.fillStyle='#f7f8ef';ctx.font=`600 ${Math.max(22,Math.round(width*.022))}px sans-serif`;ctx.fillText(title,pad,height-h*.59,width-pad*2);ctx.fillStyle='#d4ddca';ctx.font=`${Math.max(16,Math.round(width*.015))}px sans-serif`;ctx.fillText(detail,pad,height-h*.23,width-pad*2);
}
