// endpoints para los turnos

const express = require('express');
const router = express.Router();
const turnosController = require('../controllers/API/turnos.controller');

// GET /api/v1/turnos/:idPaciente
router.get('/:idPaciente', turnosController.obtenerTurnosPorPaciente);

module.exports = router;
