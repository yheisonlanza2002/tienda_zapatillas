"use strict"

// variable global
var theSum = 0;
addNumber();
function addNumber() {
    theSum = 2+2;
}
console.log(theSum);

// variable local modificada o arreglada
var edad = 0;
asignacionEdad();
function asignacionEdad() {
    edad = 5+9;
}
console.log(edad);

// variable local 

function asignacionEdadd() {
    edadd = 5+9;
}
console.log(edadd);