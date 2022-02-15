function parrafoEspecial() {
    let parrafo = document.getElementsByTagName("p");
    parrafo[0].style.fontFamily="verdana, geneva";
    parrafo[2].style.fontFamily="verdana, geneva";
}
function llamarColor() {
    let contenedores = document.getElementsByTagName("div");
    for (let i = 0; i < contenedores.length; i++) {
        contenedores[i].style.background = "gray";
    }
}