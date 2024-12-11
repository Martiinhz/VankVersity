let base = parseInt(prompt("Ingrese la base:"));
let exponente = parseInt(prompt("Ingrese el exponente:"));

let resultado = 1;
for (let i = 0; i < exponente; i++) {
  resultado *= base;
}

alert(`El resultado de ${base}^${exponente} es: ${resultado}`);
