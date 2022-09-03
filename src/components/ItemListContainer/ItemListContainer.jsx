import React from "react";
import './itemlistcontainer.css'
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = (props) => {
    return(
        <>
        <h1 className="titulo">{props.greeting}</h1>
        <ItemCount stock={5} initial={1} onAdd={0}/>
        </>
    )
}

export default ItemListContainer;