import styled from "styled-components"

export const DeleteIcon = styled.span`
  color: ${ props => props.theme.colors.textDanger };
  cursor: pointer;
  
  :hover {
    opacity: 0.7;
  }
`
