"use strict"

// validar si el usuario y la contraseña  inngresada estan en la base de datos

var passImput = 12345;

var passBD = 12345;
var nombre = "yheison";
if (passImput === passBD) {
    console.log("bienvenido " + nombre)
}

//ejercio 2 
// validar si la persona puede votar 

var edadUsuario = 18 ;
var limiteVotacion = 18 ;

if (edadUsuario >= limiteVotacion) {
    console.log("bienvenido a la votacion");
}else if (edadUsuario < limiteVotacion){
    console.log("lo sentimos aun  no cuenta con la edad suficiente para votar");
}
else{
    console.log("uppss surguido un error :( , favor ingrese solo numeros en la edad");
}

// ejercicio 3 
//if anidado  

// una aerolinea present la siguiente oferta si el pasajero tiene menos de 10 años tiene un 10% de descuemto sie el destino es cartaena tendra un descuento de 10% de descuento y si la linea es latan tendra otro 10% de descuento sobre el descuento 


var edadPasajero = 9;
var costoTikete = 250000;
var oferta =0;
var descuetoEdad = 0;
var destinoPasajero = "cartagena";
var destinoOferta = "cartagena";
var aerolinea = "latam"
var aerolineaOferta = "latam"

if (edadPasajero <= 10) {
    oferta = (costoTikete - .10);
    if (destinoOferta === "cartagena") {
        
    }
}