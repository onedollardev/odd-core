(() => {
 const mounted=new WeakMap();
 function init(root){
  if(!root||root.dataset.oddComponent!=="button-with-loading-and-completion-states")throw new Error('Expected '+"button-with-loading-and-completion-states"+' root');if(mounted.has(root))return mounted.get(root);
  const controller=new AbortController(),options={signal:controller.signal},cleanups=[];
  const instance=globalThis.crypto?.randomUUID?.()||Date.now().toString(36)+'-'+Math.random().toString(36).slice(2);
  const q=s=>root.querySelector(s),qa=s=>[...root.querySelectorAll(s)];
  const remap=new Map();qa('[id]').forEach((el,i)=>{if(document.querySelectorAll('[id="'+CSS.escape(el.id)+'"]').length>1){const old=el.id;el.id='odd-'+instance+'-authored-'+i;remap.set(old,el.id);}});qa('[aria-controls],[aria-describedby],[aria-labelledby],a[href^="#"]').forEach(el=>{['aria-controls','aria-describedby','aria-labelledby'].forEach(a=>{if(el.hasAttribute(a))el.setAttribute(a,el.getAttribute(a).split(' ').map(v=>remap.get(v)||v).join(' '));});if(el.hasAttribute('href')){const v=el.getAttribute('href').slice(1);if(remap.has(v))el.setAttribute('href','#'+remap.get(v));}});
  const on=(el,type,fn)=>{if(el)el.addEventListener(type,fn,options);};
  const id=(el,part='part')=>{if(!el.id||document.querySelectorAll('[id="'+CSS.escape(el.id)+'"]').length>1)el.id='odd-'+"button-with-loading-and-completion-states"+'-'+instance+'-'+part;return el.id;};
  const emit=value=>root.dispatchEvent(new CustomEvent('odd:change',{bubbles:true,detail:{component:"button-with-loading-and-completion-states",version:'1.0.0',contractVersion:'1.0.0',instanceId:instance,value,source:'user'}}));
  const status=q('[data-odd-part="status"]');const say=t=>{if(status)status.textContent=t;};
  const act=name=>q('[data-odd-action="'+name+'"]');
  const form=root.closest('form')||q('form');const reset=fn=>{on(form,'reset',()=>{setTimeout(()=>{if(!controller.signal.aborted)fn();},0);});};
  const button=act('run'),spinner=q('[data-odd-part=spinner]'),text=q('[data-odd-part=label]');let timer,state='default';function setState(s){state=s;root.dataset.oddState=s;button.setAttribute('aria-busy',String(s==='busy'));button.setAttribute('aria-disabled',String(s==='busy'));spinner.hidden=s!=='busy';text.textContent=({default:'Run demo',busy:'Working…',success:'Complete',error:'Retry demo'})[s];say(({default:'Local demonstration',busy:'Running local demonstration',success:'Demo completed',error:'Demo failed. Try again.'})[s]);emit({state:s});}on(button,'click',()=>{if(state==='busy'||state==='success')return;setState('busy');timer=setTimeout(()=>setState(q('[data-odd-part=fail]').checked?'error':'success'),700);});on(act('reset'),'click',()=>{clearTimeout(timer);setState('default');});cleanups.push(()=>{clearTimeout(timer);button.removeAttribute('aria-disabled');button.setAttribute('aria-busy','false');spinner.hidden=true;text.textContent='Run demo';});
  const api={setState, destroy(){controller.abort();cleanups.forEach(fn=>fn());mounted.delete(root);}};mounted.set(root,api);
  root.dispatchEvent(new CustomEvent('odd:ready',{bubbles:true,detail:{component:"button-with-loading-and-completion-states",version:'1.0.0',contractVersion:'1.0.0',instanceId:instance}}));return api;
 }
 window.ODDCore=window.ODDCore||{};window.ODDCore["button-with-loading-and-completion-states"]={init};document.querySelectorAll('[data-odd-component="'+"button-with-loading-and-completion-states"+'"]').forEach(init);
})();