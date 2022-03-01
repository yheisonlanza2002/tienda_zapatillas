let valorUnico = 152000;

    valorIndividual();
    infoCantidades();
    calcularSubtotal();
    

// este es el texto que aparese dentro de los parentesis
        let subtotal= 0;
        function calcularSubtotal() {
            document.getElementById("valorUnitario").innerHTML;
            let cantidadElementos = document.getElementById("cantidadElementos").innerHTML;
            let totalSubtotal = valorUnico * Number(cantidadElementos);
            let subtotalFormt = new Intl.NumberFormat('es-ES').format(totalSubtotal);
            document.getElementById("Subtotal").innerHTML = subtotalFormt;
        }

        function infoCantidades() {
            let cantidadProductos = document.getElementById("cantidadElementos").innerHTML;

            if (cantidadProductos == 1){ 
                document.getElementById("numeroProductos").innerHTML = cantidadProductos.toString() + " producto)"; 
            }else{
                document.getElementById("numeroProductos").innerHTML = cantidadProductos.toString() + " productos)";
            }
        }

        function valorIndividual() {
        let valorProducto = new Intl.NumberFormat('es-ES').format(valorUnico);
        document.getElementById("valorUnitario").innerHTML = valorProducto;
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
            calcularSubtotal();
            infoCantidades();
        }
        function disminuirPedido() {
                let disminuir =document.getElementById('cantidadElementos').innerHTML;
                let disminuirInt = parseInt(1);
            if (disminuir > 0) {
                 document.getElementById("cantidadElementos").innerHTML = disminuir - disminuirInt;
            }else{
                document.getElementById("cantidadElementos").innerHTML = disminuir;  
            }
            calcularSubtotal();
            infoCantidades();
        }



        

                