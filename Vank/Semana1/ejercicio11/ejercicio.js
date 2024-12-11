//Cree un programa que simule el lanzamiento de dos dados y muestre la suma de los resultados

const dado1 = Math.floor(Math.random() * 6) + 1;
const dado2 = Math.floor(Math.random() * 6) + 1;
const suma = dado1 + dado2;

console.log(`Resultado del dado 1: ${dado1}`);
console.log(`Resultado del dado 2: ${dado2}`);
console.log(`Suma de los dados: ${suma}`);
