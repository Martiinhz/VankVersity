function contarLetraC() {
  let nombres = ["Carlos", "Carmen", "Pedro", "Lucía"];
  let contador = 0;

  nombres.forEach((nombre) => {
    for (let letra of nombre.toLowerCase()) {
      if (letra === "c") contador++;
    }
  });

  console.log("Cantidad de 'c':", contador);
}
contarLetraC();
