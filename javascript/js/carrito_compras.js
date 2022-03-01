let valorUnico = 152000;
//este es el valor del producto por unidad 

    valorIndividual();

        function valorIndividual() {
        let valorProducto = new Intl.NumberFormat('es-ES').format(valorUnico);
        document.getElementById("valorUnitario").innerHTML = valorProducto;
        }
// este es el texto que aparese dentro de los parentesis

    numero_productos();

        function numero_productos() {
        let pedidoActual = document.getElementById("cantidadElementos").innerHTML;
        document.getElementById("cantidadDeDroductos").innerHTML = pedidoActual;
        if(pedidoActual >= 2 || pedidoActual == 0) {
            document.getElementById("cantidadDeDroductos").innerHTML = pedidoActual.toString() + " productos";
        }
        else {
            document.getElementById("cantidadDeDroductos").innerHTML = pedidoActual.toString() + " producto";
        }
    }
        //esta es la funcion de los botones de aumento 

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
