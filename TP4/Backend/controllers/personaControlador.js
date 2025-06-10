import personas from '../models/personaModelo.js';


export const obtenerPersonas = (req,res) => {
    res.json(personas)
};
