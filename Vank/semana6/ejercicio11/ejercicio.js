const ventas = [
    { producto: "A", cantidad: 10, precio: 2 },
    { producto: "B", cantidad: 5, precio: 3 }
];

const totalVentas = ventas
    .map(venta => venta.cantidad * venta.precio) // Calcula el total por producto
    .reduce((total, subtotal) => total + subtotal, 0); // Suma los totales

console.log(totalVentas); // 35
