import React from "react";
import styled from "styled-components";

const StyleSquare = (props) => {
  return (
    <div>
      <ColoredSquare bgColor={props.bgColor}>
        <h1>Sguage</h1>
      </ColoredSquare>
    </div>
  );
};

export default StyleSquare;

const ColoredSquare = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 350px;
  height: 350px;
  text-align: center;
  margin: 30px;
  & > h1 {
    font-size: 45px;
    padding-top: 30%;
  }
`;
