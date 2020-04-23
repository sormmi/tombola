import React, { useState } from "react"
import { Link } from "gatsby"

import { useSiteConfigQuery } from "hooks/useSiteConfigQuery"
import { useSiteMetadataQuery } from "hooks/useSiteMetadataQuery"
import { HeaderWrapper, Branding } from "./Header.styles"
import Hamburger from "../Hamburger"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

const Header = ({ siteTitle = '' }) => {
  const siteConfig = useSiteConfigQuery();
  const siteMetadata = useSiteMetadataQuery();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderWrapper>

      <Branding>
        <Link to={"/"}>
          { siteMetadata.title }
        </Link>
      </Branding>

      <Menu items={siteConfig.menu} />

      <Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} items={siteConfig.menu}/>

    </HeaderWrapper>
  )
}

export default Header
