# TP3 - Programación 3 (UTN)

Este proyecto es una aplicación de gestión de pacientes y turnos médicos desarrollada en **Node.js** con **Express**, **Sequelize** y **SQLite** como base de datos relacional. Incluye vistas en EJS y PUG, y permite operaciones CRUD sobre pacientes y turnos.

---

## Requisitos

- Node.js (v18 o superior recomendado)
- npm

---

## Instalación

1. **Clona el repositorio**  

   ```bash
   git clone <url-del-repo>
   cd practico3progra3
   ```

2. **Instala las dependencias**  

   ```bash
   npm install
   ```

---

## Poblar la base de datos

Antes de iniciar la aplicación, debes cargar datos de ejemplo en la base de datos SQLite.  
Ejecuta el siguiente comando:

```bash
node poblar.js
```

Esto insertará pacientes y turnos de ejemplo en la base de datos `clinica.sqlite` (ubicada en `/src/models/sqlite/db/`).

---

## Ejecución

Inicia el servidor en modo desarrollo con:

```bash
npm run dev
```

El servidor estará disponible por defecto en [http://localhost:3001](http://localhost:3001).

---

## Endpoints principales

- **Pacientes**
  - `GET /api/v1/pacientes` - Listar pacientes
  - `POST /api/v1/pacientes` - Crear paciente
  - `DELETE /api/v1/pacientes/:id` - Eliminar paciente
  - `GET /api/v1/pacientes/ver` - Vista HTML de pacientes

- **Turnos**
  - `GET /api/v1/turnos` - Listar turnos
  - `POST /api/v1/turnos` - Crear turno
  - `DELETE /api/v1/turnos/:idTurno` - Eliminar turno
  - `GET /api/v1/turnos/ver` - Vista HTML de turnos

---

## Vistas

- Accede a `/api/v1/pacientes/ver` para ver la lista de pacientes en formato web.
- Accede a `/api/v1/turnos/ver` para ver la lista de turnos y registrar nuevos turnos.

---

## Notas

- Si modificas los modelos, puedes borrar el archivo de base de datos (`clinica.sqlite`) para regenerarlo y luego volver a ejecutar `node poblar.js`.
- Los datos de ejemplo se encuentran en la carpeta `/data` en formato JSON.
- El proyecto utiliza Sequelize para la gestión de la base de datos y soporta migraciones automáticas al iniciar.

---