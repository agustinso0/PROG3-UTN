import './TarjetaPersona.css'

const TarjetaPersona = ({ persona }) => {
    const { nombre,apellido,edad,email} = persona;

    return (
        <div className="tarjeta" >
        <h3>{nombre} {apellido}</h3>
        <p><strong>Edad👴:</strong> {edad}</p>
        <p><strong>Email📨:</strong> {email}</p>
        </div>
    );


};

export default TarjetaPersona;
