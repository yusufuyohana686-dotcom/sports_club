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

<script>
const WA_NUMBER = "256747323750";
function makeCode(prefix){ return prefix + "-" + Math.floor(1000 + Math.random()*9000); }
function openOrder(type){
  document.getElementById('orderModal').style.display='flex';
  document.querySelectorAll('.order-form').forEach(f=>f.style.display='none');
  document.getElementById('form-'+type).style.display='block';
  document.getElementById('modalTitle').innerText = type==='jersey' ? 'Buy Jersey' : type==='membership' ? 'Join Membership' : 'Get Match Ticket';
}
function closeOrder(){ document.getElementById('orderModal').style.display='none'; }
function updateMemberPrice(){
  let v = document.getElementById('m-type').value;
  document.getElementById('m-price').innerText = 'Kiasi cha Kulipa: ' + (v.includes('Gold') ? '75,000 UGX' : '50,000 UGX');
}
function checkRenew(){
  document.getElementById('renew-note').style.display = document.getElementById('m-kind').value==='Renew' ? 'block' : 'none';
}
function updateTicketPrice(){
  let prices = {'Regular':20000,'VIP':35000,'VVIP':50000,'VVVIP':70000};
  let cat = document.getElementById('t-cat').value.split(' - ')[0];
  let qty = parseInt(document.getElementById('t-qty').value)||1;
  document.getElementById('t-price').innerText = 'Jumla: ' + (prices[cat]*qty).toLocaleString() + ' UGX';
}
document.getElementById('t-qty')?.addEventListener('input', updateTicketPrice);

function submitJersey(){
  let name=document.getElementById('j-fullname').value, phone=document.getElementById('j-phone').value;
  if(!name||!phone){ alert('Tafadhali jaza Jina na Namba ya Simu'); return; }
  let code = makeCode('JEJE-JERSEY');
  document.getElementById('j-code').style.display='block';
  document.getElementById('j-code').innerText = '✅ Asante '+name+'! Code yako ya manunuzi: '+code+' - Weka screenshot hii!';
  let msg = `*NEW JERSEY ORDER*%0A%0ACode: ${code}%0AJersey: ${document.getElementById('j-type').value}%0ASize: ${document.getElementById('j-size').value}%0AIdadi: ${document.getElementById('j-qty').value}%0AJina nyuma: ${document.getElementById('j-name').value}%0A%0AJina: ${name}%0ASimu: ${phone}%0AEmail: ${document.getElementById('j-email').value}%0AMalipo: ${document.getElementById('j-pay').value}`;
  setTimeout(()=>{ window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`,'_blank'); }, 800);
}
function submitMembership(){
  let name=document.getElementById('m-fullname').value, phone=document.getElementById('m-phone').value;
  if(!name||!phone){ alert('Tafadhali jaza Jina na Namba ya Simu'); return; }
  if(document.getElementById('m-kind').value==='Renew' && !document.getElementById('m-confirm-year').checked){ alert('Kwa Renew, lazima uthibitishe umemaliza mwaka 1 kama member'); return; }
  let code = makeCode('JEJE-MEMBER');
  document.getElementById('m-code').style.display='block';
  document.getElementById('m-code').innerText = '✅ Karibu! Membership Code yako: '+code+' - Weka screenshot hii!';
  let msg = `*NEW MEMBERSHIP*%0A%0ACode: ${code}%0AKifurushi: ${document.getElementById('m-type').value}%0AAina: ${document.getElementById('m-kind').value}%0A%0AJina: ${name}%0ASimu: ${phone}%0AEmail: ${document.getElementById('m-email').value}%0AMalipo: ${document.getElementById('m-pay').value}`;
  setTimeout(()=>{ window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`,'_blank'); }, 800);
}
function submitTicket(){
  let name=document.getElementById('t-fullname').value, phone=document.getElementById('t-phone').value;
  if(!name||!phone){ alert('Tafadhali jaza Jina na Namba ya Simu'); return; }
  let code = makeCode('JEJE-TICKET');
  document.getElementById('t-code').style.display='block';
  document.getElementById('t-code').innerText = '✅ Tiketi yako imehifadhiwa! Code: '+code+' - Weka screenshot hii kuingia uwanjani!';
  let msg = `*NEW TICKET*%0A%0ACode: ${code}%0AStand: ${document.getElementById('t-stand').value} - ${document.getElementById('t-level').value}%0AAina: ${document.getElementById('t-cat').value}%0AIdadi: ${document.getElementById('t-qty').value}%0A%0AJina: ${name}%0ASimu: ${phone}%0AMalipo: ${document.getElementById('t-pay').value}`;
  setTimeout(()=>{ window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`,'_blank'); }, 800);
}
</script>
