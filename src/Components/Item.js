import React from "react";
import ItemCount from "./ItemCount";

const stock = 10;
const initial = 1;
const onAdd = () => {};

const Item = (props) => {
  console.log(props.product);
  const showMore = () => {
    props.setProductId(props.product.id);
  };
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={props.product.imageUrl}
        className="card-img-top"
        alt={props.product.name}
      />
      <div className="card-body">
        <h5 className="card-title">{props.product.name}</h5>
        <p className="card-text">${props.product.price}</p>
        <ItemCount stock={stock} initial={initial} onAdd={onAdd} />
        <button onClick={showMore}>Mas info</button>
      </div>
    </div>
  );
};

export default Item;
