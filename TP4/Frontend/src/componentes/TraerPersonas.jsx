import {useEffect, useState} from 'react'
import ListarTarjetas from './ListarTarjestas'

const TraerPersonas = () => {
    const [personas, setPersonas] = useState([]);


    useEffect(() => {
        fetch("http://localhost:3001/personas")
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al traer las personas")
            }
            return response.json();
        })
        .then(data => {
            setPersonas(data);
        })
        .catch(error => {
            console.error("Error al traer las personas", error);
        })
    },[]);

    return (
        <div>
            <h1>Lista de Personas</h1>
            <h3>Trabajo Practico 4</h3>
            <ListarTarjetas personas = {personas}/>
        </div>
    )
}

export default TraerPersonas