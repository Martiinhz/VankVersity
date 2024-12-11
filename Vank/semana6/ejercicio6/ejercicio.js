function convertirAMayusculas(array) {
  return array.map((cadena) => cadena.toUpperCase());
}

console.log(convertirAMayusculas(["hola", "mundo"])); // Output: ["HOLA", "MUNDO"]
