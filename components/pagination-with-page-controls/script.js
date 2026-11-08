(() => {
 const mounted=new WeakMap();
 function init(root){
  if(!root||root.dataset.oddComponent!=="pagination-with-page-controls")throw new Error('Expected '+"pagination-with-page-controls"+' root');if(mounted.has(root))return mounted.get(root);
  const controller=new AbortController(),options={signal:controller.signal},cleanups=[];
  const instance=globalThis.crypto?.randomUUID?.()||Date.now().toString(36)+'-'+Math.random().toString(36).slice(2);
  const q=s=>root.querySelector(s),qa=s=>[...root.querySelectorAll(s)];
  const remap=new Map();qa('[id]').forEach((el,i)=>{if(document.querySelectorAll('[id="'+CSS.escape(el.id)+'"]').length>1){const old=el.id;el.id='odd-'+instance+'-authored-'+i;remap.set(old,el.id);}});qa('[aria-controls],[aria-describedby],[aria-labelledby],a[href^="#"]').forEach(el=>{['aria-controls','aria-describedby','aria-labelledby'].forEach(a=>{if(el.hasAttribute(a))el.setAttribute(a,el.getAttribute(a).split(' ').map(v=>remap.get(v)||v).join(' '));});if(el.hasAttribute('href')){const v=el.getAttribute('href').slice(1);if(remap.has(v))el.setAttribute('href','#'+remap.get(v));}});
  const on=(el,type,fn)=>{if(el)el.addEventListener(type,fn,options);};
  const id=(el,part='part')=>{if(!el.id||document.querySelectorAll('[id="'+CSS.escape(el.id)+'"]').length>1)el.id='odd-'+"pagination-with-page-controls"+'-'+instance+'-'+part;return el.id;};
  const emit=value=>root.dispatchEvent(new CustomEvent('odd:change',{bubbles:true,detail:{component:"pagination-with-page-controls",version:'1.0.0',contractVersion:'1.0.0',instanceId:instance,value,source:'user'}}));
  const status=q('[data-odd-part="status"]');const say=t=>{if(status)status.textContent=t;};
  const act=name=>q('[data-odd-action="'+name+'"]');
  const form=root.closest('form')||q('form');const reset=fn=>{on(form,'reset',()=>{setTimeout(()=>{if(!controller.signal.aborted)fn();},0);});};
  let current=1,total=Math.max(1,Number(root.dataset.oddPages)||8);const pager=q('[data-odd-part=pager]');function setPage(n,announce=true){current=Math.max(1,Math.min(total,Math.floor(Number(n)||1)));pager.replaceChildren();const values=[...new Set([1,current-1,current,current+1,total].filter(n=>n>=1&&n<=total))].sort((a,b)=>a-b);const make=(label,n,disabled=false)=>{const b=document.createElement('button');b.type='button';b.className='oddButton oddSecondary oddPage';b.textContent=label;b.disabled=disabled;b.setAttribute('aria-label',typeof label==='number'?'Page '+n:label);if(label===current)b.setAttribute('aria-current','page');on(b,'click',()=>{setPage(n);q('[aria-current=page]')?.focus();});pager.append(b);};make('‹',current-1,current===1);pager.lastElementChild.setAttribute('aria-label','Previous page');let prev=0;values.forEach(n=>{if(prev&&n-prev>1){const gap=document.createElement('span');gap.textContent='…';gap.setAttribute('aria-hidden','true');pager.append(gap);}make(n,n);prev=n;});make('›',current+1,current===total);pager.lastElementChild.setAttribute('aria-label','Next page');q('[data-odd-part=sample]').textContent='Sample page '+current; if(announce){say('Page '+current+' of '+total);emit({page:current});}}setPage(1,false);
  const api={setPage, destroy(){controller.abort();cleanups.forEach(fn=>fn());mounted.delete(root);}};mounted.set(root,api);
  root.dispatchEvent(new CustomEvent('odd:ready',{bubbles:true,detail:{component:"pagination-with-page-controls",version:'1.0.0',contractVersion:'1.0.0',instanceId:instance}}));return api;
 }
 window.ODDCore=window.ODDCore||{};window.ODDCore["pagination-with-page-controls"]={init};document.querySelectorAll('[data-odd-component="'+"pagination-with-page-controls"+'"]').forEach(init);
})();