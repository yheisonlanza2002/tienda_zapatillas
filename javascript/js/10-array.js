"use stric"

// formas para declarar arreglos

// FORMA 1
var aprendiz = new Array();
aprendiz[0] =120;
aprendiz[1] ="CC";
aprendiz[2] ="100047033950";
aprendiz[3] ="CARLOS";
aprendiz[4] ="ALBARES";
aprendiz[5] ="320541256";
aprendiz[6] ="pitalito";

// FORMA 2

var instructor = new Array(123,"CC","345543435",95,"TIC","jesus","calderon");

// FORMA 3

var sedes =[24, "yamboro", 5515, "james lopez"];


console.log("el aprendiz " + aprendiz[4] +" " + aprendiz[4]+ " cuyo lider es el " + " instructor " + instructor[5] + " " + instructor[6] + " pertenese a " + " la sede " + sedes[1]);


// propiedad length

// para contar todo el arreglo 

console.log("el arreglo instructor tiene " + instructor.length + " elementos");

// para contar cuantos carracteres tiene cada elemento 

console.log("el elemento 7 del ibnstructor tiene "+ instructor[6].length + " caracateres ")
