
const primerBoton = document.querySelector(".bot-1");
const segundoBoton = document.querySelector(".bot-2");
const spanUno = document.querySelector(".primer-span");
const spanDos = document.querySelector(".segundo-span");

let contador= 0
primerBoton.addEventListener('click', ()=>{
contador++
spanUno.innerText=contador

})

let contadors=0
segundoBoton.addEventListener('click', ()=>{
    contadors++
    spanDos.innerText=contadors
    
    })
    