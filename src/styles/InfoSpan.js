import styled from "styled-components"

export const InfoSpan = styled.span`
  color: ${ props => props.theme.colors.textDark };
  margin-bottom: 20px;
  
  @media only screen and (min-width: 768px){
      margin-bottom: 40px;
  }
`;
