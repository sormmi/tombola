import React from 'react';
import styled from "styled-components";

const LottoRowDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 60px);
  justify-content: center;
  align-items: center;
  column-gap: 10px;
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
    grid-template-columns: repeat(7, 30px);
    column-gap: 3px;
  }
`;

const LottoNumber = styled.label`
  border: 1px solid beige;
  border-radius: 30px;
  font-size: 1em;
  font-weight: bold;
  background-image: linear-gradient(to top, orange , yellow);
  padding: 15px;
  
  @media only screen and (max-width: 600px){
    border-radius: 15px;
    padding: 0;
    font-size: 12px;
  }
`;

const LottoRow = ({nums}) => {
  return (
    <LottoRowDiv>
      {nums.map((num, index) => {
        return <LottoNumber key={index}>{num}</LottoNumber>
      })}
    </LottoRowDiv>
  );
}

export default LottoRow;
