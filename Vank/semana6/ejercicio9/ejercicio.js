function combinarEnOracion(palabras) {
  return palabras
    .reduce((oracion, palabra) => oracion + " " + palabra, "")
    .trim();
}

// Ejemplo de uso:
console.log(combinarEnOracion(["Hola", "mundo", "cómo", "estás"])); // "Hola mundo cómo estás"
