import React from "react";
import './navbar.css'
import CartWidget from "./CartWidget";
import logo from "../images/logo.png";
import { NavLink } from "react-router-dom";

const NavBar = () => {

    return(
        <>
        <nav className="navbar navbar-expand-lg bg-light nav_estilos">
            <div className="container-fluid">
                <NavLink className="navbar-brand link_gameshop" to={"/"}><img src={logo} alt="logo" className="d-inline-block align-middle logo"/></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to={"/"}>Inicio</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                        <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Productos
                        </NavLink>
                        <ul className="dropdown-menu">
                            <li><NavLink className="dropdown-item" to={"/categoria/consolas"}>Consolas</NavLink></li>
                            <li><NavLink className="dropdown-item" to={"/categoria/videojuegos"}>Juegos</NavLink></li>
                            <li><NavLink className="dropdown-item" to={"/categoria/accesorios"}>Accesorios</NavLink></li>
                        </ul>
                        </li>
                    </ul>

                    <CartWidget />
                </div>
            </div>
        </nav>
        </>
    )
}

export default NavBar;