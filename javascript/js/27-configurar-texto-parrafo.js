function expandirTexto() {
    // alert("olis "); para comptovar si esta conectado
    let expandir = "Estudios En 1861, asistió a la escuela primaria en Smiljan, donde estudió alemán, aritmética y religión En 1862, la familia se trasladó a Gospic, Imperio austríaco, donde su padre trabajó como pastor En 1870, se trasladó a Karlovac, Croacia, para asistir al Gimnasio Real de Gospic, donde fue influenciado por su profesor de matemáticas Martin Sekulic. Desde muy pequeño demostró un talento excepcional para las matemáticas y los maestros desconfiando de su genio, le obligaban a pasar pruebas para demostrar que no había copiado sus teorías. </br> "+"</br>Graduado en 1873, regresó a su pueblo natal donde poco después de su llegada contrajo el cólera. Estuvo postrado en cama durante nueve meses y cerca de la muerte en varias ocasiones. Su padre le prometió enviarle a la mejor escuela de ingeniería si se recuperaba de la enfermedad (su progenitor deseaba que se dedicara al sacerdocio)</br>" + 
    "</br> Ingeniero </br> " +" </br> En 1881, se trasladó a Budapest para trabajar en Ferenc Puskas donde llegó a ser jefe de electricistas y más tarde ingeniero del primer sistema telefónico del país. Durante su empleo, realizó muchas mejoras en el equipo de la estación central y afirmaron haber perfeccionado un teléfono que nunca se patentó.  <a href='javacript:void(0);' onclick='reducir();'>leer menos..</a>";
    
    document.getElementById("parrafo").innerHTML = expandir;
}
function reducir() {
    let textoMenos = "En 1861, asistió a la escuela primaria en Smiljan, donde estudió alemán, aritmética y religiónEn 1982, la familia se trasladó a Gospic, Imperio austríaco, donde su padre trabajó como pastor.En 1870, se trasladó a Karlovac, Croacia, para asistir al Gimnasio Real de Gospic, donde fue influenciado por su profesor de matemáticas Martin Sekulic. Desde muy pequeño demostró un talento excepcional para las matemáticas y los maestros desconfiando de su genio, le obligaban a pasar pruebas para demostrar que no había copiado sus teorías. <a href='javacript:void(0)' onclick='expandirTexto();'>leer mas..</a>"

    document.getElementById("parrafo").innerHTML= textoMenos;
}
