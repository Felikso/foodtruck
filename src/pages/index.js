import React, { useRef } from 'react';

import { useHasBeenVisible } from '../hooks/useVisibility';
import { useHasBeenPartlyVisible } from '../hooks/useVisibility';
import Layout from "../components/Layout/index.js"
import Seo from "../components/SEO/index"
import MainSection from '../components/Layout/MainSection'

import Stats from "../components/Stats/index"
import Email from "../components/Email/index"
import FullWidthSection from '../components/FullWidthSection';

import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';

import Video from '../assets/videos/pierogi1.mp4'
import StyledHero from '../components/HeroSections/StyledHero'

import HomeOrderInfo from '../components/HomeOrderInfo'
import HomeContactInfo from '../components/HomeContactInfo'

import HomeMenuCards from '../components/HomeMenuCards'



function IndexPage() {
  
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

  placeholderVideo: file(relativePath: {eq: "bg-poster.webp"}) {
    childImageSharp {
    gatsbyImageData(
        width: 1200, 
        quality: 60, 
        webpOptions: {quality: 75})
    }
}

placeholderVideoSmall: file(relativePath: {eq: "bg-poster-small.webp"}) {
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
const image = getImage(placeholderImage);

let videoPh = placeholderVideoSmall.childImageSharp.gatsbyImageData.images.fallback.src

const bgImage = convertToBgImage(image);

  const halfPage = useRef();
  const preload = useRef();
  const hasScrolled = useHasBeenPartlyVisible(halfPage, 0.3);
  const isScrolling = useHasBeenVisible(preload);

  return(
    <Layout>
      <Seo title="Home" />
      <StyledHero
            Video={Video}
            bgImage={bgImage}
            HeroPoster={videoPh}
            HeroTitle="Lwowskie Smaki"
            HeroMotto="Szybko, Smacznie, Świeżo"
            HeroBtnText="menu"
            HeroBtnPath="/menu"
            HeroHeight="95vh"
            HeroWidthMedia="65vh"
            HeroHeightMedia="95vh"

             />
      <MainSection>
             <HomeOrderInfo ref={halfPage} />
      </MainSection>
      {hasScrolled ? (
        <>
        <MainSection>
        <HomeContactInfo />
        <HomeMenuCards />
        <Stats />
        </MainSection>
        <Email />
        </>
      ) : (
        <FullWidthSection ref={halfPage} height='2286px' minHeight='3448px' />
      )}

    </Layout>
  )
  

}

export default IndexPage
