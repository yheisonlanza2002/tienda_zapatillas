function imagenes(id,ruta) {
    
    document.getElementById(id).src=ruta;
    // alert('olisss');
}
function retornoImagen() {
    document.getElementById('imagen').src ="img/dubai.jpg";
}

function ocultarImg() {
    document.getElementById('dubai-invisible').className="hidden";
}
function mostrarImg() {
    document.getElementById('dubai-invisible').className ="img-visible";
}