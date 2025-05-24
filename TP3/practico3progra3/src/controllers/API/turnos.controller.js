const fs = require('fs');
const path = require('path');

const turnosPath = path.join(__dirname, '../../../data/turnos.json');

exports.obtenerTurnosPorPaciente = (req, res) => {
    const { idPaciente } = req.params;

    // leer archivo json turnos
    fs.readFile(turnosPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(404).json({ error:'No se pudo leer el archivo de turnos'});
        }
        let turnos = [];
        try {
            turnos = JSON.parse(data);
        } catch (parseErr) {
            return res.status(404).json({ error:'Error al parsar los turnos'});
        }

        //filtrar turnos por idPaciente
        const turnosPaciente = turnos.filter(t => String(t.idPaciente) === String(idPaciente));
        res.json(turnosPaciente);
    });
};