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

/*   console.log(wordpressDishes) */



  const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))].filter(function (el) {
      return el !== "";
    });

  };





/*       filterDishes = () => {

        let currentDishes = [...wordpressDishes];
        // transform values
    
        // filtruj category
        if (category !=== "wszystkie") {
          currentDishes = currentDishes.filter(product => product.category ==== category);
        }

        this.setState({
          sortedDishes: currentDishes
        });
      }; */


      let filteredDishes = wordpressDishes.filter(item => item.dishes.category === listOpen)
/*       console.log('filteredDishes')
      console.log(filteredDishes)
      console.log(filteredDishes)
      console.log('filteredDishes') */

  const nodeDish = wordpressDishes.map(item => item.dishes)


/*   const filteredNodeDish = wordpressDishes.map(item => item.dishes).filter(item => item.category === dishCategory) */

let filteredNodeDish = wordpressDishes

if(dishCategory === "wszystkie"){
  filteredNodeDish = wordpressDishes.filter(item => item.dishes.category === item.dishes.category)
}else{
  filteredNodeDish = wordpressDishes.filter(item => item.dishes.category === dishCategory)
}
/* console.log('filteredNodeDish')
console.log(filteredNodeDish)

console.log('filteredNodeDish') */
  let categories = getUnique(nodeDish, "category");

 /*  categories = ["wszystkie", ...categories]; */ //deleted 'wszystkie'

/*   categories = categories.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  )); */

  const handleClick = (e, data, item) => {
    console.log(e.target.value);
    console.log('before');
    console.log(listOpen);
    console.log('before');
    setListOpen(item);
    console.log('after');
    console.log(listOpen);
    console.log('after');
    console.log(dishOpen);
    console.log('dishOpen');
    console.log(dishOpen);
    console.log('listOpen');
    console.log(listOpen);
    console.log('e.target.value');
    console.log(e.target.value);
    if(listOpen === e.target.value){
      setDishOpen(!dishOpen)
    }else{
      setDishOpen(true)
    }


}

    return (
        <>

{/* <select
onClick={ e => setDishCategory(e.target.value)}
>
  {categories}
</select> */}

{/* {
  categories.map((item, i) => (
    <>
    <MenuButton key={i} value={item} onClick={ e => setDishCategory(e.target.value)}>{item}</MenuButton>
    </>
  ))
} */}


{/* <MenuButtonBox> */}
{
  categories.map((item, i) => {
    const catItem = item
/*     console.log(catItem) */
    return(
    <div>
      <MenuButtonsBox>
    <MenuButton key={i} value={item}  /* onClick={ e => setDishCategory(e.target.value)} */ onClick={((e) => handleClick(e, data, item))}                   style={{ background: item===listOpen ? dishOpen ? 'var(--color-2)' : 'var(--color-1)' : 'var(--color-1)'}}/* onClick={() => setDishOpen(!dishOpen)} */>
      <a
      style={{ backgroundSize: item===listOpen ? dishOpen ? '0 .2em, 100% .2em' : '100% .1em, 0 .1em': "100% .1em, 0 .1em"}}
      >{item}</a>

    </MenuButton>
    <MenuArrow value={item} onClick={((e) => handleClick(e, data, item))} 
/*     style={{ background: item===listOpen ? dishOpen ? "green" : "orange" : "black"}} */
    style={{ transform: item===listOpen ? dishOpen ? 'rotate(-45deg)' : 'rotate(135deg)': "rotate(135deg)"}}
    ></MenuArrow></MenuButtonsBox>
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
                )}): <div></div>}
    
    </div>)})
}


{/* {
  categories.map((item, i) => {
    const catItem = item
    console.log(catItem)
    return(
    <div>
    <MenuButton key={i} value={item} onClick={ e => setDishCategory(e.target.value)}>{item}</MenuButton>
              {filteredNodeDish.filter(item => item.dishes.category === catItem).map((item, i) => (
                <>
    
                  <MenuBox
                  data-aos="fade-in"   
                  data-aos-offset="200"
                  data-aos-delay="0"
                  key={i}
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
                ))}
    
    </div>)})
}
 */}
{/* { Object.keys(menuData).map((item, i) => (
                <div key={i} className="report">
                       {menuData[item].map((media,ind) =>
                         <div key={ind}>{media.menu.name}</div>
                      )}
                </div>
        ))} */}

{/* </MenuButtonBox> */}


{/* {filteredNodeDish.map((item, i) => (
  <>

              <MenuBox
              data-aos="fade-in"   
              data-aos-offset="200"
              data-aos-delay="0"
              key={i}
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
            ))} */}
          

          
           
          
        </>
    )
}


export default MenuCard;

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
background: black;
position: relative;
display: flex;

&:hover {
  background: ${({ primary }) => (primary ? 'var(--color-2)' : 'var(--color-1)')};
  transform: translateY(-2px);
}
`