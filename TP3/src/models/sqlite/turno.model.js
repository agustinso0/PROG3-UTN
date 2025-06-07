const { Turno } = require("../sqlite/entities/turno.entity.js");

const getTurnosModel = () => {
  const turnos = Turno.findAll();
  return turnos;
};

const getTurnosByPacienteModel = (id_paciente) => {
  const turnos = Turno.findAll({
    where: {
      id_paciente: id_paciente,
    },
  });
  return turnos;
};

const getTurnosByDateModel = (date) => {
  const turnos = Turno.findAll({
    where: {
      date: date,
    },
  });
  return turnos;
}

const createTurnoModel = (turno) => {
  const newTurno = Turno.create(turno);
  return newTurno;
};

const updateTurnoModel = (id, turno) => {
  const updatedTurno = Turno.update(turno, {
    where: {
      id: id,
    },
  });
  return updatedTurno;
}

const deleteTurnoModel = (id) => {
  const deletedTurno = Turno.destroy({
    where: {
      id: id,
    },
  });
  return deletedTurno;
};

module.exports = {
  getTurnosModel,
  getTurnosByPacienteModel,
  getTurnosByDateModel,
  createTurnoModel,
  updateTurnoModel,
  deleteTurnoModel,
};
