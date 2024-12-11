// 3. Cree un programa que genera las tablas de multiplicar  de 1 a 10 de los primeros 5 numeros naturales

// for (let numero = 1; numero <= 5 ; numero++) {

//     console.log("tabla de multiplicar de", + numero);

//     for (let i = 1; i < 10; i++) {

//         let resultado = numero * i;

//         console.log(numero + " x "+i+" = "+ resultado);

//     }

// }

// 4.  Escriba un programa que reciba una cadena de caracteres. 
// La función debe crear y mostrar una tabla donde cada celda (i,j) contienen la concatenación de los caracteres en la posición i,j de la cadera

// function tabla(cadena) {

//     const length = cadena.length

//     for (let i = 0; i < length; i++) {
//         let m = "";

//         for (let j = 0; j < length; j++) {
//         m += cadena[i] + cadena[j] + " ";

//         }

//         console.log(m);

//     }
// }

// const cadena = prompt("Escriba una cadena");
// tabla(cadena);


// 21. Realiza un programa el cual muestre un menú al usuario el cual dependiendo de la letra que el usuario ingrese realice determinada acción:

// "s" para sumar

// "r" para restar

// "m" para multiplicar

// "d" para dividir

// "c" para realizar una cuenta regresiva de n hasta 0 (n debe ser ingresado por el usuario)

// "p" para verificar si es divisible por 2 y 3

// "x" para salir


// Las funciones básicas (suma, resta, multiplicación, división) deberán ser funciones las cuales se invoquen en el momento que el cliente ingrese la letra correspondiente, antes de ser invocadas se deben de pedir 2 valores los cuales serán los operados según la operación elegida, estos 2 valores serán pasados como parámetros dependiendo a la función que sea solicitada, Dicha función debe retornar el valor de los dos números operados.

// (NOTA: En caso de que se realiza una división por 0 debe de hacerse control del error indicando que no es posible la división, así evitando que el programa colapse")

// Para la opción de cuenta regresiva se pedirá un numero n al cliente y se realizará una cuenta regresiva de dicho número hasta 0, el valor n debe ser pasado como parámetro al momento invocar la función de cuenta regresiva.

// Para la opción "p" divisible por 2 y 3, se pedirá un numero n al cliente y se enviara como parámetro a una función la cual se encargará de validar si el número que ingreso el usuario es divisible por 2 y 3, En caso de que sea divisible por ambos números la función debe imprimir en consola un mensaje indicándonos que el numero cumple con las condiciones, del caso contrario imprimir un mensaje en consola indicando que el número no cumple con las condiciones.  

// Para la opción "x" se dará por finalizado el programa dando un mensaje al usuario indicando que el programa ha acabado.

// *Requerimientos adicionales: El programa debe contar con al menos 2 funciones las cuales sean realizadas por medio de funciones flecha

//Martin Eduardo Hernandez Sanchez

function sumar(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

const multiplicar = (a, b) => a * b;

function dividir(a, b) {

    if (b === 0) {
        console.log("No se puede dividir por 0");
        return null;
    }
    return a / b;
}

function cuenta(n) {
    for (let i = n; i >= 0; i--) {
        console.log(i);
    }
}

function verificar(n) {
    if (n % 2 === 0 && n % 3 == 0) {
        console.log("el numero" + n + "es divisible por 2 y 3");
    } else {
        console.log("el numero" + n + "no es divisible por 2 y 3");

    }
}

function menu() {
    let escoja;

    do {

        escoja = prompt("Seleccione una opcion:\n" +
            "s: Sumar\n" +
            "r: Restar\n" +
            "m: Multiplicar\n" +
            "d: Dividir\n" +
            "c: Cuenta Regresiva\n" +
            "p: Para verificar si es divisible entre 2 y 3\n" +
            "x: Para salir"

        );

        switch (escoja) {
            case "s":
                const n1 = parseFloat(prompt("Ingrese el primer numero"));
                const n2 = parseFloat(prompt("Ingrese el segundo numero"));
                console.log("Resultado de la suma:" + sumar(n1, n2));
                break;

            case "r":
                const n3 = parseFloat(prompt("Ingrese el primer numero"));
                const n4 = parseFloat(prompt("Ingrese el segundo numero"));
                console.log("Resultado de la resta:" + resta(n3, n4));
                break;

            case "m":
                const n5 = parseFloat(prompt("Ingrese el primer numero"));
                const n6 = parseFloat(prompt("Ingrese el segundo numero"));
                console.log("Resultado de la multiplicacion:" + multiplicar(n5, n6));
                break;

            case "d":
                const n7 = parseFloat(prompt("Ingrese el primer numero"));
                const n8 = parseFloat(prompt("Ingrese el segundo numero"));
                console.log("Resultado de la division:" + dividir(n7, n8));
                break;

            case "c":
                const n = parseInt(prompt("ingrese un nummero para hacer una cuenta regresiva profavor"));
                cuenta(n)
                break;

            case "p":
                const entre = parseInt(prompt("ingrese un nummero para saber si es divisible entre 2 y 3"));
                verificar(entre)
                break;

            default:
                console.log("¡Error! Opcion no valida vuelva a intentarlo");

                break;
        }

    } while (escoja !== "x");

}

menu()




