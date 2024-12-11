// let numero = parseInt(prompt("Ingresa un número:"));

// switch (numero % 2) {
//   case 0:
//     console.log(numero,": El numero es par");
//     break;
//   case 1:
//     console.log(numero,": El numero es impar");
//     break;
//   default:
//     console.log("Pailas no esta ingresando un numero valido ");
// }


// let a1 = parseInt(prompt("Ingresa el primer angulo:"));
// let a2 = parseInt(prompt("Ingresa el segundo angulo:"));
// let a3 = parseInt(prompt("Ingresa el tercer angulo:"));


// let suma = a1 + a2 + a3;

// switch (true) {
//   case suma === 180 && a1 > 0 && a2 > 0 && a3 > 0:
//     console.log("Los angulos corresponden a un triangulo.");
//     break;
//   default:
//     console.log("Los angulos no corresponden a un triangulo.");
// }


// for (let tabla = 0; tabla <= 50; tabla++) {
//     console.log(tabla*3);
        
//     }


    // let n = parseInt(prompt("Ingresa el valor de n:"));
    // let suma = 0;
    // let i = 1;
    
    // while (i <= n) {
    //   suma += i;  
    //   i++;  
    // }
    
    // console.log("La suma de los primeros "+n+" números naturales es: "+suma);
    
    // let suma = 0;
    // let contador = 0;
    // let continuar = true;
    
    // while (continuar) {
    //   let numero = parseFloat(prompt("Ingresa un número (ingresa 0 para terminar):"));
    
    //   if (numero === 0) {
    //     continuar = false;  // Detener la entrada si se ingresa 0
    //   } else {
    //     suma += numero;  // Acumular la suma de los números
    //     contador++;  // Contar los números ingresados
    //   }
    // }
    
    // // Calcular y mostrar el promedio solo si se ingresaron números
    // if (contador > 0) {
    //   let promedio = suma / contador;  // Calcular el promedio
    //   console.log(`El promedio de los ${contador} números es: ${promedio}`);
    // } else {
    //   console.log("No se ingresaron números para calcular el promedio.");
    // }
    

    // let base = prompt("Ingrese la base (A, T, C, G):");
    
    // let longitud = parseInt(prompt("Ingrese la longitud de la cadena:"));
  
    // if (!["A", "T", "C", "G"].includes(base)) {
    //     alert("Base no válida. Debe ser A, T, C o G.");
    //     return;
    // }
  
    // let cadena = base.repeat(longitud);
    
    // alert(`Cadena generada: ${cadena}`);

    // function esPrimo(numero) {
//     if (numero <= 1) return false;

//     for (let i = 2; i < numero; i++) {
//         if (numero % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }


// const numero = parseInt(prompt("Ingresa un número: "));

// if (esPrimo(numero)) {
//     console.log(`${numero} es un número primo.`);
// } else {
//     console.log(`${numero} no es un número primo.`);
// }


// // * Escribe una función que reciba un número y determine si es un palíndromo.
// // Un número es un palíndromo si se lee igual de izquierda a derecha y de derecha a izquierda(por ejemplo, 121 es un palíndromo).

// function Poli(numero) {
//     let original = numero; 
//     let invertido = 0;    

//     while (numero > 0) {
//         const digito = numero % 10; 
//         invertido = invertido * 10 + digito; 
//         numero = Math.floor(numero / 10); 
//     }

//     if (original === invertido) {
//         return true;
//     } else {
//         return false;
//     }
// }

// const numero = parseInt(prompt("Ingresa un número: "), 10);

// if (esPalindromo(numero)) {
//     console.log(`${numero} es un palíndromo.`);
// } else {
//     console.log(`${numero} no es un palíndromo.`);
// }
