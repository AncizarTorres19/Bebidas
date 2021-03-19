import React, {Fragment} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListasRecetas from './components/ListaRecetas';

import CategoriaProvider from './context/CategoriaContext';
import RecetasProvider from './context/RecetasContext';
import ModalProvider from './context/ModalContext';

function App() {
  return (
      <CategoriaProvider>
        <RecetasProvider>
          <ModalProvider>
          <Header></Header>
          <div className="container mt-5">
            <div className="row">
              <Formulario />
            </div>
            <ListasRecetas />
          </div>
           </ModalProvider>
          </RecetasProvider>
        </CategoriaProvider>
  ); 
}

export default App;
