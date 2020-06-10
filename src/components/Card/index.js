import React, { useContext } from "react";

import { kelvinToCelsius } from "../../utils/kelvinToCelsius";
import { titleCase } from "../../utils/titleCase";

import globalContext from "../../contexts/globalContext";

import { Container, StyledCard } from "./style";
import {
  AiOutlineArrowUp,
  AiOutlineArrowDown,
  AiOutlineClose,
} from "react-icons/ai";

const Card = () => {
  const { card, city, handleClose } = useContext(globalContext);

  return card ? (
    <Container>
      <StyledCard>
        <header>
          {`${city.name} - ${city.sys.country}`}
          <div onClick={handleClose}>
            <AiOutlineClose />
          </div>
        </header>
        <main>{`${kelvinToCelsius(city.main.temp)}°C ${titleCase(
          city.weather[0].description
        )}`}</main>
        <section>
          <div>
            <span>
              <AiOutlineArrowUp style={{ color: "FF7000" }} />
              {` `}
              {kelvinToCelsius(city.main.temp_max)}°
              <AiOutlineArrowDown style={{ color: "FF7000" }} />
              {` `}
              {kelvinToCelsius(city.main.temp_min)}°
            </span>
            <span>Vento: {city.wind.speed} mph</span>
          </div>
          <div>
            <span>Sensação: {kelvinToCelsius(city.main.feels_like)}°C</span>
            <span>Humidade: {city.main.humidity}%</span>
          </div>
        </section>
      </StyledCard>
    </Container>
  ) : null;
};

export default Card;
