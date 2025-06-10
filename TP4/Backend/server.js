import express from 'express'
import cors from 'cors'
import obtenerPersonas from './routes/personaRutas.js'

const app = express();
app.use(cors())
app.use(express.json())



app.use('/personas', obtenerPersonas);


const PORT = 3001
app.listen(PORT, ()=>{
    console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});