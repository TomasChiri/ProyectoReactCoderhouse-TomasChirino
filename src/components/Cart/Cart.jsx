import React, { useContext} from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext/CartContext';
import ItemCart from '../ItemCart/ItemCart';

export const Cart = () => {
    const {carrito, precioTotal } = useContext(CartContext);

    if(carrito.length === 0){
        return(
            <div className='text-center'>
                <h2>El carrito está vacío</h2>
                <Link to={"/"}>¡Haz click aqui para ver nuestros productos!</Link> 
            </div>
        );
    }


    return (
        <>
        {
            carrito.map(item => <ItemCart key={item.id} item={item}/>)
        }
        <h2 className='text-center'>Total: ${precioTotal()}</h2>
        </>
    )
}

export default Cart;
