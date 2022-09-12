import React from 'react';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  const productos = [];
  return (
    <BrowserRouter>
      <NavBar items={productos}/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="¡Aca va a ir el catálogo!"/>}/>
        <Route path='/categoria/:tipo' element={<ItemListContainer greeting="¡Aca va a ir el catálogo!"/>}/>
        <Route path='/detalle/:id' element={<ItemDetailContainer />}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
