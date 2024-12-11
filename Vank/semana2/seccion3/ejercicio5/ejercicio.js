let cadenaPrincipal = prompt("Ingrese la cadena principal de ADN:").toUpperCase();
let subsecuencia = prompt("Ingrese la subsecuencia a buscar:").toUpperCase();

let posicion = cadenaPrincipal.indexOf(subsecuencia);
alert(`Primera posición de la subsecuencia: ${posicion === -1 ? -1 : posicion}`);
