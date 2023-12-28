import "./App.css";
import CryptoTable from "./components/CryptoTable";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={"./wizard.png"} alt="Logo" className="App-logo" />
        <h1 className="App-title">Crypto Wizard</h1>
      </header>
      <CryptoTable />
    </div>
  );
}

export default App;
