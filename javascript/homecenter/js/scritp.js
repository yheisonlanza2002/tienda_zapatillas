"use strict"
let btnAbrirPopup = document.getElementById("abrirPopup");
let popup = document.getElementById("popup");
let btnCerrarPopUp = document.getElementById("cerrarPopup");


const lupaBuscar = document.getElementById("idLupa");
lupaBuscar.addEventListener("click", buscador);

function buscador(){
    document.getElementById("idEncabezado").innerHTML="";
    buscadorlupa();
}
function buscadorlupa(){
    let contenedorBuscador = document.createElement("div");
    let contentMain = document.getElementById("idEncabezado");
    contentMain.appendChild(contenedorBuscador);
    contenedorBuscador.setAttribute("class", "content-buscador")

    let inputText = document.createElement("input");
    contenedorBuscador.appendChild(inputText);
    inputText.setAttribute("type", "text");
    inputText.setAttribute("placeholder", "Que estas buscando...?");
    inputText.setAttribute("class", "inputText");

}


function openPopup() {
    let popup = document.getElementById("popup");
    popup.classList.add("open-popup");
}
function closepopup(){
    let popupclosed = document.getElementById("closePopup");
    popupclosed.classList.remove("close-popup")
}

// let div5 = document.getElementById("div5");
// let butonMostrarDiv =document.getElementById("botonPopup");
// let botonCerrar =document.getElementById("botonCerrar");
// let cerrarForm = document.getElementById("idform");

// butonMostrarDiv.addEventListener("click" , mostrarDiv);
// botonCerrar.addEventListener("click" , ocultarDiv);

// function mostrarDiv() {
//     div5.classList.remove("transition5");
//     div5.classList.add("transition6");
//     butonMostrarDiv.classList.add("botonPopupInvisible");
//     botonCerrar.classList.remove("botonCerrar");
//     botonCerrar.classList.add("botonCerrarvisible");
// }
// function ocultarDiv(){
//     div5.classList.add("transition5");
//     div5.classList.remove("transition6");
//     butonMostrarDiv.classList.remove("botonPopupInvisible");
//     botonCerrar.classList.add("botonCerrar");
//     botonCerrar.classList.remove("botonCerrarvisible");
// }