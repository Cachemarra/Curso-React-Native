// Componente para la sección de Servicios de la pág.
import useFetch from "../../hooks/useFetch"


const Servicios = ({ peticion }) => {

    // utilizamos el hook useFetch para obtener los datos de la API
    const [servicios, error] = useFetch(peticion);

    // Si no existe servicios regresamos un span indicando esto.
    if(!servicios)
        return <span>No hay servicios disponibles. Prueba mas tarde!</span>
    
    if (error){
        console.log(error);
        return <span>Hubo un error.</span>
    }

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
