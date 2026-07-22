(()=>{'use strict';

const hissFallbacks=new WeakMap();

function stopHissFallback(media){
  const state=hissFallbacks.get(media);
  if(!state)return;
  hissFallbacks.delete(media);
  try{
    const now=state.ctx.currentTime;
    state.gain.gain.cancelScheduledValues(now);
    state.gain.gain.setValueAtTime(Math.max(.0001,state.gain.gain.value),now);
    state.gain.gain.exponentialRampToValueAtTime(.0001,now+.045);
    setTimeout(()=>{try{state.source.stop()}catch{}},55);
  }catch{
    try{state.source.stop()}catch{}
  }
}

function startHissFallback(media){
  if(media.muted||!media.loop||hissFallbacks.has(media))return;
  const AudioContextClass=window.AudioContext||window.webkitAudioContext;
  if(!AudioContextClass)return;
  const ctx=window.__akpV3HissContext||(window.__akpV3HissContext=new AudioContextClass());
  if(ctx.state==='suspended')ctx.resume().catch(()=>{});
  const length=Math.max(1,Math.floor(ctx.sampleRate*.7));
  const buffer=ctx.createBuffer(1,length,ctx.sampleRate);
  const data=buffer.getChannelData(0);
  for(let i=0;i<length;i++)data[i]=(Math.random()*2-1)*(1-i/length*.22);
  const source=ctx.createBufferSource();
  const filter=ctx.createBiquadFilter();
  const gain=ctx.createGain();
  source.buffer=buffer;
  source.loop=true;
  filter.type='bandpass';
  filter.frequency.value=4300;
  filter.Q.value=.72;
  gain.gain.setValueAtTime(.0001,ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(.08,ctx.currentTime+.045);
  source.connect(filter).connect(gain).connect(ctx.destination);
  source.start();
  hissFallbacks.set(media,{ctx,source,gain});
}

const nativePlay=HTMLMediaElement.prototype.play;
const nativePause=HTMLMediaElement.prototype.pause;

HTMLMediaElement.prototype.play=function(...args){
  const media=this;
  const isLoopedHiss=media.loop&&typeof media.src==='string'&&(
    media.src.startsWith('data:audio/')||media.src.endsWith('/assets/audio/stubborn-hiss.mp3')
  );
  let confirmed=false;
  let timer=null;

  if(isLoopedHiss&&!media.muted){
    const onPlaying=()=>{
      confirmed=true;
      clearTimeout(timer);
      stopHissFallback(media);
    };
    media.addEventListener('playing',onPlaying,{once:true});
    timer=setTimeout(()=>{
      if(!confirmed||media.paused)startHissFallback(media);
    },260);
  }

  let result;
  try{
    result=nativePlay.apply(media,args);
  }catch(error){
    if(isLoopedHiss&&!media.muted)startHissFallback(media);
    throw error;
  }

  if(result&&typeof result.catch==='function'){
    result.catch(()=>{
      if(isLoopedHiss&&!media.muted)startHissFallback(media);
    });
  }
  return result;
};

HTMLMediaElement.prototype.pause=function(...args){
  stopHissFallback(this);
  return nativePause.apply(this,args);
};

function installBackgroundMusic(){
  const music=new Audio('audio/quirky-loop.mp3');
  music.id='backgroundMusic';
  music.setAttribute('aria-hidden','true');
  music.style.display='none';
  music.preload='auto';
  music.loop=true;
  music.volume=.3;
  document.body.appendChild(music);
  window.__akpV3BackgroundMusic=music;

  const musicEnabled=()=>{
    try{return !JSON.parse(localStorage.getItem('akpV3MusicMuted')||'false')}
    catch{return true}
  };
  const modalIsOpen=()=>[...document.querySelectorAll('.modal')].some(modal=>!modal.classList.contains('hidden'));
  const shouldPlay=()=>{
    const pauseButton=document.querySelector('#pauseBtn');
    const endOverlay=document.querySelector('#endOverlay');
    return musicEnabled()
      &&document.body.dataset.screen==='play'
      &&pauseButton?.textContent.trim()!=='Resume'
      &&!modalIsOpen()
      &&(!endOverlay||endOverlay.classList.contains('hidden'));
  };
  const sync=()=>{
    if(shouldPlay()){
      const result=music.play();
      if(result&&typeof result.catch==='function')result.catch(()=>{});
    }else{
      music.pause();
    }
  };

  [
    '#briefingBtn','#startBtn','#lobbyMusic','#musicBtn','#pauseBtn',
    '#menuBtn','#helpBtn','#closeHelp','#lessonBtn','#overlayBtn','#closeAdmin'
  ].forEach(selector=>document.querySelector(selector)?.addEventListener('click',sync));

  const observer=new MutationObserver(sync);
  observer.observe(document.body,{attributes:true,subtree:true,attributeFilter:['class','data-screen']});
  document.addEventListener('visibilitychange',()=>document.hidden?music.pause():sync());
  window.addEventListener('pagehide',()=>music.pause());
  sync();
}

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
  installBackgroundMusic();
}catch(error){
  console.error('Volume 3 startup failed',error);
  const box=document.createElement('div');
  box.style.cssText='position:fixed;inset:20px;z-index:9999;display:grid;place-items:center;padding:24px;border-radius:22px;background:#fff8ef;color:#402a22;text-align:center;font:700 18px system-ui;box-shadow:0 20px 70px rgba(0,0,0,.28)';
  box.innerHTML='<div><h2 style="margin:0 0 10px">Volume 3 could not start</h2><p style="font-weight:500">Close this tab and reopen Volume 3 from the Versions screen.</p></div>';
  document.body.appendChild(box);
}
})();
