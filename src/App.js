import React from "react";

import Header from "./components/Header";
import Search from "./components/Search";
import Capital from "./components/Capital";
import GlobalState from "./contexts/GlobalState";

import GlobalStyle from "./styles/globalStyle";

function App() {
  return (
    <GlobalState>
      <Header />
      <Search />
      <Capital />

      <GlobalStyle />
    </GlobalState>
  );
}

export default App;
