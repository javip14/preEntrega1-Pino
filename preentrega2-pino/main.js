const fechas = [
  { fecha: "01/01/2024", horas: [20, 21], disponibles: [true, true] },
  { fecha: "02/01/2024", horas: [20, 21], disponibles: [true, true] },
  { fecha: "03/01/2024", horas: [20, 21], disponibles: [true, true] },
  { fecha: "04/01/2024", horas: [20, 21], disponibles: [true, true] },
  { fecha: "05/01/2024", horas: [20, 21], disponibles: [true, true] },
  { fecha: "06/01/2024", horas: [20, 21], disponibles: [true, true] },
  { fecha: "07/01/2024", horas: [20, 21], disponibles: [true, true] },
];

let totalReservas = 0;

let respuesta = prompt("Quieres reservar una cancha la primera semana de Enero (1 al 7 Enero)??");

while (respuesta.toLowerCase() !== "no") {
  let fecha = prompt("Ingrese la fecha que quiere reservar (en este formato ej: DD/MM/AAAA)");
  let hora = parseInt(prompt("Ingrese la hora que quiere reservar (20 o 21)"));

  for (let i = 0; i < fechas.length; i++) {
    let item = fechas[i];

    if (item.fecha === fecha) {
      let indexHora = item.horas.indexOf(hora);
      if (indexHora !== -1 && item.disponibles[indexHora]) {
        fechas[i].disponibles[indexHora] = false;
        totalReservas++;
        alert("Reservaste la cancha!");
      } else {
        alert("Fecha u hora no disponible, intenta con otro día o hora");
      }
    }
  }

  respuesta = prompt("Quieres reservar otra cancha?");
}

alert("En total tienes " + totalReservas + " canchas reservadas, gracias por visitarnos!!");