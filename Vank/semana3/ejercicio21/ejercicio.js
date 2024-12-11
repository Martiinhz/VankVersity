function esPrimo(numero) {
    if (numero < 2) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
    }
    return true;
}

function imprimirResultado(numero) {
    console.log(esPrimo(numero) ? "Es primo" : "No es primo");
}
