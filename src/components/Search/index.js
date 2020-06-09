import React from "react";

import { AiOutlineSearch } from "react-icons/ai";
import { Container } from "./style";

const Search = () => {
  return (
    <Container>
      <form>
        <input type="text" placeholder="Insira aqui o nome da cidade" />
        <button type="submit">
          <AiOutlineSearch />
        </button>
      </form>
    </Container>
  );
};

export default Search;
