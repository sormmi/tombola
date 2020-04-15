import React from 'react';
import styled from "styled-components";

const VikingRowDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 60px) auto 60px;
  grid-gap: 10px;
  justify-content: center;
  align-items: center;
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
    grid-template-columns: repeat(6, 30px) auto 30px;
    column-gap: 3px;
  }
`;

const VikingNumber = styled.label`
  border: 1px solid beige;
  border-radius: 30px;
  font-size: 0.9em;
  font-weight: bold;
  background-image:linear-gradient(to top, orange , yellow);
  padding: 15px;
  
  @media only screen and (max-width: 600px){
    border-radius: 15px;
    padding: 3px;
    font-size: 12px;
  }
`;

const VikingRow = ({nums}) => {

  const extraNumberIndex = 6;

  return (
    <VikingRowDiv>
      {nums.map((num, index) => {
        if (index === extraNumberIndex) {
          return (<><div><div>&nbsp;</div></div><VikingNumber key={index} index={index}>{num}</VikingNumber></>)
        }
        return (<VikingNumber key={index} index={index}>{num}</VikingNumber>)
      })}
    </VikingRowDiv>
  );
}

export default VikingRow;
