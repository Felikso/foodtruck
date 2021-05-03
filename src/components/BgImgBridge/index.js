import React from 'react'
import styled from 'styled-components'
/* import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { BgImage, convertToBgImage } from 'gbimage-bridge'; */

import BackgroundImage from 'gatsby-background-image'

const BgImgBridge = ({ bgImage }) => {
/*   const { placeholderImage } = useStaticQuery(
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

  const bgImage = convertToBgImage(image); */

  return (
          <StyledBackgroundImg 
          Tag='div'
          {...bgImage}
          preserveStackingContext
          >
          </StyledBackgroundImg>
  );
}

export default BgImgBridge;


const StyledBackgroundImg = styled(BackgroundImage)`


@media screen and (max-width: 768px) {
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
  width: 100%;
  padding: 5rem calc((100vw - 1300px) /2);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

`