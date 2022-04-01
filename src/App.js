import "./App.css";
import Navbar from "./Components/NavBar";
import ItemListConteiner from "./Components/ItemListConteiner";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nosotros from "./Components/Nosotros";

function App() {
  const [productId, setProductId] = useState("");
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <Routes>
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route
            path="/"
            element={<ItemListConteiner setProductId={setProductId} />}
          />
          <Route
            path="/"
            element={<ItemDetailContainer productId={productId} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
