let turnos = [
     { id: 1, idPaciente: 1, fecha: "2024-06-01", hora: "10:00", motivo: "Consulta" }
]; 

module.exports = {
    listByPaciente: (idPaciente) => {
        return turnos.filter(t => String(t.idPaciente) === String(idPaciente));
    },
    delete: (idTurno) => {
        const index = turnos.findIndex(t => String(t.id) === String(idTurno));
        if (index !== -1) {
            turnos.splice(index, 1);
            return true;
        }
        return false;
    }
};