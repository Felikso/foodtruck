import React, { useEffect } from 'react'
import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby'
import { GiCook, GiFoodTruck  } from "react-icons/gi";

//transitions
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Testimonials() {
    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    }, [])
    const data = useStaticQuery(graphql`
    query {
  allFile(filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, relativeDirectory: {eq: "featured"}}) {
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

console.log(data.allFile.edges)
    return (
        <TestimonialsContainer>
            <TopLine>
            TestimonialsContainer
            </TopLine>
            <Description>
                Czym się kierujemy?
            </Description>
            <ContentWrapper>
                <ColumnOne>
                <Testimonial
                    data-aos="fade-in"   
                    data-aos-offset="200"
                    data-aos-delay="0">
                    <GiFoodTruck
                    css={`
                    color: #3fffa8;
                    font-size: 2rem;
                    margin-bottom: 1rem;
                    `} />
                    <h3>FoodTruck</h3>
                    <p>Skrupulatnie przykładamy uwagę do serwownia szybkich, ciepłych oraz smacznych posiłków. Czas, żeby definicja słowa "FastFood" została poszerzona na zdrową, domową kuchnię.</p>
                </Testimonial>
                <Testimonial
                    data-aos="fade-in"   
                    data-aos-offset="200"
                    data-aos-delay="500">
                    <GiCook
                    css={`
                    color: #3fffa8;
                    font-size: 2rem;
                    margin-bottom: 1rem;
                    `} />
                    <h3>Domowa Kuchnia</h3>
                    <p>Serwowane przez nas posiłki tworzone są z pasją przez rdzennych Mieszkańców proponowanej przez nas kuchni. Dajemy możliwość spróbowania niepowtarzalnego smaku bez konieczności wyjazdu w regiony jego pochodzenia.</p>
                </Testimonial>
                </ColumnOne>
                <ColumnTwo>
                {data.allFile.edges.map((image, key) => (
                    <div
                    data-aos="fade-in"   
                    data-aos-offset="200"
                    data-aos-delay={200 * image.key}>
                    <Images 
                    image={image.node.childImageSharp.gatsbyImageData}
                    key={key}

                    />
                    </div>
    )           )}

                </ColumnTwo>
            </ContentWrapper>
        </TestimonialsContainer>
    )
}


const TestimonialsContainer = styled.div`
    width: 100%;
    background: #fcfcfc;
    color: #000;
    padding: 5rem calc((100vw - 1300px) /2);
    height: 100%;

`
const TopLine = styled.div`
    color: #077bf1;
    font-size: 1rem;
    padding-left: 2rem;
    margin-bottom: 0.75rem;
`
const Description = styled.div`
    text-align: start;
    padding-left: 2rem;
    margin-bottom: 4rem;
    font-size: clamp(1.5rem, 5vw, 2rem);
    font-weight: bold;
`
const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`
const ColumnOne = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
`
const ColumnTwo = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 2rem;
    grid-gap: 10px;

    @media screen and (max-width: 500px) {
        grid-template-columns: 1fr;
    }

`
const Testimonial = styled.div`
    padding-top: 1rem;
    padding-right: 2rem;

    h3 {
        margin-bottom: 1rem;
        font-size: 1.5rem;
        font-style: italic;
    }

    p {
        color: #3b3b3b;
    }
`

const Images = styled(GatsbyImage)`
    border-radius: 10px;
    height: 100%;
`
