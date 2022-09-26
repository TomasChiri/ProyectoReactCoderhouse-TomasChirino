import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from "firebase/firestore"; 

export const ItemDetailContainer = () => {
    const [item, setItem] = useState();

    const {id} = useParams();

    useEffect(()=>{
        const db = getFirestore();
        const response = doc(db, "productos", id);
        getDoc(response).then((data) => {
            setItem({id: data.id, ...data.data()});
        })

    },[id]);

  return (
    <div>
        {
            item && 
            <ItemDetail key={item.id} item={item}/>
        }
    </div>
  );
}

export default ItemDetailContainer;