const turnosModel = require("../../models/mock/turnos.models.js");
const { Paciente } = require("../../models/sqlite/entities/paciente.entity.js"); 

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
    try {
      const { idPaciente } = req.params;
      const turnosPaciente = await turnosModel.listarPorPaciente(idPaciente);
      res.status(200).json(turnosPaciente);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Error al obtener los turnos del paciente." });
    }
  }

  async delete(req, res) {
    try {
      const { idTurno } = req.params;
      const eliminado = await turnosModel.delete(idTurno);
      if (eliminado) {
        res.status(200).json({ message: "Turno cancelado correctamente." });
      } else {
        res.status(404).json({ error: "Turno no encontrado." });
      }
    } catch (error) {
      res.status(500).json({ error: "Error al eliminar el turno." });
    }
  }

  async renderizarTurnos(req, res) {
    try {
      const turnosRaw = await turnosModel.obtenerTodosLosTurnos();
      const turnos = turnosRaw.map((t) => {
        const [fecha, hora] = t.date.toISOString().split("T");
        return {
          id: t.id,
          fecha,
          hora: hora.slice(0, 5),
          paciente: `ID ${t.id_paciente}`,
          motivo: t.motivo,
        };
      });
      res.render("turnos", { turnos });
    } catch (error) {
      res.status(500).send("Error al renderizar los turnos");
    }
  }

  async crearTurno(req, res) {
    try {
      const { id_paciente, date, motivo } = req.body;
      const paciente = await Paciente.findByPk(id_paciente);
      if (!paciente) {
        return res.status(400).json({ error: "El paciente no existe." });
      }
      const nuevoTurno = { id_paciente: Number(id_paciente), date, motivo };
      const turnoCreado = await turnosModel.crearTurno(nuevoTurno);
      res.status(201).json(turnoCreado);
    } catch (error) {
      res
        .status(400)
        .json({ error: "No se pudo crear el turno. " + error.message });
    }
  }
}

module.exports = new TurnosController();
