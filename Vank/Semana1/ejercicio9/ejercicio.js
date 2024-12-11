// Cree un programa que lea una cantidad e imprima un porcentaje a calcular requerido sobre esa cantidad.

let cantidad = parseFloat(prompt("Ingrese la cantidad:"));
let porcentaje = parseFloat(prompt("Ingrese el porcentaje a calcular (por ejemplo, 20 para el 20%):"));


let resultado = (cantidad * porcentaje) / 100;


console.log(`El ${porcentaje}% de ${cantidad} es: ${resultado}`);
