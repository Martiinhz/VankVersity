const productos = {
  Papa: 1500,
  Arroz: 2500,
  Lentejas: 3000,
  Aceite: 8000,
};
for (const producto in productos) {
  console.log(`${producto}: $${productos[producto]}`);
}
