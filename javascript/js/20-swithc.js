"use strict"

// ejemplo de switch con enteros

var nota = 5;
switch (nota) {
    case 5:
        console.log("exelente");
        break;
    case 4:
    case 3:
        console.log("bien");
        break;
    case 2:
    case 1:
        console.log("mas malo que cain");
    default:
        console.log("ingrese una nota valida");
        break;
}

var ciudad = "bogota";
switch (ciudad) {
    case "pitalito":
        console.log("1584 ms.ds.d");
        break;
    case "bogota":

        console.log("2545  ms.lo.dr");
        break;
    case "barranquila":
        console.log("2140 ms.sl.lg");
    default:
        console.log("ingrese una cuidad valida");
        break;
}