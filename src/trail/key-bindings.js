export const KEY_BINDINGS_STORAGE='thatsuvmod.trail.key-bindings.v1';
export const KEY_ACTIONS=Object.freeze({throttle:'Accelerate',brake:'Brake',left:'Steer left',right:'Steer right',gentle:'Gentle throttle',full:'Full throttle',gearDown:'Selector down',gearUp:'Selector up','2h':'Two high','4h':'Four high','4l':'Four low',handbrake:'Handbrake / parking brake',camera:'Change camera',map:'Expand map',pause:'Pause'});
const freeze=map=>Object.freeze(Object.fromEntries(Object.entries(map).map(([key,codes])=>[key,Object.freeze([...codes])])));
export const DEFAULT_BINDINGS=freeze({throttle:['KeyW','ArrowUp'],brake:['Space','KeyS','ArrowDown'],left:['KeyA','ArrowLeft'],right:['KeyD','ArrowRight'],gentle:['ShiftLeft','ShiftRight'],full:['KeyF'],gearDown:['KeyQ'],gearUp:['KeyE'],'2h':['Digit1','Numpad1'],'4h':['Digit2','Numpad2'],'4l':['Digit3','Numpad3'],handbrake:['KeyH'],camera:['KeyC'],map:['KeyM'],pause:['Escape']});
const canonical=Object.freeze(Object.fromEntries(Object.entries(DEFAULT_BINDINGS).map(([id,codes])=>[id,codes[0]])));
let current=DEFAULT_BINDINGS;
const permitted=code=>/^(Key[A-Z]|Digit[0-9]|Numpad[0-9]|Arrow(Up|Down|Left|Right)|Space|Shift(Left|Right)|Escape)$/.test(code);
const safeStorage=()=>{try{return globalThis.localStorage;}catch{return null;}};
export function keyLabel(code){return code.startsWith('Key')?code.slice(3):code.startsWith('Digit')?code.slice(5):code.startsWith('Numpad')?'Num '+code.slice(6):({Space:'Space',Escape:'Esc',ShiftLeft:'Left Shift',ShiftRight:'Right Shift',ArrowUp:'↑',ArrowDown:'↓',ArrowLeft:'←',ArrowRight:'→'})[code]||code;}
export function validateBindings(value){
 if(!value||typeof value!=='object'||Array.isArray(value)||Object.keys(value).length!==Object.keys(KEY_ACTIONS).length)return{ok:false,error:'The saved controls are incomplete. Defaults have been kept.'};
 const seen=new Map();
 for(const action of Object.keys(KEY_ACTIONS)){
  const codes=value[action];if(!Array.isArray(codes)||!codes.length||codes.length>3)return{ok:false,error:`Choose at least one key for ${KEY_ACTIONS[action]}.`};
  for(const code of codes){if(typeof code!=='string'||!permitted(code))return{ok:false,error:'Use a letter, number, arrow, Space, Shift or Esc. Browser shortcuts and modifier combinations are reserved.'};if(seen.has(code))return{ok:false,error:`${keyLabel(code)} is already assigned to ${KEY_ACTIONS[seen.get(code)]}. Choose a different key.`};seen.set(code,action);}
 }
 return{ok:true,bindings:freeze(value)};
}
export function assignBinding(bindings,action,code){
 if(!Object.hasOwn(KEY_ACTIONS,action))return{ok:false,error:'Unknown driving action.'};
 const occupied=Object.entries(bindings).find(([id,codes])=>id!==action&&codes.includes(code));if(occupied)return{ok:false,error:`${keyLabel(code)} is already assigned to ${KEY_ACTIONS[occupied[0]]}. Choose a different key.`};
 return validateBindings({...bindings,[action]:[code]});
}
export function eventBindingCode(event){
 if(event.ctrlKey||event.metaKey||event.altKey||(event.shiftKey&&!['ShiftLeft','ShiftRight'].includes(event.code)))return{ok:false,error:'Control, Command, Alt and combined shortcuts are reserved. Press one key on its own.'};
 if(!permitted(event.code))return{ok:false,error:'That key is reserved for browser navigation. Choose a letter, number, arrow, Space or Shift.'};
 return{ok:true,code:event.code};
}
export function loadKeyBindings(storage=safeStorage()){
 try{const raw=storage?.getItem(KEY_BINDINGS_STORAGE);if(!raw)return DEFAULT_BINDINGS;const saved=JSON.parse(raw);if(saved.version!==1)return DEFAULT_BINDINGS;const result=validateBindings(saved.bindings);return result.ok?result.bindings:DEFAULT_BINDINGS;}catch{return DEFAULT_BINDINGS;}
}
export function setKeyBindings(bindings,{storage=safeStorage(),persist=true}={}){
 const result=validateBindings(bindings);if(!result.ok)return result;current=result.bindings;
 if(persist){try{if(!storage)throw new Error();storage.setItem(KEY_BINDINGS_STORAGE,JSON.stringify({version:1,bindings:current}));}catch{return{ok:true,bindings:current,persisted:false,error:'Controls changed for this session. This browser could not save them.'};}}
 return{ok:true,bindings:current,persisted:!!persist};
}
export function getKeyBindings(){return current;}
export function translateCode(code,bindings=current){for(const [action,codes] of Object.entries(bindings))if(codes.includes(code))return canonical[action];return null;}
export function canonicalPressedCodes(physicalCodes,bindings=current){return new Set([...physicalCodes].map(code=>translateCode(code,bindings)).filter(Boolean));}
export function bindingLabel(action,bindings=current){return(bindings[action]||[]).map(keyLabel).join(' / ');}

