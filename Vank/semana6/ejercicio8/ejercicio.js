function sonTodosPositivos(array) {
  return array.every((num) => num > 0);
}

// Ejemplo de uso:
console.log(sonTodosPositivos([1, 2, 3, 4])); // true
console.log(sonTodosPositivos([1, -2, 3, 4])); // false
