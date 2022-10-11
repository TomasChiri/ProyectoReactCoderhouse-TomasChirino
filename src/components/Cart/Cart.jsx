import React, { useContext} from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext/CartContext';
import ItemCart from '../ItemCart/ItemCart';
import "./cart.css";

export const Cart = () => {
    const {carrito, precioTotal, clear } = useContext(CartContext);

    if(carrito.length === 0){
        return(
            <div className='text-center carro_vista'>
                <h2>El carrito está vacío</h2>
                <Link to={"/"}>¡Haz click aqui para ver nuestros productos!</Link> 
            </div>
        );
    }


    return (
        <div className='w-50 mx-auto carro_vista'>
            <div className='d-flex justify-content-end my-3'>
                <button className='btn btn-danger' onClick={() => clear()}>Vaciar Carrito</button>
            </div>
            {
                carrito.map(item => <ItemCart key={item.id} item={item}/>)
            }
            <h2 className='text-center'>Total: ${precioTotal()}</h2>
            <Link to={"/checkout"} className="col-md-12 my-3 btn btn-success">Ir al Checkout</Link>
        </div>
    )
}

export default Cart;
