import React from "react";
import carrito from "../images/cart.svg";

const CartWidget = ({cantidad}) => {
    return(
        <>
        <div className="carro">
            <a href="#" className="nav-link"><img className="carro_imagen" src={carrito} alt="carrito" /><p className="carro_cantidad">{cantidad}</p></a>
            
        </div>
        </>
    );
}

export default CartWidget;