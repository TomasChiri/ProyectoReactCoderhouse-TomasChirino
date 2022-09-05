import React from 'react';

export const Item = ({nombre, categoria, imagen, precio}) => {
  return (
    <div className='col-md-4 p-4'>
        <div className="card">
            <img src={imagen} className="card-img-top" alt={nombre} />
            <div className="card-body">
                <h4 className="card-title text-center my-3">{nombre}</h4>
                <p className="card-text text-center">Categoria: {categoria}</p>
                <p className="card-text text-center">${precio}</p>
            </div>
        </div>
    </div>
  )
}

export default Item;