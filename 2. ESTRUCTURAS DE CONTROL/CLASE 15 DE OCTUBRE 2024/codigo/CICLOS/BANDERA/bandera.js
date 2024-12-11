//Las banderas son variables que al 
//cambiar su estado, cambian el flujo
//de un programa. En este caso, se
//usan para controlar un ciclo

/*
Un programa que pida letras al usuario indefinidamente
hasta que éste ingrese la letra s o S
*/
//variable tipo bandera
let letra;

do {
    letra = prompt("Ingrese letra");
} while (letra != "s" && letra != "S");
