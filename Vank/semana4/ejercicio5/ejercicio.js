function imprimirImpares() {
  let k = [17, 4, 64, 79, 109, 112];
  k.forEach((num) => {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
}
imprimirImpares();
