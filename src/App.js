import "./App.css";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import api from "./services/api";

function App() {
  const [input, setInput] = useState("");
  const [cep, setCep] = useState({});

  async function handleSearch() {
    if (input === "") {
      alert("Preencha com algum CEP!");
    }
    try {
      const res = await api.get(`${input}/json`);
      setCep(res.data);
      console.log(res.data);
      setInput("");
    } catch {
      alert("Erro ao buscar!");
      const input = (document.querySelector("#inputCEP").value = "");
      // setInput('') pode ser assim tbm
    }
  }

  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>
      <div className="containerInput">
        <input
          id="inputCEP"
          type="text"
          value={input}
          placeholder="Digite seu CEP..."
          onChange={(e) => setInput(e.target.value)}
        />

        <button onClick={handleSearch} className="buttonSearch">
          <FiSearch />
        </button>
      </div>
      {Object.keys(cep).length > 0 && (
        <main className="main">
          <h2>CEP: {cep.cep}</h2>
          <span>Logradouro: {cep.logradouro}</span>
          <span>Complemento: {cep.complemento}</span>
          <span>Bairro: {cep.bairro}</span>
          <span>
            {cep.localidade} - {cep.uf}
          </span>
        </main>
      )}
    </div>
  );
}

export default App;
