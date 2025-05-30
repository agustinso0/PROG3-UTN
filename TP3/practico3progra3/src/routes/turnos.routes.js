// endpoints para los turnos

const express = require('express');
const router = express.Router();
const TurnosController = require('../controllers/API/turnos.controller');


router.get('/:idPaciente', TurnosController.obtenerPorID);
router.get('/', TurnosController.obtenerTurnos);
router.delete('/:idTurno', TurnosController.delete);

module.exports = router;
