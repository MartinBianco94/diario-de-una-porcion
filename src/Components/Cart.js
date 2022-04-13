import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);

  console.log(cart);
  return (
    <div>
      <h1>Tu Resumen de compra</h1>
      {cart.map((item) => (
        <div className="card" style={{ width: "18rem" }}>
          <img src={item.image} className="card-img-top" alt={item.name} />
          <div className="card-body">
            <h4>{item.name}</h4>
            <p>Cantidad: {item.Counter}</p>
            <h5>Precio: ${item.price * item.Counter}</h5>
            <hr />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
