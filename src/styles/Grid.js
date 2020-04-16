import styled from "styled-components"

export const Grid = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  align-items: start;
  row-gap: 10px;
  margin: 20px;
  padding: 20px;
  
  @media only screen and (max-width: 600px){
    margin: 10px 0;
  }
`;
