import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Burger from './Burger';

import { Button } from '../Button/index'
import SvgLSLogo from './SvgLSLogo'

import AniLink from "gatsby-plugin-transition-link/AniLink";

import background from "../../assets/images/lwowskie-smaki.png";


const Nav = styled.nav`
background: transparent;
height: 80px;
display: flex;
justify-content: space-between;
padding: 0.5rem calc((100vw - 1300px) /2);
z-index: 100;
position: relative;
transition: all .5s ease-in-out;
align-items: center;
width: 100%;

  .logo {
    padding: 15px 0;
  }
`

const NavLink = styled(AniLink)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const Navbar = ({showNavBelow}) => {
  const [scrollNav, setScrollNav] = useState(showNavBelow ? false : true)

  const changeBackground = () => {
    if(window.pageYOffset > showNavBelow){
      setScrollNav(true)

    }else{
      setScrollNav(false)
    }

  }


useEffect(() => {
  if (showNavBelow) {
      window.addEventListener(`scroll`, changeBackground)
      return () => window.removeEventListener(`scroll`, changeBackground)
  }
})


  return (
    <Nav
    className={scrollNav ? "slideDownNav": ""}
    >
{/*       <NavLink 
      to="/"
      cover
      direction="right"
      duration={2}
      bg={`#1d1d1d url("${background}") no-repeat fixed center`}
      > */}
        <SvgLSLogo />
      {/* </NavLink> */}
      <Burger />
      <NavBtn>
{/*         <AniLink
          to="/menu"
          cover
          direction="right"
          duration={2}
          bg={`#1d1d1d url("${background}") no-repeat fixed center`}
        > */}
          <Button primary="true" round="true" >
          Menu
        </Button>
        {/* </AniLink> */}
      </NavBtn>
    </Nav>
  )
}

export default Navbar
