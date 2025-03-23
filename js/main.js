const isMobile = window.innerWidth <= 768; // Detecta dispositivos móviles

ScrollReveal().reveal('.scroll-intro', {
  duration: isMobile ? 1000 : 1500,
  origin: 'bottom',
  distance: '50px',
  easing: 'ease-in-out',
  reset: false,
});

ScrollReveal().reveal('.scroll-what', {
  distance: isMobile ? '30px' : '50px',
  duration: 1000,
  easing: 'ease-in-out',
  interval: 150,
  reset: !isMobile, // No reinicia en móviles para mejorar rendimiento
});

ScrollReveal().reveal('.scroll-sintomas', {
  duration: 2000,
  origin: isMobile ? 'bottom' : 'right',
  distance: '100px',
  easing: 'ease-in-out',
  reset: true,
  delay: isMobile ? 150 : 300,
});

ScrollReveal().reveal('.scroll-estrategias', {
  duration: 2000,
  origin: isMobile ? 'bottom' : 'left',
  distance: '75px',
  easing: 'ease-in-out',
  reset: true,
  delay: 500,
});

ScrollReveal().reveal('.scroll-drop', {
  duration: 2000,
  origin: 'bottom',
  distance: '50px',
  easing: 'ease-in-out',
  reset: !isMobile,
});
