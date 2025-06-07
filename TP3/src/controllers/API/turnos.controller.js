const turnosModel = require("../../models/mock/turnos.models.js");

class TurnosController {
  async obtenerTurnos(req, res) {
    try {
      const turnos = await turnosModel.obtenerTodosLosTurnos();
      res.status(200).json(turnos);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener los turnos." });
    }
  }

  async obtenerPorID(req, res) {
    const { idPaciente } = req.params;
    const turnosPaciente = await turnosModel.listarPorPaciente(idPaciente);
    res.status(200).json(turnosPaciente);
  }

  async delete(req, res) {
    const { idTurno } = req.params;
    const eliminado = await turnosModel.delete(idTurno);
    if (eliminado) {
      res.status(200).json({ message: "Turno cancelado correctamente." });
    } else {
      res.status(404).json({ error: "Turno no encontrado." });
    }
  }

  async renderizarTurnos(req, res) {
    const turnosRaw = await turnosModel.obtenerTodosLosTurnos();

    const turnos = turnosRaw.map((t) => {
      const [fecha, hora] = t.date.split("T");
      return {
        fecha,
        hora: hora.slice(0, 5),
        paciente: `ID ${t.id_paciente}`, // Si tenés el nombre del paciente, podés usarlo acá
      };
    });

    res.render("turnos", { turnos });
  }

  async crearTurno(req, res) {
    try {
      const { id_paciente, date, motivo } = req.body;
      const nuevoTurno = { id_paciente: Number(id_paciente), date, motivo };
      const turnoCreado = await turnosModel.crearTurno(nuevoTurno);
      res.status(201).json(turnoCreado);
    } catch (error) {
      res.status(400).json({ error: "No se pudo crear el turno." });
    }
  }
}

module.exports = new TurnosController();
