import React from "react"
import { JokeriRowWrapper, JokeriNumber } from "./Jokeri.styles"
import { FaTrash } from "react-icons/fa"
import { DeleteIcon } from "styles/DeleteIcon"

const Jokeri = ({ nums, index, onDelete }) => (
  <JokeriRowWrapper>
    {nums.map((num, i) => {
      return <JokeriNumber key={i}>{num}</JokeriNumber>
    })}
    <DeleteIcon>
      <FaTrash size={16} onClick={() => onDelete(index)}/>
    </DeleteIcon>
  </JokeriRowWrapper>
)


export default Jokeri
