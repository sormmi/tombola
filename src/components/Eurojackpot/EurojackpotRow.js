import React from 'react';
import styled from "styled-components";

const EurojackpotRowDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 60px) auto 60px 60px;
  column-gap: 10px;
  justify-content: center;
  align-items: center;
  opacity: 1;
  animation-timing-function: ease-in;
  animation-duration: .35s;
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
    grid-template-columns: repeat(5, 30px) auto 30px 30px;
    column-gap: 3px;
  }
`;

const EurojackpotNumber = styled.label`
  border: 1px solid beige;
  border-radius: 30px;
  font-size: 0.9em;
  font-weight: bold;
  background-image:linear-gradient(to top, orange , yellow);
  padding: 15px;
  
  @media only screen and (max-width: 600px){
    border-radius: 15px;
    padding: 0;
    font-size: 12px;
  }
`;

const EurojackpotRow = ({nums}) => {

  const extraNumberIndex = 5;

  return (
    <EurojackpotRowDiv>
      {nums.map((num, index) => {
        if (index === extraNumberIndex) {
          return (<><div>&nbsp;</div><EurojackpotNumber key={index} index={index}>{num}</EurojackpotNumber></>)
        }
        return (<EurojackpotNumber key={index} index={index}>{num}</EurojackpotNumber>)
      })}
    </EurojackpotRowDiv>
  );
}

export default EurojackpotRow;
