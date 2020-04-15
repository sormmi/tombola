import styled from "styled-components"

export const Button = styled.button`
  background: white;
  border: 2px solid steelblue;
  padding: 0.3em 1em;
  font-size: 16px;
  font-weight: bolder;
  color: steelblue;
  border-radius: 3px;
  margin: 0 10px;
  cursor: pointer;
 
  &:hover {
    background: rgba(220, 240, 255, 0.5);
  }
  &:focus {
    outline:0 !important;
    box-shadow: none !important;
  }
`;

export const ClearButton = styled(Button)`
  background: white;
  border-color: tomato;
  color: tomato;
  
  &:hover {
    background: rgba(255, 220, 220, 0.5);
  }
`;
