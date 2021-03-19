import React, {useContext, useState} from 'react'
import {CategoriaContext} from '../context/CategoriaContext';
import {RecetasContext} from '../context/RecetasContext';



const Formulario = () => {

    const [busqueda, setBusqueda] = useState({
        nombre: '',
        categoria: ''
    })

    const {categorias} = useContext(CategoriaContext);
    const {searchRecetas, setConsultar} = useContext(RecetasContext);
    // funcion para leer los contenidos 
    const obtenerDatosReceta = e =>{
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    return ( 
        <form
            className="col-md-12"
            onSubmit={e => {
                e.preventDefault();
                searchRecetas(busqueda)
                setConsultar(true);
            }}
        >
            <fieldset className="text-center">
                <legend>Busca bebidas por categoría o Ingrediente</legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input 
                        name="nombre"
                        className="form-control"
                        type="text"
                        placeholder="Buscar por ingrediente"
                        onChange={obtenerDatosReceta}
                    />

                </div>
                <div className="col-md-4">
                    <select
                    name="categoria"
                    className="form-control"
                    onChange={obtenerDatosReceta}
                    >
                        <option value="">-- Selecciona Categoria --</option>
                        {categorias.map(categorias => (
                            <option
                                 key={categorias.strCategory}
                                 value={categorias.strCategory}
                            >{categorias.strCategory}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input
                    type="submit"
                    className="btn btn-block btn-primary"
                    value="Buscar Bebidas"
                    ></input>
                </div>
            </div>
        </form>
     );
}
 
export default Formulario;
