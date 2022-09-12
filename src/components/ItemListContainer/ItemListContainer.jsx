import React, {useState, useEffect} from "react";
import './itemlistcontainer.css'
import ItemList from "../ItemList/ItemList";
import { productos } from "../productos/productos";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);

    const {tipo} = useParams();

    useEffect(() => {

        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos);
            }, 500)
        });

        if(tipo){
            promesa.then((respuesta) => {
                setItems(respuesta.filter(prod => prod.categoria.toLowerCase() === tipo));
            });
        }else{
            promesa.then((respuesta) => {
                setItems(respuesta);
            });
        }        
    }, [tipo]);

    return(
        <div className="container">
        <h1 className="titulo">{props.greeting}</h1>
        <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer;