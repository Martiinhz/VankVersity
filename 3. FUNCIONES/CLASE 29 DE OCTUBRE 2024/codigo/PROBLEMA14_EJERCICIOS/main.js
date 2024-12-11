function entradaParque(edad, estatura, permisoParental) {

    if (edad >= 18 && estatura > 150) {
        console.log("Usted puede entrar al parque. %c Bienvenido!", "color:green;");
    } else if(edad <= 17 && permisoParental == "S" && estatura > 150) {
        console.log("Usted puede entrar al parque. %c Bienvenido!", "color:purple;");
    } else {
        console.log("Usted no puede entrar al parque.")
    }
}
let edad = parseInt(prompt("Ingrese su edad: "));
let estatura = parseInt(prompt("Ingrese su estatura"))
let permisoParental = prompt("En caso de ser menor de edad, digite 'S' si tiene permiso parental, y 'N' de ser el caso contrario: ");

console.log(entradaParque(edad, estatura, permisoParental.toUpperCase()));

