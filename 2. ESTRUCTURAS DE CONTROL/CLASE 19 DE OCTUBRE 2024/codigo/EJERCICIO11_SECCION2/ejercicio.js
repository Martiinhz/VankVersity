let contador = 0;
let interacciones = 0;
let numeroActual;

do {
    numeroActual = parseInt(prompt("Digite un numero"))
    contador += numeroActual;
    interacciones++;
} while (numeroActual != 0);

alert(`El promedio de los numeros digitados es ${contador/(interacciones - 1)}`)