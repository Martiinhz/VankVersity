function facturacion(monto, medioPago) {
    let descuento = 0;

    if (monto >= 200 && monto <= 400) {
        if (medioPago === "E") descuento = 0.3;
        else if (medioPago === "D") descuento = 0.2;
        else if (medioPago === "C") descuento = 0.1;
    } else if (monto > 400) {
        descuento = 0.4;
    }

    return monto - monto * descuento;
}


console.log('Precio con descuento: $' + facturacion(250, 'E'));
console.log('Precio con descuento: $' + facturacion(500, 'D'));
console.log('Precio con descuento: $' + facturacion(600, 'C'));
