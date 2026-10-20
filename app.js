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

const scheduleTabs=[...document.querySelectorAll('.schedule-day-tab')];
if(scheduleTabs.length){
  const schedulePanels=scheduleTabs.map(tab=>document.getElementById(tab.getAttribute('aria-controls')));
  const selectDay=index=>{
    scheduleTabs.forEach((tab,i)=>{
      tab.setAttribute('aria-selected',String(i===index));
      tab.tabIndex=i===index?0:-1;
      schedulePanels[i].hidden=i!==index;
    });
  };
  scheduleTabs.forEach((tab,index)=>{
    tab.addEventListener('click',()=>selectDay(index));
    tab.addEventListener('keydown',event=>{
      let next=index;
      if(event.key==='ArrowRight')next=(index+1)%scheduleTabs.length;
      else if(event.key==='ArrowLeft')next=(index-1+scheduleTabs.length)%scheduleTabs.length;
      else if(event.key==='Home')next=0;
      else if(event.key==='End')next=scheduleTabs.length-1;
      else return;
      event.preventDefault();
      selectDay(next);
      scheduleTabs[next].focus();
    });
  });
  selectDay(0);
}

const registrationForm=document.getElementById('registration-form');
if(registrationForm){
  const requestedPlan=new URLSearchParams(location.search).get('plan');
  const matchedPlan=[...registrationForm.querySelectorAll('input[name="plan"]')].find(input=>input.value===requestedPlan);
  if(matchedPlan)matchedPlan.checked=true;
  registrationForm.addEventListener('submit',event=>{
    event.preventDefault();
    const result=registrationForm.querySelector('.registration-result');
    result.hidden=false;
    result.scrollIntoView({behavior:'smooth',block:'nearest'});
  });
}
