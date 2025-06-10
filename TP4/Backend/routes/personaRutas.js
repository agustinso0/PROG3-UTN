import express from 'express'
import {obtenerPersonas} from '../controllers/personaControlador.js'

const router = express.Router();

router.get('/',obtenerPersonas);

export default router;