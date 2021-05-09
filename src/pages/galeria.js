import React, { useRef } from 'react';
/* import { TransitionLink } from "gatsby-plugin-transitions"; */
import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import { useHasBeenVisible } from '../hooks/useVisibility';
import Layout from "../components/Layout/index.js"
import Seo from "../components/SEO/index"
//
import OfferGalleryWpLightBox from '../components/OfferGalleryWpLightBox'
import GalleryContent from '../components/GalleryContent'
//
import FullWidthSection from '../components/FullWidthSection';
import VideoPoster from '../assets/images/bg-poster.png'
import VideoPosterSmall from '../assets/images/bg-poster-small.png'
import Video from '../assets/videos/pierogi1.mp4'
import StyledHero from '../components/HeroSections/StyledHero'

//transitions
/* import PageTransition from 'gatsby-plugin-page-transitions'; */


function GalleryPage() {
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
/*     <PageTransition
    defaultStyle={{
      transition: 'left 500ms cubic-bezier(0.47, 0, 0.75, 0.72)',
      left: '100%',
      position: 'absolute',
      width: '100%',
    }}
    transitionStyles={{
      entering: { left: '0%' },
      entered: { left: '0%' },
      exiting: { left: '100%' },
    }}
    transitionTime={500}
  > */
    <Layout>
      <Seo title="Home" />
      <StyledHero
      bgImage={bgImage}
      Video={Video}
      HeroPoster={window.innerWidth < 786 ? VideoPosterSmall : VideoPoster}
      HeroTitle="Galeria"
      HeroMotto="Szybko, Smacznie, Świeżo"
      HeroBtnText="menu"
      HeroBtnPath="/menu"
      HeroHeight="60vh"
      HeroWidthMedia="65vh"
      HeroHeightMedia="100vh"
      
      
      
      />
            <GalleryContent
              galleryTitle="Nasze portfolio"
              galleryDesc='Chcemy na bieżąco móc dzielić się widokiem potraw przez nas serwowanych wraz z procesami ich przygotowywania. Konsumenci mogą poznać nas najlepiej osobiście, natomiast pragniemy również przyblizyć im otoczenie naszej wspólnej pracy. Następujące zdjęcia prezentują wszystko TO co wiąże się z naszą firmą. ;)'
              galleryInvitation="Serdecznie zapraszamy do obejrzenia naszej galerii:" />
              <OfferGalleryWpLightBox/>
      {hasScrolled || isScrolling ? (
        <>

        </>
      ) : (
        <FullWidthSection ref={halfPage} height='2286px' minHeight='3448px' />
      )}

    </Layout>
/*     </PageTransition> */
  )
  

}

export default GalleryPage
