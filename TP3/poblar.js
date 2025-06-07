const { Paciente } = require("./src/models/sqlite/entities/paciente.entity.js");
const { Turno } = require("./src/models/sqlite/entities/turno.entity.js");

async function poblarPacientes() {
  await Paciente.bulkCreate(
    [
      { id: 1, name: "Lucía Fernández", email: "lucia.fernandez@example.com" },
      { id: 2, name: "Martín Gómez", email: "martin.gomez@example.com" },
      {
        id: 3,
        name: "Camila Rodríguez",
        email: "camila.rodriguez@example.com",
      },
      { id: 4, name: "Juan Pérez", email: "juan.perez@example.com" },
      { id: 5, name: "Sofía López", email: "sofia.lopez@example.com" },
    ],
    { ignoreDuplicates: true }
  );

  await Turno.bulkCreate(
    [
      {
        id: 1,
        id_paciente: 1,
        date: new Date("2023-10-01T10:00:00Z"),
        motivo: "Consulta general",
      },
      {
        id: 2,
        id_paciente: 2,
        date: new Date("2023-10-02T11:00:00Z"),
        motivo: "Chequeo anual",
      },
      {
        id: 3,
        id_paciente: 3,
        date: new Date("2023-10-03T12:00:00Z"),
        motivo: "Control de salud",
      },
      {
        id: 4,
        id_paciente: 4,
        date: new Date("2023-10-04T13:00:00Z"),
        motivo: "Consulta médica",
      },
      {
        id: 5,
        id_paciente: 5,
        date: new Date("2023-10-05T14:00:00Z"),
        motivo: "Revisión de salud",
      },
    ],
    { ignoreDuplicates: true }
  );

  console.log("Datos cargados");
}

poblarPacientes();
