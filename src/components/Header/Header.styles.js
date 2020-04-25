import styled from "styled-components"

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  height: 100px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
  
  @media screen and (min-width: 768px) {
    height: 66px;
  }
`
export const Branding = styled.div`
  margin: auto 0;
  min-width: 100px;

  a {
    font-size: 22px;
    color: #215973;
    font-weight: bold;
    text-decoration: none;
  }
`;


