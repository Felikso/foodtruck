import React, { useRef } from 'react';
import { TransitionLink } from "gatsby-plugin-transitions";
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
      HeroPoster="https://th.bing.com/th/id/R579b4552f248f5f3b8c22ec8de678f6d?rik=CZn5ZpmoPRhhWA&riu=http%3a%2f%2f1.s.dziennik.pl%2fpliki%2f2465000%2f2465139-lew-900-665.jpg&ehk=rOGUdngXo%2b2ZE6G%2bXYh1k730AK3lbwEv%2fptsUHZ6DK4%3d&risl=&pid=ImgRaw"
      HeroTitle="Galeria"
      HeroMotto="Szybko, Smacznie, ??wie??o"
      HeroBtnText="menu"
      HeroBtnPath="/menu"
      HeroHeight="60vh"
      HeroHeightMedia="100vh"
      
      
      
      />
            <GalleryContent
              galleryTitle="Nasze portfolio"
              galleryDesc='Chcemy na bie????co m??c dzieli?? si?? widokiem potraw przez nas serwowanych wraz z procesami ich przygotowywania. Konsumenci mog?? pozna?? nas najlepiej osobi??cie, natomiast pragniemy r??wnie?? przyblizy?? im otoczenie naszej wsp??lnej pracy. Nast??puj??ce zdj??cia prezentuj?? wszystko TO co wi????e si?? z nasz?? firm??. ;)'
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
