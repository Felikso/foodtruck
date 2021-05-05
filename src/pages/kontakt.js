import React, { useRef, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import { useHasBeenVisible } from '../hooks/useVisibility';
import Layout from "../components/Layout/index.js"
import Seo from "../components/SEO/index"

//transitions
import Aos from 'aos';
import 'aos/dist/aos.css';

//
import ContactInfo from '../components/ContactInfo'
//

import FullWidthSection from '../components/FullWidthSection';
import VideoPoster from '../assets/images/bg-poster.png'
import Video from '../assets/videos/pierogi1.mp4'
import StyledHero from '../components/HeroSections/StyledHero'
import OpeningHoursBox from '../components/OpeningHoursBox'

import MapPhoto from '../components/MapPhoto'


function ContactPage() {
  useEffect(() => {
    Aos.init({
        duration: 1000
    });
}, [])
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
      HeroPoster={VideoPoster}
      HeroTitle="Kontakt"
      HeroMotto="Szybko, Smacznie, Świeżo"
      HeroBtnText="menu"
      HeroBtnPath="/menu"
      HeroHeight="60vh"
      HeroWidthMedia="65vh"
      HeroHeightMedia="95vh"
      
      
      
      />
      <ContactInfo/>
      {hasScrolled || isScrolling ? (
        <>
        <ContactSectionTitle
                   data-aos="fade-in"   
                   data-aos-offset="200"
                   data-aos-delay="0"
        >Informacje dotyczące godzin otwarcia oraz lokalizacji</ContactSectionTitle>
        <ContactSection>
            <ContactOpeningHoursBox
                   data-aos="fade-in"   
                   data-aos-offset="200"
                   data-aos-delay="0"
                   >
              <OpeningHoursBox />
            </ContactOpeningHoursBox>
              <ContactMapBox
                     data-aos="fade-in"   
                     data-aos-offset="200"
                     data-aos-delay="0">
                <MapTitle>Kliknij w mapę i sprawdź jak do nas trafić</MapTitle>
                <a href="https://www.google.com/maps/place/Dawida,+50-529+Wroc%C5%82aw/data=!4m2!3m1!1s0x470fc266af93489f:0x1f56d200be7fe04c?sa=X&ved=2ahUKEwjik86zvLLwAhXO16QKHWi-DW4Q8gEwAHoECAMQAQ" target="_blank"><MapPhoto /></a>
              </ContactMapBox>
        </ContactSection>
      
        </>
      ) : (
        <FullWidthSection ref={halfPage} height='2286px' minHeight='3448px' />
      )}

    </Layout>
  )
  

}

export default ContactPage

const ContactOpeningHoursBox = styled.div`
  background: var(--contact-opening-hours-box-bg);
  width: 35vw;
  padding: 20px;

  h2 {
    font-size: 2em !important;
    color: var(--contact-opening-h2) !important;
  }

  h5 {
    color: var(--contact-opening-day) !important;
    font-size: 1.2em !important;
  }

  p {
    font-size: 1.1em !important;
    color: var(--contact-opening-hours) !important;
  }

  @media screen and (max-width: 1000px) {
    width: 80%;
    margin: auto;
    margin-bottom: 2em;
}

  @media screen and (max-width: 768px) {
    h2 {
      font-size: 1.2em !important;
    }
  
    h5 {
      font-size: 1em !important;
    }
  
    p {
      font-size: 0.8em !important;
    }
  }
`

const ContactMapBox = styled.div`
  width: 45vw;
  padding: 20px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1000px) {
    width: 80%;
    margin: auto;
}
`

const ContactSection = styled.div`
  display: flex;
  width: 95vw;
  margin: 20px auto;
  justify-content: center;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
}
`

const ContactSectionTitle = styled.h3`
  text-align: center;
  font-size: 2em;
  line-height: 1.5em;
  margin: 2em auto;
  width: 80vw;

  @media screen and (max-width: 1000px) {
    font-size: 1.5em;
  }
`

const MapTitle = styled.h4`
    text-align: center;
    font-size: 1.3em;
    line-height: 1.5em;
    color: var(--contact-map-title);
    margin-bottom: 1em;

    @media screen and (max-width: 1000px) {
      font-size: 1.2em;
    }

    @media screen and (max-width: 768px) {
      font-size: 0.8em;
    }
`