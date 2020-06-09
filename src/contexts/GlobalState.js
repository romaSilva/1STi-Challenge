import React, { useReducer } from "react";
import axios from "axios";

import GlobalContext from "./globalContext";
import globalReducer from "./reducer";

import { baseUrl, idsList } from "../services/openWeatherApi";
import { apiKey } from "../constants/openWeatherApi";

import { kelvinToCelsius } from "../utils/kelvinToCelsius";

const GlobalState = (props) => {
  const initialState = {
    capitals: [],
  };

  const [state, dispatch] = useReducer(globalReducer, initialState);

  //Updates the state variable "capitals" by calling the api
  const getCapitals = async () => {
    const response = await axios.get(
      `${baseUrl}group?id=${idsList}&appid=${apiKey}`
    );
    const list = response.data.list;
    console.log(list);
    const serializedList = list.map((item) => ({
      name: item.name,
      max: kelvinToCelsius(item.main.temp_max),
      min: kelvinToCelsius(item.main.temp_min),
    }));

    dispatch({
      type: "SET_CAPITALS",
      payload: serializedList,
    });
  };

  return (
    <GlobalContext.Provider value={{ capitals: state.capitals, getCapitals }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
