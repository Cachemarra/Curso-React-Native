// Cartas para los cupcakes

// Importamos PropTypes para comprobar que los props sean correctos
import { bool } from "prop-types";
import { number, string } from "prop-types";

// Renderización del componente Cupcake
const Cupcake = ({ descripcion, imagen, color, precio, sabor, disponible }) => {

    return(

        <div className="s-radius-1 s-shadow-bottom background s-shadow-card-micro white-color s-pxy-2">
            <img src={ imagen } alt={ sabor } />
            <p>{ descripcion }</p>
            <span>Color: { color } </span>
            <span>Precio: { precio }</span>
            {console.log(disponible)}
            {
                <p> 
                    Disponibilidad: {disponible? "En existencia.": "Temporalmente agotado." } 
                </p>
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
