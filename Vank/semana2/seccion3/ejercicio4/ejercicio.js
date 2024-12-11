let longitud = parseInt(prompt("Ingrese la longitud de la cadena:"));
let porcentajeBase1;

// Solicitar porcentaje válido al usuario
do {
    porcentajeBase1 = parseFloat(prompt("Ingrese el porcentaje de la primera base (entre 1 y 99):"));
    if (porcentajeBase1 <= 0 || porcentajeBase1 >= 100) {
        alert("El porcentaje debe estar entre 1% y 99%.");
    }
} while (porcentajeBase1 <= 0 || porcentajeBase1 >= 100);

// Selección aleatoria de dos bases
let bases = ['A', 'T', 'C', 'G'];
let base1 = bases[Math.floor(Math.random() * 4)];
let base2 = bases[Math.floor(Math.random() * 4)];

// Asegurarse de que las dos bases sean diferentes
while (base1 === base2) {
    base2 = bases[Math.floor(Math.random() * 4)];
}

// Calcular las cantidades según los porcentajes
let cantidadBase1 = Math.round((porcentajeBase1 / 100) * longitud);
let cantidadBase2 = longitud - cantidadBase1;

let cadena = '';
for (let i = 0; i < cantidadBase1; i++) cadena += base1;
for (let i = 0; i < cantidadBase2; i++) cadena += base2;

// Mezclar las bases aleatoriamente
cadena = cadena.split('').sort(() => Math.random() - 0.5).join('');
alert(`Bases seleccionadas: ${base1}, ${base2}`);
alert(`Cadena generada: ${cadena}`);
