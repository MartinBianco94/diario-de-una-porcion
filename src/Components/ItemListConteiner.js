import React, { useEffect, useState } from "react";
import getProduct from "../Services/products";
import ItemList from "./ItemList";

const ItemListConteiner = ({ setProductId }) => {
  const [productList, setListProducts] = useState([]);

  useEffect(() => {
    getProduct
      .then((res) => setListProducts(res))
      .catch((error) => console.log(error));
  }, []);

  console.log("desde el container", productList);

  return (
    <div>
      <ItemList productList={productList} setProductId={setProductId} />
    </div>
  );
};

export default ItemListConteiner;
