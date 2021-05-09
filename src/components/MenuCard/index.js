import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { graphql, useStaticQuery } from 'gatsby'
import {  GatsbyImage } from 'gatsby-plugin-image'

import './MenuCard.scss'

import wordpressDishesCoppy from './wordpressDishesCoppy.json'

//transitions
import Aos from 'aos';
import 'aos/dist/aos.css';

function MenuCard() {

  const [dishCategory, setDishCategory] = useState("")

  const [dishOpen, setDishOpen] = useState(true)

  const [listOpen, setListOpen] = useState(0)



/*   const toggle = () => setDishOpen(!dishOpen); */

/*   console.log(dishOpen)

  console.log(listOpen)
 */
  

  useEffect(() => {
    Aos.init({
        duration: 1000
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

/*   const winOffset = () => {
    console.log(window.pageYOffset)

  }

  window.addEventListener(`scroll`, winOffset) */

  const handleClick = (e, i, item) => {
    setListOpen(item);
    const pageOffset = window.pageYOffset
    const menuBtn = document.getElementById(`menu-btn-${i}`);

    const scrollToBtn = (callback) => {
      menuBtn.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});

      callback();
/*       console.log('menuBtn.scrollTop')
      console.log(window.scrollTop)
      console.log('window.pageYOffset')
      console.log(window.pageYOffset) */

   }

   const scrollWin = () => {
    setTimeout(() => {
      window.scrollTo({ top: window.pageYOffset-80, behavior: 'smooth' })
      console.log('window.pageYOffset2')
      console.log(window.pageYOffset)

}, 500);

   }

    if(listOpen === e.target.value){
      setDishOpen(!dishOpen)
      const pageOffset = window.pageYOffset
/*       console.log(e.target.getBoundingClientRect())
      console.log("if") */
      const buttonY = e.target.getBoundingClientRect().y
      const scrollWinTo = (pageOffset+buttonY)
      console.log(buttonY)
      console.log(pageOffset)


      
      setTimeout(() => {
        scrollToBtn(scrollWin);
 /*        scrollWin(); */
        console.log(menuBtn.offsetTop)
        console.log('menuBtn.offsetTop')
        console.log(menuBtn.getBoundingClientRect())
        console.log(window.scrollY)
        console.log('window.scrollY')
/*         window.scrollBy({top: window.scrollY, left: 0, behavior: 'smooth'}) */
/*         window[`scrollTo`]({ top: (window.scrollY-160), behavior: `smooth` }); */

}, 100);
/* setTimeout(() => {
  window[`scrollTo`]({ top: (pageOffset-80), behavior: `smooth` })
}, 200); */
    }else{
      setDishOpen(true)
      
/*       console.log(e.target.getBoundingClientRect())
      console.log("else") */
      const buttonY = e.target.getBoundingClientRect().y
      const scrollWinTo = (pageOffset+buttonY)
      console.log(buttonY)
      console.log(pageOffset)
      setTimeout(() => {
        scrollToBtn(scrollWin);
/*         scrollWin(); */
        console.log(menuBtn.offsetTop)
        console.log(menuBtn.getBoundingClientRect())
        console.log(window.scrollY)
/*         window.scrollBy({top: window.scrollY, left: 0, behavior: 'smooth'}) */
/*         window[`scrollTo`]({ top: (window.scrollY-160), behavior: `smooth` }); */
}, 100);

/* setTimeout(() => {
  window[`scrollTo`]({ top: (pageOffset-80), behavior: `smooth` })
}, 200); */

    }


}

    return (
        <>

{
  categories.map((item, i) => {
    const catItem = item
    return(
    <div>
        <MenuButtonsBox>
            <MenuButton 
                key={i}
                value={item} 
                id={`menu-btn-${i}`} 
                onClick={((e) => handleClick(e, i, item))}  
                style={{ background: item===listOpen ? dishOpen ? 'var(--menu-card-color-open)' : 'var(--menu-card-color-close)' : 'var(--menu-card-color-close)'}}>
                <a
                style={{ backgroundSize: item===listOpen ? dishOpen ? '0 .2em, 100% .2em' : '100% .1em, 0 .1em': "100% .1em, 0 .1em"}}
                >
                  {item}
                </a>
            </MenuButton>
                <MenuArrow 
                value={item} onClick={((e) => handleClick(e, i, item))} 
                style={{ transform: item===listOpen ? dishOpen ? 'rotate(-45deg)' : 'rotate(135deg)': "rotate(135deg)"}}
                >
                </MenuArrow>
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
    
    </div>)})
}

        </>
    )
}


export default MenuCard;


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

/* 
  &:focus {
    color: var(--color-4);
  } */

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

const MenuButtonBox = styled.div`

  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(150px, 1fr) );
  margin: 20px 0;

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