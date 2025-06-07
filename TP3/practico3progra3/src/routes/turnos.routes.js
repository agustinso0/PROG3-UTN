// endpoints para los turnos

const express = require('express');
const router = express.Router();
const TurnosController = require('../controllers/API/turnos.controller');
const {validarParametroID} = require('../middleware/validate')

router.get('/:idPaciente',validarParametroID('idPaciente'),TurnosController.obtenerPorID);
router.get('/', TurnosController.obtenerTurnos);
router.delete('/:idTurno',validarParametroID('idTurno') ,TurnosController.delete);

module.exports = router;
