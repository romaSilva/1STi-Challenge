import React from "react";

import { Container, Th, Td } from "./style";

const Table = ({ capitals }) => {
  return (
    <Container>
      <thead>
        <tr>
          <Th>Min.</Th>
          <Th>Max.</Th>
          <Th></Th>
        </tr>
      </thead>
      <tbody>
        {capitals.map((capital) => (
          <tr key={capital.name}>
            <Td>{`${capital.min}‎°`}</Td>
            <Td>{`${capital.max}‎°`}</Td>
            <Td>{capital.name}</Td>
          </tr>
        ))}
      </tbody>
    </Container>
  );
};

export default Table;
