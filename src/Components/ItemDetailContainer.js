import React, { useState, useEffect } from "react";
import getProduct from "../Services/products";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ({ productId }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProduct
      .then((res) => setProduct(res.find((item) => item.id === productId)))
      .catch((error) => console.log(error));
  }, [productId]);

  return (
    <div>
      <h2>Detalle de producto</h2>
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;
