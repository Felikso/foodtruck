import React, { useRef } from 'react';
import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import { useHasBeenVisible } from '../hooks/useVisibility';
import Layout from "../components/Layout/index.js"
import Seo from "../components/SEO/index"

//
import MenuCard from '../components/MenuCard'
import MenuContent from '../components/MenuContent'
//
import FullWidthSection from '../components/FullWidthSection';
import Video from '../assets/videos/pierogi1.mp4'
import StyledHero from '../components/HeroSections/StyledHero'


function MenuPage() {
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
      bgImage={bgImage}
      Video={Video}
      HeroPoster="https://www.ventus-trade.pl/img/video-place-holder.png"
      HeroTitle="Menu"
      HeroMotto="Szybko, Smacznie, Świeżo"
      HeroBtnText="o nas"
      HeroBtnPath="/o-nas"
      HeroHeight="60vh"
      HeroHeightMedia="100vh"
      
      
      
      />
      <MenuContent
      menuTitle="O naszym Menu"
      menuDesc='Dokładamy wszelkich starań, aby potrawy przez nas serwowane trafiały w gusta najwybredniejszych Konsumentów. Naszą dewizą jest serwowanie posiłków przede wszystkim smacznych oraz "po domowemu". Zależy nam przede wszystkim na tym, żeby spójnie móc łączyć ze sobą słowiańskie smaki, do których zakwalifikowaliśmy kuchnię polską oraz ukraińską. Dania, które mogą Państwo u nas skosztować nie są tworzone z byle jakich przepisów, które można znaleźć w Internecie. Nasi kucharze do doświadczeni smakosze, którzy od lat skrupulatnie zajmują się tworzeniem rozmaitych potraw.'
      menuInvitation="Serdecznie zapraszamy do zapoznania się z naszą ofertą:" />

      {hasScrolled || isScrolling ? (
        <>
      <MenuCard/>
        </>
      ) : (
        <FullWidthSection ref={halfPage} height='2286px' minHeight='3448px' />
      )}

    </Layout>
  )
  

}

export default MenuPage
