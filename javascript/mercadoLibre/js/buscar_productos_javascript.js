"use strict"
class Automovil{
    constructor(marca, modelo, anyo, precio, kilometros, img){
        this.marca = marca;
        this.modelo = modelo;
        this.anyo = anyo;
        this.img = img;
        this.precio = precio;
        this.kilometros= kilometros;
    }
}
let auto = new Automovil("Toyota", "txl", 2021 ,"$ 100.000.00","0 km","img/toyotaTXL.jpeg");
let auto1 = new Automovil("Toyota", "land Cruiser", 2021 , "$ 250.000.00","0 km","img/toyota_LandCruiser.jpeg")
let auto2= new Automovil("Toyota", "Hilux", 2021 , "$ 200.000.00","0 km","img/toyotaHilux.jpeg");

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
    let txtAnyo = document.createTextNode(auto.anyo + " | " + auto.kilometros);
    EtiquetaAnyo.appendChild(txtAnyo);
    EtiquetaAnyo.setAttribute("class","style-año");
    
}

window.addEventListener("keydown", function(event){
    let busqueda = this.document.getElementById("TextoBusqueda").value;
    LimpiarVentana();
    if(event.key == "Enter"){
        if(busqueda == "toyota"){
            mostrarVehiculo(auto);
            mostrarVehiculo(auto1);
            mostrarVehiculo(auto2);
        }else if(busqueda == "mazda 3"){
            mostrarVehiculo(auto);
        }else{
            this.alert("No se encuentran resultados");
        }
    }
});
function LimpiarVentana() {
    document.getElementById("main_content").innerHTML=" ";
}