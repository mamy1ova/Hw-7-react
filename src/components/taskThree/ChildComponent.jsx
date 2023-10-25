import React from "react";
import styled from "styled-components";

const ChildComponent = ({ color, border }) => {
  return (
    <div>
      <Text color={color} border={border}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, sunt
        quam sed error culpa fugiat architecto aliquam consequuntur adipisci
        ipsam repellendus magnam iste non ratione id obcaecati itaque dolores
        nemo?
      </Text>
    </div>
  );
};

export default ChildComponent;

const Text = styled.p`
  color: ${(props) => props.color};
  border: 2px solid ${(props) => props.border};
  width: 350px;
  height: 200px;
  display: flex;
  align-items: center;
  margin: 30px;
  padding: 20px;
`;
