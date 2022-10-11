import React, { useContext, useState } from 'react';
import { CartContext } from '../CartContext/CartContext';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import Success from '../Success/Success';
import "./checkout.css";

export const Checkout = () => {
    const {carrito, clear, productosTotales, precioTotal} = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");

    const sendOrder = () => {
        const buyer = {name:nombre, email:email, phone:telefono};
        const items = [];
        carrito.forEach((item) => {
            items.push({id:item.id, title:item.nombre, price:item.precio, quantity:item.quantity});
        })
        const order = {buyer:buyer, items:items, date:new Date(), total:precioTotal()}
        
        const db = getFirestore();
        const orderCollection = collection(db, "orders");
        addDoc(orderCollection, order).then((data) => {
            clear();
            setOrderId(data.id);   
        });
    }

  return (
    <div className='container checkout'>
        {productosTotales() > 0 ?
            <div className='row'>
                <div className='col-md-4 offset-md-2'>
                    <div className='mb-3'>
                        <label htmlFor="nombre" className='form-label'>Nombre:</label>
                        <input type="text" className='form-control' id='nombre' onInput={(e) => setNombre(e.target.value)}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email" className='form-label'>Email:</label>
                        <input type="email" className='form-control' id='email' onInput={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="telefono" className='form-label'>Teléfono:</label>
                        <input type="text" className='form-control' id='telefono' onInput={(e) => setTelefono(e.target.value)}/>
                    </div>
                    <button className='btn btn-outline-success' onClick={() => sendOrder()}>Generar Orden</button>
                </div>
                <div className='col-md-4'>
                    <table className='table'>
                        <tbody>
                            {carrito.map(item => (
                                <tr key={item.id}>
                                    <td className='text-start'><img src={item.imagen} alt={item.nombre} width={125} /></td>
                                    <td className='text-start align-middle'>{item.nombre} x {item.quantity}</td>
                                    <td className='text-end align-middle'>${item.quantity * item.precio}</td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={2} className="text-end fw-bold">Total a Pagar:</td>
                                <td className='text-end fw-bold'>${precioTotal()}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            : orderId !== "" ? <Success id={orderId} />   
            : <div>No se encontraron productos</div>}   
        </div>
    )
}

export default Checkout;
