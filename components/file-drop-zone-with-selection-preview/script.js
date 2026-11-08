(() => {
 const mounted=new WeakMap();
 function init(root){
  if(!root||root.dataset.oddComponent!=="file-drop-zone-with-selection-preview")throw new Error('Expected '+"file-drop-zone-with-selection-preview"+' root');if(mounted.has(root))return mounted.get(root);
  const controller=new AbortController(),options={signal:controller.signal},cleanups=[];
  const instance=globalThis.crypto?.randomUUID?.()||Date.now().toString(36)+'-'+Math.random().toString(36).slice(2);
  const q=s=>root.querySelector(s),qa=s=>[...root.querySelectorAll(s)];
  const remap=new Map();qa('[id]').forEach((el,i)=>{if(document.querySelectorAll('[id="'+CSS.escape(el.id)+'"]').length>1){const old=el.id;el.id='odd-'+instance+'-authored-'+i;remap.set(old,el.id);}});qa('[aria-controls],[aria-describedby],[aria-labelledby],a[href^="#"]').forEach(el=>{['aria-controls','aria-describedby','aria-labelledby'].forEach(a=>{if(el.hasAttribute(a))el.setAttribute(a,el.getAttribute(a).split(' ').map(v=>remap.get(v)||v).join(' '));});if(el.hasAttribute('href')){const v=el.getAttribute('href').slice(1);if(remap.has(v))el.setAttribute('href','#'+remap.get(v));}});
  const on=(el,type,fn)=>{if(el)el.addEventListener(type,fn,options);};
  const id=(el,part='part')=>{if(!el.id||document.querySelectorAll('[id="'+CSS.escape(el.id)+'"]').length>1)el.id='odd-'+"file-drop-zone-with-selection-preview"+'-'+instance+'-'+part;return el.id;};
  const emit=value=>root.dispatchEvent(new CustomEvent('odd:change',{bubbles:true,detail:{component:"file-drop-zone-with-selection-preview",version:'1.0.0',contractVersion:'1.0.0',instanceId:instance,value,source:'user'}}));
  const status=q('[data-odd-part="status"]');const say=t=>{if(status)status.textContent=t;};
  const act=name=>q('[data-odd-action="'+name+'"]');
  const form=root.closest('form')||q('form');const reset=fn=>{on(form,'reset',()=>{setTimeout(()=>{if(!controller.signal.aborted)fn();},0);});};
  const input=q('input[type=file]'),zone=q('[data-odd-part=drop]'),remove=act('remove');let file=null;const maximum=Number(root.dataset.oddMaxBytes)||10*1024*1024;function clear(){file=null;input.value='';remove.hidden=true;say('No file selected');emit({file:null});}function select(f){if(!f){clear();return;}if(f.size>maximum||(!(/\.pdf$/i.test(f.name))&&f.type!=='application/pdf')){clear();say('Choose a PDF up to '+Math.round(maximum/1024/1024)+' MB.');return;}file=f;remove.hidden=false;say(f.name+' · '+Math.ceil(f.size/1024)+' KB');emit({file:{name:f.name,size:f.size,type:f.type}});}on(input,'change',()=>select(input.files[0]));on(zone,'dragover',e=>{e.preventDefault();zone.dataset.oddDrag='true';});on(zone,'dragleave',()=>delete zone.dataset.oddDrag);on(zone,'drop',e=>{e.preventDefault();delete zone.dataset.oddDrag;const f=e.dataTransfer.files[0];select(f);if(file){try{const transfer=new DataTransfer();transfer.items.add(file);input.files=transfer.files;}catch{say(file.name+' selected locally; use Browse for form submission.');}}});on(remove,'click',()=>{clear();input.focus();});reset(clear);
  const api={getFile(){return file;},clear, destroy(){controller.abort();cleanups.forEach(fn=>fn());mounted.delete(root);}};mounted.set(root,api);
  root.dispatchEvent(new CustomEvent('odd:ready',{bubbles:true,detail:{component:"file-drop-zone-with-selection-preview",version:'1.0.0',contractVersion:'1.0.0',instanceId:instance}}));return api;
 }
 window.ODDCore=window.ODDCore||{};window.ODDCore["file-drop-zone-with-selection-preview"]={init};document.querySelectorAll('[data-odd-component="'+"file-drop-zone-with-selection-preview"+'"]').forEach(init);
})();