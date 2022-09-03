import React, { useState } from 'react';
import "./itemcount.css";

export const ItemCount = ({stock, initial, onAdd}) => {
  const [cantidad, setCantidad] = useState(initial);
  const [itemStock, setItemStock] = useState(stock);
  const [itemAdd, setItemAdd] = useState(onAdd);
  
  const decrementarCantidad = (valor) => {
    if (valor > 0){
      setCantidad(valor);
    }
  }

  const incrementarCantidad = (valor) => {
    if(valor <= itemStock){
      setCantidad(valor);
    } 
  }

  const agregarProductos = () => {
    if(cantidad <= itemStock){
      setItemStock(itemStock - cantidad);
      setItemAdd(itemAdd + cantidad);
    }
  }
  
  return (
    <div className='container py-5'>
      <div className='row'>
        <div className='col-md-2 mx-auto'>
          <p>Nombre del Producto</p>
          <div className="input-group">
            <button type="button" className="btn btn-primary" onClick={() => {decrementarCantidad(cantidad - 1)}} disabled={cantidad <= 1}>-</button>
            <input type="text" className="form-control text-center" value={cantidad}/>
            <button type="button" className="btn btn-primary" onClick={() => {incrementarCantidad(cantidad + 1)}} disabled={cantidad >= itemStock}>+</button>
          </div>
          <div className='d-grid gap-2 py-3'>
            <button type="button" className="btn btn-outline-success" onClick={() => {agregarProductos()}} disabled={itemStock <= 0}>Agregar al Carrito</button>
          </div>
          <p>Productos Seleccionados: {itemAdd}</p>
        </div>
      </div>   
    </div>

  );
}

export default ItemCount;