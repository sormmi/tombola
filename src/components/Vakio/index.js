import React from 'react';
import { VakioRowWrapper, VakioNumber } from "./Vakio.styles"

const Vakio = ({nums}) => {
  return (
    <VakioRowWrapper>
      {nums.map((num, index) => {
        return <VakioNumber key={index}>{num}</VakioNumber>
      })}
    </VakioRowWrapper>
  );
}

export default Vakio;
