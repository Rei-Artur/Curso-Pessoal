// Acesso restrito
const overlay = document.getElementById('overlay-password');
const btn = document.getElementById('password-btn');
const input = document.getElementById('password-input');
const errorMsg = document.getElementById('password-error');

const PASSWORD = '1234'; // Defina sua senha pessoal aqui

btn.addEventListener('click', () => {
  if(input.value === PASSWORD){
    overlay.style.display = 'none';
  } else {
    errorMsg.style.display = 'block';
  }
});

// Scroll suave
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});

// Botão voltar ao topo
const backBtn = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  if(window.scrollY > 300) backBtn.style.display = 'block';
  else backBtn.style.display = 'none';
});

backBtn.addEventListener('click', () => {
  window.scrollTo({top:0, behavior:'smooth'});
});
