import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import {  GatsbyImage} from 'gatsby-plugin-image'


import "./CardGatsby.scss"
import ImageHoverCapition from './ImageHoverCapition'

export default function CardBoxGatsby() {
    const data = useStaticQuery(
        graphql`
          query {
            allProductsJson {
              nodes {
                price
                name
                description
                image {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                    gatsbyImageData
                  }
                }
              }
            }

            allWpHomeDish {
              nodes {
                title
                featuredImage {
                  node {
                    localFile {
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                  }
                }
              }
            }
          }
          
        `
      )

            const wpPhotos = data.allWpHomeDish.nodes

    return (
      <>


{
    wpPhotos.map((item, i) => (
      <ImageHoverCapition textH2={item.name} textP={item.description} price={item.price}>
           <GatsbyImage
            className="image-hover-capition__img"
            key={i}
            image={item.featuredImage.node.localFile.childImageSharp.gatsbyImageData}
            alt="cos"
      />
      </ImageHoverCapition>
      

    ))
  }
<h1>DDDDDDD</h1>
</>
    )
}
