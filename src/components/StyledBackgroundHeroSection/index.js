import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'


const BackgroundSection = ({ className, children }) => {


  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "hero-1.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  // Set ImageData.
  const imageMobile = data.desktop.childImageSharp.fluid
  const imageDesktop = data.desktop.childImageSharp.fluid

  const sources = [
    imageMobile,
    {
      ...imageDesktop,
      media: `(min-width: 491px)`,
    },
  ]

  return (

    
    <BackgroundImage
      Tag="div"
      className={className}
      fluid={sources}
      backgroundColor={`#040e18`}
    >
      {children}
    </BackgroundImage>
  )
}

const StyledBackgroundHeroSection = styled(BackgroundSection)`

display: none;

@media screen and (max-width: 768px) {
  display: block;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background: linear-gradient(
    180deg, 
    rgba(0,0,0,0.5) 0%, 
    rgba(0,0,0,0.5) 35%,
    rgba(0,0,0,1) 100% 
    );
    background-size: cover;
}

`

export default StyledBackgroundHeroSection