"use strict"

// Generar un cosecutivo

// for(var i =1; i<= 10; i++){
//     console.log("aprendiz n° ." + i);
// }


var aprendiz = new Array();
aprendiz[0] =120;
aprendiz[1] ="CC";
aprendiz[2] ="100047033950";
aprendiz[3] ="CARLOS";
aprendiz[4] ="ALBARES";
aprendiz[5] ="320541256";
aprendiz[6] ="pitalito";

// var instructor = new Array(123,"CC","345543435",95,"TIC","jesus","calderon");

// var sedes =[24, "yamboro", 5515, "james lopez"];

// console.log("el aprendiz " + aprendiz[4] +" " + aprendiz[4]+ " cuyo lider es el " + " instructor " + instructor[5] + " " + instructor[6] + " pertenese a " + " la sede " + sedes[1]);

console.log("los datos del aprendiz: ");
for(var i = 0; i <= aprendiz.length - 1; i++){
    console.log(aprendiz[i])
}

