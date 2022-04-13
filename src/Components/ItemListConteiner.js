import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import getProduct from "../Services/products";
import ItemList from "./ItemList";

const ItemListConteiner = ({ setProductId }) => {
  const [productList, setListProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    getProduct
      .then((res) => {
        if (categoryId) {
          setListProducts(res.filter((prod) => prod.category === categoryId));
        } else {
          setListProducts(res);
        }
      })
      .catch((error) => console.log(error));
  }, [categoryId]);

  /*console.log("desde el container", productList);*/

  return (
    <div>
      <ItemList productList={productList} setProductId={setProductId} />
    </div>
  );
};

export default ItemListConteiner;
