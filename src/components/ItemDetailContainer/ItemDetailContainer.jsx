import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import "../ItemDetail/itemdetail.css"
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from "firebase/firestore"; 
import Loading from '../Loading/Loading';

export const ItemDetailContainer = () => {
    const [item, setItem] = useState();

    const {id} = useParams();

    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const db = getFirestore();
        const response = doc(db, "productos", id);
        getDoc(response).then((data) => {
            setItem({id: data.id, ...data.data()});
            setLoading(false);
        })

    },[id]);

  return (
    <div className='contenedor'>
        {
            loading ? <Loading /> : <ItemDetail key={item.id} item={item}/>
        }
    </div>
  );
}

export default ItemDetailContainer;