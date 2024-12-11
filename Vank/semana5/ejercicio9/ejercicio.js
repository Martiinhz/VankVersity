// Ejercicio 9
const productosTienda = {
  Papa: 1500,
  Arroz: 2000,
  Leche: 2500,
  Azucar: 3000,
  Cafe: 5000,
};
const productoBuscado = prompt("Ingrese el nombre del producto:");
console.log(
  `El precio de ${productoBuscado} es $${
    productosTienda[productoBuscado] || "no disponible"
  }`
);
