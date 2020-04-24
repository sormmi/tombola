import styled from "styled-components"

export const JokeriRowWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(7, 40px) 16px;
  column-gap: 8px;
  opacity: 1;
  animation-timing-function: ease-in;
  animation-duration: .5s;
  animation-name: fadeInOpacity;
  
  @keyframes fadeInOpacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media only screen and (min-width: 768px){
    grid-template-columns: repeat(7, 60px) 16px;
    column-gap: 12px;
  }
`;

export const JokeriNumber = styled.label`
  border: 1px solid beige;
  border-radius: 3px;
  font-size: 1em;
  font-weight: bold;
  background: #282c34;
  color: white;
  padding: 8px 12px;
  justify-self: center;
  
  @media only screen and (min-width: 768px){
    padding: 20px 25px;
  }
`;
