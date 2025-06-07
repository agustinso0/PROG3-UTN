const { Paciente } = require("./src/models/sqlite/entities/paciente.entity.js");

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
  console.log("Pacientes cargados");
}

poblarPacientes();
