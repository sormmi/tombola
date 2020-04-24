import React from "react"
import { VikingRowWrapper, VikingNumber } from "./Viking.styles"
import { DeleteIcon } from "styles/DeleteIcon"
import { FaTrash } from "react-icons/fa"

const Viking = ({ index, nums, onDelete }) => (
  <VikingRowWrapper>
    {nums.map((num, i) => (
      <VikingNumber key={i}>{num}</VikingNumber>
    ))}
    <DeleteIcon>
      <FaTrash size={16} onClick={() => onDelete(index)}/>
    </DeleteIcon>
  </VikingRowWrapper>
)

export default Viking
