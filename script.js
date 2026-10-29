// Mobile nav
const toggle = document.getElementById('navToggle');
const nav = document.getElementById('mainNav');
toggle.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

// Hero background slider - your 3 animation images
const slides = document.querySelectorAll('.hero-bg img');
let i=0;
setInterval(()=>{
  slides[i].classList.remove('active');
  i=(i+1)%slides.length;
  slides[i].classList.add('active');
},4000);

// Smooth reveal
const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting) e.target.style.transform='translateY(0)', e.target.style.opacity='1'
  })
},{threshold:.15});
document.querySelectorAll('.section').forEach(s=>{
  s.style.transform='translateY(20px)'; s.style.opacity='.9'; s.style.transition='.6s';
  observer.observe(s);
});
