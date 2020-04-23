import React from 'react';
import { JokeriRowWrapper, JokeriNumber } from "./Jokeri.styles"

const Jokeri = ({nums}) => {
  return (
    <JokeriRowWrapper>
      {nums.map((num, index) => {
        return <JokeriNumber key={index}>{num}</JokeriNumber>
      })}
    </JokeriRowWrapper>
  );
}

export default Jokeri;
