import React from 'react';
import styled from 'styled-components';

import { menuData } from "../../data/MenuData"

import { Link } from "gatsby"

import SvgLSLogoMobile from './SvgLSLogoMobile'

/* import AniLink from "gatsby-plugin-transition-link/AniLink";

import background from "../../assets/images/lwowskie-smaki.png"; */


const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: var(--mobile-nav-bg);
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 75%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`;

const NavLink = styled(Link)`
  color: var(--nav-link-color);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: 1s;

  &:hover{
    color: var(--nav-link-color-hover);
  }

  @media (max-width: 768px) {
    margin: auto;
    font-size: 2rem;
  }
`

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
        {menuData.map((item, index)=> (
          <NavLink 
          to={item.link} 
          key={index} 
/*           cover
          direction="right"
          duration={2}
          bg={`#1d1d1d url("${background}") no-repeat fixed center`} */>
            {item.title}
          </NavLink>
        ))}
  <SvgLSLogoMobile/>
    </Ul>
  )
}

export default RightNav
