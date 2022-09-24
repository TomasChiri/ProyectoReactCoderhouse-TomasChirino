import React, { useContext } from "react";
import './navbar.css'
import CartWidget from "./CartWidget";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";

const NavBar = () => {
    const {productosTotales} = useContext(CartContext);

    return(
        <>
        <nav className="navbar navbar-expand-lg bg-light nav_estilos">
            <div className="container-fluid">
                <Link className="navbar-brand link_gameshop" to={"/"}><img src={logo} alt="logo" className="d-inline-block align-middle logo"/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to={"/"}>Inicio</Link>
                        </li>
                        <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Productos
                        </Link>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to={"/categoria/consolas"}>Consolas</Link></li>
                            <li><Link className="dropdown-item" to={"/categoria/videojuegos"}>Juegos</Link></li>
                            <li><Link className="dropdown-item" to={"/categoria/accesorios"}>Accesorios</Link></li>
                        </ul>
                        </li>
                    </ul>
                    <form className="d-flex buscador" role="search">
                        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Buscar</button>
                    </form>
                    {/* Con esta condicion hago que el carrito no se muestre hasta que se agreguen productos
                        {
                            productosTotales() &&  <CartWidget />
                        } 
                    */}

                    
                    <CartWidget />
                </div>
            </div>
        </nav>
        </>
    )
}

export default NavBar;