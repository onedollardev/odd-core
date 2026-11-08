(() => {
 const mounted=new WeakMap();
 function init(root){
  if(!root||root.dataset.oddComponent!=="vertical-tabs")throw new Error('Expected '+"vertical-tabs"+' root');if(mounted.has(root))return mounted.get(root);
  const controller=new AbortController(),options={signal:controller.signal},cleanups=[];
  const instance=globalThis.crypto?.randomUUID?.()||Date.now().toString(36)+'-'+Math.random().toString(36).slice(2);
  const q=s=>root.querySelector(s),qa=s=>[...root.querySelectorAll(s)];
  const remap=new Map();qa('[id]').forEach((el,i)=>{if(document.querySelectorAll('[id="'+CSS.escape(el.id)+'"]').length>1){const old=el.id;el.id='odd-'+instance+'-authored-'+i;remap.set(old,el.id);}});qa('[aria-controls],[aria-describedby],[aria-labelledby],a[href^="#"]').forEach(el=>{['aria-controls','aria-describedby','aria-labelledby'].forEach(a=>{if(el.hasAttribute(a))el.setAttribute(a,el.getAttribute(a).split(' ').map(v=>remap.get(v)||v).join(' '));});if(el.hasAttribute('href')){const v=el.getAttribute('href').slice(1);if(remap.has(v))el.setAttribute('href','#'+remap.get(v));}});
  const on=(el,type,fn)=>{if(el)el.addEventListener(type,fn,options);};
  const id=(el,part='part')=>{if(!el.id||document.querySelectorAll('[id="'+CSS.escape(el.id)+'"]').length>1)el.id='odd-'+"vertical-tabs"+'-'+instance+'-'+part;return el.id;};
  const emit=value=>root.dispatchEvent(new CustomEvent('odd:change',{bubbles:true,detail:{component:"vertical-tabs",version:'1.0.0',contractVersion:'1.0.0',instanceId:instance,value,source:'user'}}));
  const status=q('[data-odd-part="status"]');const say=t=>{if(status)status.textContent=t;};
  const act=name=>q('[data-odd-action="'+name+'"]');
  const form=root.closest('form')||q('form');const reset=fn=>{on(form,'reset',()=>{setTimeout(()=>{if(!controller.signal.aborted)fn();},0);});};
  const tabs=qa('[role=tab]'),panels=qa('[role=tabpanel]');tabs.forEach((tab,i)=>{tab.setAttribute('aria-controls',id(panels[i],'panel-'+i));panels[i].setAttribute('aria-labelledby',id(tab,'tab-'+i));});function select(n,focus=false){tabs.forEach((t,i)=>{t.tabIndex=i===n?0:-1;t.setAttribute('aria-selected',String(i===n));panels[i].hidden=i!==n;});if(focus)tabs[n].focus();emit({value:tabs[n].dataset.oddValue});}tabs.forEach((t,i)=>{on(t,'click',()=>select(i));on(t,'keydown',e=>{let n;if(e.key==='ArrowDown')n=(i+1)%tabs.length;if(e.key==='ArrowUp')n=(i+tabs.length-1)%tabs.length;if(e.key==='Home')n=0;if(e.key==='End')n=tabs.length-1;if(n!==undefined){e.preventDefault();select(n,true);}});});select(Math.max(0,tabs.findIndex(t=>t.getAttribute('aria-selected')==='true')));
  const api={select, destroy(){controller.abort();cleanups.forEach(fn=>fn());mounted.delete(root);}};mounted.set(root,api);
  root.dispatchEvent(new CustomEvent('odd:ready',{bubbles:true,detail:{component:"vertical-tabs",version:'1.0.0',contractVersion:'1.0.0',instanceId:instance}}));return api;
 }
 window.ODDCore=window.ODDCore||{};window.ODDCore["vertical-tabs"]={init};document.querySelectorAll('[data-odd-component="'+"vertical-tabs"+'"]').forEach(init);
})();