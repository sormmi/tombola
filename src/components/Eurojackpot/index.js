import React from "react"
import { EurojackpotRowWrapper, EurojackpotNumber } from "./Eurojackpot.styles"
import { FaTrash } from "react-icons/fa"
import { DeleteIcon } from "styles/DeleteIcon"

const Eurojackpot = ({ nums, index, onDelete }) => (
  <EurojackpotRowWrapper>
    {nums.map((num, i) => (
      <EurojackpotNumber key={i}>{num}</EurojackpotNumber>
    ))}
    <DeleteIcon>
      <FaTrash size={16} onClick={() => onDelete(index)}/>
    </DeleteIcon>
  </EurojackpotRowWrapper>
)

export default Eurojackpot
