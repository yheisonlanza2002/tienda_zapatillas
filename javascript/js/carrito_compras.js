function aumentarPedido() {
    let cantidadActual = document.getElementById("cantidadElementos").innerHTML;
    let cantidadActualInt = parseInt(cantidadActual);
    if (cantidadActual <10) {
         document.getElementById("cantidadElementos").innerHTML = cantidadActualInt + 1;
    }else{
         document.getElementById("cantidadElementos").innerHTML = cantidadActualInt;
    }
}
function disminuirPedido() {
    let disminuir =document.getElementById('cantidadElementos').innerHTML;
    let disminuirInt = parseInt(1);
    if (disminuir > 0) {
        document.getElementById("cantidadElementos").innerHTML = disminuir - disminuirInt;
    }else{
    document.getElementById("cantidadElementos").innerHTML = disminuir;
   }
}