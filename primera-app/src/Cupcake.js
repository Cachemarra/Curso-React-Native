// Creación del componente Cupcake

/* // Declaración tipo función
function Cupcake({ sabor, color, foto }){ // Props -> Propiedades.
    
    return ( // Retorna la estructura de los cupcakes
        <div>
            <img src={ foto } alt={ sabor }/>
            <h2>{ color }</h2>
            <p>{ `Sabor: ${ sabor }` }</p>
        </div>
    )
}
*/

// Declaración tipo clase

import { Component } from 'react';

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