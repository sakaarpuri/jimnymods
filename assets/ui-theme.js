// Presentation and studio backdrop only: does not change builds or controls.
(() => {
  const key='thatsuvmod-ui-theme-v1',root=document.documentElement;
  const valid=value=>value==='daylight'?'daylight':'rally';
  function apply(value){
    const theme=valid(value);root.dataset.uiTheme=theme;
    document.querySelectorAll('[data-ui-theme-choice]').forEach(select=>{select.value=theme;});
    return theme;
  }
  try{apply(localStorage.getItem(key));}catch{apply('rally');}
  function picker(){
    const label=document.createElement('label');label.className='ui-theme-picker';
    const title=document.createElement('span');title.textContent='Style';
    const select=document.createElement('select');select.dataset.uiThemeChoice='';select.setAttribute('aria-label','Interface style');
    for(const [value,text] of [['daylight','Daylight'],['rally','Rally dark']]){const option=document.createElement('option');option.value=value;option.textContent=text;select.append(option);}
    select.value=root.dataset.uiTheme;
    select.addEventListener('change',()=>{const theme=apply(select.value);try{localStorage.setItem(key,theme);}catch{/* The choice still works when browser storage is unavailable. */}});
    label.append(title,select);return label;
  }
  document.addEventListener('DOMContentLoaded',()=>{
    const nav=document.querySelector('.workbench-nav');
    if(nav){nav.querySelector('.workshop-nav-note')?.remove();nav.append(picker());}
    const header=document.querySelector('.game-header');if(header)header.insertBefore(picker(),document.getElementById('menuButton'));
    // Modal dialogs make the header inert, so keep a synchronized control inside.
    const lobby=document.getElementById('lobby');if(lobby){const row=document.createElement('div');row.className='lobby-style-row';row.append(picker());lobby.prepend(row);}
  },{once:true});
  window.addEventListener('storage',event=>{if(event.key===key||event.key===null)apply(event.newValue);});
})();
