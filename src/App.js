import './App.css';
import Navbar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';




function App() {
  return (
    <div className="App">
      <header>
      <Navbar />
      </header>
      <div>
      <ItemListContainer />
      </div>
   </div>
  );
}

export default App;
