"use strict"
class Automovil{
    constructor(marca, modelo, anyo, precio, img){
        this.marca = marca;
        this.modelo = modelo;
        this.anyo = anyo;
        this.img = img;
        this.precio = precio;
    }
}
let auto = new Automovil("Toyota", "txl", 2021 ,"$ 100.000.00","img/toyotaTXL.jpeg");

function mostrarVehiculo(auto){
    // alert(auto.marca +" " + auto.modelo);
    let Contenedor = document.createElement("div");
    let contenMain = document.getElementById("main_content");
    Contenedor.setAttribute("class" ,"style-contentImg");
    contenMain.appendChild(Contenedor);

    let imgCarro = document.createElement("img");
    Contenedor.appendChild(imgCarro);
    imgCarro.setAttribute("src",auto.img)
    imgCarro.setAttribute("class","img-style");

    let EtiquetaMarca = document.createElement("label");
    Contenedor.appendChild(EtiquetaMarca);
    let txtMarca = document.createTextNode(auto.marca+ " " + auto.modelo);
    EtiquetaMarca.appendChild(txtMarca);
    EtiquetaMarca.setAttribute("class","style-mara");

    // let EtiquetaModelo = document.createElement("label");
    // Contenedor.appendChild(EtiquetaModelo);
    // let txtModelo = document.createTextNode(auto.modelo);
    // EtiquetaModelo.appendChild(txtModelo);
    // EtiquetaModelo.setAttribute("class","style-modelo");
    let EtiquetaPrecio = document.createElement("label");
    Contenedor.appendChild(EtiquetaPrecio);
    let txtPrecio = document.createTextNode(auto.precio);
    EtiquetaPrecio.appendChild(txtPrecio);
    EtiquetaPrecio.setAttribute("class","style-modelo");

    let EtiquetaAnyo = document.createElement("label");
    Contenedor.appendChild(EtiquetaAnyo);
    let txtAnyo = document.createTextNode(auto.anyo);
    EtiquetaAnyo.appendChild(txtAnyo);
    EtiquetaAnyo.setAttribute("class","style-año");

    // let txtModelo = document.createTextNode(auto.modelo);
    // EtiquetaAuto.appendChild(txtModelo);
    // let txtanyo = document.createTextNode(auto.anyo);
    // EtiquetaAuto.appendChild(txtanyo);
    
}
function verVehiculo() {

    mostrarVehiculo(auto);
}