const angulo1 = parseInt(prompt("Ingresa el primer ángulo: "));
const angulo2 = parseInt(prompt("Ingresa el segundo ángulo: "));
const angulo3 = parseInt(prompt("Ingresa el tercer ángulo: "));

if (angulo1 + angulo2 + angulo3 === 180) {
  console.log("Los ángulos corresponden a un triángulo.");
} else {
  console.log("Los ángulos no corresponden a un triángulo.");
}
