//--------------------------------------------------------------------------------------------------------------------------------
// 1. Determinar si el usuario es mayor de edad
let edad = parseInt(prompt("Ingrese su edad:"));

if (edad >= 18) {
  console.log("El usuario es mayor de edad.");
} else {
  console.log("El usuario es menor de edad.");
}

// 2. Productos que pagan IVA
// Versión con condicionales
let producto = prompt("Ingrese el nombre del producto (lentejas, crema, arroz, vino):").toLowerCase();

if (producto === "lentejas" || producto === "arroz") {
  console.log("El producto no paga IVA.");
} else if (producto === "crema" || producto === "vino") {
  console.log("El producto paga IVA.");
} else {
  console.log("Producto no reconocido.");
}

// Versión con switch-case
let productoSwitch = prompt("Ingrese el nombre del producto (lentejas, crema, arroz, vino):").toLowerCase();

switch (productoSwitch) {
  case "lentejas":
  case "arroz":
    console.log("El producto no paga IVA.");
    break;
  case "crema":
  case "vino":
    console.log("El producto paga IVA.");
    break;
  default:
    console.log("Producto no reconocido.");
}

// 3. Mostrar el número mayor
let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));

if (numero1 > numero2) {
  console.log(`${numero1} es mayor que ${numero2}`);
} else if (numero1 < numero2) {
  console.log(`${numero2} es mayor que ${numero1}`);
} else {
  console.log("Ambos números son iguales.");
}

// 4. Verificar si los ángulos forman un triángulo
// Versión con condicionales
let angulo1 = parseFloat(prompt("Ingrese el primer ángulo:"));
let angulo2 = parseFloat(prompt("Ingrese el segundo ángulo:"));
let angulo3 = parseFloat(prompt("Ingrese el tercer ángulo:"));

if (angulo1 + angulo2 + angulo3 === 180) {
  console.log("Los ángulos corresponden a un triángulo.");
} else {
  console.log("Los ángulos no corresponden a un triángulo.");
}

// Versión con switch-case
let sumaAngulos = angulo1 + angulo2 + angulo3;

switch (sumaAngulos) {
  case 180:
    console.log("Los ángulos corresponden a un triángulo.");
    break;
  default:
    console.log("Los ángulos no corresponden a un triángulo.");
}

// 5. Determinar si un número es par o impar
// Versión con condicionales
let numero = parseInt(prompt("Ingrese un número:"));

if (numero % 2 === 0) {
  console.log(`${numero} es par.`);
} else {
  console.log(`${numero} es impar.`);
}

// Versión con switch-case
switch (numero % 2) {
  case 0:
    console.log(`${numero} es par.`);
    break;
  default:
    console.log(`${numero} es impar.`);
}

// 6. Verificar si un número es divisible entre cinco
// Versión con condicionales
if (numero % 5 === 0) {
  console.log(`${numero} es divisible entre cinco.`);
} else {
  console.log(`${numero} no es divisible entre cinco.`);
}

// Versión con switch-case
switch (numero % 5) {
  case 0:
    console.log(`${numero} es divisible entre cinco.`);
    break;
  default:
    console.log(`${numero} no es divisible entre cinco.`);
}

// 7. Verificar si un número entre 1 y 15 es primo
// Versión con condicionales
let numeroPrimo = parseInt(prompt("Ingrese un número entre 1 y 15:"));

if (numeroPrimo === 2 || numeroPrimo === 3 || numeroPrimo === 5 || numeroPrimo === 7 || numeroPrimo === 11 || numeroPrimo === 13) {
  console.log(`${numeroPrimo} es un número primo.`);
} else {
  console.log(`${numeroPrimo} no es un número primo.`);
}

// Versión con switch-case
switch (numeroPrimo) {
  case 2:
  case 3:
  case 5:
  case 7:
  case 11:
  case 13:
    console.log(`${numeroPrimo} es un número primo.`);
    break;
  default:
    console.log(`${numeroPrimo} no es un número primo.`);
}


//--------------------------------------------------------------------------------------------------------------------------------

// Seccion 2
// 1. Bucle for que imprime los números del 1 al 20
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

// 2. Bucle while que imprime los números del -100 al 600
let i = -100;
while (i <= 600) {
  console.log(i);
  i++;
}

// 3. Programa que imprime la tabla de multiplicar del 3 (del 0 al 50)
for (let j = 0; j <= 50; j++) {
  console.log(`3 x ${j} = ${3 * j}`);
}

// 4. Programa que calcula el promedio de tres notas para n estudiantes (usando funciones)
function calcularPromedio(estudiantes) {
  for (let i = 1; i <= estudiantes; i++) {
    let nota1 = parseFloat(prompt(`Ingrese la nota 1 del estudiante ${i}:`));
    let nota2 = parseFloat(prompt(`Ingrese la nota 2 del estudiante ${i}:`));
    let nota3 = parseFloat(prompt(`Ingrese la nota 3 del estudiante ${i}:`));
    let promedio = (nota1 + nota2 + nota3) / 3;
    console.log(`El promedio del estudiante ${i} es: ${promedio.toFixed(2)}`);
  }
}

