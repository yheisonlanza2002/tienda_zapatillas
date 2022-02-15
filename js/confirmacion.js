function validar() {
    let validardatos = true;
    let nombre = document.getElementById("Nombre").value;
    
    if(nombre == null || nombre === ""){
        alert("EL nombre no puede estar vacio");
        validardatos = false;
    }
    let apellido = document.getElementById("Apellido").value;

    if (apellido == null || apellido ==="") {
        alert("el apellido no puede estar vacio");
        validardatos = false;
    }

    let zapatillasSeleccionadas = false;

    let zapatillass = document.getElementsByName("zapatillas");
    for (let index = 0; index < zapatillass.length; index++) {
        if(zapatillass[index].checked){
            zapatillasSeleccionadas =  true;
        }
    }
    if(!zapatillasSeleccionadas){
        alert("no se ha chekeado ningunas zapatillas");
        validardatos = false;
    }

    let radioselccionado = false; 

    let generos = document.getElementsByName("genero");
    for (let index = 0; index < generos.length; index++) {
        if(generos[index].checked){
           radioselccionado = true; 
        }  
    }
    if (!radioselccionado) {
        alert("no se ha seleccionado ningun genero");
        validardatos = false;
    }
    let ciudadResidencial = document.getElementById("ciudad").selectedIndex;
    if(ciudadResidencial == null || ciudadResidencial == 0){
        alert("no se ha seleccionado ninguna ciudad de residencia");
        validardatos = false;
    }
    


    return validardatos;
}