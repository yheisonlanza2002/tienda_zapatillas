function validarInfo(){
    var valinfor = true;

    let numeroDocu = document.getElementById("numeroDocumento").value;

if(isNaN(numeroDocu)){
    alert('se reciben solo numeros');
    valinfor = false;
    }

    let usuario =    document.getElementById("nombreUsuario").value;
if(usuario==null || usuario==""){
    alert('el usuario no puede estar vacia');
    valinfor = false;
}
 return valinfor;

}
