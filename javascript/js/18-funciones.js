function llamarHora() {
    var now = new Date();
    var hora = now.getHours();
    var minutos = now.getMinutes();
        if(minutos < 10){
            hora = "0" + hora;
        }
        if(minutos < 10){
            minutos ="0"+ minutos;
        }
        alert("hora actual :" + hora + " : " + minutos);
}

function saludo(bienvenido) {
    alert(bienvenido);
}

function presentacion(nombre , edad){
    alert("Mi nombre es "+ nombre + " Y mi edad " + edad + " Años");
}
function validarDes(compra){
    var total=0;
    if(compra >= 10000){
        // si la compra es mayorr a 10000 tiene un descuento de el 10%

        total = compra*.9;
    }
        else if(compra > 5000 && compra > 9999){
        // descuento del 5%
        total = compra * .95;
    }else{
        total = compra;
    }
    return total;
}
// creamos la funcion desde la cual vamos a llamar a la funcion con retorno 

function calcularDescuento(costo) {
    alert("costo total: " + validarDes(costo));
}