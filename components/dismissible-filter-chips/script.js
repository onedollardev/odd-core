(() => {
 const mounted=new WeakMap();
 function init(root){
  if(!root||root.dataset.oddComponent!=="dismissible-filter-chips")throw new Error('Expected '+"dismissible-filter-chips"+' root');if(mounted.has(root))return mounted.get(root);
  const controller=new AbortController(),options={signal:controller.signal},cleanups=[];
  const instance=globalThis.crypto?.randomUUID?.()||Date.now().toString(36)+'-'+Math.random().toString(36).slice(2);
  const q=s=>root.querySelector(s),qa=s=>[...root.querySelectorAll(s)];
  const remap=new Map();qa('[id]').forEach((el,i)=>{if(document.querySelectorAll('[id="'+CSS.escape(el.id)+'"]').length>1){const old=el.id;el.id='odd-'+instance+'-authored-'+i;remap.set(old,el.id);}});qa('[aria-controls],[aria-describedby],[aria-labelledby],a[href^="#"]').forEach(el=>{['aria-controls','aria-describedby','aria-labelledby'].forEach(a=>{if(el.hasAttribute(a))el.setAttribute(a,el.getAttribute(a).split(' ').map(v=>remap.get(v)||v).join(' '));});if(el.hasAttribute('href')){const v=el.getAttribute('href').slice(1);if(remap.has(v))el.setAttribute('href','#'+remap.get(v));}});
  const on=(el,type,fn)=>{if(el)el.addEventListener(type,fn,options);};
  const id=(el,part='part')=>{if(!el.id||document.querySelectorAll('[id="'+CSS.escape(el.id)+'"]').length>1)el.id='odd-'+"dismissible-filter-chips"+'-'+instance+'-'+part;return el.id;};
  const emit=value=>root.dispatchEvent(new CustomEvent('odd:change',{bubbles:true,detail:{component:"dismissible-filter-chips",version:'1.0.0',contractVersion:'1.0.0',instanceId:instance,value,source:'user'}}));
  const status=q('[data-odd-part="status"]');const say=t=>{if(status)status.textContent=t;};
  const act=name=>q('[data-odd-action="'+name+'"]');
  const form=root.closest('form')||q('form');const reset=fn=>{on(form,'reset',()=>{setTimeout(()=>{if(!controller.signal.aborted)fn();},0);});};
  const chips=qa('li[data-odd-value]'),restore=act('restore');function values(){return chips.filter(c=>!c.hidden).map(c=>c.dataset.oddValue);}function changed(){emit({values:values()});}chips.forEach((chip,i)=>on(chip.querySelector('button'),'click',()=>{chip.hidden=true;const remaining=chips.filter(c=>!c.hidden);(remaining.find(c=>chips.indexOf(c)>i)||remaining.at(-1))?.querySelector('button').focus();if(!remaining.length)restore.focus();say(chip.dataset.oddValue+' removed');changed();}));on(act('clear'),'click',()=>{chips.forEach(c=>c.hidden=true);restore.focus();say('Filters cleared');changed();});on(restore,'click',()=>{chips.forEach(c=>c.hidden=false);say('Filters restored');changed();});
  const api={ destroy(){controller.abort();cleanups.forEach(fn=>fn());mounted.delete(root);}};mounted.set(root,api);
  root.dispatchEvent(new CustomEvent('odd:ready',{bubbles:true,detail:{component:"dismissible-filter-chips",version:'1.0.0',contractVersion:'1.0.0',instanceId:instance}}));return api;
 }
 window.ODDCore=window.ODDCore||{};window.ODDCore["dismissible-filter-chips"]={init};document.querySelectorAll('[data-odd-component="'+"dismissible-filter-chips"+'"]').forEach(init);
})();