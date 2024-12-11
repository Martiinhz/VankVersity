const n = parseInt(prompt("Ingresa el número de estudiantes: "));
for (let i = 1; i <= n; i++) {
  const nota1 = parseFloat(prompt(`Ingresa la primera nota del estudiante ${i}:`));
  const nota2 = parseFloat(prompt(`Ingresa la segunda nota del estudiante ${i}:`));
  const nota3 = parseFloat(prompt(`Ingresa la tercera nota del estudiante ${i}:`));
  const promedio = (nota1 + nota2 + nota3) / 3;
  console.log(`El promedio del estudiante ${i} es: ${promedio.toFixed(2)}`);
}
