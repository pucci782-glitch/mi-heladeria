/**
 * ========================================================
 * DULCE FRÍO - HELADERÍA ARTESANAL
 * Script Principal de Interacción (Presentación Académica)
 * ========================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Elementos del DOM
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const contactForm = document.getElementById('contact-form');
  const formFeedback = document.getElementById('form-feedback');
  const sections = document.querySelectorAll('section[id]');

  // 2. Control del Menú Móvil (Hamburguesa)
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        if (navMenu.classList.contains('active')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-xmark');
        } else {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      }
    });

    // Cerrar menú móvil al hacer clic en cualquier enlace
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
          const icon = mobileToggle.querySelector('i');
          if (icon) {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
          }
        }
      });
    });
  }

  // 3. Resaltado de Sección Activa al Desplazarse (Scroll Spy)
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  // 4. Gestión del Formulario de Contacto
  if (contactForm && formFeedback) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();

      // Feedback visual de éxito
      formFeedback.style.display = 'block';
      formFeedback.className = 'form-feedback success';
      formFeedback.innerHTML = `<i class="fa-solid fa-circle-check"></i> ¡Muchas gracias, <strong>${name}</strong>! Hemos recibido tu mensaje y te responderemos a la brevedad.`;

      // Limpiar campos del formulario
      contactForm.reset();

      // Ocultar mensaje luego de 6 segundos
      setTimeout(() => {
        formFeedback.style.display = 'none';
      }, 6000);
    });
  }
});
