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
          <button type="button" class="btn btn-primary" onClick={clickadd}>
            +
          </button>
          <button type="button" class="btn btn-primary" onClick={onAdd}>
            Agregar al carrito
          </button>
          <button type="button" class="btn btn-primary" onClick={clickless}>
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
