/* One header for the Garage, Trip planner and Drive.
   Rendered synchronously into <header data-site-header data-page="…">, so
   there is no layout shift. On the Garage page the nav items are mode
   buttons handled by index.html; elsewhere they are plain links into it. */
(() => {
  'use strict';
  const NAV=[
    {label:'Garage',primaryMode:'garage',hash:'garage'},
    {label:'Parts',mode:'parts',hash:'parts-title'},
    {label:'Fitters & sellers',mode:'sources',hash:'online-sources-title'},
    {label:'Clubs',mode:'clubs',hash:'clubs-title'},
    {label:'Trip planner',href:'trip-planner.html',page:'trip',tripPlanner:true},
    {label:'Drive',href:'game.html',page:'drive'},
    {label:'Owner tools',mode:'tools',hash:'owner-tools'}
  ];
  // Written by index.html whenever the build, region or body changes.
  const CONTEXT_KEY='thatsuvmod-header-context';
  const esc=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function readContext(){
    try{const value=JSON.parse(localStorage.getItem(CONTEXT_KEY));if(value&&typeof value==='object')return value;}catch{/* Storage can be unavailable. */}
    return {};
  }
  function contextLabel(context){return `${context.region||'Your region'} · ${context.body==='3door'?'3-door':'5-door'}`;}
  function navItem(item,page){
    if(page==='garage'){
      if(item.primaryMode)return `<button type="button" data-primary-mode="${item.primaryMode}" class="active">${esc(item.label)}</button>`;
      if(item.mode)return `<button type="button" data-mode-select="${item.mode}">${esc(item.label)}</button>`;
      return `<a href="${item.href}"${item.tripPlanner?' data-open-trip-planner':''}>${esc(item.label)}</a>`;
    }
    const href=item.href||`index.html#${item.hash}`,current=item.page===page;
    return `<a href="${href}"${current?' aria-current="page"':''}>${esc(item.label)}</a>`;
  }
  const icons={
    chevron:'<svg class="site-chevron" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>',
    menu:'<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>'
  };
  function render(header){
    const page=header.dataset.page||'garage',context=readContext(),count=Number(context.count)||0;
    const build=page==='garage'
      ?`<button type="button" class="site-build" data-build-open><span class="site-build-label">My build</span> <span class="site-build-count" id="headerBuildCount">${count}</span></button>`
      :`<a class="site-build" href="index.html#garage" data-site-build-link><span class="site-build-label">My build</span> <span class="site-build-count">${count}</span></a>`;
    const fields=page==='garage'?'':
      `<dl class="site-setup-summary"><div><dt>Region</dt><dd>${esc(context.region||'Not chosen yet')}</dd></div><div><dt>Your Jimny</dt><dd>${context.body==='3door'?'3-door / Sierra (JB74)':'5-door / XL / Nomade'}</dd></div></dl><a class="site-setup-change" href="index.html#garage" data-site-build-link>Change in the Garage</a>`;
    // Page-specific controls (such as Drive's Courses button) keep their place in the bar.
    const slots=[...header.querySelectorAll('[data-site-header-slot]')];
    header.classList.add('site-header');
    header.innerHTML=`<div class="site-bar">
<a class="site-logo" href="index.html#garage" aria-label="jimnygami Garage"><span class="site-logo-art"><img src="assets/jimnygami-logo.webp" width="560" height="280" alt=""></span></a>
<div class="site-menu-panel" id="siteMenu">
<nav class="site-nav" id="siteNav" aria-label="Main navigation">${NAV.map(item=>navItem(item,page)).join('')}</nav>
<details class="site-setup"><summary aria-label="Your setup: region, Jimny and style"><span class="site-setup-context">${esc(contextLabel(context))}</span>${icons.chevron}</summary>
<div class="site-setup-panel"><div class="site-setup-heading"><strong>Your setup</strong><button type="button" data-close-setup>Close</button></div><div class="site-setup-fields">${fields}</div><div class="site-setup-theme"></div><p class="site-setup-note">Body and region shape the previews and sources. Style changes the look of every page.</p></div></details>
</div>
${build}
<button type="button" class="site-menu-toggle" aria-expanded="false" aria-controls="siteMenu" aria-label="Menu">${icons.menu}</button>
</div>`;
    header.querySelector('.site-build').before(...slots);
    wire(header);
  }
  function wire(header){
    const menu=header.querySelector('.site-menu-toggle'),panel=header.querySelector('.site-menu-panel'),setup=header.querySelector('.site-setup');
    const setMenu=open=>{header.classList.toggle('menu-open',open);menu.setAttribute('aria-expanded',String(open));};
    menu.addEventListener('click',()=>setMenu(!header.classList.contains('menu-open')));
    panel.addEventListener('click',e=>{if(e.target.closest('.site-nav :is(a,button)'))setMenu(false);});
    setup.querySelector('[data-close-setup]').addEventListener('click',()=>{setup.open=false;setup.querySelector('summary').focus();});
    document.addEventListener('pointerdown',e=>{
      if(setup.open&&!setup.contains(e.target))setup.open=false;
      if(header.classList.contains('menu-open')&&!panel.contains(e.target)&&!menu.contains(e.target))setMenu(false);
    });
    document.addEventListener('keydown',e=>{
      if(e.key!=='Escape')return;
      if(setup.open){setup.open=false;setup.querySelector('summary').focus();}
      else if(header.classList.contains('menu-open')){setMenu(false);menu.focus();}
    });
    // Off the Garage, My build opens the drawer once the Garage loads.
    header.querySelectorAll('[data-site-build-link]').forEach(link=>link.addEventListener('click',()=>{
      if(link.classList.contains('site-build'))try{sessionStorage.setItem('thatsuvmod-open-build','1');}catch{/* Opens the Garage without the drawer. */}
    }));
  }
  // Index calls this so other pages can show the same count and setup.
  function saveContext(context){try{localStorage.setItem(CONTEXT_KEY,JSON.stringify(context));}catch{/* Other pages fall back to defaults. */}}
  function setContext(context){
    document.querySelectorAll('.site-setup-context').forEach(el=>{el.textContent=contextLabel(context);});
    document.querySelectorAll('.site-build-count').forEach(el=>{el.textContent=String(Number(context.count)||0);});
  }
  globalThis.JimnySiteHeader={NAV,render,saveContext,setContext,readContext};
  document.querySelectorAll('[data-site-header]').forEach(render);
})();
