import React from "react"
import ModeProvider from "./src/context/ModeProvider"

export const wrapRootElement = ({ element }) => {
  return (
    <ModeProvider>
      { element }
    </ModeProvider>
  )
}
