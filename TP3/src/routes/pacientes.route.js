const { Router } = require("express");
const pacientesController = require("../controllers/API/pacientes.controller.js");

const rutaPacientes = Router();
rutaPacientes.get("/", pacientesController.list);
rutaPacientes.post("/login", pacientesController.login);
rutaPacientes.post("/", pacientesController.create);
rutaPacientes.put("/:id", pacientesController.update);
rutaPacientes.delete("/:id", pacientesController.delete);
rutaPacientes.get("/ver", pacientesController.renderizarPacientes);

//Otras rutas CRUD

module.exports = rutaPacientes;
