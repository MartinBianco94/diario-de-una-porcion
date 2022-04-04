import React, { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [Counter, setCounter] = useState(initial);

  const clickadd = () => {
    if (Counter === stock) {
      return;
    }
    setCounter(Counter + 1);
  };

  const clickless = () => {
    if (Counter === initial) {
      return;
    }
    setCounter(Counter - 1);
  };

  const addToCart = () => {
    onAdd();
  };

  return (
    <div>
      <div>
        <h3>Comprar</h3>
        <h2>{Counter}</h2>
        <div class="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => clickadd()}
          >
            +
          </button>
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => addToCart("addto")}
          >
            Comprar
          </button>
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => clickless()}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
