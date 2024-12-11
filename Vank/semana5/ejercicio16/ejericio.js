const vehiculos = [];
const precioHora = 2500;

function ingresarVehiculo(marca, placa, horaEntrada) {
  vehiculos.push({ marca, placa, horaEntrada });
  console.log("Vehículo ingresado correctamente.");
}

function eliminarVehiculo(placa) {
  const index = vehiculos.findIndex((v) => v.placa === placa);
  if (index !== -1) {
    const vehiculo = vehiculos.splice(index, 1)[0];
    const horas = Math.ceil(
      (Date.now() - new Date(vehiculo.horaEntrada)) / (1000 * 60 * 60)
    );
    const costo = horas * precioHora;
    console.log(`Vehículo retirado. Costo total: ${costo} pesos.`);
  } else {
    console.log("Vehículo no encontrado.");
  }
}

// Ejemplo de uso
ingresarVehiculo("Toyota", "ABC123", new Date());
setTimeout(() => eliminarVehiculo("ABC123"), 2000);
