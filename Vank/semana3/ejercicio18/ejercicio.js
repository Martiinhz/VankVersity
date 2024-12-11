function contarBasesADN(cadena) {
    const bases = { A: 0, C: 0, G: 0, T: 0 };
    for (let base of cadena) {
        if (bases.hasOwnProperty(base)) {
            bases[base]++;
        }
    }
    return `Cantidad de A: ${bases.A}, Cantidad de C: ${bases.C}, Cantidad de G: ${bases.G}, Cantidad de T: ${bases.T}`;
}


console.log('la cadena es: ATGCGA, la cantidad de la base del ADN es: ', contarBasesADN('ATGCGA')); // Cantidad de A: 2, Cantidad de C: 1, Cantidad de G: 2, Cantidad de T: 1
