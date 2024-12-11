function operarArray(numeros, callback) {
    return numeros.map(callback);
}

const numeros = [1, 2, 3, 4, 5];

const resultado = operarArray(numeros, numero => {
    if (numero % 2 === 0) return numero * 2; // Multiplicar si es par
    return numero + 1; // Sumar 1 si es impar
});

console.log(resultado); // [2, 4, 4, 8, 6]
