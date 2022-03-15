"use strict"
class Automovil{
    constructor(marca, modelo, anyo){
        this.marca = marca;
        this.modelo = modelo;
        this.anyo = anyo;
    }
}

let auto = new Automovil("Toyota", "txl", 2021);

function mostrarVehiculo(){
    // alert(auto.marca +" " + auto.modelo);
    let Contenedor = document.createElement("div");
    let contenMain = document.getElementById("main_content");
    contenMain.appendChild(Contenedor);

    let EtiquetaAuto = document.createElement("label");
    Contenedor.appendChild(EtiquetaAuto);

    let txtMarca = document.createTextNode(auto.marca);
    EtiquetaAuto.appendChild(txtMarca);
}