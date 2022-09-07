import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';

export const ItemDetailContainer = () => {
    const [item, setItem] = useState();

    useEffect(()=>{
        const producto = {id:1, nombre:"Playstation 5", categoria:"Consolas", precio:120000, imagen:"https://www.necxus.com.ar/products_image/21441/1000x1000_2.jpg", descripcion:"Con tu consola PlayStation 5 tendrás entretenimiento asegurado todos los días. Cuenta con una interfaz de usuario más rápida y fácil de navegar que en anteriores modelos. Además, el control DualSense para PS5 combina estilo y tecnología para que jugar sea más cómodo e interactivo para todos sus jugadores. Cuenta con un procesador de 8 núcleos y uno gráfico, brinda una experiencia dinámica, respuestas ágiles, y transiciones fluidas de imágenes en alta definición."};

        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(producto);
            }, 2000)
        })

        promesa.then((respuesta) => {
            setItem(respuesta);
        })

    },[]);

  return (
    <div>
        <ItemDetail item={item}/>
    </div>
  );
}

export default ItemDetailContainer;