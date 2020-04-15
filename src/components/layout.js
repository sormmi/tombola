/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import "./layout.css"
import StyledBackgroundSection from "./BackgroundImage"
import Footer from "./Footer"

const Main = styled.main`
  margin: 0 auto;
`;

const NavLinks = styled.div`
  margin-left: auto;
  display: flex;
`;

const NavLink = styled.div`
  margin: auto 0;

  a {
    color: black;
    text-decoration: none;
    padding: 0 16px;

    &:hover {
      padding-bottom: 30px;
    }

    &.active {
      color: green;
    }
  }
`;

const Header = styled.div`
  display: flex;
  background: white;
  height: 66px;
  padding: 0 20px;
  box-sizing: border-box;
`;

const Branding = styled.div`
  margin: auto 0;
  min-width: 100px;

  a {
    font-size: 20px;
    color: black;
    font-weight: bold;
    text-decoration: none;
  }
  
  @media only screen and (max-width: 600px){
    display: none;
  }
`;

const defaultTheme = {
  height: "calc(100vh - 66px)",
}

const Layout = ({ children, page, title, description }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header>
      <Branding>
        <Link to={`/`}>
          {data.site.siteMetadata.title}
        </Link>
      </Branding>

        <NavLinks>
          <NavLink>
            <Link to={`/jokeri`} activeClassName="active" partiallyActive={true}>
              jokeri
            </Link>
            <Link to={`/lotto`} activeClassName="active" partiallyActive={true}>
              lotto
            </Link>
            <Link to={`/viking`} activeClassName="active" partiallyActive={true}>
              vikinglotto
            </Link>
            <Link to={`/eurojackpot`} activeClassName="active" partiallyActive={true}>
              eurojackpot
            </Link>
          </NavLink>
        </NavLinks>
      </Header>
      <StyledBackgroundSection theme={page === "home" ? defaultTheme : {height: "200px"}} title={title} description={description} />
      <Main>{children}</Main>
      <Footer>
      </Footer>

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
