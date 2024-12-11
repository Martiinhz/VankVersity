//Cree un programa que tome el lado de un cubo e imprima su volumen.

const lado = parseFloat(prompt("Ingrese el lado del cubo: "));
const volumen = Math.pow(lado, 3);

console.log(`El volumen del cubo es: ${volumen}`);
