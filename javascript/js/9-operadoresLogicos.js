/* AND........&& (y)
   OR.........|| (o)
   NOT........ ! (Negacion)
   XDR........ ^  (o exclusivo)
*/

//para poder acceder al serviciob de de trasporte es nesesario que el aprendix cuente con SISBEN o jovenes en accion para poder acceder al beneficio , si el aprendiz cuentaa con los dos beneficios no podra acceder al subsidio y si no cuenta con ningun beneficio tampoco podra ACCE4DER AAL beneficio del tgrasporte 


var benefSisben = true;
var benefJovenes = false;

if(benefJovenes ^ benefSisben){
    console.log("El aprendiz puede acvceder al beneficio de trasporte");
}else{
    console.log("el aprendiz no puede acceder al beneficio de trassporte")
}