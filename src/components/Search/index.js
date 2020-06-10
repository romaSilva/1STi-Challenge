import React, { useContext } from "react";

import globalContext from "../../contexts/globalContext";

import { AiOutlineSearch } from "react-icons/ai";
import { Container } from "./style";

const Search = () => {
  const { input, handleChange, handleSubmit } = useContext(globalContext);

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Insira aqui o nome da cidade"
          value={input}
        />
        <button type="submit">
          <AiOutlineSearch />
        </button>
      </form>
    </Container>
  );
};

export default Search;
