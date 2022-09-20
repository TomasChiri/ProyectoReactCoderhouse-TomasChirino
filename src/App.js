import React from 'react';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import CartProvider from './components/CartContext/CartContext';

function App() {
  const productos = [];
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar items={productos}/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="¡Nuestros Productos!"/>}/>
          <Route path='/categoria/:tipo' element={<ItemListContainer greeting="¡Nuestros Productos!"/>}/>
          <Route path='/detalle/:id' element={<ItemDetailContainer />}/>
        </Routes>
      </CartProvider> 
    </BrowserRouter>
  );
}

export default App;
