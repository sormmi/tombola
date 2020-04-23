import styled from "styled-components"

export const Button = styled.button`
  background: white;
  border: 2px solid;
  border-color: ${ props => props.theme.colors.textDark };
  color: ${ props => props.theme.colors.textDark };
  padding: 0.3em 1em;
  font-size: 18px;
  font-weight: normal;
  border-radius: 3px;
  margin: 0 10px;
  cursor: pointer;
 
  &:hover {
    background: rgba(220, 240, 255, 0.3);
  }
  &:focus {
    outline:0 !important;
    box-shadow: none !important;
  }
`;

export const ClearButton = styled(Button)`
  background: white;
  border-color: ${ props => props.theme.colors.textDanger };
  color: ${ props => props.theme.colors.textDanger };
  
  &:hover {
    background: rgba(255, 220, 220, 0.2);
  }
`;
