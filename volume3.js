(()=>{'use strict';
try{
  const value=window.V3_CODE||'';
  const binary=window.atob(value);
  let source;
  if(typeof TextDecoder==='function'){
    const bytes=new Uint8Array(binary.length);
    for(let i=0;i<binary.length;i++)bytes[i]=binary.charCodeAt(i);
    source=new TextDecoder('utf-8').decode(bytes);
  }else{
    let encoded='';
    for(let i=0;i<binary.length;i++)encoded+='%'+binary.charCodeAt(i).toString(16).padStart(2,'0');
    source=decodeURIComponent(encoded);
  }
  delete window.V3_CODE;
  (0,eval)(source);
}catch(error){
  console.error('Volume 3 startup failed',error);
  const box=document.createElement('div');
  box.style.cssText='position:fixed;inset:20px;z-index:9999;display:grid;place-items:center;padding:24px;border-radius:22px;background:#fff8ef;color:#402a22;text-align:center;font:700 18px system-ui;box-shadow:0 20px 70px rgba(0,0,0,.28)';
  box.innerHTML='<div><h2 style="margin:0 0 10px">Volume 3 could not start</h2><p style="font-weight:500">Close this tab and reopen Volume 3 from the Versions screen.</p></div>';
  document.body.appendChild(box);
}
})();
