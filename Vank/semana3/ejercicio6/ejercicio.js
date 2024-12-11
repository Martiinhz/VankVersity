const esVocal = (letra) => ['a', 'e', 'i', 'o', 'u'].includes(letra.toLowerCase()) ? 'es vocal' : 'no es vocal';    

console.log('la letra "a" es vocal:', esVocal('a'))
console.log('la letra "b" es vocal:', esVocal('b'));

