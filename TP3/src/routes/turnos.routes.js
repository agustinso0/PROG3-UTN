const express = require("express");
const router = express.Router();
const TurnosController = require("../controllers/API/turnos.controller");

router.get("/ver", TurnosController.renderizarTurnos);
router.get("/:idPaciente", TurnosController.obtenerPorID);
router.get("/", TurnosController.obtenerTurnos);
router.post("/", TurnosController.crearTurno);
router.delete("/:idTurno", TurnosController.delete);

module.exports = router;
