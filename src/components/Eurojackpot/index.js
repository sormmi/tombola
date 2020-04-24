import React from "react"
import { EurojackpotRowWrapper, EurojackpotNumber } from "./Eurojackpot.styles"
import { FaTrash } from "react-icons/fa"
import { DeleteIcon } from "styles/DeleteIcon"

const Eurojackpot = ({ nums, index, onDelete }) => (
  <EurojackpotRowWrapper>
    {nums.map((num, i) => (
      <EurojackpotNumber key={i}>{num}</EurojackpotNumber>
    ))}
    <DeleteIcon onClick={() => onDelete(index)}>
      <FaTrash size={16} />
    </DeleteIcon>
  </EurojackpotRowWrapper>
)

export default Eurojackpot
