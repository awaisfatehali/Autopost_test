const nav=document.getElementById('nav'),tg=document.getElementById('toggle');
tg.addEventListener('click',()=>{const o=nav.classList.toggle('open');tg.setAttribute('aria-expanded',o)});
const here=location.pathname.split('/').pop()||'index.html';
nav.querySelectorAll('a').forEach(a=>{if(a.getAttribute('href')===here)a.classList.add('active')});
document.getElementById('year').textContent=new Date().getFullYear();
document.querySelectorAll('.filters button').forEach(b=>b.addEventListener('click',()=>{
  document.querySelectorAll('.filters button').forEach(x=>x.classList.remove('on'));b.classList.add('on');
  const c=b.dataset.cat;
  document.querySelectorAll('.item').forEach(i=>i.hidden=!(c==='all'||i.dataset.cat===c));
}));
const f=document.getElementById('contact-form');
if(f){f.addEventListener('submit',e=>{
  e.preventDefault();let ok=true;
  const rules={name:v=>v.trim().length>1||'Enter your name.',email:v=>/^\S+@\S+\.\S+$/.test(v)||'Enter a valid email address.',message:v=>v.trim().length>9||'Write at least 10 characters.'};
  for(const k in rules){const el=f.elements[k],r=rules[k](el.value);f.querySelector('[data-for='+k+']').textContent=r===true?'':r;if(r!==true)ok=false}
  if(ok){f.style.display='none';const s=document.getElementById('sent');s.style.display='block';s.textContent='Thanks, '+f.elements.name.value.trim()+'. We will reply within one day.'}
})}
