function aplicarOperacion(numero, callback) {
  return callback(numero);
}

const duplicar = (num) => num * 2;
const cuadrado = (num) => num ** 2;

console.log(aplicarOperacion(5, duplicar)); // Output: 10
console.log(aplicarOperacion(4, cuadrado)); // Output: 16
