const btn = document.getElementById('button');
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

const sections = document.querySelectorAll('section');

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 50; // Adjust offset to give a little buffer
    const sectionBottom = sectionTop + section.offsetHeight;

    if (currentScroll >= sectionTop && currentScroll <= sectionBottom) {
      const sectionId = section.getAttribute("id");
      const activeLink = document.querySelector(`.top-menu a[href="#${sectionId}"]`);
      
      document.querySelectorAll(".top-menu a").forEach(link => {
        link.classList.remove("active");
      });

      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  });
});