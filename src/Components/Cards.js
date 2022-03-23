import React from "react";
import Comprar from "./ItemCount";
import alfajores_brownie from "../Assets/Img/alfajores_brownie.jpg"

const stock = 10
const initial = 1
const onAdd = () =>{
     
}

const Card = () => {return(
    <div className="card" style={{ width: '18rem' }}>
    <img src={alfajores_brownie} className="card-img-top" alt="alfajores_brownie"/>
    <div className="card-body">
      <h5 className="card-title">Alfajodes de Brownie</h5>
      <p className="card-text"></p>
      <Comprar
      stock={stock}
      initial={initial}
      onAdd={onAdd}
      />
    </div>
  </div>

)}



export default Card;

