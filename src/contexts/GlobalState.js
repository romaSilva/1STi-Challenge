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
    input: "",
    city: {},
    card: false,
  };

  const [state, dispatch] = useReducer(globalReducer, initialState);

  //Updates the state variable "capitals" by calling the api
  const getCapitals = async () => {
    const response = await axios.get(
      `${baseUrl}group?id=${idsList}&appid=${apiKey}`
    );
    const list = response.data.list;
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

  //Updates the state variable "input" according to the typing
  const handleChange = (e) => {
    const searchInput = e.target.value;

    dispatch({
      type: "SET_INPUT",
      payload: searchInput,
    });
  };

  //Does basic verification and updates the "city" state variable
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!state.input) return;
    await axios
      .get(`${baseUrl}weather?q=${state.input}&appid=${apiKey}`)
      .then((response) => {
        dispatch({
          type: "SET_CITY",
          payload: response.data,
        });
        dispatch({
          type: "SET_CARD",
          payload: true,
        });
      })
      .catch((error) => console.log(error));

    dispatch({
      type: "SET_INPUT",
      payload: "",
    });
  };

  const handleClose = () => {
    dispatch({
      type: "SET_CARD",
      payload: false,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        capitals: state.capitals,
        input: state.input,
        city: state.city,
        card: state.card,
        getCapitals,
        handleChange,
        handleSubmit,
        handleClose,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
