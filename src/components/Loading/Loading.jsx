import React from 'react';
import logo from "../images/logo.png";
import "./loading.css";

export const Loading = () => {
  return (
    <div className='loading'>
        <img src={logo} alt="logo" className='loading_imagen'/>
        <h2>Cargando <div className="spinner-border text-primary" role="status"></div></h2>
        <p>Espere un momento por favor</p>
    </div>
  )
}

export default Loading;