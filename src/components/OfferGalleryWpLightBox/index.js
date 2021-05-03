import React, { useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import {  GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

//transitions
import Aos from 'aos';
import 'aos/dist/aos.css';

import Gallery from '@browniebroke/gatsby-image-gallery'


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
              thumb: gatsbyImageData(width: 270, height: 270, placeholder: BLURRED)
              full: gatsbyImageData(layout: FULL_WIDTH)
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


const images = data.allWpGallery.nodes.map(({ featuredImage }) => ({
        ...featuredImage.node.localFile.childImageSharp,
        caption: featuredImage.node.title,
}))


const lightboxOptions = {
  imageLoadErrorMessage: 'Przepraszamy, wystąpił problem ze zdjęciem',
  nextLabel: 'Następne zdjęcie',
  prevLabel: 'Poprzednie zdjęcie',
  zoomInLabel: 'Przybliż',
  zoomOutLabel: 'Oddal',
  closeLabel: 'Zamknij',
}

//Add callback to Lightbox onCloseRequest
const onClose = () => {
  console.log('Galeria została zamknięta')
}


const CustomWrapper = ({ children, onClick }) => (
  <GalleryLightBoxContainer onClick={onClick} >
    {children}
  </GalleryLightBoxContainer>
)

    return (
      <>
<GalleryContainer>
<Gallery  
images={images}
lightboxOptions={lightboxOptions}
onClose={onClose}
rowMargin="10vw"
/* gutter="20px"
colWidth="25%"
mdColWidth="50%" */
customWrapper={CustomWrapper}

 />
</GalleryContainer>
{/* <OfferGalleryWpLightBoxContainer>
            <OfferGalleryWpLightBoxHeading>{heading}</OfferGalleryWpLightBoxHeading>
            <OfferGalleryWpLightBoxWrapper>

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
            </OfferGalleryWpLightBoxWrapper>
        </OfferGalleryWpLightBoxContainer> */}
</>
    )
}


const OfferGalleryWpLightBoxContainer = styled.div`
    min-height: 100vh;
    padding: 5rem calc((100vw - 1300px) /2);
    color: #fff;
`

const OfferGalleryWpLightBoxHeading = styled.div`
    font-size: clamp(1.2rem, 5vw, 3rem);
    text-align: center;
    margin: 5rem auto;
    color: #000;
`


const OfferGalleryWpLightBoxWrapper = styled.div`
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
const GalleryLightBoxContainer = styled.div`
    width: 19vw;
    cursor: pointer;
    margin: 0.5vw;
    transition: 1s;

    &:hover {
      filter: brightness(1.25);
    }

    @media screen and (max-width: 768px) {
      width: 29vw;
      margin: 0.5vw;
    }
`



 const GalleryContainer = styled.section`
    width: 80vw;
    margin: auto;

    @media screen and (max-width: 768px) {
      width: 90vw;
    }
 `