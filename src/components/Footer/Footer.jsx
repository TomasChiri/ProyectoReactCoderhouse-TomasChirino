import React from 'react';
import "./footer.css";
import logo from "../images/logo.png";
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className='footer'>
        <Link to={"/"}><img src={logo} alt="logo" className="footer_logo"/></Link>
    </div>
  )
}

export default Footer;
