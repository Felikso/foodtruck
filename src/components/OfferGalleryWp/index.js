import React, { useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import {  GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

//transitions
import Aos from 'aos';
import 'aos/dist/aos.css';


export default function CardBoxGatsbyWp({heading}) {

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
  allWpGallery {
    nodes {
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
          title
        }
      }
    }
  }

  }

          
        `
      )

const wpPhotos = data.allWpGallery.nodes



    return (
      <>
<OfferGalleryWpContainer>
            <OfferGalleryWpHeading>{heading}</OfferGalleryWpHeading>
            <OfferGalleryWpWrapper>

                             {
    wpPhotos.map((item, i) => (
          <AOSBox    
           data-aos="fade-in"   
           data-aos-offset="200"
           data-aos-delay="0">

             
           <GatsbyImage

            key={i}
            image={item.featuredImage.node.localFile.childImageSharp.gatsbyImageData}
            alt={`lwowskie-smaki-oferta-zdjęcie-${i}`}
      />
      
      </AOSBox>
      
    ))
  } 
            </OfferGalleryWpWrapper>
        </OfferGalleryWpContainer>
</>
    )
}


const OfferGalleryWpContainer = styled.div`
    min-height: 100vh;
    padding: 5rem calc((100vw - 1300px) /2);
    color: #fff;
`

const OfferGalleryWpHeading = styled.div`
    font-size: clamp(1.2rem, 5vw, 3rem);
    text-align: center;
    margin: 5rem auto;
    color: #000;
`


const OfferGalleryWpWrapper = styled.div`
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


