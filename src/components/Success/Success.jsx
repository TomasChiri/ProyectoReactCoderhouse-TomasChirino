import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/logo.png";

export const Success = ({id}) => {
  return (
    <div className='container py-3'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 text-center'>
                <Link to={"/"}><img src={logo} alt="GameShop-Logo" width={180}/></Link>
                <h1>¡La Orden fue generada con éxito!</h1>
                <p>El ID de tu compra es: <b>{id}</b></p>
            </div>
        </div>
    </div>
  )
}

export default Success;