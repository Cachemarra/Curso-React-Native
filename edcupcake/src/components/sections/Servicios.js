// Componente para la sección de Servicios de la pág.
import { useState, useEffect } from "react";
import { get } from "axios";


const Servicios = ({ peticion }) => {
    const [servicios, setServicios] = useState()

    useEffect(() => {
        // Obtenemos la data de la API
        get(`${process.env.REACT_APP_URL_API}${peticion}`)
        .then(({data}) => setServicios(data))

        console.log(servicios)


    }, [peticion])

    // Si no existe servicios regresamos un span indicando esto.
    if(!servicios)
        return <span>No hay servicios disponibles. Prueba mas tarde!</span>
    
    return(
        <div className="ed-grid">
            {
                servicios.map(s => (
                    <div key={ s.id }>
                        <h2>{ s.nombre }</h2>
                        <p>{ s.descripcion }</p>
                    </div>
                ))
            }
        </div>
    )
}

// Exportamos.
export default Servicios;
