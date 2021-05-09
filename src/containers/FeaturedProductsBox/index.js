import React, { useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import {  GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

//transitions
import Aos from 'aos';
import 'aos/dist/aos.css';

import ImageHoverCapition from './ImageHoverCapition'


export default function CardBoxGatsby({heading}) {
    const data = useStaticQuery(
        graphql`
          query {

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
                  homeDish {
                    description
                    id
                    name
                    price
                  }
                }
              }
          }
          
        `
      )

            const wpPhotos = data.allWpHomeDish.nodes



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

useEffect(() => {
  Aos.init({
      duration: 1000
  });
}, [])

const randomFeatured = chooseRandom(wpPhotos, 3)

    return (
      <>
<FeaturedContainer
>
            <FeaturedHeading>{heading}</FeaturedHeading>
            <FeaturedWrapper
                  data-aos="fade-in"   
                  data-aos-offset="200"
                  data-aos-delay="100">
            {
    randomFeatured.map((item, i) => (
      <ImageHoverCapition 
      textH2={item.homeDish.name} 
      textP={item.homeDish.description} 
      price={item.homeDish.price}

      >
           <GatsbyImage
            className="image-featured-hover-capition__img"
            key={i}
            image={item.featuredImage.node.localFile.childImageSharp.gatsbyImageData}
            alt={item.homeDish.name}
            loading="lazy"
            data-aos="fade-in"   
            data-aos-offset="200"
            data-aos-delay={i*100}
      />
      </ImageHoverCapition>
      
    ))
  }
            </FeaturedWrapper>
        </FeaturedContainer>
</>
    )
}


const FeaturedContainer = styled.div`
    min-height: 100vh;
    padding: 5rem calc((100vw - 1300px) /2);
    background: var(--featured-bg);
`

const FeaturedHeading = styled.div`
    font-size: clamp(1.2rem, 5vw, 3rem);
    text-align: center;
    margin: 5rem auto;
    color: var(--featured-heading-color);
`


const FeaturedWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    justify-items: center;
    padding: 0 2rem;

    @media screen and (max-width: 868px) {
        grid-template-columns: 1fr;
        width: 80vw;
        margin: auto;
    }
`
