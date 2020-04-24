import React from "react"
import { JokeriRowWrapper, JokeriNumber } from "./Jokeri.styles"
import { FaTrash } from "react-icons/fa"
import { DeleteIcon } from "styles/DeleteIcon"

const Jokeri = ({ nums, index, onDelete }) => (
  <JokeriRowWrapper>
    {nums.map((num, i) => {
      return <JokeriNumber key={i}>{num}</JokeriNumber>
    })}
    <DeleteIcon onClick={() => onDelete(index)}>
      <FaTrash size={16} />
    </DeleteIcon>
  </JokeriRowWrapper>
)


export default Jokeri
