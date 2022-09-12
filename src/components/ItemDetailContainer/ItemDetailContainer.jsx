import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { productos } from '../productos/productos';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {
    const [item, setItem] = useState({});

    const {id} = useParams();

    useEffect(()=>{
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos);
            }, 2000)
        })

        promesa.then((respuesta) => {
            setItem(respuesta.find(prod => prod.id === parseInt(id)));
        })

    },[id]);

  return (
    <div>
        <ItemDetail key={item.id} item={item}/>
    </div>
  );
}

export default ItemDetailContainer;