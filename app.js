const toggle=document.querySelector('.menu-toggle');
const mobile=document.querySelector('.mobile-nav');
if(toggle&&mobile){
  toggle.addEventListener('click',()=>{
    const open=mobile.classList.toggle('open');
    toggle.setAttribute('aria-expanded',String(open));
    toggle.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú');
  });
  mobile.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
    mobile.classList.remove('open');
    toggle.setAttribute('aria-expanded','false');
    toggle.setAttribute('aria-label','Abrir menú');
  }));
}
document.querySelectorAll('.desktop-nav a,.mobile-nav a').forEach(link=>{
  if(new URL(link.href,location.href).pathname===location.pathname)link.setAttribute('aria-current','page');
});
const demoForm=document.getElementById('trial-demo-form');
if(demoForm){
  demoForm.addEventListener('submit',event=>{
    event.preventDefault();
    const result=demoForm.querySelector('.form-result');
    result.hidden=false;
    result.scrollIntoView({behavior:'smooth',block:'nearest'});
  });
}
