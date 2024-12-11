let longitud;

// Solicitar longitud múltiplo de 10 al usuario
do {
    longitud = parseInt(prompt("Ingrese una longitud múltiplo de 10:"));
    if (longitud % 10 !== 0) {
        alert("La longitud debe ser un múltiplo de 10.");
    }
} while (longitud % 10 !== 0);

// Calcular la cantidad de bases
let cantidadG = longitud / 10;
let cantidadC = cantidadG * 4;
let cantidadT = cantidadG * 2;
let cantidadA = cantidadG * 3;

let cadena = '';
for (let i = 0; i < cantidadG; i++) cadena += 'G';
for (let i = 0; i < cantidadC; i++) cadena += 'C';
for (let i = 0; i < cantidadT; i++) cadena += 'T';
for (let i = 0; i < cantidadA; i++) cadena += 'A';

// Mezclar las bases aleatoriamente
cadena = cadena.split('').sort(() => Math.random() - 0.5).join('');
alert(`Cadena generada: ${cadena}`);
