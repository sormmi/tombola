import React, {useContext} from "react"
import { ThemeProvider} from "styled-components"

import { GlobalStyles, lightTheme, darkTheme} from "styles/GlobalStyles"
import Header from "components/Header"
import { ModeContext } from "context/ModeProvider"
import StyledBackgroundSection from "components/BackgroundImage"
import Footer from "components/Footer"
import { useSiteMetadataQuery } from "hooks/useSiteMetadataQuery"

const defaultTheme = {
  height: "calc(100vh - 66px)",
}

const Layout = ({ children, page, title, titleLong, description }) => {

  const [lightMode] = useContext(ModeContext);
  const siteMetadata = useSiteMetadataQuery();
  const heroTitle = titleLong || title;

  return (
    <ThemeProvider theme={lightMode ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header siteTitle={title} />
      <StyledBackgroundSection theme={page === "home" ? defaultTheme : {height: "200px"}} title={heroTitle} description={description} />
      <main>{children}</main>
      <Footer title={siteMetadata.title} />
    </ThemeProvider>
  )
}

export default Layout