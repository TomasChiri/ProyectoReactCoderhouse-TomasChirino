import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";
import carrito from "../images/cart.svg";

const CartWidget = () => {
    const {productosTotales} = useContext(CartContext)

    return(
        <>
        <div className="carro">
            <Link to={"/cart"} className="nav-link"><img className="carro_imagen" src={carrito} alt="carrito" /><p className="carro_cantidad">{productosTotales()}</p></Link>       
        </div>
        </>
    );
}

export default CartWidget;