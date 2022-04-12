import React from "react";
import ItemCount from "./ItemCount";
import { useState } from "react";

const ItemDetail = ({ product }) => {
  const [Counter, setCounter] = useState(1);

  const agregarAlCarrito = (Counter) => {
    const itemToAdd = {
      id: product.id,
      name: product.name,
      stock: product.stock,
      image: product.imageUrl,
      Counter,
    };
    console.log(itemToAdd);
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
          <h5>{product?.description}</h5>
          <ItemCount
            max={product?.stock}
            Counter={Counter}
            setCounter={setCounter}
            onAdd={agregarAlCarrito}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
