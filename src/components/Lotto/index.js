import React from "react"
import { FaTrash } from "react-icons/fa"
import { LottoRowWrapper, LottoNumber } from "./Lotto.styles"
import { DeleteIcon } from "styles/DeleteIcon"

const Lotto = ({ index, nums, onDelete }) => (
  <LottoRowWrapper>
    {nums.map((num, i) => {
      return <LottoNumber key={i}>{num}</LottoNumber>
    })}
    <DeleteIcon onClick={() => onDelete(index)}>
      <FaTrash size={16} />
    </DeleteIcon>
  </LottoRowWrapper>
)

export default Lotto
