import React, { useRef } from 'react';
import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import { useHasBeenVisible } from '../hooks/useVisibility';
import Layout from "../components/Layout/index.js"
import Seo from "../components/SEO/index"

//
import CardBoxGatsby from '../components/CardBoxGatsby'
//

import FullWidthSection from '../components/FullWidthSection';
import VideoPoster from '../assets/images/bg-poster.png'
import VideoPosterSmall from '../assets/images/bg-poster-small.png'
import Video from '../assets/videos/pierogi1.mp4'
import StyledHero from '../components/HeroSections/StyledHero'


function OfferPage() {
  const { placeholderImage, placeholderVideo, placeholderVideoSmall } = useStaticQuery(
    graphql`
      query {
          placeholderImage: file(relativePath: {eq: "email-1.jpg"}) {
            childImageSharp {
            gatsbyImageData(
                width: 1200, 
                quality: 60, 
                webpOptions: {quality: 75})
            }
  }

  placeholderVideo: file(relativePath: {eq: "bg-poster.png"}) {
    childImageSharp {
    gatsbyImageData(
        width: 1200, 
        quality: 60, 
        webpOptions: {quality: 75})
    }
}

placeholderVideoSmall: file(relativePath: {eq: "bg-poster-small.png"}) {
  childImageSharp {
  gatsbyImageData(
      width: 1200, 
      quality: 60, 
      webpOptions: {quality: 75})
  }
}
}
`
);

/* let videoPlaceHolder = getImage(placeholderVideo);

if(typeof window !== 'undefined'){
  if(window.innerWidth <= 786){
    videoPlaceHolder = getImage(placeholderVideo);
  }else{
    videoPlaceHolder = getImage(placeholderVideoSmall);
  }
} */

const videoPh = placeholderVideo.childImageSharp.gatsbyImageData.images.fallback.src


const image = getImage(placeholderImage);
const bgImage = convertToBgImage(image);

  const halfPage = useRef();
  const preload = useRef();
  const hasScrolled = useHasBeenVisible(halfPage);
  const isScrolling = useHasBeenVisible(preload);



  return(
    <Layout>
      <Seo title="Home" />
      <StyledHero
      bgImage={bgImage}
      Video={Video}
      HeroPoster={videoPh}
      HeroTitle="Oferta"
      HeroMotto="Szybko, Smacznie, Świeżo"
      HeroBtnText="menu"
      HeroBtnPath="/menu"
      HeroHeight="60vh"
      HeroWidthMedia="65vh"
      HeroHeightMedia="95vh"
      
      
      
      />
      <CardBoxGatsby/>
      {hasScrolled || isScrolling ? (
        <>

        </>
      ) : (
        <FullWidthSection ref={halfPage} height='2286px' minHeight='3448px' />
      )}

    </Layout>
  )
  

}

export default OfferPage
