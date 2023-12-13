import "./App.css";
import Navbar from "./components/Navbar";
import CryptoTable from "./components/CryptoTable";

function App() {
  return (
    <div className="App">
      <div className="crypto-glow"></div>{" "}
      {/* This will create the glowing effect */}
      <Navbar />
      <div className="crypto-table-container">
        <CryptoTable />
      </div>
    </div>
  );
}

export default App;
