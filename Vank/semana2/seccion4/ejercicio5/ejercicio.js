function calcularSerie(n) {
    let resultado = 0;
    for (let i = 2; i <= n; i++) {
        if (i % 2 === 0) {
            resultado += 1 / i; // Suma para índices pares
        } else {
            resultado -= 1 / i; // Resta para índices impares
        }
    }
    return resultado.toFixed(6); // Redondeo a 6 decimales
}

// Interacción con el usuario
const n = parseInt(prompt("Ingrese un número entero positivo (n):"));
if (n > 1) {
    console.log(`El resultado de la serie es: ${calcularSerie(n)}`);
} else {
    console.log("Por favor, ingrese un número mayor que 1.");
}
 