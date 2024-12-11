//Cree un programa que tome la base y la altura de un triángulo e imprima su área.

const base = parseFloat(prompt("Ingrese la base del triángulo: "));
const altura = parseFloat(prompt("Ingrese la altura del triángulo: "));
const area = (base * altura) / 2;

console.log(`El área del triángulo es: ${area}`);
