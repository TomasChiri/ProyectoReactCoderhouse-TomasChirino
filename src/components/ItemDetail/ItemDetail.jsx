import React, {useState} from 'react'
import ItemCount from '../ItemCount/ItemCount';
import "./itemdetail.css";
import { Link } from 'react-router-dom';

export const ItemDetail = ({item}) => {
  const [rutaCarro, setRutaCarro] = useState(false)

  const onAdd = (quantityToAdd) => {
    setRutaCarro(true);
  }

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
                {
                  rutaCarro ? <Link to={"/cart"} className="col-md-12 my-3 btn btn-outline-success">Terminar Compra</Link> 
                  : <ItemCount stock={5} initial={1} onAdd={onAdd}/>
                }
                   
            </div>
          </div>
        </div>
    </div>
  );
}

export default ItemDetail;