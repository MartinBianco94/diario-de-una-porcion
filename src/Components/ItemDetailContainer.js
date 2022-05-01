import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { db } from "../firebase/config";
import { doc, getDoc } from "@firebase/firestore";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  const { productId } = useParams();

  useEffect(() => {
    const docRef = doc(db, "productos", productId);
    getDoc(docRef).then((doc) => {
      const prod = { id: doc.id, ...doc.data() };
      setProduct(prod);
    });
  }, [productId]);

  return (
    <div>
      <h2>Detalle del producto</h2>
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;
