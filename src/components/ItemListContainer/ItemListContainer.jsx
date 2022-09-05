import React, {useState, useEffect} from "react";
import './itemlistcontainer.css'
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = (props) => {
    const [items, setItems] = useState();

    useEffect(() => {
        const productos = [
            {id:1, nombre:"Playstation 5", categoria:"Consolas", precio:120000, imagen:"https://www.necxus.com.ar/products_image/21441/1000x1000_2.jpg"},
            {id:2, nombre:"Xbox Series X", categoria:"Consolas", precio:100000, imagen:"https://www.necxus.com.ar/products_image/22480/1000x1000_1.jpg"},
            {id:3, nombre:"Nintendo Switch", categoria:"Consolas", precio:80000, imagen:"https://culturageek.com.ar/wp-content/uploads/2020/08/nintendo-switch.jpg"},
            {id:4, nombre:"Elden Ring", categoria:"Videojuegos", precio:14000, imagen:"https://pbs.twimg.com/media/E3kdLoiVEAYG8qg.jpg"},
            {id:5, nombre:"Dying Light 2", categoria:"Videojuegos", precio:8000, imagen:"http://d3ugyf2ht6aenh.cloudfront.net/stores/001/783/749/products/plantilla-ps4-ps5-fisicos-psd-1-91-bf69b666e0238fa14e16295830130928-640-0.jpg"},
            {id:6, nombre:"Mario Kart 8", categoria:"Videojuegos", precio:10000, imagen:"https://drakemall-files-new.s3.eu-central-1.amazonaws.com/Mario%20Ka-cjww7qx7y003p01zb7uvr7e0t.png"},
            {id:7, nombre:"Dualsense Controller", categoria:"Accesorios", precio:20000, imagen:"https://www.fullh4rd.com.ar/img/productos/Pics_Prod/joystick-playstation-ps5-dualsense-white-0.jpg"},
            {id:8, nombre:"Xbox Controller", categoria:"Accesorios", precio:12000, imagen:"https://m.media-amazon.com/images/I/513gfnMEWnL.jpg"},
            {id:9, nombre:"Joycons", categoria:"Accesorios", precio:18000, imagen:"https://planetagames.com.ar/wp-content/uploads/2018/08/Joy-Con-Green-Pink-Front-2-WEB.jpg"}
        ];

        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos);
            }, 2000)
        });

        promesa.then((respuesta) => {
            setItems(respuesta);
        });

    }, []);

    return(
        <div className="container">
        <h1 className="titulo">{props.greeting}</h1>
        <ItemList items={items}/>
        <ItemCount stock={5} initial={1} onAdd={0}/>   
        </div>
    )
}

export default ItemListContainer;