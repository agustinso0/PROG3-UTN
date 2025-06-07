const { DataTypes } = require("sequelize");
const { sequelize } = require("./../config/db.js");

const Turno = sequelize.define(
  "Turno",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_paciente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Pacientes",
        key: "id",
      },
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    motivo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Turnos",
  }
);

module.exports = { Turno };
