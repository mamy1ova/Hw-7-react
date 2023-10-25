import React from "react";
import styled from "styled-components";

const Conditions = ({ error }) => {
  return (
    <Container error={error}>
      <h3>Hello Alisher!</h3>
      <button>Click</button>
    </Container>
  );
};

export default Conditions;

const Container = styled.h2`
  border: 2px solid violet;
  width: 250px;
  height: 150px;
  margin: 30px;
  padding-top: 20px;
  text-align: center;
  & > button {
    margin-top: 30px;
    width: 100px;
    height: 40px;
    border: none;
    border-radius: 10px;
    font-weight: bold;
    &:active {
      background-color: ${(error) => (error !== "Dog" ? "red" : "green")};
    }
  }
`;
