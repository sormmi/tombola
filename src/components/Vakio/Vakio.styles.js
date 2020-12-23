import styled from "styled-components"

export const VakioRowWrapper = styled.div`
  display: grid;
  align-items: start;
  grid-template-rows: repeat(13, 40px) 16px;
  grid-gap: 2px;
  opacity: 1;
  animation-timing-function: ease-in;
  animation-duration: 0.5s;
  animation-name: fadeInOpacity;

  @keyframes fadeInOpacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media only screen and (min-width: 768px) {
    grid-template-rows: repeat(13, 40px) 16px;
  }
`

export const VakioNumber = styled.label`
  border: 1px solid beige;
  border-radius: 3px;
  font-size: 1em;
  font-weight: bold;
  background: #282c34;
  color: white;
  padding: 8px 12px;
  justify-self: center;

  @media only screen and (min-width: 768px) {
    /*padding: 10px 15px;*/
  }
`
