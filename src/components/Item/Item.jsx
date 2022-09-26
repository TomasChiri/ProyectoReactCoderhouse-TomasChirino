import React from 'react';
import { Link } from 'react-router-dom';

export const Item = (item) => {
  return (
    <div className='col-md-4 p-4'>
        <div className="card">
            <img src={item.imagen} className="card-img-top" alt={item.nombre} />
            <div className="card-body">
                <h4 className="card-title text-center my-3">{item.nombre}</h4>
                <p className="card-text text-center text-capitalize">Categoria: {item.categoria}</p>
                <div className='d-flex justify-content-center'>
                  <Link to={"/detalle/" + item.id} className="btn btn-outline-primary my-2">Ver mas</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Item;