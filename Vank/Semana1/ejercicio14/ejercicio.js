// Cree un programa que genere un número aleatorio dentro de un rango específico.

const min = parseInt(prompt("Ingrese el valor mínimo del rango: "));
const max = parseInt(prompt("Ingrese el valor máximo del rango: "));
const aleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(`El número aleatorio entre ${min} y ${max} es: ${aleatorio}`);
