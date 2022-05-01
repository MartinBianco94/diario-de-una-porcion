import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { collection, getDocs } from "@firebase/firestore";
import { query, where } from "@firebase/firestore";
import { db } from "../firebase/config";
import ItemList from "./ItemList";

const ItemListConteiner = ({ setProductId }) => {
  const [productList, setListProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const productosRef = collection(db, "productos");
    const q = categoryId
      ? query(productosRef, where("category", "==", categoryId))
      : productosRef;
    getDocs(q).then((resp) => {
      const items = resp.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      console.log(items);
      setListProducts(items);
    });
  }, [categoryId]);

  return (
    <div>
      <ItemList productList={productList} setProductId={setProductId} />
    </div>
  );
};

export default ItemListConteiner;
