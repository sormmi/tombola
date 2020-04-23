import React, {useContext} from "react"
import { ThemeProvider} from "styled-components"

import { GlobalStyles, lightTheme, darkTheme} from "styles/GlobalStyles"
import Header from "components/Header"
import { ModeContext } from "context/ModeProvider"
import StyledBackgroundSection from "components/BackgroundImage"
import Footer from "components/Footer"

const defaultTheme = {
  height: "calc(100vh - 66px)"
}

const gameTheme = {
  height: "200px"
}

const Layout = ({ children, page, title, titleLong, description }) => {

  const [lightMode] = useContext(ModeContext);
  const heroTitle = titleLong || title;

  return (
    <ThemeProvider theme={lightMode ? lightTheme : darkTheme}>
      <GlobalStyles />

      <Header siteTitle={title} />

      <StyledBackgroundSection
        theme={page === "home" ? defaultTheme : gameTheme}
        title={heroTitle}
        description={description} />

      <main>{children}</main>

      <Footer />

    </ThemeProvider>
  )
}

export default Layout
