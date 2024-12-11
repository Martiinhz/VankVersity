const empleados = [];

function agregarEmpleado(nombre, id) {
  empleados.push({ nombre, id, horasTrabajadas: [] });
}

function agregarHoras(id, horas) {
  const empleado = empleados.find((e) => e.id === id);
  if (empleado) {
    empleado.horasTrabajadas.push(horas);
    console.log("Horas agregadas correctamente.");
  } else {
    console.log("Empleado no encontrado.");
  }
}

function calcularPago(id, tarifa) {
  const empleado = empleados.find((e) => e.id === id);
  if (empleado) {
    const totalHoras = empleado.horasTrabajadas.reduce((acc, h) => acc + h, 0);
    return totalHoras * tarifa;
  }
  return 0;
}

function empleadosConHorasExtras() {
  return empleados.filter(
    (e) => e.horasTrabajadas.reduce((acc, h) => acc + h, 0) > 40
  );
}

// Ejemplo de uso
agregarEmpleado("Juan", 1);
agregarHoras(1, 20);
agregarHoras(1, 25);
console.log("Pago semanal:", calcularPago(1, 10000));
console.log("Empleados con horas extras:", empleadosConHorasExtras());
