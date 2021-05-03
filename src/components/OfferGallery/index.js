import React, { useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import {  GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

//transitions
import Aos from 'aos';
import 'aos/dist/aos.css';


export default function CardBoxGatsby({heading}) {

    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    }, [])
    const data = useStaticQuery(
        graphql`
          query {
            offerPhotos:  
            allFile(
    filter: {extension: {regex: "/(jpg)|(png)|(jpeg)/"}, relativeDirectory: {eq: "offerImages"}}
  ) {
    edges {
      node {
        id
        name
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
  }

          
        `
      )
            const allPhotos = data.offerPhotos



/* const arr = [2, 5, 4, 45, 32, 46, 78, 87, 98, 56, 23, 12];
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
 */
/* 
const randomFeatuted = chooseRandom(allProducts, 3)

console.log(randomFeatuted); */

    return (
      <>
<OfferGalleryContainer>
            <OfferGalleryHeading>{heading}</OfferGalleryHeading>
            <OfferGalleryWrapper>

                             {
    allPhotos.edges.map((item, i) => (
          <AOSBox    
           data-aos="fade-in"   
           data-aos-offset="200"
           data-aos-delay="0">

           <GatsbyImage

            key={i}
            image={item.node.childImageSharp.gatsbyImageData}
            alt={`lwowskie-smaki-oferta-zdjęcie-${i}`}
      /></AOSBox>
      
    ))
  } 
{/*             {
    data.map.edges((item, i) => (
     
           <GatsbyImage

            key={i}
            image={item.image.childImageSharp.gatsbyImageData}
            alt={`lwowskie-smaki-oferta-zdjęcie-${i}`}
      />
      
    ))
  } */}
            </OfferGalleryWrapper>
        </OfferGalleryContainer>
</>
    )
}


const OfferGalleryContainer = styled.div`
    min-height: 100vh;
    padding: 5rem calc((100vw - 1300px) /2);
    color: #fff;
`

const OfferGalleryHeading = styled.div`
    font-size: clamp(1.2rem, 5vw, 3rem);
    text-align: center;
    margin: 5rem auto;
    color: #000;
`


const OfferGalleryWrapper = styled.div`
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

const AOSBox = styled.div`
    display:flex;
`


