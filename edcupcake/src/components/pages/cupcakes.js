// Creación del componente Cupcakes
// Estos se mostrarán en la pág Cupcakes dentro de pages/

// Librerias y modulos
import useFetch from "../../hooks/useFetch";
import Cupcake from "../cards/Cupcake";


const Cupcakes = ({ peticion, title }) => {

    // utilizamos el hook useFetch para obtener los datos de la API
    const [cupcakes, error] = useFetch(peticion);
    
    // Mostramos cualquier error al hacer useFetch
    if(error){
        console.log(error);
        return <span>Hubo un error.</span>
    }

    return(
        <div className="ed-grid">
            { title && <h1>Página de Cupcakes</h1> }

            { // Añadimos validación para que no se muestre una pág vacia al inicio.
            // Se va a renderizar una vez que lleguen los datos
                cupcakes ? (
                    <section className="ed-grid s-grid-2 m-grid-3 lg-grid-4 row-gap">
                    { // Vamos a recorrer un array para imprimir los cupcakes que recibamos
                        // Usamos .map para recorrer el array porque no modifica el nuevo, nos entrega un uevo array.
                        // Si lo recibimos como objeto ya lo destructuramos. es decir, en lugar de c => ponemos ({})
                        cupcakes.map(({id, imagen, descripcion, color, precio, sabor, disponible}) => (
                            // Le damos las propiedades al Cupcake
                            <Cupcake 
                                id={ id } // Es una clave única para cada cupcake. Aunque no lo pusieras debe de ponerse y no puede repetirse.
                                imagen={ imagen }
                                descripcion={ descripcion }
                                color={ color }
                                precio={ precio }
                                sabor={ sabor }
                                disponible={ disponible }
                                key={ id }
                            /> 
                            ))
                    }
                    </section>
                // Operador ternario. Si no ha llegado la data, muestra un "cargando..."
                ) : (<p>Cargando...</p>)
            }
        </div>
    )
}


export default Cupcakes;