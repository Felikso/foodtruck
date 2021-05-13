import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { graphql, useStaticQuery } from 'gatsby'
import {  GatsbyImage } from 'gatsby-plugin-image'

import './MenuCard.scss'

import { IoIosArrowDropdownCircle } from 'react-icons/io'

import HoverFillButton from '../HoverFillButton'

//transitions
import Aos from 'aos';
import 'aos/dist/aos.css';

function MenuCard() {

  const [dishCategory, setDishCategory] = useState("")

  const [dishOpen, setDishOpen] = useState(false)

  const [listOpen, setListOpen] = useState(0)

  

  useEffect(() => {
    Aos.init({
        duration: 800
    });
}, [])

const data = useStaticQuery(
    graphql`
        query {
              allWpDish {
            nodes {
              featuredImage {
                node {
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
              dishes {
                category
                desc
                fieldGroupName
                name
                price
                quantity
              }
            }
          }
        }
    `
)


  const wordpressDishes = data.allWpDish.nodes


  const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))].filter(function (el) {
      return el !== "";
    });

  };




      let filteredDishes = wordpressDishes.filter(item => item.dishes.category === listOpen)

  const nodeDish = wordpressDishes.map(item => item.dishes)


let filteredNodeDish = wordpressDishes

if(dishCategory === "wszystkie"){
  filteredNodeDish = wordpressDishes.filter(item => item.dishes.category === item.dishes.category)
}else{
  filteredNodeDish = wordpressDishes.filter(item => item.dishes.category === dishCategory)
}

  let categories = getUnique(nodeDish, "category").reverse();

  const handleClick = (e,item) => {
    setListOpen(item);
    const target = e.currentTarget

    const scrollToBtn = (callback) => {
      target.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
      callback();
   }

   const scrollWin = () => {
    setTimeout(() => {
      window.scrollTo({ top: window.pageYOffset-80, behavior: 'smooth' })

}, 500);

   }
    if(listOpen == e.currentTarget.textContent.trim() || e.target.value ){
      setDishOpen(!dishOpen)

      setTimeout(() => {
        scrollToBtn(scrollWin);
      }, 100);

    }else{
          setDishOpen(true)
          setTimeout(() => {
          scrollToBtn(scrollWin);
          }, 100);
    }


}
    return (
        <>

{
  categories.map((item, i) => {
    const catItem = item

    function preventClick(e) {  
      e.stopPropagation();
      e.currentTarget.parentNode.click()
      

     }
    return(
    <MenuContentBox>
        <MenuButtonsBox
        value={item}
        onClick={((e) => handleClick(e, item))}>
            <HoverFillButton 
                key={i}
                value={item} 
                onClick={preventClick}
                style={{ 
                  background: item===listOpen ? dishOpen ? 'var(--menu-card-color-open)' : 'var(--menu-card-color-close)' : 'var(--menu-card-color-close)',
                  width: '95vw',
                  margin: 'auto'}}> {item}
                <MenuButtonArrow
                    value={item}
                    onClick={preventClick}  
            ><MenuArrowIcon
            onClick={preventClick}
            style={{
              color: item===listOpen ? dishOpen ? 'var(--menu-card-arrow-hover)' : 'var(--menu-card-arrow)' : 'var(--menu-card-arrow)',
              transform: item===listOpen ? dishOpen ? 'rotate(180deg)' : 'rotate(0deg)': "rotate(0deg)"
            }}
            /></MenuButtonArrow>
            </HoverFillButton>
      </MenuButtonsBox>
              {dishOpen ? filteredDishes.filter(item => item.dishes.category === catItem).map((item, i) => {

                return(
                <>
    
                  <MenuBox 
                  data-aos="fade-in"   
                  data-aos-offset="200"
                  data-aos-delay="0"
                  key={i}
                  dishOpen={dishOpen}
                  >
                  <DishImg
                      className="image-hover-capition__img"
                      key={i}
                      image={item.featuredImage.node.localFile.childImageSharp.gatsbyImageData}
                      alt={`lwowskie-smaki-menu-${item.dishes.name}`}
                   />
                    <DishText>
                   <DishContent>
                   <DishName>{item.dishes.name} <DishQ>{item.dishes.quantity}</DishQ></DishName>
                   <DishDesc>{item.dishes.desc}</DishDesc>
                   </DishContent>
    
                   <DishPrice>
                    {item.dishes.price} pln
                  </DishPrice>
                  </DishText>
    
                  </MenuBox>
                  </>
                )}): <div></div>}
    
    </MenuContentBox>)})
}

        </>
    )
}


