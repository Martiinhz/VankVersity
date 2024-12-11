//Cree un programa que tome el radio de un círculo e imprima su área y perímetro.

const radio = parseFloat(prompt("Ingrese el radio del círculo: "));
const area = Math.PI * Math.pow(radio, 2);
const perimetro = 2 * Math.PI * radio;

console.log(`Área: ${area.toFixed(2)}`);
console.log(`Perímetro: ${perimetro.toFixed(2)}`);
