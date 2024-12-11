const numeros = [3, 5, 7, 10, 12];

const resultado = numeros.map((num) => num * 2).filter((num) => num > 10);

console.log(resultado);

const arrayNums = [2, 2, 4, 4, 6];

console.log(
  "todos pares",
  arrayNums.every((num) => num % 2 != 0)
);
