/*Crear un programa que muestre el dígito mayor en un número 
positivo. Por ejemplo,en el número 72635987  el dígito mayor es 9*/

//pedimos el numero al usuario en formato string o cadena
let numero = prompt("Ingrese numero positivo");
let mayor;
//iniciamos el recorrido para hallar el digito mayor
//ciclo más externo
for (let index = 0; index < numero.length; index++) {
    //incializamos mayor con el digito actual en la iteración
    mayor = parseInt(numero[index]);
    //ciclo más interno,recorremos nuevamente el numero
    //ingresado por el usuario
    for (let j = 0; j < numero.length; j++) {
        //si encontramos un nuevo mayor...
        if (mayor < parseInt(numero[j])){
            //actualizamos el mayor
            mayor = parseInt(numero[j]);
        }
    }   
}
console.log("El mayor de los dígitos es: ", mayor);








