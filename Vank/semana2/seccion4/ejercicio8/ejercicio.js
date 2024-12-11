let n = parseInt(prompt("Ingrese la cantidad de términos de la serie:"));
let serie = [];

for (let i = 0; i < n; i++) {
  let termino = i % 2 === 0 ? 2 + 4 * i : -(2 + 4 * i);
  serie.push(termino);
}

alert(`La serie es: ${serie.join(", ")}`);
