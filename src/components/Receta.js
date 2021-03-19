import React, {useContext, useState} from 'react';
import {ModalContext} from '../context/ModalContext';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';


function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 350,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));

const Receta = ({receta}) => {

    //Configuarcion del modal de material-ui
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const classes = useStyles ();
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose =() => {
        setOpen(false);
    }

    //extraer los valores del context
    const {lareceta, setIdreceta, setReceta} = useContext (ModalContext);

    // muestra y formatea los ingredientes 
    const mostrarIngredientes = lareceta => {
        let ingredientes = [];
        for(let i = 1; i < 16; i++){
            if(lareceta[`strIngredient${i}`] ) {
                ingredientes.push(
                    <li>{ lareceta[`strIngredient${i}`] } 
                    { lareceta[`strMeasure${i}`] }</li>
                )
            }
        }
        return ingredientes;
    }

    
    return ( 
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{receta.strDrink}</h2>

                <img className="card-img-top" 
                     src={receta.strDrinkThumb} 
                     alt={`Imagen de ${receta.strDrink}`} />
                <div className="card-body">
                    <button
                        type="button"
                        className="btn btn-block btn-primary"
                        onClick={() => {
                            setIdreceta(receta.idDrink);
                            handleOpen();
                        }}
                    >
                        Ver Receta
                    </button>
                        <Modal
                            open={open}
                            onClose={() => {
                                setIdreceta(null);
                                setReceta({});
                                handleClose();
                                
                            }}
                        >
                            <div style={modalStyle} className={classes.paper}>
                                <h2>{lareceta.strDrink}</h2>
                                <h3 className="mt-4">Instrucciones</h3>
                                <p>
                                    {lareceta.strInstructions}
                                </p>

                                <img    
                                    src={lareceta.strDrinkThumb}
                                    className="img-fluid my-4">

                                </img>
                                <h3>Ingredientes y cantidades</h3>
                                <ul>
                                    {mostrarIngredientes(lareceta)}
                                </ul>
                            </div>
                        </Modal>
                </div>

            </div>
        </div>
     );
}
 
export default Receta;