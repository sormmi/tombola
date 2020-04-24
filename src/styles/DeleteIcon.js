import styled from "styled-components"

export const DeleteIcon = styled.span`
  color: ${ props => props.theme.colors.textDanger };
  cursor: pointer;
  padding: 10px;
  
  :hover {
    opacity: 0.7;
  }
`
