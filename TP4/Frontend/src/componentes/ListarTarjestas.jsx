import React from 'react'
import TarjetaPersona from './TarjetaPersona'

const ListarTarjetas = ({personas}) => {
    return (
        <div style={{display: 'flex', flexWrap: 'wrap', gap:'1rem'}}>
            {personas.map (persona =>(
                <TarjetaPersona key={persona.id} persona={persona} />
            ))}
        </div>
    )
}

export default ListarTarjetas