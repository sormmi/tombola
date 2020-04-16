import React from 'react';
import styled from "styled-components";

const JokeriRowDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 60px);
  justify-content: center;
  align-items: center;
  column-gap: 20px;
  opacity: 1;
  animation-timing-function: ease-in;
  animation-duration: .5s;
  animation-name: fadeInOpacity;
  
  @keyframes fadeInOpacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media only screen and (max-width: 600px){
    grid-template-columns: repeat(7, 40px);
    column-gap: 0;
  }
`;

const JokeriNumber = styled.label`
  border: 1px solid beige;
  border-radius: 3px;
  font-size: 1em;
  font-weight: bold;
  background: #282c34;
  color: white;
  padding: 20px 30px;
  justify-self: center;
  
  @media only screen and (max-width: 600px){
    border-radius: 3px;
    padding: 4px 8px;
  }
`;

const JokeriRow = ({nums}) => {
  return (
    <JokeriRowDiv>
      {nums.map((num, index) => {
        return <JokeriNumber key={index}>{num}</JokeriNumber>
      })}
    </JokeriRowDiv>
  );
}

export default JokeriRow;
