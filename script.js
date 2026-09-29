const menu=document.querySelector('.menu');
const nav=document.querySelector('.nav nav');
menu?.addEventListener('click',()=>{nav.style.display=nav.style.display==='flex'?'none':'flex';nav.style.position='absolute';nav.style.top='72px';nav.style.left='0';nav.style.right='0';nav.style.background='#f4f3ee';nav.style.padding='20px 5vw';nav.style.flexDirection='column';});
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{if(innerWidth<851)nav.style.display='none'}));