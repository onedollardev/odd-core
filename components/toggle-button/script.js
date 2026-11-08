/* ODD Core toggle-button 1.0.0 — no runtime dependencies. */
(() => {
 const mounted=new WeakMap();
 function init(root) {
  if(mounted.has(root))return mounted.get(root);
  const controller=new AbortController(),options={signal:controller.signal};
  const instance=globalThis.crypto?.randomUUID?.() || Date.now().toString(36)+'-'+Math.random().toString(36).slice(2);
  const own=(e,selector)=>{const el=e.target.closest(selector);return el&&el.closest('[data-odd-component]')===root?el:null;};
  function unique(el,part){if(!el.id){do{el.id='odd-toggle-button-'+instance+'-'+part+'-'+Math.random().toString(36).slice(2,7);}while(document.getElementById(el.id)!==el);}return el.id;}
  const relate=(trigger,target,attribute)=>trigger.setAttribute(attribute,unique(target,'panel'));
  const emit=value=>root.dispatchEvent(new CustomEvent('odd:change',{bubbles:true,detail:{component:'toggle-button',version:'1.0.0',contractVersion:'1.0.0',instanceId:instance,value,source:'user'}}));
  root.addEventListener('click', e=>{const button=own(e,'[data-odd-action="toggle"]');if(!button || button.disabled)return;const selected=button.getAttribute('aria-pressed')!=='true';button.setAttribute('aria-pressed',String(selected));emit({name:button.dataset.oddValue,selected});},options);
  const api={destroy(){controller.abort();mounted.delete(root);}};
  mounted.set(root,api);
  root.dispatchEvent(new CustomEvent('odd:ready',{bubbles:true,detail:{component:'toggle-button',version:'1.0.0',contractVersion:'1.0.0',instanceId:instance}}));
  return api;
 }
 window.ODDCore=window.ODDCore||{};
 window.ODDCore['toggle-button']={init};
 document.querySelectorAll('[data-odd-component="toggle-button"]').forEach(init);
})();
