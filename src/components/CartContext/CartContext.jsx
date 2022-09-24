import React, {useState} from 'react'
export const CartContext = React.createContext([]);

export const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState([]);

    const addItem = (item, quantity) => {
        let productoExiste = carrito.find(prod => prod.id === item.id);
        if(productoExiste){
            productoExiste.quantity += quantity;
        }else{
            const producto = {...item, quantity};
            setCarrito([...carrito, producto]);
        }
    }

    const precioTotal = () => {
        return carrito.reduce((sumador, item) => sumador + item.quantity * item.precio, 0);
    }

    const productosTotales = () => {
        return carrito.reduce((sumador, item) => sumador + item.quantity, 0);
    }

    const clear = () => setCarrito([]);

    const isInCart = (id) => {
        return carrito.find(item => item.id === id) ? true : false;
    }

    const removeItem = (itemId) => {
        setCarrito(carrito.filter(item => item.id !== itemId));
    }



  return (
    <CartContext.Provider value={{carrito, clear, isInCart, removeItem, addItem, precioTotal, productosTotales}}>
        {children}
    </CartContext.Provider>
  );
}

export default CartProvider;