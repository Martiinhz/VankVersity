const numeros = [1, 2, 2, 3, 4, 4, 5];

const unicos = numeros.reduce((acc, numero) => {
    if (!acc.includes(numero)) acc.push(numero);
    return acc;
}, []);

console.log(unicos); // [1, 2, 3, 4, 5]
