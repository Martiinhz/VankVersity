let numero = parseInt(prompt("Ingrese un número:")); 
if (numero % 2 === 0) { 
    console.log(`${numero} es par.`); 
} else { 
    console.log(`${numero} es impar.`); 
} 
let dato1 = parseFloat(prompt("ingrese el numero a revisar")); 
let modulo = dato1 % 2;
console.log(modulo); 
if (modulo == 0) { 
    console.log("el numero es par"); 
} else { 
    console.log("el numero es impar"); 
}