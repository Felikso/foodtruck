import React, { useState }  from "react"
import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions";

import { GlobalStyle } from "../styles/GlobalStyles"
import Footer from "../Footer/index.js"
import Navbar from '../Nav/Navbar';
import ScrollBtn from '../ScrollBtn'
import InfoTopBox from '../InfoTopBox'


const Layout = ({ location, children }) => {
  return (
<>
        <GlobalStyle />
        <InfoTopBox
          number="000-000-000"
          numberHref="736758198"
          adress="Wrocław, ul. Dawida 2"
          adressHref="https://www.google.pl/"
          color="var(--info-top-box-color)"
          colorHover="var(--info-top-box-color-hover)"
          background="var(--info-top-box-bg)"
        />
        <Navbar />
          {children}
          <ScrollBtn showBelow={250} />
        <Footer />
</>
  );
};

export default Layout;


/* const Layout = ({ children }) => {


  return (
    <>
    <GlobalStyle />
      <Navbar />

        <main>{children}</main>
        <ScrollBtn showBelow={250} />
      <Footer />
    </>
  )
}

export default Layout
 */