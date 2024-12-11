function contarVocales(cadena) {
    cadena = cadena.toLowerCase().split('');
    cadena = cadena.filter(char => 'aeiou'.includes(char));
    return cadena.length;
}

console.log('la cantidad de vocales en "Hola, mundo!" es:', contarVocales('Hola, mundo!')); // 4);
