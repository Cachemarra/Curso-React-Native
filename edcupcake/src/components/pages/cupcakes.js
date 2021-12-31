// Creación del componente Cupcakes
// Estos se mostrarán en la pág Cupcakes dentro de pages/

import Cupcake from "../cards/Cupcake";

// Importo los hooks
import { useState, useEffect } from "react";

const Cupcakes = ({ peticion }) => {

    // Hook useState para crear un state
    const [cupcakes, setCupcakes] = useState([])


    // Hook useEffect para cargar los datos
    // Queremos que la primera vez que se cargue la pág, llame a la API
    useEffect(() => {
        // Nota, el fetch es una promesa
        fetch(`${process.env.REACT_APP_URL_API}${peticion}`)
        
        .then(response => response.json())
        .then(data => setCupcakes(data))
    }, [])
    

    return(
        <div className="ed-grid">
            <h1>Página de Cupcakes</h1>
            <div >
            { // Añadimos validación para que no se muestre una pág vacia al inicio.
            // Se va a renderizar una vez que lleguen los datos
                cupcakes ? (
                    <section className="ed-grid s-grid-2 m-grid-3 lg-grid-4 row-gap">
                    { // Vamos a recorrer un array para imprimir los cupcakes que recibamos
                        // Usamos .map para recorrer el array porque no modifica el nuevo, nos entrega un uevo array.
                        // Si lo recibimos como objeto ya lo destructuramos. es decir, en lugar de c => ponemos ({})
                        cupcakes.map(({id, imagen, descripcion, color, precio, sabor}) => (
                            // Le damos las propiedades al Cupcake
                            <Cupcake 
                                key={ id } // Es una clave única para cada cupcake. Aunque no lo pusieras debe de ponerse y no puede repetirse.
                                imagen= { imagen }
                                descripcion={ descripcion }
                                color={ color }
                                precio={ precio }
                                sabor={ sabor }
                            /> 
                            ))
                    }
                    </section>
                // Operador ternario. Si no ha llegado la data, muestra un "cargando..."
                ) : (<p>Cargando...</p>)
            }
            </div>
        </div>
    )
}



export default Cupcakes;