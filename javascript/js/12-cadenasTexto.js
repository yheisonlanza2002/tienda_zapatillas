"use strict"

// todo a mayuscula

var frase1 = "ESta eS uNa fRase en MayuscuLA";

var frase1May = frase1.toUpperCase();

console.log(frase1May);


// tada a minuscua
var frase2 = "ESta ES UNA FRASE en MIniscula";

var frase2Min = frase2.toLocaleLowerCase();

console.log(frase2Min);

// primera letra en mayuscula y el resto en minuscula

var frase3 = "eSTa Frase TieNe la Primera en MaYUScula";
frase3 = frase3.toLowerCase();
frase3 = frase3[0].toUpperCase()+ frase3.slice(1);

console.log(frase3)

// metodo slice 

var frase4 = "En pitalito todo se vive mejor";

var municipio = "san agustin"
frase4 = frase4.slice(0,3) + municipio + frase4.slice(11)
console.log(frase4);

var frase5 = "en ";
var municipio = "neiva ";
var restofrase = " todo se vive mejor";

console.log(frase5 + municipio + restofrase);