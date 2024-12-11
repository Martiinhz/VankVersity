const palabras = ["hola", "adiós", "sol", "estrella"];

const agrupado = palabras.reduce((acc, palabra) => {
    const longitud = palabra.length;
    if (!acc[longitud]) acc[longitud] = [];
    acc[longitud].push(palabra);
    return acc;
}, {});

console.log(agrupado); // { 4: ["hola", "sol"], 5: ["adiós"], 8: ["estrella"] }
