import { Link } from "react-router-dom";

const ItemCount = ({ max, Counter, setCounter, onAdd }) => {
  const clickadd = () => {
    Counter < max && setCounter(Counter + 1);
  };

  const clickless = () => {
    Counter > 1 && setCounter(Counter - 1);
  };

  return (
    <div>
      <div>
        <h3>Cantidad</h3>
        <h2>{Counter}</h2>
        <div class="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            class={`btn ${Counter < max ? "btn-primary" : "btn btn-disable"}`}
            onClick={clickadd}
            disabled={Counter === max}
          >
            +
          </button>
          <button
            type="button"
            class="btn btn-primary"
            onClick={onAdd}
            disabled={Counter === max}
          >
            Agregar al carrito
          </button>
          <button
            type="button"
            class={`btn ${Counter > 1 ? "btn-primary" : "btn btn-disable"}`}
            onClick={clickless}
            disabled={Counter === 1}
          >
            -
          </button>
        </div>
        <hr />
        <Link to={"/"} className="btn btn-primary">
          Volver
        </Link>
      </div>
    </div>
  );
};

export default ItemCount;
