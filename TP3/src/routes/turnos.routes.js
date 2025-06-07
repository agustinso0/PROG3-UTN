const express = require("express");
const router = express.Router();
const TurnosController = require("../controllers/API/turnos.controller");
const { validarParametroID } = require("../middleware/validate");

router.get("/ver", TurnosController.renderizarTurnos);
router.get(
  "/:idPaciente",
  validarParametroID("idPaciente"),
  TurnosController.obtenerPorID
);
router.get("/", TurnosController.obtenerTurnos);
router.post("/", TurnosController.crearTurno);
router.delete(
  "/:idTurno",
  validarParametroID("idTurno"),
  TurnosController.delete
);

module.exports = router;
