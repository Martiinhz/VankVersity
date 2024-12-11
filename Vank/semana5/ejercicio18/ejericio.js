const habitaciones = [
  { numero: 101, tipo: "Suite", disponible: true, reservas: [] },
  { numero: 102, tipo: "Doble", disponible: true, reservas: [] },
  { numero: 103, tipo: "Normal", disponible: false, reservas: [] },
];

function reservarHabitacion(numero, cliente, diasReservados) {
  const habitacion = habitaciones.find((h) => h.numero === numero);
  if (habitacion && habitacion.disponible) {
    habitacion.reservas.push({ cliente, diasReservados });
    habitacion.disponible = false;
    console.log("Reserva realizada con éxito.");
  } else {
    console.log("Habitación no disponible.");
  }
}

function cancelarReserva(numero, cliente) {
  const habitacion = habitaciones.find((h) => h.numero === numero);
  if (habitacion) {
    habitacion.reservas = habitacion.reservas.filter(
      (r) => r.cliente !== cliente
    );
    habitacion.disponible = habitacion.reservas.length === 0;
    console.log("Reserva cancelada con éxito.");
  } else {
    console.log("Habitación no encontrada.");
  }
}

function habitacionesDisponibles() {
  return habitaciones.filter((h) => h.disponible);
}

// Ejemplo de uso
reservarHabitacion(101, "Pedro", 3);
console.log("Habitaciones disponibles:", habitacionesDisponibles());
cancelarReserva(101, "Pedro");
console.log("Habitaciones disponibles:", habitacionesDisponibles());
