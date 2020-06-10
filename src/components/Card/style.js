import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledCard = styled.div`
  color: #333;
  background-color: rgba(255, 255, 255, 0.7);
  max-width: 380px;
  width: 100%;
  padding: 20px 10px 5px 35px;
  margin-bottom: 15px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  header {
    font-size: 12px;
    font-weight: 500;
    margin-bottom: 13px;
    width: 100%;

    display: flex;
    align-items: center;

    div {
      flex-grow: 1;
      text-align: right;
      font-size: 16px;
      color: #ff7000;
      cursor: pointer;
    }
  }

  main {
    font-size: 25px;
    font-weight: 500;
    margin-bottom: 20px;
    letter-spacing: 1px;
  }

  section {
    display: flex;
    justify-content: center;

    div {
      margin-bottom: 8px;
      font-size: 12px;
      font-weight: 100;

      display: flex;
      flex-direction: column;

      span {
        margin-right: 20px;
        margin-bottom: 10px;
      }
    }
  }
`;

export const StyledPlaceholder = styled.div`
  height: 180px;
`;
