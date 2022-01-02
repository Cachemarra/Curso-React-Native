// Hook para obtener datos desde un API de algún servidor. 
// Se importarán los hooks que requeriremos.
// Hook useFetch será una función que reciba lo que Cupcake y Servicios tengan distinto para
// que se pueda usar en ambos.

// Importaciones
import { useState, useEffect } from "react";
import { get } from "axios";

const useFetch = (endpoint) => {


    // Creamos un estado vacio
    const [data, setData] = useState();

    // Hook useEffect para cargar los datos y obtenerlos
    useEffect( () => {
        get(`${ process.env.REACT_APP_URL_API }${ endpoint }`)
        .then(({data}) => setData(data))
    }, [endpoint])


    // Retornamos los datos obtenidos.
    return data;
}

export default useFetch;