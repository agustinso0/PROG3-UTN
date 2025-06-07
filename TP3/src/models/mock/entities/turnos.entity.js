const Identificador = require("./identificador.entity");

class Turnos extends Identificador {
  constructor(id_paciente, date, motivo, id = 0) {
    super(id);
    this.id_paciente = id_paciente;
    this.date = date;
    this.motivo = motivo;
  }
}
module.exports = Turnos;
