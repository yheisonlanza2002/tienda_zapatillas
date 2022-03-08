"use strict"
let NodoTabla = undefined;
function CargarProducto(){
    if(ValidarFormulario()){
        if(!document.getElementById("TableProductos")){
        CrearEncabezado();
    }
     RegisterDate();   
    }
    
}
function CrearEncabezado() {
        NodoTabla = document.createElement("table");
        let ContenedorTabla = document.getElementById("table_js");
        ContenedorTabla.appendChild(NodoTabla);
        //style
            NodoTabla.setAttribute("class","table_style");
            NodoTabla.setAttribute("id" , "TableProductos");

        let NodoFilaEncabezado = document.createElement("tr");
        NodoTabla.appendChild(NodoFilaEncabezado);
    
        let CreateDateCodigo = document.createElement("th");
        NodoFilaEncabezado.appendChild(CreateDateCodigo);
        let TextNodeCodigo = document.createTextNode("Código");
        CreateDateCodigo.appendChild(TextNodeCodigo);
    
        let CreateDateDescripcion = document.createElement("th");
        NodoFilaEncabezado.appendChild(CreateDateDescripcion);
        let TextNodeDescrip = document.createTextNode("Descripción");
        CreateDateDescripcion.appendChild(TextNodeDescrip);
        
        let CreateDateValor = document.createElement("th");
        NodoFilaEncabezado.appendChild(CreateDateValor);
        let TextNodeValor = document.createTextNode("Valor Unitario");
        CreateDateValor.appendChild(TextNodeValor);
    
        let CreateDateStock = document.createElement("th");
        NodoFilaEncabezado.appendChild(CreateDateStock);
        let TextNodeStock = document.createTextNode("Unidades en Stock");
        CreateDateStock.appendChild(TextNodeStock);       
    }
function RegisterDate(){
    let inputCodigo = document.getElementById("codigo").value;
    let TrProducto = document.createElement("tr");
    NodoTabla.appendChild(TrProducto);
    let TdCodigo = document.createElement("td");
    TrProducto.appendChild(TdCodigo);
    let TextCodigo = document.createTextNode(inputCodigo);
    TdCodigo.appendChild(TextCodigo);

    let inputDescripcion = document.getElementById("descripcion").value;
    let TrDescrip = document.createElement("tr");
    NodoTabla.appendChild(TrDescrip);
    let TdDescripcion = document.createElement("td");
    TrProducto.appendChild(TdDescripcion);
    let TextDescripcion = document.createTextNode(inputDescripcion);
    TdDescripcion.appendChild(TextDescripcion);

    let inputValor = document.getElementById("ValorUNitario").value;
    let TrValor = document.createElement("tr");
    NodoTabla.appendChild(TrValor);
    let TdValor = document.createElement("td");
    TrProducto.appendChild(TdValor);
    let TextValor = document.createTextNode(inputValor);
    TdValor.appendChild(TextValor);

    LimpiarFormulario();
}
function LimpiarFormulario(){
    document.getElementById("codigo").innerHTML = "";
}
function ValidarFormulario(){
    if(document.getElementById("codigo").value.trim() == ""){
        alert("por favor ingrese el codigo del producto");
        document.getElementById("codigo").focus();
        return false;
    }

    return true;
}
