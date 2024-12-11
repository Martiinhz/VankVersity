function contarMaria() {
  let nombres18 = ["Maria", "Pedro", "Juan", "Pablo", "Diana", "Maria"];
  let contador18 = 0;

  nombres18.forEach((nombre) => {
    if (nombre === "Maria") contador18++;
  });

  console.log("Cantidad de 'Maria':", contador18);
}
contarMaria();
