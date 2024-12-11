/*
Dado un array de números,genera  un nuevo array que solo contenga los números pares.
*/
function obtenerParesConFilter(numeros) {
    return numeros.filter(numero => numero % 2 === 0);
  }

console.log(obtenerParesConFilter([21, 50, 5, 12, 6]));
