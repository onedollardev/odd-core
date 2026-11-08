/* ODD Core alert 1.0.0 — no runtime dependencies. */
(() => {
 const mounted=new WeakMap();
 function init(root) {
  if(mounted.has(root))return mounted.get(root);
  const controller=new AbortController(),options={signal:controller.signal};
  const instance=globalThis.crypto?.randomUUID?.() || Date.now().toString(36)+'-'+Math.random().toString(36).slice(2);
  const own=(e,selector)=>{const el=e.target.closest(selector);return el&&el.closest('[data-odd-component]')===root?el:null;};
  function unique(el,part){if(!el.id){do{el.id='odd-alert-'+instance+'-'+part+'-'+Math.random().toString(36).slice(2,7);}while(document.getElementById(el.id)!==el);}return el.id;}
  const relate=(trigger,target,attribute)=>trigger.setAttribute(attribute,unique(target,'panel'));
  const emit=value=>root.dispatchEvent(new CustomEvent('odd:change',{bubbles:true,detail:{component:'alert',version:'1.0.0',contractVersion:'1.0.0',instanceId:instance,value,source:'user'}}));
  const close=root.querySelector('[data-odd-action="dismiss"]'),notice=root.querySelector('[role="status"]'),restore=root.querySelector('[data-odd-action="restore"]');close.addEventListener('click',()=>{notice.hidden=true;restore.hidden=false;restore.focus();emit({dismissed:true});},options);restore.addEventListener('click',()=>{notice.hidden=false;restore.hidden=true;close.focus();emit({dismissed:false});},options);
  const api={destroy(){controller.abort();mounted.delete(root);}};
  mounted.set(root,api);
  root.dispatchEvent(new CustomEvent('odd:ready',{bubbles:true,detail:{component:'alert',version:'1.0.0',contractVersion:'1.0.0',instanceId:instance}}));
  return api;
 }
 window.ODDCore=window.ODDCore||{};
 window.ODDCore['alert']={init};
 document.querySelectorAll('[data-odd-component="alert"]').forEach(init);
})();
