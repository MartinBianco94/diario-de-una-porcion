import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { db } from "../firebase/config";
import {
  getDocs,
  query,
  where,
  documentId,
  writeBatch,
  collection,
  addDoc,
  Timestamp,
} from "@firebase/firestore";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { cart, cartTotal, emptyCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  const [values, setValues] = useState({
    nombre: "",
    email: "",
    tel: "",
  });

  const handleImputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: [e.target.value],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const order = {
      items: cart,
      cart: cartTotal(),
      comprador: { ...values },
      fyh: Timestamp.fromDate(new Date()),
    };
    const batch = writeBatch(db);
    const ordersRef = collection(db, "orders");
    const productosRef = collection(db, "productos");
    const q = query(
      productosRef,
      where(
        documentId(),
        "in",
        cart.map((item) => item.id)
      )
    );
    const productos = await getDocs(q);

    const outOfStock = [];

    productos.docs.forEach((doc) => {
      const itemInCart = cart.find((item) => item.id === doc.id);

      if (doc.data().stock >= itemInCart.Counter) {
        batch.update(doc.ref, {
          stock: doc.data().stock - itemInCart.Counter,
        });
      } else {
        outOfStock.push(itemInCart);
      }
    });
    if (outOfStock.length === 0) {
      batch.commit();
      addDoc(ordersRef, order).then((doc) => {
        setOrderId(doc.id);
        emptyCart();
      });
    } else {
      alert("Hay items en stock!");
    }
  };
  if (orderId) {
    return (
      <div className="container my-5">
        <h2>Te registraste de forma exitosa!</h2>
        <hr />
        <h4>Tu numero de orden es:{orderId}</h4>
        <Link to="/" className="btn btn-success mx-3">
          Volver al inicio
        </Link>
      </div>
    );
  }
  if (cart.length === 0) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container my-5">
      <h2>Tu compra</h2>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control my-2"
          type={"text"}
          placeholder="Tu nombre"
          value={values.nombre}
          name="nombre"
          onChange={handleImputChange}
        />
        <input
          className="form-control my-2"
          type={"email"}
          placeholder="Tu email de contacto"
          value={values.email}
          name="email"
          onChange={handleImputChange}
        />
        <input
          className="form-control my-2"
          type={"tel"}
          placeholder="Tu celular de contacto"
          value={values.tel}
          name="tel"
          onChange={handleImputChange}
        />
        <button className="btn btn-primary" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Checkout;
