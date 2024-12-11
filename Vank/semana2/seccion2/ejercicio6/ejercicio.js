const n = parseInt(prompt("Ingresa un número: "));
let suma = 0;
for (let i = 1; i <= n; i++) {
  suma += i;
}
console.log(`La suma de los primeros ${n} números naturales es: ${suma}`);
