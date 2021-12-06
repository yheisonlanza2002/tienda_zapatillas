"use strict"

// convercion implicita 

var num1 = 12;
var num2 = "4";

console.log("la suma de los dos numeros es "+ ( num1 + num2));
console.log("la resta de los dos numeros es "+ ( num1 - num2));
console.log("la multiplicacion de los dos numeros es "+ ( num1 * num2));
console.log("la divicion de los dos numeros es "+ ( num1 / num2));

// convercion explicita a enteros

var num3 = "28";
var num3Int= parseInt(num3);
var num4 = "5";
var num4Int= parseInt(num4);

console.log("la suma de los dos numeros es "+ ( num3Int + num4Int));


// convercion explicita en decimales

var num5 = "4.5";
var num5Float= parseFloat(num5);
var num6 = "9.5";
var num6Float= parseFloat(num6);

console.log("la suma de los dos numeros es "+ ( num5Float + num6Float));

// convercion expplicita a string

var num7 = "444";
var num7String= num7.toString();
var num8 = "97";
var num8String= num8.toString();

console.log("la suma de los dos numeros es "+ ( num7String + num8String));