export default MenuCard;

const MenuContentBox = styled.div`
  display: grid;
  grid-gap: 15px;
`


const MenuBox = styled.div`
  background: var(--menu-box-bg);
  display: grid;
  grid-template-columns: 1fr 2fr;
  justify-content: space-between;
  border-bottom: solid #808080 1px;
  transition: 1s;
  padding: 10px;
      transition: all .2s ease-in-out;


  &:hover {
    background: var(--menu-box-bg-hover);
  }


  @media screen and (max-width: 768px) {
    grid-template-columns: 2fr 2fr;
  }
`

const DishName = styled.h4`
  color: var(--menu-dish-name-color);
  font-size: clamp(1.5rem, 5vw, 2rem);
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`

const DishQ = styled.span`
    color: var(--menu-dish-q-color);
    font-size: clamp(1.6rem,5vw, 1rem);
    text-transform: lowercase;

    @media screen and (max-width: 768px) {
      font-size: 12px;
    }
`

const DishImg = styled(GatsbyImage)`
  height: 250px;
@media screen and (max-width: 768px) {
  height: 150px;
}

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

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`

const DishPrice = styled.span`
  color: var(--menu-dish-price-color);
  display: flex;
  justify-content: flex-end;
  font-size: clamp(1.5rem, 5vw, 2rem);
  align-items: center;
  white-space: nowrap;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
  `

const MenuButton = styled.button`

  backface-visibility: hidden;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
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

  a {
    font-size: 1.5em;
    background: 
    linear-gradient(to right, rgba(100, 200, 200, 0), rgba(100, 200, 200, 0)),
    linear-gradient(90deg, rgba(36,0,0,1) 0%, rgba(40,0,0,1) 0%, rgba(255,0,0,1) 100%);
    background-size: 100% 0.1em, 0 0.1em;
    background-position: 100% 100%, 0 100%;
    background-repeat: no-repeat;
    transition: background-size 400ms;
  }
  
  a:hover,
  a:focus {
    background-size: 0 .2em, 100% .2em;
  }
 
`

const MenuArrowIcon = styled(IoIosArrowDropdownCircle)`
  cursor: pointer;
  color: var(--menu-card-arrow);
  transition:.2s ease;
`


const MenuArrow = styled.button`
width: 3vh;
height: 3vh;
background: transparent;
outline: none;
border: none;
box-sizing: border-box;
position: absolute;
cursor: pointer;
top: 30%;
left: 5%;

transition:.2s ease;

&::before {
  content: '';
  width: 100%;
  height: 100%;
  border-width: .8vmin .8vmin 0 0;
  border-style: solid;
  border-color: #fafafa;
  transition: .2s ease;
  display: block;
  transform-origin: 100% 0;
}


&:after {
  content: '';
  float: left;
  position: relative;
  top: -100%;
  width: 100%;
  height: 100%;
  border-width: 0 .8vmin 0 0;
  border-style: solid;
  border-color: #fafafa;
  transform-origin: 100% 0;
  transition:.2s ease;
}

`

const MenuButtonsBox = styled.div`
width: 100vw;
height: 10vh;
position: relative;
display: flex;

&:hover {
/*   background: ${({ primary }) => (primary ? 'var(--color-2)' : 'var(--color-1)')}; */
  transform: translateY(-2px);
}
`

const DishText = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: inherit;
`

const MenuButtonArrow = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;

  background: transparent;
  border: none;
  outline: none;
  font-size: 3em;
  transition: 1s;
  transform: translate(-50%,15%);
  font-size: 2.5em;

`


