import React from 'react';
import { VikingRowWrapper, VikingNumber } from "./Viking.styles"

const Viking = ({nums}) => {

  const extraNumberIndex = 6;

  return (
    <VikingRowWrapper>
      {nums.map((num, index) => {
        if (index === extraNumberIndex) {
          return (
            <React.Fragment key={index}>
              <span>&nbsp;</span>
              <VikingNumber index={index}>{num}</VikingNumber>
            </React.Fragment>
          )
        }
        return (<VikingNumber key={index} index={index}>{num}</VikingNumber>)
      })}
    </VikingRowWrapper>
  );
}

export default Viking;
