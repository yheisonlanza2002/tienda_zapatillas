"use strict"
class Automovil{
    constructor(marca, modelo, anyo, precio, kilometros, ubicacion, img){
        this.marca = marca;
        this.modelo = modelo;
        this.anyo = anyo;
        this.img = img;
        this.precio = precio;
        this.kilometros= kilometros;
        this.ubicacion= ubicacion;
    }
}
let auto = new Automovil("Toyota", "txl", 2021 ,"$ 100.000.00","0 km","Medellin","img/toyotaTXL.jpeg");
let auto1 = new Automovil("Toyota", "land Cruiser", 2021 , "$ 250.000.00","0 km","Bogota","img/toyota_LandCruiser.jpeg")
let auto2= new Automovil("Toyota", "Hilux", 2021 , "$ 200.000.00","0 km","Barranquilla","img/toyotaHilux.jpeg");

let autoM = new Automovil("Mazda", "3", 2021 ,"$ 120.000.00","0 km","Guaviare","img/toyotaTXL.jpeg");

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
    
    let EtiquetaUbicacion = document.createElement("label");
    Contenedor.appendChild(EtiquetaUbicacion);
    let txtUbicaciono = document.createTextNode("Colombia" + " | " + auto.ubicacion);
    EtiquetaUbicacion.appendChild(txtUbicaciono);
    EtiquetaUbicacion.setAttribute("class","style-ubicacion");
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
            mostrarVehiculo(autoM);
        }else{
            this.alert("No se encuentran resultados");
        }
    }
});
function LimpiarVentana() {
    document.getElementById("main_content").innerHTML=" ";
}