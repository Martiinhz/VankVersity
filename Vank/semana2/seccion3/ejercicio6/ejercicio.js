let cadenaPrincipal = prompt("Ingrese la cadena principal de ADN:").toUpperCase();
let subsecuencia = prompt("Ingrese la subsecuencia a buscar:").toUpperCase();

let contador = 0;
let posicion = cadenaPrincipal.indexOf(subsecuencia);

while (posicion !== -1) {
    contador++;
    posicion = cadenaPrincipal.indexOf(subsecuencia, posicion + 1);
}

alert(`La subsecuencia aparece ${contador} veces.`);
