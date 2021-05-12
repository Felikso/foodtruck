import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { graphql, useStaticQuery } from 'gatsby'
import {  GatsbyImage } from 'gatsby-plugin-image'

import { IoIosArrowDropdownCircle } from 'react-icons/io'

import HoverFillButton from '../HoverFillButton'

//transitions
import Aos from 'aos';
import 'aos/dist/aos.css';

function HomeMenuCard() {

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

const chooseRandom = (arr, num = 1) => {
    const res = [];
    for(let i = 0; i < num; ){
       const random = Math.floor(Math.random() * arr.length);
       if(res.indexOf(arr[random]) !== -1){
          continue;
       };
       res.push(arr[random]);
       i++;
    };
    return res;
 };


  const wordpressHomeMenuDishes = data.allWpDish.nodes

  const randomWordpressHomeMenuDishes = chooseRandom(wordpressHomeMenuDishes, 6)




    return (
        <HomeMenuCardSection>
                    <HomeCardButtonBox>
                        <HomeMenuCardFillButton>Sprawdź całe menu</HomeMenuCardFillButton>
                    </HomeCardButtonBox>
        <HomeMenuCardMenuSection>

{
    randomWordpressHomeMenuDishes.map((item, i) => {
        console.log(item)

        return(
            <HomeMenuCardBox>
            <HomeMenuDishImg
                      className="image-hover-capition__img"
                      key={i}
                      image={item.featuredImage.node.localFile.childImageSharp.gatsbyImageData}
                      alt={`lwowskie-smaki-menu-${item.dishes.name}`}
            />
                    <HomeMenuDishText>
                        <HomeMenuDishContent>
                            <HomeMenuDishName>{item.dishes.name} 
                                <HomeMenuDishQ>{item.dishes.quantity}</HomeMenuDishQ>
                            </HomeMenuDishName>

                            <HomeMenuDishDesc>{item.dishes.desc}</HomeMenuDishDesc>
                        </HomeMenuDishContent>
            
                        <HomeMenuDishPrice>
                            {item.dishes.price} pln
                        </HomeMenuDishPrice>
                  </HomeMenuDishText>
            </HomeMenuCardBox>
            
        )
    })
}
        
        </HomeMenuCardMenuSection>
        </HomeMenuCardSection>
    )
}


export default HomeMenuCard;

const HomeCardButtonBox = styled.div`
display: grid;
margin: 10px;
width: 50%;
margin: auto;
-webkit-box-shadow: var(--customed-box-shadow); 
box-shadow: var(--customed-box-shadow);

@media screen and (max-width: 1000px){
width: 80%;
}
`


const HomeMenuCardFillButton = styled(HoverFillButton)`


`

const HomeMenuCardSection = styled.div`
    display: grid;
    justify-items: center;
`

const HomeMenuCardMenuSection = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    margin: 10px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr;
    }
`

const HomeMenuCardBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    -webkit-box-shadow: var(--customed-box-shadow); 
    box-shadow: var(--customed-box-shadow);

    @media screen and (max-width: 1000px) {
        width: 80%;
        margin: auto;
      }
`
const HomeMenuDishName = styled.h4`
  color: var(--menu-dish-name-color);
  font-size: 14px;
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`

const HomeMenuDishQ = styled.span`
    color: var(--menu-dish-q-color);
    font-size: 16px;
    text-transform: lowercase;
    margin-left: 10px;

    @media screen and (max-width: 768px) {
      font-size: 18px;
    }
`

const HomeMenuDishImg = styled(GatsbyImage)`
  height: 200px;
@media screen and (max-width: 768px) {
  height: 150px;
}
`

const HomeMenuDishContent = styled.div`
    display: grid;
    grid-auto-columns: 1fr 1fr;
    justify-content: space-around;
`
const HomeMenuDishDesc = styled.p`
  color: var(--menu-dish-desc-color);
  font-size: 12px;
  padding-top: 20px;

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`

const HomeMenuDishPrice = styled.span`
    color: var(--menu-dish-price-color);
    display: grid;
    justify-content: end;
    align-content: end;
    margin: 10px;
    font-size: 16px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
  `
const HomeMenuDishText = styled.div`
    display: grid;
    padding: 10px;
`


