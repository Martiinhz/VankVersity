const productos = [
    { precio: 5, cantidad: 15 },
    { precio: 10, cantidad: 5 },
    { precio: 8, cantidad: 20 }
];

const calcularTotales = productos
    .filter(producto => producto.cantidad > 10) // Filtra los productos con cantidad > 10
    .map(producto => producto.precio * producto.cantidad); // Calcula precio × cantidad

console.log(calcularTotales); // [75, 160]
