import "./App.css";
import Navbar from "./components/Navbar";
import CryptoTable from "./components/CryptoTable";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="crypto-table-container">
        <CryptoTable />
      </div>
    </div>
  );
}

export default App;
