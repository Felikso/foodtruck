import React, { useEffect } from 'react'
import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby'
import { GiCook, GiFoodTruck  } from "react-icons/gi";

//transitions
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function MapPhoto() {

    const data = useStaticQuery(graphql`
    query {
        allFile(filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, name: {eq: "lwowskie-smaki-lokalizacja"}}) {
            edges {
              node {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
}

    `)


    return (


                    <>
                    {data.allFile.edges.map((image, key) => (
                        <MapImage 
                        image={image.node.childImageSharp.gatsbyImageData}
                        key={key}
    
                        />

        )           )}
    
                    </>
    )
}



const MapImage = styled(GatsbyImage)`
    border-radius: 10px;
    height: 100%;
`
