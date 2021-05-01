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

  const [dishCategory, setDishCategory] = useState("wszystkie")

  useEffect(() => {
    Aos.init({
        duration: 1000
    });
}, [])


/* const data = useStaticQuery(
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
        description
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


  const wordpressDishes = data.allWpDish.nodes */


  
const menuData = useStaticQuery(
  graphql`
    query {
      allWpMenuHotDish {
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
          menu {
            desc
            name
            price
            quantity
          }
        }
      }

      allWpMenuDrink {
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
          menu {
            desc
            name
            price
            quantity
          }
          dishes {
            desc
            name
            price
            quantity
          }
        }
      }

      allWpMenuSoupe {
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
          menu {
            desc
            name
            price
            quantity
          }
        }
      }
    }
  `
)

console.log(menuData)



const menuDataObjKeys = Object.keys(menuData);
console.log(menuDataObjKeys);

const hotDish = menuData.allWpMenuSoupe.nodes

console.log(Object.keys(menuData).map((key, index) => key))

/* const hotDish = menuData.menuDataObjKeys[0]
console.log(hotDish.nodes); */

/* console.log(menuData.map((item, i) => item)) */
/* 
{Object.keys(games_list).map((game, i) => (
  <div key={i}>
     <p>{games_list[game].name}</p>
     <p>{games_list[game].id}</p>
  </div>
 ))}
 */
/* console.log(menuData.menuDataObjKeys[0].nodes.map((item) => item.menu.desc)); */
const drinks = menuData.allWpMenuDrink.nodes

/* console.log(drinks) */


  const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))].filter(function (el) {
      return el !== "";
    });

  };


/* const nodeDish = wordpressDishes.map(item => item.dishes)
 */


/* let filteredNodeDish = wordpressDishes

if(dishCategory === "wszystkie"){
  filteredNodeDish = wordpressDishes.filter(item => item.dishes.category === item.dishes.category)
}else{
  filteredNodeDish = wordpressDishes.filter(item => item.dishes.category === dishCategory)
}


  let categories = getUnique(nodeDish, "category");

  categories = ["wszystkie", ...categories]; */

/*   console.log(categories) */

    return (
        <>

        {

Object.keys(menuData).map((key, index) => {
/*   const myItem = menuData.key.nodes
  console.log(myItem) */
  return (
    <h1>XD</h1>
  )
})

        }

{/* {
  menuData.map((item, i) => {
    console.log(item)
    item.nodes.map((item, i) => (
      <p>{item.menu.name}</p>
    ))
  })
} */}

{/* <MenuButtonBox>
{
  categories.map((item, i) => (
    <MenuButton key={i} value={item} onClick={ e => setDishCategory(e.target.value)}>{item}</MenuButton>
  ))
}

</MenuButtonBox> */}


{/* {Object.keys(menuData).map((item, i) => (
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
               <DishName>{item.menu.name} <DishQ>{item.menu.quantity}</DishQ></DishName>
               <DishDesc>{item.menu.desc}</DishDesc>
               </DishContent>

               <DishPrice>
                {item.menu.price} pln {i}
              </DishPrice>


              </MenuBox>
            ))}  */}


{/* { Object.keys(menuData).map((item, i) => (
                <div key={i} className="report">
                       {menuData[item].map((media,ind) =>
                         <div key={ind}>{media.menu.name}</div>
                      )}
                </div>
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