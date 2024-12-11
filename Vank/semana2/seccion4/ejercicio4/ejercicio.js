let a = parseInt(prompt("Ingrese el primer dígito (0-9):"));
let b = parseInt(prompt("Ingrese el segundo dígito (0-9):"));
let c = parseInt(prompt("Ingrese el tercer dígito (0-9):"));

let numeros = [a, b, c];
let pares = [];

numeros.forEach((x, i) => {
    numeros.forEach((y, j) => {
        if (i !== j) {
            numeros.forEach((z, k) => {
                if (i !== k && j !== k) {
                    let numero = parseInt(`${x}${y}${z}`);
                    if (numero % 2 === 0) pares.push(numero);
                }
            });
        }
    });
});

alert(`Los números pares posibles son: ${[...new Set(pares)].join(", ")}`);
