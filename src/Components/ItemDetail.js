import React, { useContext } from "react";
import ItemCount from "./ItemCount";
import { useState } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {
  const { cart, addItem, isInCart } = useContext(CartContext);

  console.log(cart);

  const [Counter, setCounter] = useState(1);

  const agregarAlCarrito = () => {
    const itemToAdd = {
      id: product.id,
      name: product.name,
      stock: product.stock,
      image: product.imageUrl,
      price: product.price,
      Counter,
    };

    addItem(itemToAdd);
  };
  return (
    <div className="product-list">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={product?.imageUrl}
          className="card-img-top"
          alt={product?.name}
        />
        <div className="card-body">
          <h1 className="card-title">{product?.name}</h1>
          <h5> $ {product?.price}</h5>
          <h5>{product?.description}</h5>
          {!isInCart(product?.id) ? (
            <ItemCount
              max={product?.stock}
              Counter={Counter}
              setCounter={setCounter}
              onAdd={agregarAlCarrito}
            />
          ) : (
            <Link to="/cart" className="btn btn-success">
              Terminar compra
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
