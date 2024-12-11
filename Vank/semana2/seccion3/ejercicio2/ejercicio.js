// Solicitar longitud de la cadena al usuario
let longitud = parseInt(prompt("Ingrese la longitud de la cadena:"));

// Selección aleatoria de dos bases
let bases = ["A", "T", "C", "G"];
let base1 = bases[Math.floor(Math.random() * 4)];
let base2 = bases[Math.floor(Math.random() * 4)];

// Asegurarse de que las dos bases sean diferentes
while (base1 === base2) {
  base2 = bases[Math.floor(Math.random() * 4)];
}

let cadena = "";
for (let i = 0; i < longitud; i++) {
  cadena += Math.random() < 0.5 ? base1 : base2;
}

alert(`Bases seleccionadas: ${base1}, ${base2}`);
alert(`Cadena generada: ${cadena}`);
