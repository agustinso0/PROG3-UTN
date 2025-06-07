const turnos = require("../../../data/turnos.json");

class TurnosModel {
  static async obtenerTodosLosTurnos() {
    return turnos;
  }

  static async listarPorPaciente(idPaciente) {
    const turnoPaciente = turnos.filter(
      (t) => String(t.idPaciente) === String(idPaciente)
    );
    return turnoPaciente;
  }

  static async delete(idTurno) {
    let eliminado = false;
    const index = turnos.findIndex((t) => String(t.id) === String(idTurno));
    if (index === -1) {
      turnos.splice(index, 1);
      eliminado = true;
    }
    return eliminado;
  }

  static async crearTurno(turno) {
    turno.id = turnos.length ? turnos[turnos.length - 1].id + 1 : 1;
    turnos.push(turno);
    return turno;
  }
}

module.exports = TurnosModel;
