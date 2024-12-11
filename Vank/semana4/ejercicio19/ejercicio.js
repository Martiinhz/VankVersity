function sumaCuadrados() {
  let arr19 = [-2, 8, 99, 1, 7];
  let sumaCuadrados = 0;

  arr19.forEach((num) => {
    sumaCuadrados += num ** 2;
  });

  console.log("Suma de cuadrados:", sumaCuadrados);
}
sumaCuadrados();
