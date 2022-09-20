'use strict'

const visor = document.querySelector('.visor')
const punto = document.querySelectorAll('.punto')

// Cundo hago click en boton

//Saber la posición de ese puto
//Aplicar un transform translateX al grande
//QUITAR la clase active de TODOS los botones
//AÑARDIR la clase active al pnto que clickeado

// Recorrer TODOS los puntos
punto.forEach(  ( cadaPunto , i )=> {
  //Asignamos un CLICK a cadaPunto
  punto[i].addEventListener('click',()=>{
    
    //Guardr la posición de ese PUNTO
    let posicion = i
    // posicion es 0 transfomX es 0
    //posicion es 1 transformX es -50%
    //operacion = posicion * -50
    //Calculando el espacio que debe desplzarse el visor
    let operacion = posicion * -50

    //MOVEMOS EL GRANDE
    visor.style.transform = `translateX(${ operacion }%)`

    //Recorremos TODOS los puntos
    punto.forEach( ( cadaPunto , i )=>{
      //Quitamos la clase active a todos los puntos
      punto[i].classList.remove('active')
  })
  //Añadimos la clase active en el punto que hicimos click
  punto[i].classList.add('active')
})
})