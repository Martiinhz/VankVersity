let a = parseInt(prompt("Ingrese el primer número:"));
let b = parseInt(prompt("Ingrese el segundo número:"));

while (b !== 0) {
  [a, b] = [b, a % b];
}

alert(`El MCD es: ${a}`);
