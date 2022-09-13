const cambioDeColorBoton = document.querySelector('.contenedor-bmo__boton');
const moon = document.querySelector('.contenedor-bmo__boton-moon')
const sun = document.querySelector('.contenedor-bmo__boton-sun');
const fondo = document.querySelector('body');
const fondoNav = document.querySelector('.contenedor-bmo')
const botonFormulario = document.querySelector('.boton-formulario');
const linkCodigoPagina = document.querySelector('.footer__migithub');


cambioDeColorBoton.addEventListener('click', toggleCambioDeColor);


function toggleCambioDeColor() {
    cambioDeColorBoton.classList.toggle('light');
    moon.classList.toggle('inactive');
    sun.classList.toggle('inactive');
    fondo.classList.toggle('fondoColor');
    fondoNav.classList.toggle('navColor');
    botonFormulario.classList.toggle('colorBoton');
    linkCodigoPagina.classList.toggle('colorgit');
}