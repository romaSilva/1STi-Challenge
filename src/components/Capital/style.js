import styled from "styled-components";

export const Container = styled.div`
  margin-top: 50px;
  min-height: 250px;

  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const InnerContainer = styled.section`
  border-top: 0.8px solid #fff;
  max-width: 450px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-left: 55px;
    margin-top: 20px;
    color: #fff;
    font-weight: 400;
    letter-spacing: 1px;
    align-self: flex-start;
  }

  section {
    display: flex;
    flex-wrap: wrap;
  }
`;
