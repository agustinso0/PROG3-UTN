const turnosModel = require('../../models/mock/turnos.models.js');

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
}

module.exports = new TurnosController();