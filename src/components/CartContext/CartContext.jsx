import React, {useState} from 'react'
export const CartContext = React.createContext([]);

export const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState([]);

    const addItem = (item, quantity) => {
        let productoExiste = carrito.find(prod => prod.id === item.id);
        if(productoExiste){
            productoExiste.quantity += quantity;
            console.log("carrito: ", carrito);
        }else{
            const producto = {...item, quantity};
            setCarrito([...carrito, producto]);
        }
    }

    console.log("carrito: ", carrito);

    const clear = () => setCarrito([]);

    const isInCart = (id) => {
        return carrito.find(item => item.id === id) ? true : false;
    }

    const removeItem = (itemId) => {
        setCarrito(carrito.filter(item => item.id !== itemId));
    }



  return (
    <CartContext.Provider value={{carrito, clear, isInCart, removeItem, addItem}}>
        {children}
    </CartContext.Provider>
  );
}

export default CartProvider;