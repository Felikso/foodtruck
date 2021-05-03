import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { graphql, useStaticQuery } from 'gatsby'
import {  GatsbyImage } from 'gatsby-plugin-image'

import './MenuCard.scss'

import wordpressDishesCoppy from './wordpressDishesCoppy.json'

//transitions
import Aos from 'aos';
import 'aos/dist/aos.css';

function MenuContainer({dishOpen}) {


  const [listOpen, setListOpen] = useState(false)

                return(
                <>
    
                  <MenuBox 
                  data-aos="fade-in"   
                  data-aos-offset="200"
                  data-aos-delay="0"
                  key={i}
                  css={`
                  background: ${({ dishOpen }) => dishOpen ? 'red' : 'blue'};
                  `}
                  >
                  <DishImg
                      className="image-hover-capition__img"
                      key={i}
                      image={item.featuredImage.node.localFile.childImageSharp.gatsbyImageData}
                      alt="cos"
                   />
    
                   <DishContent>
                   <DishName>{item.dishes.name} <DishQ>{item.dishes.quantity}</DishQ></DishName>
                   <DishDesc>{item.dishes.desc}</DishDesc>
                   </DishContent>
    
                   <DishPrice>
                    {item.dishes.price} pln
                  </DishPrice>
    
    
                  </MenuBox>
                  </>
     
           
          

    )
}


export default MenuContainer;

const MenuBox = styled.div`
  background: var(--menu-box-bg);
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  justify-content: space-between;
  border-bottom: solid #808080 1px;
  transition: 1s;
  padding: 10px;


  &:hover {
    background: var(--menu-box-bg-hover);
  }


  @media screen and (max-width: 768px) {
    grid-template-columns: auto;
  }
`

const DishName = styled.h4`
  color: var(--menu-dish-name-color);
  font-size: clamp(1.5rem, 5vw, 2rem);
  text-transform: uppercase;
`

const DishQ = styled.span`
    color: var(--menu-dish-q-color);
    font-size: clamp(1.6rem,5vw, 1rem);
    text-transform: lowercase;
`

const DishImg = styled(GatsbyImage)`

`

const DishContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  padding: 0 10px;


`

const DishDesc = styled.p`
  color: var(--menu-dish-desc-color);
  font-size: clamp(1rem, 2vw, 2rem);
  padding-top: 20px;
`

const DishPrice = styled.span`
  color: var(--menu-dish-price-color);
  display: flex;
  justify-content: flex-end;
  margin: 20px;
  font-size: clamp(1.5rem, 5vw, 2rem);
  align-items: center;
  white-space: nowrap;
  `

const MenuButton = styled.button`

  backface-visibility: hidden;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  background: linear-gradient(0deg,#00003e 0%,#000000 54.433428555424854%,#786721 100%);
  border-radius: 08px;
  border: 0px solid #444;
  border-width: 0px 0px 0px 0px;
  padding: 10px 20px 10px 20px;
    color: #fff;
  font-size: 16px;
  font-family: Helvetica Neue;
  font-weight: 900;
  font-style: normal;
  width: 100vw;
  transition: 1s;


  &:focus {
    color: var(--color-4);
  }
 
`

const MenuButtonBox = styled.div`

  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(150px, 1fr) );
  margin: 20px 0;

`