import React, { useContext } from "react";
import { Link } from "react-router-dom";
import carrito_de_compras from "../Assets/Img/carrito_de_compras.png";
import { CartContext } from "./CartContext";

const CartWidget = () => {
  const { cartQuantity } = useContext(CartContext);
  return (
    <Link to="/Cart">
      <img src={carrito_de_compras} alt="" width="35" height="35" />
      <span class="top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {cartQuantity()}
      </span>
    </Link>
  );
};

export default CartWidget;
