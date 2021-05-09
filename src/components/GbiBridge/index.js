import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { BgImage, convertToBgImage } from 'gbimage-bridge';

import BackgroundImage from 'gatsby-background-image'

const GbiBridge = ({ pluginImage }) => {
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
          <BgImage 
          image={pluginImage}
          >
            <div>Hello from BgImage - plugin!</div>
          </BgImage>
  );
}

export default GbiBridge;