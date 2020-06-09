import React, { useEffect, useContext } from "react";

import globalContext from "../../contexts/globalContext";

import Table from "../Table";

import { Container, InnerContainer } from "./style";

const Capital = () => {
  const { capitals, getCapitals } = useContext(globalContext);

  useEffect(() => {
    getCapitals();
  }, []);

  return (
    <Container>
      <InnerContainer>
        <h2>Capitais</h2>
        <section>
          <Table capitals={capitals.filter((capital, index) => index < 5)} />
          <Table capitals={capitals.filter((capital, index) => index >= 5)} />
        </section>
      </InnerContainer>
    </Container>
  );
};

export default Capital;
