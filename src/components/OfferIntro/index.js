/* import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage} from "gatsby-plugin-image"
import { Button } from '../Button'

//transitions
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function OfferIntro({heading}) {
    useEffect(() => {
        Aos.init({
            duration: 1500
        });
    }, [])
    const data = useStaticQuery(graphql`
    query OfferIntroQuery {
    allOfferIntroJson {
        edges {
        node {
            id
            image {
            childImageSharp {
                gatsbyImageData
            }
            }
            name
            price
            description
            button
            aos
            delay
        }
        }
    }
}`)


const allOffer = data.allOfferIntroJson.edges

console.log(data.allOfferIntroJson.edges[1].node.aos)


    return (
        <OfferContainer>
            <OfferHeading>{heading}</OfferHeading>
            <OfferWrapper>
            {
    allOffer.map((item, index) => (
        <OfferCard 
        key={index} 
        data-aos={`fade-${item.node.aos}`}   
        data-aos-offset="200"
        data-aos-delay={item.node.delay}  >
           <OfferImage
            className="image-hover-capition__img"
            image={item.node.image.childImageSharp.gatsbyImageData}
            alt="cos"
      />
        <OfferInfo>
            <TextWrap>
                <Price />
                <OfferName>{item.node.name}</OfferName>
                <Button 
                to="/menu" 
                primary="true"
                round="true"
                css={`
                    position: absolute;
                    top: 50px;
                    font-size: 14px;
                `} 
                
                >{item.node.button}</Button>
            </TextWrap>
        </OfferInfo>
        </OfferCard>

    ))
  }

            </OfferWrapper>
        </OfferContainer>
    )
}


const OfferContainer = styled.div`
    min-height: 100vh;
    padding: 5rem clac((100vw - 1300px) /2);
    color: #fff;
`

const OfferHeading = styled.div`
    font-size: clamp(1.2rem, 5vw, 3rem);
    text-align: center;
    margin: 5rem auto;
    color: #000;
`


const OfferWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    justify-items: center;
    padding: 0 2rem;
    @media screen and (max-width: 868px) {
        grid-template-columns: 1fr;
        width: 80vw;
        margin: auto;
    }
`

const OfferCard = styled.div`
    line-height: 2;
    width: 100%;
    height: 500px;
    position: relative;
    border-radius: 10px;
    transition: 0.2s ease;
`

const OfferImage = styled(GatsbyImage)`
    height: 100%;
    max-width: 100%;
    position: absolute;
    border-radius: 10px;
    filter: brightness(70%);
    transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
    &:hover {
        filter: brightness(100%);
    }
`

const OfferInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 2rem;
    @media screen and (max-width: 280px) {
    }
`

const TextWrap = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: 375px;
`

const Price = styled.div``

const OfferName = styled.div`
    font-weight: 400px;
    font-size: 1rem;
    margin-left: 0.5rem;
` */