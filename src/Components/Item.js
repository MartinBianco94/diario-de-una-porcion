import React from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const stock = 10;
const initial = 1;
const onAdd = () => {};

const Item = (props) => {
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
        <Link to={`/ItemDetail/${props.product.id}`}>
          <button type="button" className="btn btn-secondary btn-sm">
            Mas info
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
