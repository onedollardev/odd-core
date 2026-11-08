"""Validate and package the Core Button migration candidate. Never deploy."""
import argparse,datetime,hashlib,json,pathlib,re,zipfile
ROOT=pathlib.Path(__file__).resolve().parents[1]
CSS_SHA='92bd1b1fb8c0dad65b36de0e5bc4234fb983dfa3666700e3484fb64d0f4d0c9d'
def build(out,ref):
 if not re.fullmatch('[a-f0-9]{40}',ref):raise ValueError('full commit SHA required')
 source=ROOT/'components/button';m=json.loads((source/'product.json').read_text());css=(ROOT/'odd-core.css').read_bytes()
 if hashlib.sha256(css).hexdigest()!=CSS_SHA:raise ValueError('shared CSS changed; review and update pin')
 if m['sku']!='ODD-CORE-000001' or m['price']!=0 or m['currency']!='usd' or m['license']!='MIT':raise ValueError('invalid Core identity, price or license')
 if not re.fullmatch(r'(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)',m['version']):raise ValueError('invalid version')
 html=(source/'index.html').read_text();link='<link rel="stylesheet" href="../../odd-core.css">'
 if html.count(link)!=1 or '<?' in html:raise ValueError('unexpected source dependency or PHP')
 standalone=html.replace(link,'<link rel="stylesheet" href="odd-core.css">')
 preview=html.replace(link,'<style>'+css.decode()+'</style>')
 entries={'index.html':standalone.encode(),'odd-core.css':css,'README.md':(source/'README.md').read_bytes(),'LICENSE.txt':(ROOT/'LICENSE').read_bytes(),'product.json':(source/'product.json').read_bytes()}
 out.mkdir(parents=True,exist_ok=True);dest=out/('button-'+m['version']+'.zip')
 with dest.open('xb') as stream:
  with zipfile.ZipFile(stream,'w',zipfile.ZIP_DEFLATED) as z:
   for name,data in sorted(entries.items()):
    i=zipfile.ZipInfo(name,(1980,1,1,0,0,0));i.compress_type=zipfile.ZIP_DEFLATED;i.external_attr=0o100644<<16;z.writestr(i,data)
 with zipfile.ZipFile(dest) as z:
  if z.testzip() or set(z.namelist())!=set(entries):raise ValueError('archive integrity failure')
 digest=hashlib.sha256(dest.read_bytes()).hexdigest();manifest={'sku':m['sku'],'version':m['version'],'build_reference':ref,'release_filename':dest.name,'sha256':digest,'date':datetime.datetime.now(datetime.timezone.utc).isoformat(),'candidate_only':True,'shared_css_sha256':CSS_SHA}
 (out/'manifest.json').write_text(json.dumps(manifest,indent=2)+'\n');(out/(dest.name+'.sha256')).write_text(digest+'  '+dest.name+'\n')
 (out/'preview.html').write_text(preview);(out/'preview.php').write_text(preview)
 return manifest
if __name__=='__main__':
 p=argparse.ArgumentParser();p.add_argument('--out',type=pathlib.Path,default=ROOT/'build');p.add_argument('--ref',required=True);a=p.parse_args();print(json.dumps(build(a.out,a.ref)))
