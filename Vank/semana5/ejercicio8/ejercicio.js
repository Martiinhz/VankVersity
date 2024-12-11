// Ejercicio 8
const personas = {
  162544: { nombres: "Pepe", apellidos: "Perez", edad: 40 },
  4357262: { nombres: "Maria", apellidos: "Gomez", edad: 31 },
  786353: { nombres: "Raul", apellidos: "Castro", edad: 80 },
};
for (const id in personas) {
  const persona = personas[id];
  for (const clave in persona) {
    console.log(`${clave}: ${persona[clave]}`);
  }
  console.log("---------");
}
