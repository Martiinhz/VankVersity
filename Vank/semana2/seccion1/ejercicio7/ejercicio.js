const numeroPrimo = parseInt(prompt("Ingresa un número entre 1 y 15: "));
let esPrimo = true;

if (numeroPrimo < 2) {
  esPrimo = false;
} else {
  for (let i = 2; i <= Math.sqrt(numeroPrimo); i++) {
    if (numeroPrimo % i === 0) {
      esPrimo = false;
      break;
    }
  }
}

if (esPrimo) {
  console.log(`${numeroPrimo} es primo.`);
} else {
  console.log(`${numeroPrimo} no es primo.`);
}
