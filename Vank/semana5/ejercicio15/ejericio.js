let inventario = [];

function agregarProducto(nombre, categoria, precio, cantidad, codigo) {
  if (inventario.some((producto) => producto.codigo === codigo)) {
    console.log("Error: El código ya existe.");
    return;
  }
  inventario.push({ nombre, categoria, precio, cantidad, codigo });
  console.log("Producto agregado correctamente.");
}

function editarProducto(codigo, nuevosDatos) {
  const producto = inventario.find((p) => p.codigo === codigo);
  if (producto) {
    Object.assign(producto, nuevosDatos);
    console.log("Producto editado correctamente.");
  } else {
    console.log("Producto no encontrado.");
  }
}

function eliminarProducto(codigo) {
  inventario = inventario.filter((producto) => producto.codigo !== codigo);
  console.log("Producto eliminado correctamente.");
}

function visualizarProductos() {
  console.log("Inventario:", inventario);
}

// Ejemplo de uso
agregarProducto("Camiseta", "Ropa", 20000, 50, "C1");
agregarProducto("Pantalón", "Ropa", 40000, 30, "P1");
editarProducto("C1", { precio: 25000, cantidad: 45 });
visualizarProductos();
eliminarProducto("P1");
visualizarProductos();
