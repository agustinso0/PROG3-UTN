const { Sequelize } = require("sequelize");
const path = require("path");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: path.join(__dirname, "db", "clinica.sqlite"),
  logging: true,
});

/* require("../../sqlite/entities/paciente.entity");
require("../../sqlite/entities/turno.entity"); */

const connectDB = async () => {
  try {
    await sequelize.sync({ alter: true }); 
    console.log(await sequelize.getQueryInterface().showAllTables());
    console.log("Base de datos conectada.");
  } catch (error) {
    console.error("Error conectando a la base de datos:", error);
  }
};

module.exports = { sequelize, connectDB };
