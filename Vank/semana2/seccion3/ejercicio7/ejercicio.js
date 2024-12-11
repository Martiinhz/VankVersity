let cadena = prompt("Ingrese la cadena de ADN:").toUpperCase();

let resultado = "";
let contador = 1;

for (let i = 0; i < cadena.length; i++) {
  if (cadena[i] === cadena[i + 1]) {
    contador++;
  } else {
    resultado += cadena[i] + contador + ",";
    contador = 1;
  }
}

resultado = resultado.slice(0, -1); // Eliminar la última coma
alert(`Frecuencia de bases consecutivas: ${resultado}`);
