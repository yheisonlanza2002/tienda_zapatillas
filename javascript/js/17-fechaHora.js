"use strict"

// Obtener la fecha y hora actual 
var currentTime = new Date();
console.log(currentTime);

// Metodos para extraer elementos 

var anyoActual = currentTime.getFullYear();
console.log("Año actual "+anyoActual);

// mes actual 

var mesActual = currentTime.getMonth();
console.log("Mes actual: "+(mesActual + 1));

var diamesActual = currentTime.getDate();
console.log("Dia actual: "+diamesActual);


var diasemana = currentTime.getDay();
console.log("Dia actual: "+ (diasemana + 1));


var horaActual = currentTime.getHours();
console.log("Hora actual: "+ horaActual );


var minutosActual = currentTime.getMinutes();
console.log("Minutos actual: "+ minutosActual);


var segundosActual = currentTime.getSeconds();
console.log("Segundos actual: "+ segundosActual);

var msActual =currentTime.getMilliseconds();
console.log("milisegundos Actual: " + msActual);

var ms1970 =currentTime.getTime();
console.log(ms1970);

// determinar cuantos dias faltan para año nuevo

var fechaNewYear = new Date("January 1, 2022");
var msFechaNewYear = fechaNewYear.getTime();
var mscurrenTime = currentTime.getTime();
var msFaltantes = msFechaNewYear - mscurrenTime;

console.log(msFaltantes);
var minutosFechaNewYear = (((msFaltantes / 1000) /60 )/60 /24);
console.log("Faltan "+Math.ceil(minutosFechaNewYear) + " Dias Para Año Nuevo");



// var horafecha = currentTime;
// console.log(" Año " +   anyoActual +" Mes " + (mesActual + 1) , minutosActual , )