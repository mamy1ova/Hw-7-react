import React from "react";
import styled from "styled-components";

const StateButton = () => {
  return <Button>Click</Button>;
};

export default StateButton;

const Button = styled.button`
  width: 150px;
  height: 50px;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  font-size: 24px;
  margin-left: 50px;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
  }
  &:active {
    background-color: #ff9800;
    color: black;
  }
`;
