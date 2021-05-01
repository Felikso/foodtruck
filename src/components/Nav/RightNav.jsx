import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby'

import { menuData } from "../../data/MenuData"

import AniLink from "gatsby-plugin-transition-link/AniLink";


const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538e6;
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

const NavLink = styled(AniLink)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  @media (max-width: 768px) {
    margin: auto;
    font-size: 2rem;
  }
`

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
        {menuData.map((item, index)=> (
          <NavLink to={item.link} key={index} swipe top="entry">
            {item.title}
          </NavLink>
        ))}
    </Ul>
  )
}

export default RightNav
