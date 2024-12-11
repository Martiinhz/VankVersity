//Cree un programa que dados a, b y c, use la fórmula general para resolver la ecuación cuadrática correspondiente.

const a = parseFloat(prompt("Ingrese el coeficiente a: "));
const b = parseFloat(prompt("Ingrese el coeficiente b: "));
const c = parseFloat(prompt("Ingrese el coeficiente c: "));

const discriminante = Math.pow(b, 2) - (4 * a * c);
 
if (discriminante < 0) {
    console.log("La ecuación no tiene soluciones reales.");
} else {
    const x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
    console.log(`Las soluciones de la ecuación son: x1 = ${x1}, x2 = ${x2}`);
}
