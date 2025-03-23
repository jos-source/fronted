console.log("vistas");

window.sr = ScrollReveal();

ScrollReveal().reveal('.scroll-what', {
    distance: '50px',
    duration: 800,
    easing: 'ease-in-out',
    interval: 200
  });
  

sr.reveal('.scroll-sintomas',
{
duration:4000,
origin: 'right',
distance: '-100px'


});


sr.reveal('.scroll-estrategias',
    {
    duration:4000,
    origin: 'left',
    distance: '-100px'
    
    
    });


