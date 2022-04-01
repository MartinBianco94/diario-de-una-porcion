import React from "react";

const ItemDetail = ({ product }) => {
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
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
