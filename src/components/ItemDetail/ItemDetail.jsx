import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import "./itemdetail.css";

export const ItemDetail = ({item}) => {
  return (
    <div className="card my-5 mx-auto py-3 w-75 shadow">
      <div className="row g-0">
          <div className="col-md-5">
            <img src={item.imagen} className="img-fluid rounded-start" alt={item.nombre} />
          </div>
          <div className="col-md-7 px-3">
            <div className="card-body">
                <h2 className="card-title text-center py-2">{item.nombre}</h2>
                <p className="card-text">{item.descripcion}</p>
                <p className="card-text item_precio">${item.precio}</p>
                <ItemCount stock={5} initial={1} onAdd={0}/>   
            </div>
          </div>
        </div>
    </div>
  );
}

export default ItemDetail;