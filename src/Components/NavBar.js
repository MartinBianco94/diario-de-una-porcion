import React from "react";
import logotipo_secundario from "../Assets/Img/logotipo_secundario.png";
import carrito_de_compras from "../Assets/Img/carrito_de_compras.png"


const Navbar = () => { return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
 <div className="container-fluid">
 <h6>Diario de una porcion</h6>
  <img src={logotipo_secundario} alt="" width="30" height="24" />
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav m-auto mb-2.5 ">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">Inicio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Recetas</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Productos
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li><a className="dropdown-item" href="#">Dulces</a></li>
          <li><a className="dropdown-item" href="#">Salados</a></li>
          <li><a className="dropdown-item" href="#">Regalos</a></li>
        </ul>
      </li>
      <li className="navbar ">
        <a href="#">
        <img src={carrito_de_compras} alt="" width="30" height="30" />
        </a>
      </li>
    </ul>
  </div>
</div>
</nav>
);
}

export default Navbar;
