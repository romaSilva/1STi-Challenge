import styled from "styled-components";

export const Container = styled.div`
  margin-top: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  form {
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.75);
    background: #fff;
    max-width: 380px;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    input {
      max-width: 350px;
      width: 100%;
      height: 40px;
      border: none;
      font-family: "Roboto", sans-serif;
      font-weight: 100;
      font-size: 18px;
      padding: 0 10px;
      letter-spacing: 0.5px;
    }

    button {
      color: #333;
      border: none;
      background-color: #fff;
      font-size: 20px;
      padding: 0 10px;
      cursor: pointer;

      display: flex;
      align-items: center;
    }
  }
`;
