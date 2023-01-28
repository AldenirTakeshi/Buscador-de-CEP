import "./App.css";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

function App() {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    alert("Clicou!");
    console.log(input);
  };

  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>
      <div className="containerInput">
        <input
          type="text"
          value={input}
          placeholder="Digite seu CEP..."
          onChange={(e) => setInput(e.target.value)}
        />

        <button onClick={handleSearch} className="buttonSearch">
          <FiSearch />
        </button>
      </div>

      <main className="main">
        <h2>CEP: 79003222</h2>
        <span>Rua Teste</span>
        <span>Complemento: </span>
        <span>Vila Rosa</span>
        <span>Campo Grande - MS</span>
      </main>
    </div>
  );
}

export default App;
