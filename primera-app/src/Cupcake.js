// Creación del componente Cupcake

function Cupcake({ sabor, color, foto }){ // Props -> Propiedades.
    
    return ( // Retorna la estructura de los cupcakes
        <div>
            <img src={ foto } alt={ sabor }/>
            <h2>{ color }</h2>
            <p>{ `Sabor: ${ sabor }` }</p>
        </div>
    )
}

export default Cupcake