// endpoints para los turnos

const express = require('express');
const router = express.Router();
const turnosController = require('../controllers/API/turnos.controller');


router.get('/:idPaciente', turnosController.get);
router.delete('/:idTurno', turnosController.delete);

module.exports = router;
