const palabras = ["hola", "mundo", "hola", "javascript", "mundo", "hola"];

const contarPalabras = palabras.reduce((acc, palabra) => {
    acc[palabra] = (acc[palabra] || 0) + 1;
    return acc;
}, {});

console.log(contarPalabras); // { hola: 3, mundo: 2, javascript: 1 }
