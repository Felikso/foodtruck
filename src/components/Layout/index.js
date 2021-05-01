import React, { useState }  from "react"
import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions";

import { GlobalStyle } from "../styles/GlobalStyles"
import Footer from "../Footer/index.js"
import Navbar from '../Nav/Navbar';
import ScrollBtn from '../ScrollBtn'


const Layout = ({ location, children }) => {
  return (
<>
        <GlobalStyle />
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