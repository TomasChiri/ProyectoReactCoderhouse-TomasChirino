import React from 'react';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import CartProvider from './components/CartContext/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="¡Nuestros Productos!"/>}/>
          <Route path='/categoria/:tipo' element={<ItemListContainer greeting="¡Nuestros Productos!"/>}/>
          <Route path='/detalle/:id' element={<ItemDetailContainer />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/checkout' element={<Checkout />}/>
        </Routes>
      </CartProvider> 
    </BrowserRouter>
  );
}

export default App;
