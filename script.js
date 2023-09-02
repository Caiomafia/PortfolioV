const btn = document.getElementById('button');
const sectionAll = document.querySelectorAll('section[id]');
const inputName = document.querySelector('#nombre');
const inputEmail = document.querySelector('#email');

/* ===== Loader =====*/
window.addEventListener('load', () => {
    const contenedorLoader = document.querySelector('.container--loader');
    contenedorLoader.style.opacity = 0;
    contenedorLoader.style.visibility = 'hidden';
})

/*===== Header =====*/
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('abajo', window.scrollY > 0);
});

/*===== Boton Menu =====*/
btn.addEventListener('click', function() {
    if (this.classList.contains('active')) {
        this.classList.remove('active');
        this.classList.add('not-active');
        document.querySelector('.nav_menu').classList.remove('active');
        document.querySelector('.nav_menu').classList.add('not-active');
    }
    else {
        this.classList.add('active');
        this.classList.remove('not-active');
        document.querySelector('.nav_menu').classList.remove('not-active');
        document.querySelector('.nav_menu').classList.add('active');
    }
});

// Selecione todas as seções e links do menu
const sections = document.querySelectorAll('section');
const menuLinks = document.querySelectorAll('nav a');

// Função para verificar qual seção está visível no momento e atualizar o menu
function updateMenuOnScroll() {
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    const link = document.querySelector(`nav a[href="#${sectionId}"]`);

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Mostrar ou ocultar o botão "voltar ao topo" com base no scroll
  const goTopContainer = document.querySelector('.go-top-container');
  if (scrollY > 100) {
    goTopContainer.classList.add('show');
  } else {
    goTopContainer.classList.remove('show');
  }
}

// Adicione um ouvinte de evento para atualizar o menu sempre que houver rolagem
window.addEventListener('scroll', updateMenuOnScroll);

// Adicione um ouvinte de evento para rolar suavemente para o topo quando o botão "voltar ao topo" for clicado
document.querySelector('.go-top-container').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Chame a função inicialmente para configurar o menu
updateMenuOnScroll();