/** Optional settings UI. Returns cleanup; capture is scoped to this container. */
export function mountKeyBindingsSettings(container,{storage=safeStorage(),onChange=()=>{}}={}){
 const doc=container.ownerDocument;let listening=null,alive=true;
 setKeyBindings(loadKeyBindings(storage),{persist:false});
 const heading=doc.createElement('h3');heading.textContent='Keyboard controls';
 const intro=doc.createElement('p');intro.textContent='Choose an action, then press one key. Changing an action replaces its alternate keys. Escape cancels; browser shortcuts stay reserved.';
 const list=doc.createElement('div');list.style.cssText='display:grid;grid-template-columns:minmax(0,1fr) auto;gap:8px;align-items:center';
 const status=doc.createElement('p');status.setAttribute('role','status');status.setAttribute('aria-live','polite');
 const rows=new Map();
 for(const [action,label] of Object.entries(KEY_ACTIONS)){
  const name=doc.createElement('span');name.textContent=label;const button=doc.createElement('button');button.type='button';button.dataset.keyAction=action;
  button.addEventListener('click',()=>{listening=action;render();status.textContent=`Press a new key for ${label}. Escape cancels.`;button.focus();});rows.set(action,button);list.append(name,button);
 }
 const restore=doc.createElement('button');restore.type='button';restore.textContent='Restore default controls';restore.addEventListener('click',()=>{listening=null;commit(DEFAULT_BINDINGS,'Default controls restored.');});
 function render(){for(const [action,button] of rows){button.textContent=listening===action?'Press a key…':bindingLabel(action);button.setAttribute('aria-label',`Change ${KEY_ACTIONS[action]}: ${bindingLabel(action)}`);button.setAttribute('aria-pressed',String(listening===action));}}
 function commit(bindings,message){const result=setKeyBindings(bindings,{storage});status.textContent=result.error||message;render();onChange(result.bindings);}
 function keydown(event){
  if(!listening||!alive)return;event.preventDefault();event.stopPropagation();
  if(event.code==='Escape'){listening=null;status.textContent='Key change cancelled.';render();return;}
  if(event.repeat)return;
  const captured=eventBindingCode(event);if(!captured.ok){status.textContent=captured.error;return;}
  const result=assignBinding(current,listening,captured.code);if(!result.ok){status.textContent=result.error;return;}
  const action=listening;listening=null;commit(result.bindings,`${KEY_ACTIONS[action]} is now ${keyLabel(captured.code)}.`);
 }
 // Capture before the game's bubble listeners, but never intercept shortcuts
 // outside this settings panel. Keyup is consumed during assignment too.
 const keyup=event=>{if(container.contains(event.target)){event.stopPropagation();}};
 const focusout=event=>{if(listening&&!container.contains(event.relatedTarget)){listening=null;status.textContent='Key change cancelled.';render();}};
 container.append(heading,intro,list,status,restore);container.addEventListener('keydown',keydown,true);container.addEventListener('keyup',keyup,true);container.addEventListener('focusout',focusout);render();onChange(current);
 return()=>{alive=false;listening=null;container.removeEventListener('keydown',keydown,true);container.removeEventListener('keyup',keyup,true);container.removeEventListener('focusout',focusout);for(const node of [heading,intro,list,status,restore])node.remove();};
}
