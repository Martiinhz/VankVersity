const numeroDivisible = parseInt(prompt("Ingresa un número: "));

if (numeroDivisible % 5 === 0) {
  console.log(`${numeroDivisible} es divisible entre 5.`);
} else {
  console.log(`${numeroDivisible} no es divisible entre 5.`);
}
