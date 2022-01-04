// Cartas para los cupcakes
// Importo los estilos
import "./style.css";
// Importamos PropTypes para comprobar que los props sean correctos
import { bool } from "prop-types";
import { number, string } from "prop-types";

// Importamos un hook para checar si se reservo o no y para tener referencia de la imagen.
import { useState, useRef, useEffect } from "react";

import { put } from "axios";


// Renderización del componente Cupcake
const Cupcake = ({ id, descripcion, imagen, color, precio, sabor, disponible }) => {

    // Configuramos los Hook
    const [vendido, setVendido] = useState(false);
    const [reservado, setReservado] = useState(false);
    const [disponibilidad, setDisponibilidad] = useState(disponible);


    const refImagen = useRef();

    // Función para vender
    const vender = () => {
        setVendido(true);
        setReservado(true);
        setDisponibilidad(false);

        // Cambiamos el color de la imagen con un filtro a grises.
        const elemento = refImagen.current;

        elemento.classList.add("vendido");
        elemento.classList.remove("reservado");

        disponible = false;

        // Actualizamos la base de datos
        put(`${ process.env.REACT_APP_URL_API }cupcakes/${ id }`, 
            {
            "id": id,
            "disponible": disponible,
            "sabor": sabor,
            "color": color,
            "descripcion": descripcion,
            "imagen": imagen,
            "precio": precio
        })
        .then(response => console.log(response))
        .catch(err => console.log(err));
    }


    // Función para reservar
    const reservar = () => {
        setReservado(true);

        const elemento = refImagen.current;
        elemento.classList.add("reservado");
    }


    // Función para regresar el producto a la venta
    const regresar = () => {
        setVendido(false);
        setReservado(false);
        setDisponibilidad(true);

        const elemento = refImagen.current;
        elemento.classList.remove("vendido");
        elemento.classList.remove("reservado");

        disponible = true;

        // Actualizamos la base de datos
        put(`${ process.env.REACT_APP_URL_API }cupcakes/${ id }`, 
            {
            "id": id,
            "disponible": disponible,
            "sabor": sabor,
            "color": color,
            "descripcion": descripcion,
            "imagen": imagen,
            "precio": precio
            })
            .then(response => console.log(response))
            .catch(err => console.log(err));
    } 
    


    // UseEffect para checar si se vendio o no.
    useEffect(() => {
        const elemento = refImagen.current;
        console.log(`Valor de elemento: ${elemento.classList}`);

    }, [reservado, vendido, disponible]);


    // Función para renderizar la sección de disponibilidad.
    const renderDisponibilidad = (disponibilidad) => {
        // Comprobamos si existe 'disponible'
        if (disponibilidad) {
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
                    <button id="botonRegresar" onClick={ regresar }>Regresar</button>
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
                renderDisponibilidad(disponibilidad)
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
    disponible: bool.isRequired,
    id: number.isRequired
}

// Definición de los valores default
Cupcake.defaultProps = {
    imagen: "https://wikiclipart.com/wp-content/uploads/2016/11/Cupcake-black-and-white-cupcake-clipart-black-and-white-free-images-3.jpeg",
    precio: 0
}


export default Cupcake;
