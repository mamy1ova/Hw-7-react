import React from "react";
import styled from "styled-components";

const MediaQuery = () => {
  return (
    <Container>
      <h4>Media query</h4>
    </Container>
  );
};

export default MediaQuery;

const Container = styled.h1`
  background-color: #ff9800;
  width: 96%;
  height: 350px;
  margin: 30px;
  text-align: center;
  padding-top: 20px;
  color: white;
  @media (max-width: 768px) {
    background-color: black;
  }
`;
