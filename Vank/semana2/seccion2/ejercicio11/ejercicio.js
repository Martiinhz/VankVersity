let suma = 0;
let contador = 0;
let numero = parseFloat(prompt("Ingresa un número (0 para terminar): "));
while (numero !== 0) {
  suma += numero;
  contador++;
  numero = parseFloat(prompt("Ingresa otro número (0 para terminar): "));
}
if (contador > 0) {
  const promedio = suma / contador;
  console.log(
    `El promedio de los números ingresados es: ${promedio.toFixed(2)}`
  );
} else {
  console.log("No se ingresaron números.");
}
