import React, { useRef } from 'react';

import { useHasBeenVisible } from '../hooks/useVisibility';
import Layout from "../components/Layout/index.js"
import Seo from "../components/SEO/index"

import Testimonials from "../components/Testimonials/index"
import Stats from "../components/Stats/index"
import Email from "../components/Email/index"
import FullWidthSection from '../components/FullWidthSection';
import FeaturedProductsBox from '../containers/FeaturedProductsBox';

import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';

import Video from '../assets/videos/pierogi1.mp4'
import StyledHero from '../components/HeroSections/StyledHero'



function IndexPage() {
  const { placeholderImage } = useStaticQuery(
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
}
`
);
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
            Video={Video}
            bgImage={bgImage}
            HeroPoster="https://www.ventus-trade.pl/img/video-place-holder.png"
            HeroTitle="O nas"
            HeroMotto="Szybko, Smacznie, Świeżo"
            HeroBtnText="menu"
            HeroBtnPath="/menu"
            HeroHeight="95vh"
            HeroHeightMedia="65vh"

             />
      {hasScrolled || isScrolling ? (
        <>
      <FeaturedProductsBox heading="Serdecznie polecamy" />
      <Testimonials />
      <Stats />
      <Email />
        </>
      ) : (
        <FullWidthSection ref={halfPage} height='2286px' minHeight='3448px' />
      )}

    </Layout>
  )
  

}

export default IndexPage
