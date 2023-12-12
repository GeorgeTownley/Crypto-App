import "./App.css";
import Navbar from "./components/Navbar";
import CryptoTable from "./components/CryptoTable";

function App() {
  return (
    <div className="App">
      <header>
        <p>
          <Navbar />
          <CryptoTable />
        </p>
      </header>
    </div>
  );
}

export default App;
