const productos = [
  { nombre: "Papa", stock: 10, umbral: 15 },
  { nombre: "Arroz", stock: 5, umbral: 10 },
  { nombre: "Lentejas", stock: 8, umbral: 8 },
  { nombre: "Aceite", stock: 20, umbral: 25 },
];

function verificarStock() {
  productos.forEach((producto) => {
    if (producto.stock < producto.umbral) {
      console.log(
        `Alerta: El stock de ${producto.nombre} es bajo (${producto.stock}).`
      );
    }
  });
}

function actualizarStock(nombre, cantidad) {
  const producto = productos.find((p) => p.nombre === nombre);
  if (producto) {
    producto.stock += cantidad;
    console.log(
      `El stock de ${nombre} ha sido actualizado a ${producto.stock}.`
    );
  } else {
    console.log(`Producto ${nombre} no encontrado.`);
  }
}

// Ejemplo de uso
verificarStock();
actualizarStock("Papa", 10);
verificarStock();
