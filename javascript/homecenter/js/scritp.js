"use strict"
let btnAbrirPopup = document.getElementById("abrirPopup");
let popup = document.getElementById("popup");
let btnCerrarPopUp = document.getElementById("cerrarPopup");


// const lupaBuscar = document.getElementById("idLupa");
// lupaBuscar.addEventListener("click", buscador);



const lupaBuscar= document.getElementById("idLupa");
lupaBuscar.addEventListener("click", abrirBusqueda);

const cerrarbusqueda= document.getElementById("idCerrar");
cerrarbusqueda.addEventListener("click", cerrarBusqueda);

function buscador(){
    document.getElementById("idEncabezado").innerHTML="";
    buscadorlupa();
}
function abrirBusqueda(){
    let removeEncabezado = document.getElementById("idEncabezado");
    removeEncabezado.classList.add("headerInvisible");
    let nuevoHeader = document.getElementById("idEncabezado2");
    nuevoHeader.classList.remove("header2Invisible");
    nuevoHeader.classList.add("header2visible")
}
function cerrarBusqueda(){
    let removeheader2 = document.getElementById("idEncabezado2");
    removeheader2.classList.remove("header2visible");
    removeheader2.classList.add("header2Invisible");
    let addHeader1 = document.getElementById("idEncabezado");
    addHeader1.classList.remove("headerInvisible")
}

// function buscadorlupa(){
//     let contenedorBuscador = document.createElement("div");
//     let contentMain = document.getElementById("idEncabezado");
//     contentMain.appendChild(contenedorBuscador);
//     contenedorBuscador.setAttribute("class", "content-buscador");

    // let iconbuscar = document.createElement("img");
    // contenedorBuscador.appendChild(iconbuscar);
    // iconbuscar.setAttribute("src","img/icono-lupa.png");
    // // iconbuscar.setAttribute("href='icons/all.css'","<i class='fa-solid fa-magnifying-glass'></i>");
    // iconbuscar.setAttribute("class","iconoBuscar");

    // let inputText = document.createElement("input");
    // contenedorBuscador.appendChild(inputText);
    // inputText.setAttribute("type", "text");
    // inputText.setAttribute("placeholder", "Que estas buscando...?");
    // inputText.setAttribute("class", "inputText");

    // let cerrarBusquador = document.createElement("img");
    // contenedorBuscador.appendChild(cerrarBusquador);
    // cerrarBusquador.setAttribute("src","img/cerrar.jpeg");
    // cerrarBusquador.setAttribute("class", "cerrarBuscador");
    // cerrarBusquador.addEventListener("click", cerrar);

// }

// function cerrar(){
//     document.getElementById("idEncabezado").innerHTML="";
// }


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