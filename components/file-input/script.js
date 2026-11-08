/* ODD Core file-input 1.0.0 — no runtime dependencies. */
(() => {
 const mounted=new WeakMap();
 function init(root) {
  if(mounted.has(root))return mounted.get(root);
  const controller=new AbortController(),options={signal:controller.signal};
  const instance=globalThis.crypto?.randomUUID?.() || Date.now().toString(36)+'-'+Math.random().toString(36).slice(2);
  const own=(e,selector)=>{const el=e.target.closest(selector);return el&&el.closest('[data-odd-component]')===root?el:null;};
  function unique(el,part){if(!el.id){do{el.id='odd-file-input-'+instance+'-'+part+'-'+Math.random().toString(36).slice(2,7);}while(document.getElementById(el.id)!==el);}return el.id;}
  const relate=(trigger,target,attribute)=>trigger.setAttribute(attribute,unique(target,'panel'));
  const emit=value=>root.dispatchEvent(new CustomEvent('odd:change',{bubbles:true,detail:{component:'file-input',version:'1.0.0',contractVersion:'1.0.0',instanceId:instance,value,source:'user'}}));
  const input=root.querySelector('input[type="file"]'), output=root.querySelector('[data-odd-part="file-status"]');input.addEventListener('change',()=>{const file=input.files[0];if(!file){output.textContent='';return;}if(file.size>10*1024*1024 || !(file.type==='application/pdf'||file.name.toLowerCase().endsWith('.pdf'))){output.textContent='Choose a PDF under 10 MB.';input.value='';return;}output.textContent=file.name;emit({name:file.name,size:file.size});},options);
  const api={destroy(){controller.abort();mounted.delete(root);}};
  mounted.set(root,api);
  root.dispatchEvent(new CustomEvent('odd:ready',{bubbles:true,detail:{component:'file-input',version:'1.0.0',contractVersion:'1.0.0',instanceId:instance}}));
  return api;
 }
 window.ODDCore=window.ODDCore||{};
 window.ODDCore['file-input']={init};
 document.querySelectorAll('[data-odd-component="file-input"]').forEach(init);
})();
