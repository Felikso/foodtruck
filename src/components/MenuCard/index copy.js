/* import React, { useEffect } from 'react'

import { graphql, useStaticQuery } from 'gatsby'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'

import './MenuCard.scss'

//transitions
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function MenuCard() {

  useEffect(() => {
    Aos.init({
        duration: 1000
    });
}, [])

  const data = useStaticQuery(
    graphql`
      query {
        allMenuJson {
          nodes {
            description
            name
            price
            quantity
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }


        HWGraphQL {
    dishes {
      nodes {
        title
        featuredImage {
          node {
            sourceUrlSharp {
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
      }
      
    `
  )
  const allProducts = data.allMenuJson.nodes

  const wordpressMenu = data.HWGraphQL.dishes.nodes

  console.log('wordpressMenu')
  console.log(wordpressMenu)
    return (
        <>
      <div class="menu-offer-container">
    <header class="menu-offer-subheader menu-offer-subheader--center">
      <h2 class="menu-offer-subheader__heading">
        <span class="menu-offer-subheader__sup-title">
          Ochota na coś smacznego?
        </span>

      </h2>
    </header>

    
      <div class="menu-offer__list-wrapper">
        <ul class="menu-offer__list ">


        {
                    allProducts.map((item, i) => (
                        <>
            <li 
            class="menu-offer__list-item"
            data-aos="fade-in"   
            data-aos-offset="200"
            data-aos-delay="0"
            >
              <header class="menu-offer__header">
                  <h3 class="menu-offer__heading">
                  {item.name} {item.quantity}
                  </h3>

                  <p class="menu-offer__heading menu-offer__heading--price">
                    &nbsp;{item.price} pln
                  </p>
              </header>

                <p class="menu-offer__description">
                {item.description}<br/>
                </p>
            </li>
                    </>
                ))
            }


            {wordpressMenu.map((item, i) => (
              <>
              <h2>{item.dishes.name}</h2>

              </>
            ))}
          

          
           
          
        </ul>
      </div>
    
  </div>
        </>
    )
}
 */