let numero = parseInt(prompt("Ingrese un número para descomponer en factores primos:"));
let factores = [];

for (let i = 2; i <= numero; i++) {
    while (numero % i === 0) {
        factores.push(i);
        numero /= i;
    }
}

alert(`Factores primos: ${factores.join(" x ")}`);