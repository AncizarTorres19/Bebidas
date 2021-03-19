import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

//CREAR CONTEXT
export const CategoriaContext = createContext();


// provider es donde se encuentran las funciones y state
const CategoriaProvider = (props) => {


    // crear el state del context
    const [categorias, setCategorias]= useState ([]);

    // ejecutar el llamado a api
    useEffect(() => {
        const obtenerCategoria = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

            const categorias = await axios.get(url);

            setCategorias(categorias.data.drinks);
        }
        obtenerCategoria();
    }, []);

    return(
       <CategoriaContext.Provider
            value={{
                categorias
            }}
       >
           {props.children}
       </CategoriaContext.Provider> 
    )
} 
export default CategoriaProvider;