/* ODD Core extended-floating-action-button 1.0.0 — no runtime dependencies. */
(() => {
 const mounted=new WeakMap();
 function init(root) {
  if(mounted.has(root))return mounted.get(root);
  const controller=new AbortController(),options={signal:controller.signal};
  const instance=globalThis.crypto?.randomUUID?.() || Date.now().toString(36)+'-'+Math.random().toString(36).slice(2);
  const own=(e,selector)=>{const el=e.target.closest(selector);return el&&el.closest('[data-odd-component]')===root?el:null;};
  function unique(el,part){if(!el.id){do{el.id='odd-extended-floating-action-button-'+instance+'-'+part+'-'+Math.random().toString(36).slice(2,7);}while(document.getElementById(el.id)!==el);}return el.id;}
  const relate=(trigger,target,attribute)=>trigger.setAttribute(attribute,unique(target,'panel'));
  const emit=value=>root.dispatchEvent(new CustomEvent('odd:change',{bubbles:true,detail:{component:'extended-floating-action-button',version:'1.0.0',contractVersion:'1.0.0',instanceId:instance,value,source:'user'}}));
  const trigger=root.querySelector('[data-odd-action="disclose"]'), panel=root.querySelector('[data-odd-part="panel"]');relate(trigger,panel,'aria-controls');panel.hidden=trigger.getAttribute('aria-expanded')!=='true';
function close(){trigger.setAttribute('aria-expanded','false');panel.hidden=true;emit({expanded:false});}
trigger.addEventListener('click',()=>{const expanded=trigger.getAttribute('aria-expanded')!=='true';trigger.setAttribute('aria-expanded',String(expanded));panel.hidden=!expanded;emit({expanded});},options);
root.addEventListener('keydown',e=>{if(e.key==='Escape'&&!panel.hidden){close();trigger.focus();e.preventDefault();}},options);
panel.addEventListener('click',e=>{const action=e.target.closest('[data-odd-action="choose"]');if(action){close();trigger.focus();emit({action:action.dataset.oddValue});}},options);
  const api={destroy(){controller.abort();mounted.delete(root);}};
  mounted.set(root,api);
  root.dispatchEvent(new CustomEvent('odd:ready',{bubbles:true,detail:{component:'extended-floating-action-button',version:'1.0.0',contractVersion:'1.0.0',instanceId:instance}}));
  return api;
 }
 window.ODDCore=window.ODDCore||{};
 window.ODDCore['extended-floating-action-button']={init};
 document.querySelectorAll('[data-odd-component="extended-floating-action-button"]').forEach(init);
})();
