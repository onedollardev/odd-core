/* ODD Core tabs 1.0.0 — no runtime dependencies. */
(() => {
 const mounted=new WeakMap();
 function init(root) {
  if(mounted.has(root))return mounted.get(root);
  const controller=new AbortController(),options={signal:controller.signal};
  const instance=globalThis.crypto?.randomUUID?.() || Date.now().toString(36)+'-'+Math.random().toString(36).slice(2);
  const own=(e,selector)=>{const el=e.target.closest(selector);return el&&el.closest('[data-odd-component]')===root?el:null;};
  function unique(el,part){if(!el.id){do{el.id='odd-tabs-'+instance+'-'+part+'-'+Math.random().toString(36).slice(2,7);}while(document.getElementById(el.id)!==el);}return el.id;}
  const relate=(trigger,target,attribute)=>trigger.setAttribute(attribute,unique(target,'panel'));
  const emit=value=>root.dispatchEvent(new CustomEvent('odd:change',{bubbles:true,detail:{component:'tabs',version:'1.0.0',contractVersion:'1.0.0',instanceId:instance,value,source:'user'}}));
  const tabs=[...root.querySelectorAll('[role="tab"]')],panels=[...root.querySelectorAll('[role="tabpanel"]')];tabs.forEach((tab,i)=>{unique(tab,'tab');relate(tab,panels[i],'aria-controls');panels[i].setAttribute('aria-labelledby',tab.id);});function select(index,focus){tabs.forEach((tab,i)=>{const active=i===index;tab.setAttribute('aria-selected',String(active));tab.tabIndex=active?0:-1;panels[i].hidden=!active;});if(focus)tabs[index].focus();emit({value:tabs[index].dataset.oddValue});}tabs.forEach((tab,i)=>{tab.addEventListener('click',()=>select(i,false),options);tab.addEventListener('keydown',e=>{let next;if(e.key==='ArrowRight')next=(i+1)%tabs.length;if(e.key==='ArrowLeft')next=(i+tabs.length-1)%tabs.length;if(e.key==='Home')next=0;if(e.key==='End')next=tabs.length-1;if(next!==undefined){e.preventDefault();select(next,true);}},options);});const initial=Math.max(0,tabs.findIndex(t=>t.getAttribute('aria-selected')==='true'));select(initial,false);
  const api={destroy(){controller.abort();mounted.delete(root);}};
  mounted.set(root,api);
  root.dispatchEvent(new CustomEvent('odd:ready',{bubbles:true,detail:{component:'tabs',version:'1.0.0',contractVersion:'1.0.0',instanceId:instance}}));
  return api;
 }
 window.ODDCore=window.ODDCore||{};
 window.ODDCore['tabs']={init};
 document.querySelectorAll('[data-odd-component="tabs"]').forEach(init);
})();
