import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import getProduct from "../Services/products";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  const { productId } = useParams();

  useEffect(() => {
    getProduct
      .then((res) => {
        setProduct(res.find((item) => item.id === productId));
      })
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
