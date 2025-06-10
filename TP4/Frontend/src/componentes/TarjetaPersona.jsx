import React from 'react'

const TarjetaPersona = ({ persona }) => {
    const { nombre,apellido,edad,email} = persona;

    return (
        <div style={{
            backgroundColor: '#ffffff',
            color: '#333333',
            border: '1px solid rgb(48, 37, 37)',
            padding: '10px',
            borderRadius: '8px',
            width: '200px',
            background: '#f9f9f9'
        }}>
        <h3>{nombre} {apellido}</h3>
        <p><strong>Edad:</strong> {edad}</p>
        <p><strong>Email:</strong> {email}</p>
        </div>
    );


};

export default TarjetaPersona;
