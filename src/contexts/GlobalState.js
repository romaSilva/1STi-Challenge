import React, { useReducer } from "react";

import GlobalContext from "./globalContext";
import globalReducer from "./reducer";

import { loadList } from "../services/loadList";

const list = loadList();

const GlobalState = (props) => {
  const initialState = {
    capitals: [],
  };

  const [state, dispatch] = useReducer(globalReducer, initialState);

  const getCapitals = () => {
    const idsList = list.map((item) => item.id);
    console.log(idsList);
  };

  return (
    <GlobalContext.Provider value={{ test: state.test, getCapitals }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
