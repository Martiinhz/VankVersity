function generarTriangulo(n) {
    let triangulo = "";
    for (let i = 1; i <= n; i++) {
        triangulo += "* ".repeat(i).trim() + "\n"; // Añade las estrellas por línea
    }
    for (let i = n - 1; i >= 1; i--) {
        triangulo += "* ".repeat(i).trim() + "\n"; // Añade las estrellas decreciendo
    }
    return triangulo.trim();
}

// Interacción con el usuario
const nTriangulo = parseInt(prompt("Ingrese el valor de n para el triángulo:"));
if (nTriangulo > 0) {
    console.log(`Triángulo generado:\n${generarTriangulo(nTriangulo)}`);
} else {
    console.log("Por favor, ingrese un número mayor que 0.");
}
