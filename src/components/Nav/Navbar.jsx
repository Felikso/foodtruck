import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import { Link } from 'gatsby'
import { Button } from '../Button'
import SvgLSLogo from './SvgLSLogo'


const Nav = styled.nav`
background: transparent;
height: 80px;
display: flex;
justify-content: space-between;
padding: 0.5rem calc((100vw - 1300px) /2);
z-index: 100;
position: relative;
transition: all .5s ease-in-out;

  .logo {
    padding: 15px 0;
  }
`

const NavLink = styled(Link)`
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

const Navbar = () => {
  const [scrollNav, setScrollNav] = useState(true)

  const changeBackground = () => {
    if(window.scrollY >= 80){
      setScrollNav(true)
      console.log(scrollNav)
    }else{
      setScrollNav(false)
      console.log(scrollNav)
    }

  }

  useEffect(() => {
    if (scrollNav) {
        window.addEventListener('scroll', changeBackground)
        return () => window.addEventListener('scroll', changeBackground)
    }
}, [])

  


  return (
    <Nav
    className={scrollNav ? "slideDownNav": ""}
    >
      <NavLink to="/"><SvgLSLogo /></NavLink>
      <Burger />
      <NavBtn>
        <Button primary="true" round="true" to="/menu">
          Menu
        </Button>
      </NavBtn>
    </Nav>
  )
}

export default Navbar
