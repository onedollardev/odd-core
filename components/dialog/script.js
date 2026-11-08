/* ODD Core dialog 1.0.0 — no runtime dependencies. */
(() => {
 const mounted=new WeakMap();
 function init(root) {
  if(mounted.has(root))return mounted.get(root);
  const controller=new AbortController(),options={signal:controller.signal};
  const instance=globalThis.crypto?.randomUUID?.() || Date.now().toString(36)+'-'+Math.random().toString(36).slice(2);
  const own=(e,selector)=>{const el=e.target.closest(selector);return el&&el.closest('[data-odd-component]')===root?el:null;};
  function unique(el,part){if(!el.id){do{el.id='odd-dialog-'+instance+'-'+part+'-'+Math.random().toString(36).slice(2,7);}while(document.getElementById(el.id)!==el);}return el.id;}
  const relate=(trigger,target,attribute)=>trigger.setAttribute(attribute,unique(target,'panel'));
  const emit=value=>root.dispatchEvent(new CustomEvent('odd:change',{bubbles:true,detail:{component:'dialog',version:'1.0.0',contractVersion:'1.0.0',instanceId:instance,value,source:'user'}}));
  const trigger=root.querySelector('[data-odd-action="open"]'),dialog=root.querySelector('dialog'),heading=root.querySelector('[data-odd-part="heading"]');unique(heading,'heading');dialog.setAttribute('aria-labelledby',heading.id);relate(trigger,dialog,'aria-controls');trigger.addEventListener('click',()=>{dialog.showModal();trigger.setAttribute('aria-expanded','true');emit({open:true});},options);dialog.addEventListener('close',()=>{trigger.setAttribute('aria-expanded','false');trigger.focus();emit({open:false});},options);
  const api={destroy(){controller.abort();mounted.delete(root);}};
  mounted.set(root,api);
  root.dispatchEvent(new CustomEvent('odd:ready',{bubbles:true,detail:{component:'dialog',version:'1.0.0',contractVersion:'1.0.0',instanceId:instance}}));
  return api;
 }
 window.ODDCore=window.ODDCore||{};
 window.ODDCore['dialog']={init};
 document.querySelectorAll('[data-odd-component="dialog"]').forEach(init);
})();
