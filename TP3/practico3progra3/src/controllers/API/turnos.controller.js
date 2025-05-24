const fs = require('fs');
const path = require('path');

const turnosModel = require('../../models/mock/turnos.models.js');

class TurnosController {
    get(req, res) {
        const { idPaciente } = req.params;
        const turnosPaciente = turnosModel.listByPaciente(idPaciente);
        res.status(200).json(turnosPaciente);
    }

    delete(req, res) {
        const { idTurno } = req.params;
        const eliminado = turnosModel.delete(idTurno);
        if (eliminado) {
            res.status(200).json({ message: "Turno cancelado correctamente." });
        } else {
            res.status(404).json({ error: "Turno no encontrado." });
        }
    }
}

module.exports = new TurnosController();