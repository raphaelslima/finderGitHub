import { useState, KeyboardEvent } from "react";
import "./style.css";

//icons
import { BsSearch } from "react-icons/bs";

type Props = {
  loadUser: (userName: string) => Promise<void>;
};

const Search = ({ loadUser }: Props) => {
  const [input, setInput] = useState<string>("");

  const handleSubmit = () => {
    if (input !== "") {
      loadUser(input);
      setInput("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key == "Enter") {
      if (input !== "") {
        loadUser(input);
        setInput("");
      }
    }
  };

  return (
    <div className="container">
      <h3>Busque um usuário:</h3>
      <p className="subtitle">Conheça seus repositórios</p>
      <div className="form">
        <input
          type="text"
          placeholder="Digite o nome de um usuário"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSubmit}>
          <BsSearch className="icon" />
        </button>
      </div>
    </div>
  );
};

export default Search;
