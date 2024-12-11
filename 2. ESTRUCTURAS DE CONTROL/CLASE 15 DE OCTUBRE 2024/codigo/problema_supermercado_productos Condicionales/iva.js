/*
2. En un supermercado se tiene los siguientes productos: lentejas, crema, arroz y vino. Las lentejas y el arroz no
pagan IVA, el vino y la crema si. Cree un programa que reciba el nombre de alguno de los productos
mencionados y muestre si el producto paga IVA o no.
*/

//Entrada de datos
let nombre = prompt("Ingrese el nombre de alguno de los productos \n1)lentejas \n2)crema \n3)arroz \n4)vino");

//Condición del programa
if(nombre == "lentejas" || nombre == "arroz"){
    console.log("Este producto no paga IVA");
}else if (nombre == "crema" || nombre == "vino"){
    console.log("Este producto paga IVA, ;(");
}else{
    console.log("Este producto no corresponde a los disponibles");  
}