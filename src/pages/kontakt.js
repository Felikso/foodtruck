import React, { useRef } from 'react';
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import { useHasBeenVisible } from '../hooks/useVisibility';
import Layout from "../components/Layout/index.js"
import Seo from "../components/SEO/index"

//
import ContactInfo from '../components/ContactInfo'
//

import FullWidthSection from '../components/FullWidthSection';
import Video from '../assets/videos/pierogi1.mp4'
import StyledHero from '../components/HeroSections/StyledHero'
import OpeningHoursBox from '../components/OpeningHoursBox'

import MapPhoto from '../components/MapPhoto'


function ContactPage() {
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
      HeroPoster="https://th.bing.com/th/id/R579b4552f248f5f3b8c22ec8de678f6d?rik=CZn5ZpmoPRhhWA&riu=http%3a%2f%2f1.s.dziennik.pl%2fpliki%2f2465000%2f2465139-lew-900-665.jpg&ehk=rOGUdngXo%2b2ZE6G%2bXYh1k730AK3lbwEv%2fptsUHZ6DK4%3d&risl=&pid=ImgRaw"
      HeroTitle="Kontakt"
      HeroMotto="Szybko, Smacznie, Świeżo"
      HeroBtnText="menu"
      HeroBtnPath="/menu"
      HeroHeight="60vh"
      HeroHeightMedia="100vh"
      
      
      
      />
      <ContactInfo/>
      {hasScrolled || isScrolling ? (
        <>
        <ContactSectionTitle>Informacje dotyczące godzin otwarcia oraz lokalizacji</ContactSectionTitle>
        <ContactSection>
            <ContactOpeningHoursBox>
              <OpeningHoursBox />
            </ContactOpeningHoursBox>
              <ContactMapBox>
                <MapPhoto />
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
    font-size: 2em;
    color: var(--contact-opening-h2);
  }

  h5 {
    color: var(--contact-opening-day);
    font-size: 1.8em;
  }

  p {
    font-size: 1.5em;
    color: var(--contact-opening-hours);
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
    margin-bottom: 2em;
}
`

const ContactMapBox = styled.div`
  width: 45vw;
  padding: 20px;

  @media screen and (max-width: 1000px) {
    width: 100%;
}
`

const ContactSection = styled.div`
  display: flex;
  width: 80vw;
  margin: 20px auto;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
}
`

const ContactSectionTitle = styled.h3`
  text-align: center;
  font-size: 2em;
  margin: 2em 0;
`