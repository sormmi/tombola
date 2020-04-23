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

export const Column = styled.div`
  display: grid;
  grid-template-columns: repeat(7, auto);
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  padding: 20px;
  
  @media only screen and (min-width: 768px){
    margin: 20px;
  }
`;
