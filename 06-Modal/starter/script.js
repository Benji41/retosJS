'use strict';
const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
//el queryselector permite solo tomar el primer elemento de html que pertezca a una clase
//regresa un arreglo de elementos
const btnsShowModal = document.querySelectorAll('.show-modal');

for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener('click', function () {
    //aqui no se debe de poner el punto, puedes remover multiples clases de un elemento de html separados por comas
    overlay.classList.remove('hidden');
    modal.classList.remove('hidden');
  });
}
const hiddenModalOverlay = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
//cuando se tiene parentesis o los argumentos en una funcion se ejecuta de inmeiatio al cargar al script, sin estos dentro ed un escuchar de eventos se ejecutara cuando se presione
btnCloseModal.addEventListener('click', hiddenModalOverlay);
overlay.addEventListener('click', hiddenModalOverlay);

//eventos de teclado son globales, ya que no se puedde señalar a que elemento se presiono un boton
//existen tres tipos de eventos para el teclado, este es el mas recomendado
//esta funcion sin parametros se ejecutaria para todas las teclas
//pasamos un parametro e de evento
//es un objeto del evento y tiene sus propiedades
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') hiddenModalOverlay();
});
