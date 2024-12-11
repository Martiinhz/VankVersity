/*
Si una persona es mayor de edad, puede
tener un subsidio, de lo contrario, no.
*/
//pedimos edad de la persona
let edad = parseInt(prompt("Ingrese edad"));
//verificamos si puede tener un subsidio o no
//usamos un condicional para esto
if (edad >= 18){
    //bloque de instrucciones del if
    console.log("Puede tener subsidio");
}else{
    console.log("No puede tener subsidio");
}
