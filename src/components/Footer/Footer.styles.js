import styled from "styled-components"

export const FooterWrapper = styled.div`
  text-align: center;
  background: #fcfcfc;
  padding-bottom: 30px;
  width: 100%;

  img {
    margin-top: 50px;
    height: 30px;
  }

  a {
    color: black;
    padding: 10px;
  }

  h2 {
    font-size: 1.2em;
    margin: 6px 0;
  }
`;

export const FooterLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 50px);
  justify-content: center;
`;
