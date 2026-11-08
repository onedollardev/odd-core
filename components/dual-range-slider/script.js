(() => {
 const mounted=new WeakMap();
 function init(root){
  if(!root||root.dataset.oddComponent!=="dual-range-slider")throw new Error('Expected '+"dual-range-slider"+' root');if(mounted.has(root))return mounted.get(root);
  const controller=new AbortController(),options={signal:controller.signal},cleanups=[];
  const instance=globalThis.crypto?.randomUUID?.()||Date.now().toString(36)+'-'+Math.random().toString(36).slice(2);
  const q=s=>root.querySelector(s),qa=s=>[...root.querySelectorAll(s)];
  const remap=new Map();qa('[id]').forEach((el,i)=>{if(document.querySelectorAll('[id="'+CSS.escape(el.id)+'"]').length>1){const old=el.id;el.id='odd-'+instance+'-authored-'+i;remap.set(old,el.id);}});qa('[aria-controls],[aria-describedby],[aria-labelledby],a[href^="#"]').forEach(el=>{['aria-controls','aria-describedby','aria-labelledby'].forEach(a=>{if(el.hasAttribute(a))el.setAttribute(a,el.getAttribute(a).split(' ').map(v=>remap.get(v)||v).join(' '));});if(el.hasAttribute('href')){const v=el.getAttribute('href').slice(1);if(remap.has(v))el.setAttribute('href','#'+remap.get(v));}});
  const on=(el,type,fn)=>{if(el)el.addEventListener(type,fn,options);};
  const id=(el,part='part')=>{if(!el.id||document.querySelectorAll('[id="'+CSS.escape(el.id)+'"]').length>1)el.id='odd-'+"dual-range-slider"+'-'+instance+'-'+part;return el.id;};
  const emit=value=>root.dispatchEvent(new CustomEvent('odd:change',{bubbles:true,detail:{component:"dual-range-slider",version:'1.0.0',contractVersion:'1.0.0',instanceId:instance,value,source:'user'}}));
  const status=q('[data-odd-part="status"]');const say=t=>{if(status)status.textContent=t;};
  const act=name=>q('[data-odd-action="'+name+'"]');
  const form=root.closest('form')||q('form');const reset=fn=>{on(form,'reset',()=>{setTimeout(()=>{if(!controller.signal.aborted)fn();},0);});};
  const low=q('[data-odd-part=low]'),high=q('[data-odd-part=high]'),ln=q('[data-odd-part=low-number]'),hn=q('[data-odd-part=high-number]'),fill=q('[data-odd-part=fill]'),output=q('output');const min=Number(low.min),max=Number(high.max),gap=Math.max(0,Math.min(max-min,Number(root.dataset.oddGap)||0));function update(source=low,announce=true){let a=Number((source===ln?ln:low).value),z=Number((source===hn?hn:high).value);a=Math.max(min,Math.min(max,a));z=Math.max(min,Math.min(max,z));if(source===low||source===ln)a=Math.min(a,z-gap);else z=Math.max(z,a+gap);a=Math.max(min,a);z=Math.min(max,z);low.value=ln.value=a;high.value=hn.value=z;low.max=z-gap;high.min=a+gap;ln.max=z-gap;hn.min=a+gap;output.value=a+' – '+z;fill.style.marginInlineStart=((a-min)/(max-min)*100)+'%';fill.style.width=((z-a)/(max-min)*100)+'%';if(announce)emit({min:a,max:z});} [low,high,ln,hn].forEach(el=>on(el,'input',()=>update(el)));reset(()=>{low.min=min;low.max=max;high.min=min;high.max=max;update(low);});update(low,false);
  const api={ destroy(){controller.abort();cleanups.forEach(fn=>fn());mounted.delete(root);}};mounted.set(root,api);
  root.dispatchEvent(new CustomEvent('odd:ready',{bubbles:true,detail:{component:"dual-range-slider",version:'1.0.0',contractVersion:'1.0.0',instanceId:instance}}));return api;
 }
 window.ODDCore=window.ODDCore||{};window.ODDCore["dual-range-slider"]={init};document.querySelectorAll('[data-odd-component="'+"dual-range-slider"+'"]').forEach(init);
})();