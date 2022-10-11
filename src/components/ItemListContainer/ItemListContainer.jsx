import React, {useState, useEffect} from "react";
import './itemlistcontainer.css'
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"; 
import Loading from "../Loading/Loading";

const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);

    const {tipo} = useParams();

    const [loading, setLoading] = useState(true);

    useEffect(() => {     
        const db = getFirestore();
        const itemsCollection = collection(db, "productos");
        const queryItems = tipo ? query(itemsCollection, where("categoria", "==", tipo)) : itemsCollection;
        getDocs(queryItems).then((data) => {
            setItems(data.docs.map(items => ({id: items.id, ...items.data()})));
            setLoading(false);
        })

    }, [tipo]);

    return(
        <div className="container">
        <h1 className="titulo">{props.greeting}</h1>
        {
            loading ? <Loading /> : <ItemList items={items}/>
        }
        </div>
    )
}

export default ItemListContainer;