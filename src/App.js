import React from "react";

import Header from "./components/Header";
import Search from "./components/Search";
import Capital from "./components/Capital";
import Card from "./components/Card";
import GlobalState from "./contexts/GlobalState";

import GlobalStyle from "./styles/globalStyle";

function App() {
  return (
    <GlobalState>
      <Header />
      <Card />
      <Search />
      <Capital />

      <GlobalStyle />
    </GlobalState>
  );
}

export default App;
