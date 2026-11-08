(() => {
 const mounted=new WeakMap();
 function init(root){
  if(!root||root.dataset.oddComponent!=="step-progress-indicator")throw new Error('Expected '+"step-progress-indicator"+' root');if(mounted.has(root))return mounted.get(root);
  const controller=new AbortController(),options={signal:controller.signal},cleanups=[];
  const instance=globalThis.crypto?.randomUUID?.()||Date.now().toString(36)+'-'+Math.random().toString(36).slice(2);
  const q=s=>root.querySelector(s),qa=s=>[...root.querySelectorAll(s)];
  const remap=new Map();qa('[id]').forEach((el,i)=>{if(document.querySelectorAll('[id="'+CSS.escape(el.id)+'"]').length>1){const old=el.id;el.id='odd-'+instance+'-authored-'+i;remap.set(old,el.id);}});qa('[aria-controls],[aria-describedby],[aria-labelledby],a[href^="#"]').forEach(el=>{['aria-controls','aria-describedby','aria-labelledby'].forEach(a=>{if(el.hasAttribute(a))el.setAttribute(a,el.getAttribute(a).split(' ').map(v=>remap.get(v)||v).join(' '));});if(el.hasAttribute('href')){const v=el.getAttribute('href').slice(1);if(remap.has(v))el.setAttribute('href','#'+remap.get(v));}});
  const on=(el,type,fn)=>{if(el)el.addEventListener(type,fn,options);};
  const id=(el,part='part')=>{if(!el.id||document.querySelectorAll('[id="'+CSS.escape(el.id)+'"]').length>1)el.id='odd-'+"step-progress-indicator"+'-'+instance+'-'+part;return el.id;};
  const emit=value=>root.dispatchEvent(new CustomEvent('odd:change',{bubbles:true,detail:{component:"step-progress-indicator",version:'1.0.0',contractVersion:'1.0.0',instanceId:instance,value,source:'user'}}));
  const status=q('[data-odd-part="status"]');const say=t=>{if(status)status.textContent=t;};
  const act=name=>q('[data-odd-action="'+name+'"]');
  const form=root.closest('form')||q('form');const reset=fn=>{on(form,'reset',()=>{setTimeout(()=>{if(!controller.signal.aborted)fn();},0);});};
  const steps=qa('[data-odd-step]');let index=0;function setStep(n,announce=true){index=Math.max(0,Math.min(steps.length-1,Number(n)||0));steps.forEach((el,i)=>{el.dataset.oddState=i<index?'complete':i===index?'current':'upcoming';el.removeAttribute('aria-current');if(i===index)el.setAttribute('aria-current','step');el.querySelector('.oddStepMark').textContent=i<index?'✓':String(i+1);});act('back').disabled=index===0;act('next').disabled=index===steps.length-1;if(announce){say('Step '+(index+1)+' of '+steps.length);emit({step:index});}}on(act('back'),'click',()=>{setStep(index-1);if(act('back').disabled)act('next').focus();});on(act('next'),'click',()=>{setStep(index+1);if(act('next').disabled)act('back').focus();});setStep(0,false);
  const api={setStep, destroy(){controller.abort();cleanups.forEach(fn=>fn());mounted.delete(root);}};mounted.set(root,api);
  root.dispatchEvent(new CustomEvent('odd:ready',{bubbles:true,detail:{component:"step-progress-indicator",version:'1.0.0',contractVersion:'1.0.0',instanceId:instance}}));return api;
 }
 window.ODDCore=window.ODDCore||{};window.ODDCore["step-progress-indicator"]={init};document.querySelectorAll('[data-odd-component="'+"step-progress-indicator"+'"]').forEach(init);
})();