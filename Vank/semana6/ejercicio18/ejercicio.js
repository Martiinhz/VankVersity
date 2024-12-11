const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

const agrupado = numeros.reduce(
    (acc, numero) => {
        if (numero % 2 === 0) acc.pares.push(numero);
        else acc.impares.push(numero);
        return acc;
    },
    { pares: [], impares: [] }
);

console.log(agrupado); // { pares: [2, 4, 6, 8], impares: [1, 3, 5, 7] }
