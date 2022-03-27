import React, {useState} from "react";


const ItemCount = ({stock, initial, onAdd}) => {
const [Counter, setCounter]= useState(initial);

const clickadd = () => {
    if (Counter === stock) {
        return;
    }
        setCounter(Counter +1);
};

const clickless= () => {
    if (Counter === initial){
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
    <button onClick={() => clickadd()}>Agregar item</button>
    <button onClick={() => clickless()}>Sacar item</button>
    </div>
    <div>
    <button onClick={() => addToCart('addto')}>Comprar</button>
    </div>
    </div>
)
}

export default ItemCount;