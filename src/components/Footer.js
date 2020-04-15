import React from "react";
import {Link} from "gatsby";

import styled from "styled-components";
import {
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa/";

const FooterDiv = styled.div`
  text-align: center;
  background: #fafafa;
  padding-bottom: 50px;

  img {
    margin-top: 50px;
    height: 30px;
  }

  a {
    color: black;
    padding: 10px;
  }

  h1 {
    font-size: 1em;
    margin: 6px 0;
  }
`;

const FooterLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 50px);
  justify-content: center;
`;

const Footer = () => {
  return (

          <FooterDiv>
            <Link to="/"><h2>tombola</h2></Link>
            <span>Arvontapalvelu suosituille veikkauspeleille</span>

            <FooterLinks>

                    <a
                      href="https://www.linkedin.com/in/mika-sormunen-51958171"
                      target="_blank"
                      rel="noopener noreferrer"
                      key="linkedin"
                    >
                      <FaLinkedin size={30} />
                    </a>

                    <a
                      href="https://twitter.com/sormmi"
                      target="_blank"
                      rel="noopener noreferrer"
                      key="twitter"
                    >
                      <FaTwitter size={30} />
                    </a>

            </FooterLinks>

            <small>&copy; sormmi {new Date().getFullYear()}</small>

          </FooterDiv>
  );
};

export default Footer;
