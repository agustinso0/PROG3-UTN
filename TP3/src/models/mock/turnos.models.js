const turnos = require("../sqlite/turno.model.js");

class TurnosModel {
  static async obtenerTodosLosTurnos() {
    return await turnos.getTurnosModel();
  }

  static async listarPorPaciente(idPaciente) {
    return await turnos.getTurnosByPacienteModel(idPaciente);
  }

  static async delete(idTurno) {
    const eliminado = await turnos.deleteTurnoModel(idTurno);
    // Sequelize retorna el número de filas eliminadas
    return eliminado > 0;
  }

  static async crearTurno(turno) {
    return await turnos.createTurnoModel(turno);
  }
}

module.exports = TurnosModel;
