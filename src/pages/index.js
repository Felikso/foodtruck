import React, { useRef } from 'react';

import { useHasBeenVisible } from '../hooks/useVisibility';
import Layout from "../components/Layout/index.js"
import Seo from "../components/SEO/index"

import MenuCard from '../components/MenuCard'
import MenuContent from '../components/MenuContent'

import Testimonials from "../components/Testimonials/index"
import Stats from "../components/Stats/index"
import Email from "../components/Email/index"
import FullWidthSection from '../components/FullWidthSection';
import FeaturedProductsBox from '../containers/FeaturedProductsBox';

import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';

import VideoPoster from '../assets/images/bg-poster.webp'
import VideoPosterSmall from '../assets/images/bg-poster-small.webp'
import Video from '../assets/videos/pierogi1.mp4'
import StyledHero from '../components/HeroSections/StyledHero'



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

  placeholderVideo: file(relativePath: {eq: "bg-poster.webp}) {
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

if(typeof window !== 'undefined'){
  if(window.innerWidth <= 786){
    videoPh = placeholderVideoSmall.childImageSharp.gatsbyImageData.images.fallback.src
  }else{
    videoPh = placeholderVideo.childImageSharp.gatsbyImageData.images.fallback.src
  }
}




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
            HeroPoster={videoPh}
            HeroTitle="Lwowskie Smaki"
            HeroMotto="Szybko, Smacznie, Świeżo"
            HeroBtnText="menu"
            HeroBtnPath="/menu"
            HeroHeight="95vh"
            HeroWidthMedia="65vh"
            HeroHeightMedia="95vh"

             />
      {hasScrolled || isScrolling ? (
        <>

      <MenuContent
        menuTitle="O naszym Menu"
        menuDesc='Dokładamy wszelkich starań, aby potrawy przez nas serwowane trafiały w gusta najwybredniejszych Konsumentów. Naszą dewizą jest serwowanie posiłków przede wszystkim smacznych oraz "po domowemu". Zależy nam przede wszystkim na tym, żeby spójnie móc łączyć ze sobą słowiańskie smaki, do których zakwalifikowaliśmy kuchnię polską oraz ukraińską. Dania, które mogą Państwo u nas skosztować nie są tworzone z byle jakich przepisów, które można znaleźć w Internecie. Nasi kucharze do doświadczeni smakosze, którzy od lat skrupulatnie zajmują się tworzeniem rozmaitych potraw.'
        menuInvitation="Serdecznie zapraszamy do zapoznania się z naszą ofertą:" />

        <MenuCard/>

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
