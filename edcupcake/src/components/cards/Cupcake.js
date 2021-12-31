// Cartas para los cupcakes

const Cupcake = ({ descripcion, imagen, color, precio, sabor }) => {

    return(
        <div>
            <img src={ imagen } alt={ sabor } />
            <p>{ descripcion }</p>
            <span>Color: { color }</span>
            <span>Precio: { precio }</span>
        </div>
    )
}


export default Cupcake;
