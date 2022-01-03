// Cartas para los cupcakes
// Importo los estilos
import "./style.css";
// Importamos PropTypes para comprobar que los props sean correctos
import { bool } from "prop-types";
import { number, string } from "prop-types";

// Importamos un hook para checar si se reservo o no y para tener referencia de la imagen.
import { useState, useRef, useEffect } from "react";

// Renderización del componente Cupcake
const Cupcake = ({ descripcion, imagen, color, precio, sabor, disponible }) => {

    // Configuramos los Hook
    const [vendido, setVendido] = useState(false);
    const [reservado, setReservado] = useState(false);

    const refImagen = useRef();

    // Función para vender
    const vender = () => {
        setVendido(true);
        setReservado(true);

        // Cambiamos el color de la imagen con un filtro a grises.
        const elemento = refImagen.current;

        elemento.classList.add("vendido");
        elemento.classList.remove("reservado");
    }


    // Función para reservar
    const reservar = () => {
        setReservado(true);

        const elemento = refImagen.current;
        elemento.classList.add("reservado");
    }

    // UseEffect para checar si se vendio o no.
    useEffect(() => {
        const elemento = refImagen.current;
        console.log(`Valor de elemento: ${elemento.classList}`);
    }, [reservado, vendido]);


    // Función para renderizar la sección de disponibilidad.
    const renderDisponibilidad = (disponible) => {
        // Comprobamos si existe 'disponible'
        if (disponible) {
            return(
                <div>
                    <p><b>Disponibilidad:</b> En existencia.</p>
                    <button id="botonVender" onClick={ vender }>Comprar</button>
                    <button id="botonReservar" onClick={ reservar }>Reservar</button>
                </div>
            )
        }
        else{
            return(
                <>
                    <p><b>Disponibilidad:</b> Temporalmente agotado.</p>
                </>
            )
        }
    }

    return(

        <div className="s-radius-1 s-shadow-bottom background s-shadow-card-micro white-color s-pxy-2">
            <img src={ imagen } alt={ sabor } ref={ refImagen } />
            <p>{ descripcion }</p>
            <span><p><b>Color:</b> { color }</p></span>
            <span><p><b>Precio:</b> { precio }</p></span>
            {   
                renderDisponibilidad(disponible)
            }
        </div>
    )
}

// Uso del PropTypes para definir el tipo de dato que debería llegar
Cupcake.propTypes = {
    precio: number,
    color: string.isRequired,
    descripcion: string.isRequired,
    imagen: string,
    sabor: string.isRequired,
    disponible: bool.isRequired
}

// Definición de los valores default
Cupcake.defaultProps = {
    imagen: "https://wikiclipart.com/wp-content/uploads/2016/11/Cupcake-black-and-white-cupcake-clipart-black-and-white-free-images-3.jpeg",
    precio: 0
}


export default Cupcake;
