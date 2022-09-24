import React, { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';

export const ItemCart = ({item}) => {
    const {removeItem} = useContext(CartContext);

  return (
    <div className="card mb-3 w-50 mx-auto">
        <div className="row g-0">
            <div className="col-md-4">
                <img src={item.imagen} className="img-fluid rounded-start" alt={item.nombre} />
            </div>
            <div className="col-md-8">
                <div className="card-body text-center">
                    <h3 className="card-title">{item.nombre}</h3>
                    <p className="card-text">Cantidad: {item.quantity}</p>
                    <p className="card-text">Precio por unidad: ${item.precio}</p>
                    <p className="card-text">Subtotal: ${item.quantity * item.precio}</p>
                    <button onClick={() => removeItem(item.id)} type="button" className="btn btn-outline-danger">Eliminar del carrito</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ItemCart;