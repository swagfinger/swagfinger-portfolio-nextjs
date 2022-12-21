import React from 'react';
import styled from "styled-components";


const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
  color: green;
  border-color: tomato;
`;

// need to use typescript for this component
const MyButton = ()=> {
 return (
  <TomatoButton className="btn bg-blue-300">Tomato Button</TomatoButton>
 )
}

export default MyButton;