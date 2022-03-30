import './App.css';
import Navbar from './Components/NavBar';
import ItemListConteiner from './Components/ItemListConteiner';




function App() {
  return (
    <div className="App">
      <header>
      <Navbar />
      </header>
      <div>
      <ItemListConteiner />
      </div>
   </div>
  );
}

export default App;
