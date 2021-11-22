// suma ..........+ 
// resta .........-
// multiplicacion.*
// divicion ....../
// residuo .......%

"use strict"

// calcular el costo de un producto teniendo encuenta el inpuesto, el domicilio y el descuento 

var costoProoducto = 25000; //no esta incluido el impuesto
var impuesto = 10 ; //10 %
var costoImpuesto =0;
var costoProoductoConImp = 0;
var costoProoductoConDescuento = 0;
var domicilio = 2500;
var descuento =20;
var costoFinal = 0;

// hallar el costo del valor del producto con el immpuesto
costoImpuesto = (impuesto / 100) * costoProoducto;

costoProoductoConImp = costoProoducto + costoImpuesto;

    descuento= (descuento / 100);

 costoProoductoConDescuento = (costoProoductoConImp -(costoProoductoConImp * descuento));

 costoFinal = (costoProoductoConDescuento + domicilio);

console.log("el costo final del producto es de: $" + costoFinal)