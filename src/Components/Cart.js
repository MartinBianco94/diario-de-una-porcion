import { useContext } from "react";
import { CartContext } from "./CartContext";
import logotipo_compras from "../Assets/Img/logotipo_compras.png";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, cartTotal, emptyCart, removeItem } = useContext(CartContext);

  console.log(cart);
  if (cart.length === 0) {
    return (
      <div className="container ">
        <h2>Tu carrito esta vacio</h2>
        <hr />
        <Link to={"/"} className="btn btn-primary">
          Volver
        </Link>
      </div>
    );
  }
  return (
    <div>
      <img
        src={logotipo_compras}
        className="card-img-top"
        style={{ width: "20rem" }}
        alt=""
      />
      <h1>Tu Resumen de compra</h1>
      {cart.map((item) => (
        <div key={item.id} className="card" style={{ width: "18rem" }}>
          <img src={item.image} className="card-img-top" alt={item.name} />
          <div className="card-body">
            <h4>{item.name}</h4>
            <p>Cantidad: {item.Counter}</p>
            <h5>Precio: ${item.price * item.Counter}</h5>
            <hr />
            <i
              className="btn btn-danger bi bi-cart-x-fill"
              onClick={() => removeItem(item.id)}
            ></i>
          </div>
        </div>
      ))}
      <h1>Total: $ {cartTotal()}</h1>
      <button type="button" className="btn btn-danger" onClick={emptyCart}>
        Vaciar Carrito
      </button>
      <Link to="/checkout" className="btn btn-success mx-3">
        Terminar compra
      </Link>
    </div>
  );
};

export default Cart;
