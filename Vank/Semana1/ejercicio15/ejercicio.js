//Cree un programa que calcule horas y minutos a partir de segundos.

const segundos = parseInt(prompt("Ingrese la cantidad de segundos: "));
const horas = Math.floor(segundos / 3600);
const minutos = Math.floor((segundos % 3600) / 60);
const segundosRestantes = segundos % 60;

console.log(`${segundos} segundos son equivalentes a ${horas} horas, ${minutos} minutos y ${segundosRestantes} segundos.`);
