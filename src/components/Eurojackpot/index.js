import React from 'react';
import { EurojackpotRowWrapper, EurojackpotNumber } from "./Eurojackpot.styles"

const Eurojackpot = ({nums}) => {

  const extraNumberIndex = 5;

  return (
    <EurojackpotRowWrapper>
      {nums.map((num, index) => {
        if (index === extraNumberIndex) {
          return (
            <React.Fragment key={index}>
              <span>&nbsp;</span>
              <EurojackpotNumber index={index}>{num}</EurojackpotNumber>
            </React.Fragment>)
        }
        return (<EurojackpotNumber key={index} index={index}>{num}</EurojackpotNumber>)
      })}
    </EurojackpotRowWrapper>
  );
}

export default Eurojackpot;
