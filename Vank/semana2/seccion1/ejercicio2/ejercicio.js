const productoSwitch = prompt(
  "Ingresa el nombre del producto (lentejas, crema, arroz, vino): "
).toLowerCase();

switch (productoSwitch) {
  case "lentejas":
  case "arroz":
    console.log(`${productoSwitch} no paga IVA.`);
    break;
  case "vino":
  case "crema":
    console.log(`${productoSwitch} paga IVA.`);
    break;
  default:
    console.log("Producto no válido.");
}