let numeroEstudiantes = parseInt(prompt("Ingrese el número de estudiantes:"));
calcularPromedio(numeroEstudiantes);

// 5. Programa que muestra los números naturales de 1 a n (usando ciclo while)
let n = parseInt(prompt("Ingrese el valor de n:"));
let k = 1;
while (k <= n) {
  console.log(k);
  k++;
}

// 6. Programa que calcula la suma de los primeros n números naturales
let nSuma = parseInt(prompt("Ingrese el valor de n para la suma:"));
let suma = (nSuma * (nSuma + 1)) / 2;
console.log(`La suma de los primeros ${nSuma} números naturales es: ${suma}`);

// 7. Programa que muestra la tabla de multiplicar del 10 (del 1 al 50)
for (let m = 1; m <= 50; m++) {
  console.log(`10 x ${m} = ${10 * m}`);
}

// 8. Programa que muestra los números impares entre 1 y n
let nImpares = parseInt(prompt("Ingrese el valor de n para los impares:"));
for (let i = 1; i <= nImpares; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// 9. Programa que pregunta al usuario si desea salir (S/N)
let salir = false;
while (!salir) {
  let respuesta = prompt("¿Desea salir? (S/N)").toUpperCase();
  if (respuesta === "S") {
    salir = true;
    console.log("El programa ha terminado.");
  } else {
    console.log("El programa sigue en ejecución.");
  }
}

// 10. Programa que calcula el promedio de 10 números
let suma10 = 0;
for (let i = 1; i <= 10; i++) {
  let numero = parseFloat(prompt(`Ingrese el número ${i}:`));
  suma10 += numero;
}
let promedio10 = suma10 / 10;
console.log(`El promedio de los 10 números es: ${promedio10}`);

// 11. Programa que muestra el promedio de n números, deja de pedir números cuando se introduce 0
let sumaPromedio = 0;
let contadorPromedio = 0;
while (true) {
  let numero = parseFloat(prompt("Ingrese un número (0 para detener):"));
  if (numero === 0) break;
  sumaPromedio += numero;
  contadorPromedio++;
}
if (contadorPromedio > 0) {
  let promedio = sumaPromedio / contadorPromedio;
  console.log(`El promedio de los números ingresados es: ${promedio}`);
} else {
  console.log("No se ingresaron números.");
}

// 12. Programa que calcula la suma de los cuadrados de los números entre 1 y n
let nCuadrados = parseInt(prompt("Ingrese el valor de n para calcular la suma de cuadrados:"));
let sumaCuadrados = 0;
for (let i = 1; i <= nCuadrados; i++) {
  sumaCuadrados += i * i;
}
console.log(`La suma de los cuadrados de los números entre 1 y ${nCuadrados} es: ${sumaCuadrados}`);


//--------------------------------------------------------------------------------------------------------------------------------
// Seccion 3

// Programa 1a: Generar una cadena de ADN con una única base indicada por el usuario
function generarCadenaUnica() {
  let base = prompt("Ingrese la base (A, T, C, G):");
  
  let longitud = parseInt(prompt("Ingrese la longitud de la cadena:"));

  if (!["A", "T", "C", "G"].includes(base)) {
      alert("Base no válida. Debe ser A, T, C o G.");
      return;
  }

  let cadena = base.repeat(longitud);
  
  alert(`Cadena generada: ${cadena}`);
}

// Programa 1b: Generar una cadena de ADN con dos bases seleccionadas aleatoriamente
function generarCadenaAleatoria() {
  // Posibles bases de ADN
  let bases = ["A", "T", "C", "G"];
  
  // Selecciona dos bases aleatoriamente, asegurándose de que sean diferentes
  let base1 = bases[Math.floor(Math.random() * bases.length)];
  let base2 = bases[Math.floor(Math.random() * bases.length)];
  while (base1 === base2) {
      base2 = bases[Math.floor(Math.random() * bases.length)];
  }

  // Solicita la longitud de la cadena
  let longitud = parseInt(prompt("Ingrese la longitud de la cadena:"));
  
  // Genera la cadena alternando entre base1 y base2 aleatoriamente
  let cadena = "";
  for (let i = 0; i < longitud; i++) {
      cadena += Math.random() < 0.5 ? base1 : base2;
  }

  // Muestra la cadena generada en la consola
  alert(`Cadena generada: ${cadena}`);
}

// Programa 1c: Generar una cadena con longitud múltiplo de 10 y distribución específica de bases
function generarCadenaDistribuida() {
  // Solicita una longitud que sea múltiplo de 10
  let longitud = parseInt(prompt("Ingrese una longitud múltiplo de 10:"));

  // Solicita nuevamente si la longitud no es múltiplo de 10
  while (longitud % 10 !== 0) {
      alert("La longitud debe ser múltiplo de 10.");
      longitud = parseInt(prompt("Ingrese una longitud múltiplo de 10:"));
  }

  // Calcula las cantidades de cada base según la proporción dada
  let cantidadGuanina = longitud / 10; // Guanina (G)
  let cantidadCitosina = cantidadGuanina * 4; // Citosina (C)
  let cantidadTimina = cantidadGuanina * 2; // Timina (T)
  let cantidadAdenina = cantidadGuanina * 3; // Adenina (A)

  // Genera la cadena con la distribución de bases
  let cadena = "G".repeat(cantidadGuanina) + 
               "C".repeat(cantidadCitosina) + 
               "T".repeat(cantidadTimina) + 
               "A".repeat(cantidadAdenina);

  // Mezcla la cadena aleatoriamente
  cadena = cadena.split('').sort(() => Math.random() - 0.5).join('');

  // Muestra la cadena generada en la consola
  alert(`Cadena generada: ${cadena}`);
}

// Programa 1d: Generar una cadena de ADN con dos bases seleccionadas aleatoriamente y porcentaje específico
function generarCadenaConPorcentaje() {
  // Selección de las bases aleatorias
  let bases = ["A", "T", "C", "G"];
  let base1 = bases[Math.floor(Math.random() * bases.length)];
  let base2 = bases[Math.floor(Math.random() * bases.length)];
  while (base1 === base2) {
      base2 = bases[Math.floor(Math.random() * bases.length)];
  }

  // Solicita la longitud de la cadena
  let longitud = parseInt(prompt("Ingrese la longitud de la cadena:"));
  
  // Solicita el porcentaje de la primera base
  let porcentaje = parseFloat(prompt(`Ingrese el porcentaje de ${base1} (entre 1% y 99%):`));

  // Verifica que el porcentaje esté entre 1 y 99
  while (porcentaje <= 0 || porcentaje >= 100) {
      alert("El porcentaje debe estar entre 1% y 99%");
      porcentaje = parseFloat(prompt(`Ingrese el porcentaje de ${base1} (entre 1% y 99%):`));
  }

  // Calcula la cantidad de cada base según el porcentaje
  let cantidadBase1 = Math.floor((porcentaje / 100) * longitud);
  let cantidadBase2 = longitud - cantidadBase1;

  // Genera la cadena con la proporción dada
  let cadena = base1.repeat(cantidadBase1) + base2.repeat(cantidadBase2);

  // Mezcla la cadena aleatoriamente
  cadena = cadena.split('').sort(() => Math.random() - 0.5).join('');

  // Muestra la cadena generada en la consola
  alert(`Cadena generada: ${cadena}`);
}

// PROGRAMA 2A: ENCONTRAR LA PRIMERA POSICIÓN DE UNA SUBCADENA EN UNA CADENA DADA
function encontrarPrimeraPosicion() {
  // Cadena constante dada
  const cadenaPrincipal = "ATGCGATACGTAGCTAGC";
  
  // Solicita la secuencia más pequeña al usuario
  const subCadena = prompt("Ingrese la secuencia que desea buscar en la cadena principal:");

  // Determina la primera posición de la subcadena en la cadena principal
  const posicion = cadenaPrincipal.indexOf(subCadena);

  // Muestra la posición o -1 si no existe
  if (posicion !== -1) {
      console.log(`La secuencia se encuentra por primera vez en la posición: ${posicion}`);
  } else {
      console.log(`La secuencia no se encuentra en la cadena principal. Resultado: ${posicion}`);
  }
}

// PROGRAMA 2B: CONTAR CUÁNTAS VECES APARECE UNA SECUENCIA DENTRO DE UNA CADENA DADA
function contarOcurrencias() {
  // Cadena constante dada
  const cadenaPrincipal = "ATGCGATACGTAGCTAGC";

  // Solicita la secuencia más pequeña al usuario
  const subCadena = prompt("Ingrese la secuencia que desea contar en la cadena principal:");

  // Inicializa el contador y la posición inicial
  let contador = 0;
  let posicion = cadenaPrincipal.indexOf(subCadena);

  // Recorre la cadena principal para encontrar todas las ocurrencias
  while (posicion !== -1) {
      contador++;
      posicion = cadenaPrincipal.indexOf(subCadena, posicion + 1);
  }

  // Muestra el número de veces que aparece la subcadena
  if (contador > 0) {
      console.log(`La secuencia aparece ${contador} veces en la cadena principal.`);
  } else {
      console.log(`La secuencia no aparece en la cadena principal. Resultado: 0`);
  }
}

// PROGRAMA 3A: MOSTRAR LA CADENA EN FORMATO DE FRECUENCIA DE BASES CONSECUTIVAS
function mostrarFrecuenciaBases() {
  // Cadena constante dada
  const cadena = "AAAGTCCAGGTTTT";

  let resultado = "";
  let contador = 1;

  // Recorre la cadena y cuenta las bases consecutivas
  for (let i = 1; i <= cadena.length; i++) {
      if (cadena[i] === cadena[i - 1]) {
          contador++;
      } else {
          resultado += `${cadena[i - 1]}${contador},`;
          contador = 1;
      }
  }

  // Elimina la última coma y muestra el resultado
  resultado = resultado.slice(0, -1);
  console.log(`Formato de frecuencia de bases: ${resultado}`);
}
