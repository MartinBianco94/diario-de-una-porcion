import "./App.css";
import Navbar from "./Components/NavBar";
import ItemListConteiner from "./Components/ItemListConteiner";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Nosotros from "./Components/Nosotros";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <Routes>
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/" element={<ItemListConteiner />} />
          <Route path="/category/:categoryId" element={<ItemListConteiner />} />
          <Route
            path="/ItemDetail/:productId"
            element={<ItemDetailContainer />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
