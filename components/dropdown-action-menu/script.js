(() => {
 const mounted=new WeakMap();
 function init(root){
  if(!root||root.dataset.oddComponent!=="dropdown-action-menu")throw new Error('Expected '+"dropdown-action-menu"+' root');if(mounted.has(root))return mounted.get(root);
  const controller=new AbortController(),options={signal:controller.signal},cleanups=[];
  const instance=globalThis.crypto?.randomUUID?.()||Date.now().toString(36)+'-'+Math.random().toString(36).slice(2);
  const q=s=>root.querySelector(s),qa=s=>[...root.querySelectorAll(s)];
  const remap=new Map();qa('[id]').forEach((el,i)=>{if(document.querySelectorAll('[id="'+CSS.escape(el.id)+'"]').length>1){const old=el.id;el.id='odd-'+instance+'-authored-'+i;remap.set(old,el.id);}});qa('[aria-controls],[aria-describedby],[aria-labelledby],a[href^="#"]').forEach(el=>{['aria-controls','aria-describedby','aria-labelledby'].forEach(a=>{if(el.hasAttribute(a))el.setAttribute(a,el.getAttribute(a).split(' ').map(v=>remap.get(v)||v).join(' '));});if(el.hasAttribute('href')){const v=el.getAttribute('href').slice(1);if(remap.has(v))el.setAttribute('href','#'+remap.get(v));}});
  const on=(el,type,fn)=>{if(el)el.addEventListener(type,fn,options);};
  const id=(el,part='part')=>{if(!el.id||document.querySelectorAll('[id="'+CSS.escape(el.id)+'"]').length>1)el.id='odd-'+"dropdown-action-menu"+'-'+instance+'-'+part;return el.id;};
  const emit=value=>root.dispatchEvent(new CustomEvent('odd:change',{bubbles:true,detail:{component:"dropdown-action-menu",version:'1.0.0',contractVersion:'1.0.0',instanceId:instance,value,source:'user'}}));
  const status=q('[data-odd-part="status"]');const say=t=>{if(status)status.textContent=t;};
  const act=name=>q('[data-odd-action="'+name+'"]');
  const form=root.closest('form')||q('form');const reset=fn=>{on(form,'reset',()=>{setTimeout(()=>{if(!controller.signal.aborted)fn();},0);});};
  const trigger=act('menu'),menu=q('[role=menu]'),items=qa('[role=menuitem]:not(:disabled)');trigger.setAttribute('aria-controls',id(menu,'menu'));let open=false;
function close(focus=false){open=false;menu.hidden=true;trigger.setAttribute('aria-expanded','false');if(focus)trigger.focus();}
function show(last=false){open=true;menu.hidden=false;trigger.setAttribute('aria-expanded','true');items[last?items.length-1:0]?.focus();}
on(trigger,'click',()=>open?close(true):show());on(trigger,'keydown',e=>{if(['ArrowDown','ArrowUp'].includes(e.key)){e.preventDefault();show(e.key==='ArrowUp');}});
items.forEach((item,i)=>{on(item,'click',()=>{emit({action:item.dataset.oddValue});say(item.textContent.trim()+' selected');close(true);});on(item,'keydown',e=>{let n;if(e.key==='ArrowDown')n=(i+1)%items.length;if(e.key==='ArrowUp')n=(i+items.length-1)%items.length;if(e.key==='Home')n=0;if(e.key==='End')n=items.length-1;if(n!==undefined){e.preventDefault();items[n].focus();}if(e.key==='Tab')close();});});
on(root,'keydown',e=>{if(e.key==='Escape'&&open){e.preventDefault();close(true);}});on(document,'pointerdown',e=>{if(!root.contains(e.target))close();});on(root,'focusout',()=>queueMicrotask(()=>{if(!root.contains(document.activeElement))close();}));
  const api={ destroy(){controller.abort();cleanups.forEach(fn=>fn());mounted.delete(root);}};mounted.set(root,api);
  root.dispatchEvent(new CustomEvent('odd:ready',{bubbles:true,detail:{component:"dropdown-action-menu",version:'1.0.0',contractVersion:'1.0.0',instanceId:instance}}));return api;
 }
 window.ODDCore=window.ODDCore||{};window.ODDCore["dropdown-action-menu"]={init};document.querySelectorAll('[data-odd-component="'+"dropdown-action-menu"+'"]').forEach(init);
})();