(() => {
 const mounted=new WeakMap();
 function init(root){
  if(!root||root.dataset.oddComponent!=="keyboard-accessible-action-toolbar")throw new Error('Expected '+"keyboard-accessible-action-toolbar"+' root');if(mounted.has(root))return mounted.get(root);
  const controller=new AbortController(),options={signal:controller.signal},cleanups=[];
  const instance=globalThis.crypto?.randomUUID?.()||Date.now().toString(36)+'-'+Math.random().toString(36).slice(2);
  const q=s=>root.querySelector(s),qa=s=>[...root.querySelectorAll(s)];
  const remap=new Map();qa('[id]').forEach((el,i)=>{if(document.querySelectorAll('[id="'+CSS.escape(el.id)+'"]').length>1){const old=el.id;el.id='odd-'+instance+'-authored-'+i;remap.set(old,el.id);}});qa('[aria-controls],[aria-describedby],[aria-labelledby],a[href^="#"]').forEach(el=>{['aria-controls','aria-describedby','aria-labelledby'].forEach(a=>{if(el.hasAttribute(a))el.setAttribute(a,el.getAttribute(a).split(' ').map(v=>remap.get(v)||v).join(' '));});if(el.hasAttribute('href')){const v=el.getAttribute('href').slice(1);if(remap.has(v))el.setAttribute('href','#'+remap.get(v));}});
  const on=(el,type,fn)=>{if(el)el.addEventListener(type,fn,options);};
  const id=(el,part='part')=>{if(!el.id||document.querySelectorAll('[id="'+CSS.escape(el.id)+'"]').length>1)el.id='odd-'+"keyboard-accessible-action-toolbar"+'-'+instance+'-'+part;return el.id;};
  const emit=value=>root.dispatchEvent(new CustomEvent('odd:change',{bubbles:true,detail:{component:"keyboard-accessible-action-toolbar",version:'1.0.0',contractVersion:'1.0.0',instanceId:instance,value,source:'user'}}));
  const status=q('[data-odd-part="status"]');const say=t=>{if(status)status.textContent=t;};
  const act=name=>q('[data-odd-action="'+name+'"]');
  const form=root.closest('form')||q('form');const reset=fn=>{on(form,'reset',()=>{setTimeout(()=>{if(!controller.signal.aborted)fn();},0);});};
  const buttons=qa('[role=toolbar] button:not(:disabled)');function focus(n){buttons.forEach((b,i)=>b.tabIndex=i===n?0:-1);buttons[n].focus();}buttons.forEach((b,i)=>{on(b,'click',()=>{if(b.hasAttribute('aria-pressed'))b.setAttribute('aria-pressed',String(b.getAttribute('aria-pressed')!=='true'));say(b.getAttribute('aria-label')+' action');emit({action:b.dataset.oddAction,selected:b.getAttribute('aria-pressed')==='true'});});on(b,'focus',()=>buttons.forEach((x,j)=>x.tabIndex=j===i?0:-1));on(b,'keydown',e=>{let n;const rtl=getComputedStyle(root).direction==='rtl';if(e.key==='ArrowRight')n=(i+(rtl?-1:1)+buttons.length)%buttons.length;if(e.key==='ArrowLeft')n=(i+(rtl?1:-1)+buttons.length)%buttons.length;if(e.key==='Home')n=0;if(e.key==='End')n=buttons.length-1;if(n!==undefined){e.preventDefault();focus(n);}});});
  const api={ destroy(){controller.abort();cleanups.forEach(fn=>fn());mounted.delete(root);}};mounted.set(root,api);
  root.dispatchEvent(new CustomEvent('odd:ready',{bubbles:true,detail:{component:"keyboard-accessible-action-toolbar",version:'1.0.0',contractVersion:'1.0.0',instanceId:instance}}));return api;
 }
 window.ODDCore=window.ODDCore||{};window.ODDCore["keyboard-accessible-action-toolbar"]={init};document.querySelectorAll('[data-odd-component="'+"keyboard-accessible-action-toolbar"+'"]').forEach(init);
})();