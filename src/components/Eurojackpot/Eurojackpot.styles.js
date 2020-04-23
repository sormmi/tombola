import styled from "styled-components"

export const EurojackpotRowWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 40px) auto 40px 40px;
  column-gap: 3px;
  justify-content: center;
  align-items: center;
  opacity: 1;
  animation-timing-function: ease-in;
  animation-duration: .35s;
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
    grid-template-columns: repeat(5, 60px) auto 60px 60px;
    column-gap: 10px;
  }
`;

export const EurojackpotNumber = styled.label`
  border: 1px solid beige;
  border-radius: 20px;
  padding: 11px;
  font-size: 12px;
  font-weight: bold;
  background-image:linear-gradient(to top, orange , yellow);
  
  @media only screen and (min-width: 768px){
    border-radius: 30px;
    font-size: 0.9em;
    padding: 20px;
  }
`;
