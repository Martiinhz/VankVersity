const suma = (a, b) => a + b;

function resultado(a, b, callback) {
    const resultado = callback(a,b);
    console.log('el resultado de la suma es:', resultado);
}

resultado(5, 3, suma);