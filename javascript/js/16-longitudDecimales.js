"use strict"

// numero fijo de decimales

var num1 = 12.659874;
var numFix = num1.toFixed(2);
console.log(numFix)

// numero fijo de decimales sin redondear  
var num2 = 12.65999;
var num2String = num2.toString();
var cantDijitos = 0;
for(let i=0;i<num2String.length; i++){
    if(num2String[i]==="."){
        var cantDijitos = i;
        
    }
}
// console.log(cantDijitos)
num2String = num2String.slice(0 , (cantDijitos + 3));
console.log(parseFloat(num2String));