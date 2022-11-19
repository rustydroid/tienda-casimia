import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <div id="navbar">
        <Navbar />
      </div>
      <div id="items">
        <ItemListContainer />
      </div>
    </div>
  );
}

export default App;
