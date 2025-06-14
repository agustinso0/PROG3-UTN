import TarjetaPersona from './TarjetaPersona'
import './TarjetaPersona.css'

const ListarTarjetas = ({personas}) => {
    return (
        <div className= 'disposicionTarjetas'>
            {personas.map (persona =>(
                <TarjetaPersona key={persona.id} persona={persona} />
            ))}
        </div>
    )
}

export default ListarTarjetas