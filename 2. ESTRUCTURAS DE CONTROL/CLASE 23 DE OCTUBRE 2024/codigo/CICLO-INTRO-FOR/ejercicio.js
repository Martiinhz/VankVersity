//UN CICLO NOS SIRVE PARA REPETIR
//INSTRUCCIONES
//usammos For cuando sabemos el número de repeticiones a ejecutar
//valor inicial, en este caso index, que empieza en 0
//index es la variable iteradora

//tenemos una condicion , en este caso index <= 10, mientras
//esa condicion sea verdadera, el ciclo se ejecuta

//luego tenemos el incremento, index++, en este caso aumentamos
//la variable iteradora en 1 en cada iteración. También puede ser
//decremeto index--, o cualquier otra variación

console.log("--------ciclo for de 1 a 10 --------");

for (let index = 1; index <= 10; index++) {
    console.log("Hola Vankversity");
}

console.log("------Ciclo for que no se ejecuta de entrada----------");
for (let index = 20; index <= 10; index++) {
    console.log("Hola mundo");
}

console.log("-----Números de 1 a 100 descendente-----");
//Escribir un ciclo for que muestre los números entre 1 y 100
//en orden descendente
for (let index = 100; index >=1; index--) {
    console.log(index);
 }


