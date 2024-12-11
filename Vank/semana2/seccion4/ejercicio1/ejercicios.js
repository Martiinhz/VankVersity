let numero = parseInt(prompt("Ingrese un número entero positivo (máximo 1.000.000.000):"));

if (numero <= 1 || numero > 1000000000) {
    alert("El número debe ser mayor que 1 y no superior a 1.000.000.000.");
} else {
    let esPrimo = true;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            esPrimo = false;
            break;
        }
    }
    alert(`¿El número ${numero} es primo? ${esPrimo}`);
}
