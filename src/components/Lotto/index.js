import React from 'react';
import { LottoRowWrapper, LottoNumber } from "./Lotto.styles"

const Lotto = ({nums}) => {
  return (
    <LottoRowWrapper>
      {nums.map((num, index) => {
        return <LottoNumber key={index}>{num}</LottoNumber>
      })}
    </LottoRowWrapper>
  );
}

export default Lotto;
