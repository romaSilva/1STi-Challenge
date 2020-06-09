import React, { useEffect, useContext } from "react";

import globalContext from "../../contexts/globalContext";

import Table from "../Table";

import { Container, InnerContainer } from "./style";

const Capital = () => {
  const { getCapitals } = useContext(globalContext);

  useEffect(() => {
    getCapitals();
  }, []);

  return (
    <Container>
      <InnerContainer>
        <h2>Capitais</h2>
        <section>
          <Table />
          <Table />
        </section>
      </InnerContainer>
    </Container>
  );
};

export default Capital;
