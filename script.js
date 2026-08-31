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
    menuToggle.setAttribute('aria-label','Open navigation');
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
  if(!frame||!poster)return;

  const channelId=frame.getAttribute('data-channel-id')||'UUNOc6D_St272mk8d4IsxD8A';
  const fallbackVideoId='3bxJgyWSaGM';
  const channelUrl='https://www.youtube.com/@solomonbuildingcontractort9410';
  const ytLatestUrl=`https://www.youtube.com/embed?listType=playlist&list=${encodeURIComponent(channelId)}&autoplay=1&rel=0&modestbranding=1`;

  const setThumbnail=(videoId)=>{
    const thumbnail=document.getElementById('ytThumbnail');
    if(!thumbnail)return;
    thumbnail.dataset.fallback='';
    thumbnail.src=`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    thumbnail.onerror=()=>{
      if(!thumbnail.dataset.fallback){
        thumbnail.dataset.fallback='1';
        thumbnail.src=`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
      }else{
        thumbnail.style.display='none';
        const fallback=document.getElementById('ytFallbackCard');
        if(fallback)fallback.style.display='flex';
      }
    };
  };

  // Match the AfrOsint Map pattern: use YouTube's uploads playlist for the channel.
  setThumbnail(fallbackVideoId);

  const loadIframe=()=>{
    const iframe=document.createElement('iframe');
    iframe.src=ytLatestUrl;
    iframe.title='Solomon Building Contractor - latest video';
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

  const tiktok=document.querySelector('.tiktok-embed');
  if(tiktok)tiktok.setAttribute('data-embed-from','LSE Social');
})();

// Client Portal placeholder: the future Google Sites/Gmail client portal will be connected here.
(()=>{
  const portalButton=document.querySelector('[data-client-portal]');
  if(!portalButton)return;

  const overlay=document.createElement('div');
  overlay.id='clientPortalModal';
  overlay.className='client-portal-modal';
  overlay.setAttribute('role','dialog');
  overlay.setAttribute('aria-modal','true');
  overlay.setAttribute('aria-hidden','true');
  overlay.setAttribute('aria-labelledby','clientPortalTitle');
  overlay.innerHTML='<div class="client-portal-card" role="document"><button type="button" class="client-portal-close" data-client-portal-close aria-label="Close client portal message">×</button><div class="client-portal-icon" aria-hidden="true"><svg viewBox="0 0 64 64" focusable="false"><rect x="15" y="23" width="34" height="25" rx="4"></rect><circle cx="32" cy="17" r="7"></circle><path d="M24 43c2-6 14-6 16 0M10 52h44"></path></svg></div><p class="client-portal-eyebrow">LIVING SOLUTION ENGINEERING</p><h2 id="clientPortalTitle">Client Portal</h2><p class="client-portal-status">Coming Soon</p><div class="client-portal-rule"></div><p class="client-portal-copy">Our private and secure client portal will give you access to project updates, photos, videos, documents and communications.</p><p class="client-portal-note">We’re building something great for you.</p><button type="button" class="client-portal-action" data-client-portal-close>Close</button></div>';
  document.body.appendChild(overlay);

  let lastFocusedElement=null;
  const closeButtons=overlay.querySelectorAll('[data-client-portal-close]');
  const close=()=>{
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden','true');
    document.body.classList.remove('modal-open');
    if(lastFocusedElement)lastFocusedElement.focus();
  };
  const open=(event)=>{
    event.preventDefault();
    event.stopPropagation();
    if(nav)nav.classList.remove('open');
    if(menuToggle){
      menuToggle.setAttribute('aria-expanded','false');
      menuToggle.setAttribute('aria-label','Open navigation');
    }
    lastFocusedElement=event.currentTarget;
    overlay.classList.add('is-open');
    overlay.setAttribute('aria-hidden','false');
    document.body.classList.add('modal-open');
    const closeButton=overlay.querySelector('.client-portal-close');
    if(closeButton)closeButton.focus();
  };
  portalButton.addEventListener('click',open);
  closeButtons.forEach(button=>button.addEventListener('click',close));
  overlay.addEventListener('click',(event)=>{
    if(event.target===overlay)close();
  });
  document.addEventListener('keydown',(event)=>{
    if(event.key==='Escape'&&overlay.classList.contains('is-open'))close();
  });
})();
