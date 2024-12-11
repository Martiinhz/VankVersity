const eliminarVocales = (frase) => cadena.replace(/[aeiouáéíóú]/gi, '');

console.log('cadena sin vocales:', eliminarVocales('Hola mundo')); // 'Hll mnd');
console.log('cadena sin vocales:', eliminarVocales('Esto es un ejemplo')); // 'St  s n jmplx');
