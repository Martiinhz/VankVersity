//Cree un programa que lea dos números y muestre su producto, su módulo, su cociente, su suma y su resta.

const num1 = parseFloat(prompt("Ingrese el primer número a calcular: "));
const num2 = parseFloat(prompt("Ingrese el segundo número a calcular: "));

console.log(`Producto: ${num1 * num2}`);

console.log(`Módulo: ${num1 % num2}`);

console.log(`Cociente: ${num1 / num2}`);

console.log(`Suma: ${num1 + num2}`);

console.log(`Resta: ${num1 - num2}`);
