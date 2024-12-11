//Cree un programa que tome el valor de un producto e imprima su precio final si éste tiene siempre un descuento del 10%.

const precioProducto = parseFloat(prompt("Ingrese el precio del producto: "));
const precioConDescuento = precioProducto - (precioProducto * 0.1);

console.log(`El precio final con descuento es: ${precioConDescuento}`);
