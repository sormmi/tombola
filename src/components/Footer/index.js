import React from "react";
import {Link} from "gatsby";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa/";
import { FooterWrapper, FooterLinks } from "./Footer.styles"
import { useSiteMetadataQuery } from "hooks/useSiteMetadataQuery"

const Footer = () => {

  const site = useSiteMetadataQuery();

  return (

    <FooterWrapper>
      <Link to="/"><h2>{site.title}</h2></Link>
      <span>{site.description}</span>

      <FooterLinks>
        <a
          href="https://github.com/sormmi"
          target="_blank"
          rel="noopener noreferrer"
          key="github"
        >
          <FaGithub size={30} />
        </a>

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

    </FooterWrapper>
  );
};

export default Footer;
