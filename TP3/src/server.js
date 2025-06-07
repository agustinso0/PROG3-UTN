const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const rutaPacientes = require("./routes/pacientes.route.js");
const rutaTurnos = require("./routes/turnos.routes.js");
const index = require("./routes/index.routes.js");
const morgan = require("morgan");
const methodOverride = require("method-override");

dotenv.config();

class Server {
  constructor(template = process.env.TEMPLATE || "ejs") {
    this.app = express();
    this.port = process.env.PORT || 3001;
    this.middleware();
    this.cors();
    this.engine(template);
    this.routes();
  }

  cors() {
    this.app.use(cors());
  }

  engine(template) {
    try {
      require.resolve(template);

      this.app.set("view engine", template);
      this.app.set("views", "./src/views/" + template);
    } catch (error) {
      console.log("Error al configurar el motor de plantillas:", template);
    }
  }
  middleware() {
    this.app.use("/", express.static("public"));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(morgan("dev"));
    this.app.use(methodOverride("_method"));
  }

  routes() {
    this.app.use("/api/v1/pacientes", rutaPacientes);
    this.app.use("/api/v1/turnos", rutaTurnos);
    this.app.use("/", index);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(
        new Date().toLocaleString("es-AR", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }) +
          ` - Server running on port ${this.port}, host: ${process.env.HOST}:${this.port}`
      );
    });
  }
}

module.exports = Server;
