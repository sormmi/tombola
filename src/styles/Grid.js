import styled from "styled-components"

export const Grid = styled.div`
  display: grid;
  align-items: start;
  justify-content: center;
  row-gap: 10px;
  margin: 10px 0;
  padding: 20px;
  
  @media only screen and (min-width: 768px){
      margin: 20px;
  }
`;
