import React from "react";
import CartWidget from "./CartWidget";
import logotipo_secundario from "../Assets/Img/logotipo_secundario.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <h6>Diario de una porcion</h6>
        <img src={logotipo_secundario} alt="" width="40" height="35" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav m-auto mb-2.5 ">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Nosotros">
                Nosotros
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/ItemListContainer"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Productos
              </Link>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link className="dropdown-item" to="/category/dulces">
                    Dulces
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/category/salados">
                    Salados
                  </Link>
                </li>
              </ul>
            </li>
            <li className="cart">
              <CartWidget />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
