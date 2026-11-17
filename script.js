
document.addEventListener('DOMContentLoaded',()=>{
 const toggle=document.querySelector('.menu-toggle');
 const nav=document.querySelector('nav');
 if(toggle&&nav){toggle.addEventListener('click',()=>{nav.classList.toggle('open');toggle.setAttribute('aria-expanded',nav.classList.contains('open')?'true':'false')})}
 document.querySelectorAll('nav a').forEach(a=>{if(a.href===location.href)a.classList.add('active')});
});
