(() => {
 const mounted=new WeakMap();
 function init(root){
  if(!root||root.dataset.oddComponent!=="inline-form-error-alert")throw new Error('Expected '+"inline-form-error-alert"+' root');if(mounted.has(root))return mounted.get(root);
  const controller=new AbortController(),options={signal:controller.signal},cleanups=[];
  const instance=globalThis.crypto?.randomUUID?.()||Date.now().toString(36)+'-'+Math.random().toString(36).slice(2);
  const q=s=>root.querySelector(s),qa=s=>[...root.querySelectorAll(s)];
  const remap=new Map();qa('[id]').forEach((el,i)=>{if(document.querySelectorAll('[id="'+CSS.escape(el.id)+'"]').length>1){const old=el.id;el.id='odd-'+instance+'-authored-'+i;remap.set(old,el.id);}});qa('[aria-controls],[aria-describedby],[aria-labelledby],a[href^="#"]').forEach(el=>{['aria-controls','aria-describedby','aria-labelledby'].forEach(a=>{if(el.hasAttribute(a))el.setAttribute(a,el.getAttribute(a).split(' ').map(v=>remap.get(v)||v).join(' '));});if(el.hasAttribute('href')){const v=el.getAttribute('href').slice(1);if(remap.has(v))el.setAttribute('href','#'+remap.get(v));}});
  const on=(el,type,fn)=>{if(el)el.addEventListener(type,fn,options);};
  const id=(el,part='part')=>{if(!el.id||document.querySelectorAll('[id="'+CSS.escape(el.id)+'"]').length>1)el.id='odd-'+"inline-form-error-alert"+'-'+instance+'-'+part;return el.id;};
  const emit=value=>root.dispatchEvent(new CustomEvent('odd:change',{bubbles:true,detail:{component:"inline-form-error-alert",version:'1.0.0',contractVersion:'1.0.0',instanceId:instance,value,source:'user'}}));
  const status=q('[data-odd-part="status"]');const say=t=>{if(status)status.textContent=t;};
  const act=name=>q('[data-odd-action="'+name+'"]');
  const form=root.closest('form')||q('form');const reset=fn=>{on(form,'reset',()=>{setTimeout(()=>{if(!controller.signal.aborted)fn();},0);});};
  const inputs=qa('input'),summary=q('[data-odd-part=errors]');let attempted=false;inputs.forEach((input,i)=>{const err=q('[data-odd-error="'+input.name+'"]');input.setAttribute('aria-describedby',id(err,'error-'+i));id(input,'input-'+i);on(input,'input',()=>{if(attempted)validate(false);});});
function validate(announce){summary.replaceChildren();const bad=[];inputs.forEach(input=>{const error=q('[data-odd-error="'+input.name+'"]'),valid=input.checkValidity();input.setAttribute('aria-invalid',String(!valid));error.hidden=valid;error.textContent=input.type==='email'?'Enter a valid email address.':'Enter your name.';if(!valid)bad.push(input);});summary.hidden=!bad.length;summary.removeAttribute('role');if(bad.length){const heading=document.createElement('p');heading.textContent='Please check these fields';summary.append(heading);bad.forEach(input=>{const link=document.createElement('a');link.className='oddLink';link.href='#'+input.id;link.textContent=input.type==='email'?' Email':' Name';on(link,'click',e=>{e.preventDefault();input.focus();});summary.append(link);});if(announce)summary.setAttribute('role','alert');say('');}else say('Details checked');emit({valid:!bad.length});return !bad.length;}
on(form,'submit',e=>{e.preventDefault();attempted=true;validate(true);});reset(()=>{attempted=false;summary.hidden=true;summary.removeAttribute('role');inputs.forEach(input=>{input.removeAttribute('aria-invalid');q('[data-odd-error="'+input.name+'"]').hidden=true;});say('');});
  const api={validate, destroy(){controller.abort();cleanups.forEach(fn=>fn());mounted.delete(root);}};mounted.set(root,api);
  root.dispatchEvent(new CustomEvent('odd:ready',{bubbles:true,detail:{component:"inline-form-error-alert",version:'1.0.0',contractVersion:'1.0.0',instanceId:instance}}));return api;
 }
 window.ODDCore=window.ODDCore||{};window.ODDCore["inline-form-error-alert"]={init};document.querySelectorAll('[data-odd-component="'+"inline-form-error-alert"+'"]').forEach(init);
})();
