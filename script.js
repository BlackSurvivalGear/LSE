const menuToggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
if(menuToggle&&nav){
  menuToggle.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded',String(open));
    menuToggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');
  });
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded','false');
  }));
}

const year=document.getElementById('year');
if(year)year.textContent=new Date().getFullYear();

const header=document.querySelector('.site-header');
let lastY=0;
window.addEventListener('scroll',()=>{
  const y=window.scrollY;
  if(header){
    header.style.transform=y>lastY&&y>160?'translateY(-100%)':'translateY(0)';
    header.style.transition='transform .25s ease';
  }
  lastY=y;
},{passive:true});

(()=>{
  const splash=document.createElement('div');
  splash.className='lse-splash';
  splash.setAttribute('role','status');
  splash.setAttribute('aria-label','Loading Living Solution Engineering Gambia');
  splash.innerHTML='<div class="lse-splash-bg"></div><div class="lse-splash-overlay"></div><div class="lse-splash-content"><img src="LOGO.png" alt="Living Solution Engineering Gambia"><p>LIVING SOLUTION</p><strong>ENGINEERING</strong><small>GAMBIA</small></div>';
  Object.assign(splash.style,{position:'fixed',inset:'0',zIndex:'9999',display:'grid',placeItems:'center',overflow:'hidden',background:'#061a30',opacity:'1',visibility:'visible',transition:'opacity .7s ease, visibility .7s ease'});
  const bg=splash.querySelector('.lse-splash-bg');
  Object.assign(bg.style,{position:'absolute',inset:'0',background:"url('3.png') center center/cover no-repeat",transform:'scale(1.02)'});
  const overlay=splash.querySelector('.lse-splash-overlay');
  Object.assign(overlay.style,{position:'absolute',inset:'0',background:'linear-gradient(90deg,rgba(3,17,31,.78),rgba(3,17,31,.34)),linear-gradient(0deg,rgba(3,17,31,.62),rgba(3,17,31,.12))'});
  const content=splash.querySelector('.lse-splash-content');
  Object.assign(content.style,{position:'relative',zIndex:'2',display:'flex',flexDirection:'column',alignItems:'center',textAlign:'center',color:'#fff',fontFamily:'Manrope,Arial,sans-serif',letterSpacing:'.12em',textShadow:'0 2px 16px rgba(0,0,0,.35)'});
  const logo=splash.querySelector('img');
  Object.assign(logo.style,{width:'clamp(110px,16vw,180px)',height:'auto',objectFit:'contain',marginBottom:'24px'});
  const name=splash.querySelector('p');
  Object.assign(name.style,{margin:'0',fontSize:'clamp(18px,3vw,32px)',fontWeight:'800',letterSpacing:'.18em'});
  const engineering=splash.querySelector('strong');
  Object.assign(engineering.style,{fontSize:'clamp(18px,3vw,32px)',fontWeight:'800',color:'#e2ad2f',letterSpacing:'.18em'});
  const location=splash.querySelector('small');
  Object.assign(location.style,{marginTop:'9px',fontSize:'clamp(9px,1.4vw,13px)',fontWeight:'800',letterSpacing:'.55em'});
  document.body.appendChild(splash);
  const removeSplash=()=>{
    splash.style.opacity='0';
    splash.style.visibility='hidden';
    setTimeout(()=>splash.remove(),750);
  };
  window.setTimeout(removeSplash,2000);
})();

(()=>{
  if(!location.pathname.endsWith('/social.html')&&!location.pathname.endsWith('social.html'))return;
  const frame=document.getElementById('ytVideoFrame');
  const poster=document.getElementById('ytVideoPoster');
  if(frame&&poster){
    const videoId=frame.getAttribute('data-video-id')||'3bxJgyWSaGM';
    const loadIframe=()=>{
      const iframe=document.createElement('iframe');
      iframe.src=`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
      iframe.title='Solomon Building Contractor - featured video';
      iframe.setAttribute('allow','accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
      iframe.setAttribute('allowfullscreen','true');
      iframe.setAttribute('referrerpolicy','strict-origin-when-cross-origin');
      iframe.style.width='100%';
      iframe.style.height='100%';
      iframe.style.border='0';
      frame.innerHTML='';
      frame.appendChild(iframe);
    };
    poster.addEventListener('click',loadIframe);
    poster.addEventListener('keydown',(e)=>{
      if(e.key==='Enter'||e.key===' '){
        e.preventDefault();
        loadIframe();
      }
    });
  }
  const tiktok=document.querySelector('.tiktok-embed');
  if(tiktok)tiktok.setAttribute('data-embed-from','LSE Social');
})();
