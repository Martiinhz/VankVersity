/*
Función para calcular el precio final de
un producto
*/
//primero van los parámetros obligatorios
//luego, van los parámetros predetermindos
function precioFinal(precio, iva=0.19) {
    let precioConIva = precio + precio*iva;
    return precioConIva;
}

let resultado = precioFinal(20000);
console.log("Precio final :", resultado);

let resultado2 = precioFinal(20000, 0.16);
console.log("Precio final :", resultado2);
