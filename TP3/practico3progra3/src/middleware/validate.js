const Joi = require('joi');

function validarParametroID(parametro){
    return(req,res,next) => {
        const schema = Joi.number().integer().positive().required()
        const {error} = schema.validate(req.params[parametro])

        if (error) {
            return res.status(400).json({error: 'El parametro debe ser un numero entero positivo'})
        }
        next()
    }
}

module.exports = {validarParametroID}