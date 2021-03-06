import styled from "styled-components";

export const Container = styled.div`
  max-height: 100px;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    color: ${(props) => props.color};
    font-size: 50px;
    font-weight: 400;
  }
`;
