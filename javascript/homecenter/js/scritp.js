"use strict"

let div5 = document.getElementById("div5");
let butonMostrarDiv =document.getElementById("botonPopup");
let botonCerrar =document.getElementById("botonCerrar");


butonMostrarDiv.addEventListener("click" , mostrarDiv);
botonCerrar.addEventListener("click" , ocultarDiv);

function mostrarDiv() {
    div5.classList.remove("transition5");
    div5.classList.add("transition6");
    butonMostrarDiv.classList.add("botonPopupInvisible");
    botonCerrar.classList.remove("botonCerrar");
    botonCerrar.classList.add("botonCerrarvisible");
}
function ocultarDiv(){
    div5.classList.add("transition5");
    div5.classList.remove("transition6");
    butonMostrarDiv.classList.remove("botonPopupInvisible");
    botonCerrar.classList.add("botonCerrar");
    botonCerrar.classList.remove("botonCerrarvisible");
}