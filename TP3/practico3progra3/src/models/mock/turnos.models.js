let turnos = [
     { id: 1, idPaciente: 1, fecha: "2024-06-01", hora: "10:00", motivo: "Consulta" },
     { id: 1, idPaciente: 1, fecha: "2024-06-01", hora: "10:00", motivo: "Consulta" },
     { id: 1, idPaciente: 1, fecha: "2024-06-01", hora: "10:00", motivo: "Consulta" }
]; 


class TurnosModel{
     static async obtenerTodosLosTurnos(){
          return turnos;
     }

     static async listarPorPaciente (idPaciente) {
          const turnoPaciente = turnos.filter(t => String(t.idPaciente) === String(idPaciente));
          return turnoPaciente;
     }
     static async delete(idTurno){
          let eliminado = false
          const index = turnos.findIndex(t => String(t.id) === String(idTurno))
          if(index === -1){
               turnos.splice(index,1)
               eliminado = true
          }
          return eliminado
     }
}

module.exports = TurnosModel;