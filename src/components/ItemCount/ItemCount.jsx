import React, { useState } from 'react';
import "./itemcount.css";

export const ItemCount = ({stock, initial, onAdd}) => {
  const [cantidad, setCantidad] = useState(initial);
  
  const decrementarCantidad = (valor) => {
    if (valor > 0){
      setCantidad(valor);
    }
  }

  const incrementarCantidad = (valor) => {
    if(valor <= stock){
      setCantidad(valor);
    } 
  }

  return (
    <div className='container '>
      <div className='row'>
        <div className='col-md-4 mx-auto'>
          <div className="input-group">
            <button type="button" className="btn btn-primary" onClick={() => {decrementarCantidad(cantidad - 1)}} disabled={cantidad <= 1}>-</button>
            <input type="text" className="form-control text-center" value={cantidad} onChange={() => {}}/>
            <button type="button" className="btn btn-primary" onClick={() => {incrementarCantidad(cantidad + 1)}} disabled={cantidad >= stock}>+</button>
          </div>
          <div className='d-grid gap-2 py-3'>
            <button type="button" className="btn btn-outline-success" onClick={() => {onAdd(cantidad)}} disabled={stock <= 0}>Agregar al Carrito</button>
          </div>
        </div>
      </div>   
    </div>

  );
}

export default ItemCount;