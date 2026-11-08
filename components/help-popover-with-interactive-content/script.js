(() => {
 const mounted=new WeakMap();
 function init(root){
  if(!root||root.dataset.oddComponent!=="help-popover-with-interactive-content")throw new Error('Expected '+"help-popover-with-interactive-content"+' root');if(mounted.has(root))return mounted.get(root);
  const controller=new AbortController(),options={signal:controller.signal},cleanups=[];
  const instance=globalThis.crypto?.randomUUID?.()||Date.now().toString(36)+'-'+Math.random().toString(36).slice(2);
  const q=s=>root.querySelector(s),qa=s=>[...root.querySelectorAll(s)];
  const remap=new Map();qa('[id]').forEach((el,i)=>{if(document.querySelectorAll('[id="'+CSS.escape(el.id)+'"]').length>1){const old=el.id;el.id='odd-'+instance+'-authored-'+i;remap.set(old,el.id);}});qa('[aria-controls],[aria-describedby],[aria-labelledby],a[href^="#"]').forEach(el=>{['aria-controls','aria-describedby','aria-labelledby'].forEach(a=>{if(el.hasAttribute(a))el.setAttribute(a,el.getAttribute(a).split(' ').map(v=>remap.get(v)||v).join(' '));});if(el.hasAttribute('href')){const v=el.getAttribute('href').slice(1);if(remap.has(v))el.setAttribute('href','#'+remap.get(v));}});
  const on=(el,type,fn)=>{if(el)el.addEventListener(type,fn,options);};
  const id=(el,part='part')=>{if(!el.id||document.querySelectorAll('[id="'+CSS.escape(el.id)+'"]').length>1)el.id='odd-'+"help-popover-with-interactive-content"+'-'+instance+'-'+part;return el.id;};
  const emit=value=>root.dispatchEvent(new CustomEvent('odd:change',{bubbles:true,detail:{component:"help-popover-with-interactive-content",version:'1.0.0',contractVersion:'1.0.0',instanceId:instance,value,source:'user'}}));
  const status=q('[data-odd-part="status"]');const say=t=>{if(status)status.textContent=t;};
  const act=name=>q('[data-odd-action="'+name+'"]');
  const form=root.closest('form')||q('form');const reset=fn=>{on(form,'reset',()=>{setTimeout(()=>{if(!controller.signal.aborted)fn();},0);});};
  const trigger=act('open'),panel=q('[data-odd-part=help]'),heading=q('[data-odd-part=heading]');trigger.setAttribute('aria-controls',id(panel,'help'));panel.setAttribute('aria-labelledby',id(heading,'heading'));function close(focus=true){panel.hidden=true;trigger.setAttribute('aria-expanded','false');if(focus)trigger.focus();emit({open:false});}on(trigger,'click',()=>{if(!panel.hidden){close();return;}panel.hidden=false;trigger.setAttribute('aria-expanded','true');panel.querySelector('a').focus();emit({open:true});});on(act('close'),'click',()=>close());on(root,'keydown',e=>{if(e.key==='Escape'&&!panel.hidden){e.preventDefault();close();}});on(document,'pointerdown',e=>{if(!root.contains(e.target)&&!panel.hidden)close(false);});on(root,'focusout',()=>queueMicrotask(()=>{if(!root.contains(document.activeElement)&&!panel.hidden)close(false);}));
  const api={ destroy(){controller.abort();cleanups.forEach(fn=>fn());mounted.delete(root);}};mounted.set(root,api);
  root.dispatchEvent(new CustomEvent('odd:ready',{bubbles:true,detail:{component:"help-popover-with-interactive-content",version:'1.0.0',contractVersion:'1.0.0',instanceId:instance}}));return api;
 }
 window.ODDCore=window.ODDCore||{};window.ODDCore["help-popover-with-interactive-content"]={init};document.querySelectorAll('[data-odd-component="'+"help-popover-with-interactive-content"+'"]').forEach(init);
})();