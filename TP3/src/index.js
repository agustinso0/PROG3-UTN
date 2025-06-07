const { Paciente } = require("./models/sqlite/entities/paciente.entity.js");
const { Turno } = require("./models/sqlite/entities/turno.entity.js");
const { connectDB } = require("./models/sqlite/config/db.js");
const Server = require("./server.js");

connectDB();
const server = new Server("ejs");
server.listen();