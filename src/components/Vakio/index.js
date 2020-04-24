import React from "react"
import { VakioRowWrapper, VakioNumber } from "./Vakio.styles"
import { FaTrash } from "react-icons/fa"
import { DeleteIcon } from "styles/DeleteIcon"

const Vakio = ({ nums, index, onDelete }) => (
  <VakioRowWrapper>
    {nums.map((num, i) => {
      return <VakioNumber key={i}>{num}</VakioNumber>
    })}
    <DeleteIcon>
      <FaTrash size={16} onClick={() => onDelete(index)}/>
    </DeleteIcon>
  </VakioRowWrapper>
)

export default Vakio
