/* ODD Core tooltip 1.0.0 — no runtime dependencies. */
(() => {
 const mounted=new WeakMap();
 function init(root) {
  if(mounted.has(root))return mounted.get(root);
  const controller=new AbortController(),options={signal:controller.signal};
  const instance=globalThis.crypto?.randomUUID?.() || Date.now().toString(36)+'-'+Math.random().toString(36).slice(2);
  const own=(e,selector)=>{const el=e.target.closest(selector);return el&&el.closest('[data-odd-component]')===root?el:null;};
  function unique(el,part){if(!el.id){do{el.id='odd-tooltip-'+instance+'-'+part+'-'+Math.random().toString(36).slice(2,7);}while(document.getElementById(el.id)!==el);}return el.id;}
  const relate=(trigger,target,attribute)=>trigger.setAttribute(attribute,unique(target,'panel'));
  const emit=value=>root.dispatchEvent(new CustomEvent('odd:change',{bubbles:true,detail:{component:'tooltip',version:'1.0.0',contractVersion:'1.0.0',instanceId:instance,value,source:'user'}}));
  const trigger=root.querySelector('[data-odd-action="tooltip"]'), tip=root.querySelector('[role="tooltip"]');relate(trigger,tip,'aria-describedby');let suppressed=false;const show=()=>{if(!suppressed)tip.hidden=false;},hide=()=>{tip.hidden=true;};root.addEventListener('mouseenter',show,options);root.addEventListener('mouseleave',()=>{if(!root.contains(document.activeElement)){hide();suppressed=false;}},options);trigger.addEventListener('focus',()=>{suppressed=false;show();},options);trigger.addEventListener('blur',()=>{hide();suppressed=false;},options);root.addEventListener('keydown',e=>{if(e.key==='Escape'){hide();suppressed=true;e.preventDefault();}},options);trigger.addEventListener('click',()=>{tip.hidden=!tip.hidden;},options);
  const api={destroy(){controller.abort();mounted.delete(root);}};
  mounted.set(root,api);
  root.dispatchEvent(new CustomEvent('odd:ready',{bubbles:true,detail:{component:'tooltip',version:'1.0.0',contractVersion:'1.0.0',instanceId:instance}}));
  return api;
 }
 window.ODDCore=window.ODDCore||{};
 window.ODDCore['tooltip']={init};
 document.querySelectorAll('[data-odd-component="tooltip"]').forEach(init);
})();
