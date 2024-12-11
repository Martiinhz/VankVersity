//el continue permite "saltar" una iteración
//en un ciclo. No termina el ciclo.

//Recorrer los numeros del 1 al 10
//imprimiendo todos excepto el 7

for (let index = 1; index <= 10; index++) {
    
    if (index == 7){
        continue;
    }
    console.log(index);  
}