/*
Un programa que pida el sisben de un usuario y
lo muestre por consola, ademas, que muestre
si el usuario tiene derecho a subsidio o no.
El usuario tiene derecho si tiene un 
sisben menor que 3
*/
let sisben = prompt("Ingrese su sisben entre 1 y 5");
switch (sisben) {
    case "1":
        console.log("Su nivel es 1 y Ud tiene subsidio");
        break;
    case "2":
        console.log("Su nivel es 2 y Ud tiene subsidio");
        break;
    case "3":
        console.log("Su nivel es 3 y Ud No tiene subsidio");
        break;
    case "4":
        console.log("Su nivel es 4 y Ud No tiene subsidio");
        break;
    case "5":
        console.log("Su nivel es 5 y Ud No tiene subsidio");
        break;
    default:
        console.log("Ingrese un sisben válido");
        break;
}