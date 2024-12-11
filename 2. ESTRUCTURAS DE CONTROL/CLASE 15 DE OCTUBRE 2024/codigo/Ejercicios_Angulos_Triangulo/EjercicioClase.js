let angulo1 = parseInt(prompt('Ingrese el primer angulo: '));
let angulo2 = parseInt(prompt('Ingrese el segundo angulo: '));
let angulo3 = parseInt(prompt('Ingrese el tercer angulo: '));

let resp = angulo1+angulo2+angulo3;

if (resp == 180){
    console.log("Efectivamente es un triangulo");
}else{
    console.log("No cumple con las condiciones de triangulo");
}