let salir = false;
while (!salir) {
  const respuesta = prompt("¿Deseas salir? (S/N): ").toUpperCase();
  if (respuesta === "S") {
    console.log("¡Adiós!");
    salir = true;
  } else {
    console.log("El programa continuará...");
  }
}
