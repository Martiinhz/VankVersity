let numero = prompt("Ingrese un número entero no negativo:");
let frecuencia = {};

for (let digito of numero) {
    frecuencia[digito] = (frecuencia[digito] || 0) + 1;
}

let maxFrecuencia = Math.max(...Object.values(frecuencia));
alert(`El dígito más repetido aparece ${maxFrecuencia} veces.`);
