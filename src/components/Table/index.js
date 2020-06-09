import React from "react";

import { Container, Th, Td } from "./style";

const Table = () => {
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
        <tr>
          <Td>18</Td>
          <Td>27</Td>
          <Td>Rio de Janeiro</Td>
        </tr>
        <tr>
          <Td>14</Td>
          <Td>22</Td>
          <Td>São Paulo</Td>
        </tr>
        <tr>
          <Td>21</Td>
          <Td>32</Td>
          <Td>Belo Horizonte</Td>
        </tr>
        <tr>
          <Td>24</Td>
          <Td>37</Td>
          <Td>Brasilia</Td>
        </tr>
        <tr>
          <Td>24</Td>
          <Td>37</Td>
          <Td>Belém</Td>
        </tr>
      </tbody>
    </Container>
  );
};

export default Table;
