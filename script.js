// Simple mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggle?.addEventListener('click', () => {
  navLinks?.classList.toggle('nav-open');
  if(navLinks.style.display === 'flex'){ navLinks.style.display = 'none'; }
  else { navLinks.style.display = 'flex'; navLinks.style.flexDirection = 'column'; navLinks.style.gap = '12px'; navLinks.style.padding = '8px'; }
});

// Smooth reveal on scroll
const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
      revealObserver.unobserve(entry.target);
    }
  });
},{ threshold: 0.12 });

reveals.forEach(r => revealObserver.observe(r));

// Small floating animation for avatar
const avatar = document.querySelector('.avatar');
if(avatar){
  let dir = 1;
  setInterval(()=> {
    avatar.style.transform = `translateY(${dir * 6}px)`;
    dir *= -1;
  }, 2200);
}

// Smooth link scrolling adjustment for sticky nav
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click', function(e){
    const targetId = this.getAttribute('href').slice(1);
    const el = document.getElementById(targetId);
    if(el){
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth', block:'start'});
      // close mobile nav if open
      if(window.innerWidth < 980 && navLinks.style.display === 'flex'){
        navLinks.style.display = 'none';
      }
    }
  });
});
