// Creación del componente Cupcake
import { Component } from 'react';

/*
// Declaración tipo clase

class Cupcake extends Component {
// Creamos los cupcakes, sus elementos y la lógica.

    // Constructor
    constructor(props) {
        super(props);
        // Creamos un estado para el componente.
        this.state = {
            vendido: false
        }
        // Lo bindeamos.
        this.vender = this.vender.bind(this);
    }

    // Creamos un método para vender los cupcakes.
    vender() {
        // Recibe un objeto nuevo que reemplazara this.state.vendido
        this.setState({
            vendido: true
        })
    }


    // Escribimos la lógica del componente
    render() { 
        console.log(this.state.vendido)
        return(
            <div>
                <img src={ this.props.foto } alt={ this.props.sabor }/>
                <h2>{ this.props.color} </h2>
                <p>{ `Sabor: ${ this.props.sabor }` }</p>
                <p>
                    <b>Estado: </b>
                    { this.state.vendido ? "Vendido": "A la venta" }</p>
                {
                    !this.state.vendido && <button onClick={ this.vender }>Comprar</button>
                }
                
            </div>
        )
            // !this.state.vendido && <button>Comprar</button> -> Si no esta a la venta, desaparece el boton.
    }
} 

export default Cupcake

*/

// Declaración tipo funcion

// Para poder cambiar el estado de la app se requieren hooks, para eso necesitamos 
// importar el hook useState desde react

import { useState, useEffect, useRef } from 'react';
import "./cupcake.css";

const Cupcake = ({ foto, sabor, color }) => {

    // UseState regresa un array, entonces debemos utilizar la destructurización para poder
    // acceder a los elementos del array.
    // El segundo parametro será una función para actualizar la variable estado. 
    // Por convcención, se le llama set seguido del nombre de la variable.
    const [vendido, setVendido] = useState(false); // Debemos poner el valor inicial!
    // Creamos un estado extra para ver el useEffect hook
    const [reservado, setReservado] = useState(false);

    // Creamos una referencia para el fotoCupcake
    const fotoCupcake = useRef();

    // definimos vender como una función anónima.
    const vender = () => {
        setVendido(true);
        setReservado(true);

        // Si ya se vendio ahora vamos a colorearlo de gris.
        const elemento = fotoCupcake.current;
        // Si ya se reservo, se añadirá la clase vendido a <img>
        // y se pondra gris.
        elemento.classList.replace('reservado', 'vendido');
    }
    
    // const reservar = () => setReservado(true);
    const reservar = () => {
        setReservado(true);

        const elemento = fotoCupcake.current;
        elemento.classList.add('reservado');
    }

    // A diferencia del anterior hook, useEffect puede ser llamada directamente. useEffect se ejecuta cada vez que se renderiza un componente.
    // Recibe 2 parametros
    // 1. una función que se ejecutará cuando el componente se monta.
    // 2. un array con los elementos que se quieren observar.
    useEffect(() => {
        const element = fotoCupcake.current;
        console.log(`Valor de elemento: ${element.classList}`);

    }, [reservado, vendido]);

    return(
        <div className='cupcake' id="test">
            <img ref={ fotoCupcake } src={ foto } alt={ sabor }/>
            <h2>{ color} </h2>
            <p>{ `Sabor: ${ sabor }` }</p>

            <p>
                <b>Estado: </b>
                { reservado ? "Reservado": "Libre" }
            </p>
            {
                !reservado && <button id="botonReservar" onClick={ reservar }>Reservar</button>
                
            }

            <p>
                <b>Estado: </b>
                { vendido ? "Vendido": "A la venta" }
            </p>
            {
                !vendido && <button id="botonVender" onClick={ vender }>Comprar</button>

            }
        </div>
    )

}

export default Cupcake;