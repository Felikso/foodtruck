import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage} from "gatsby-plugin-image"
import { Button } from '../Button'

import CardBoxGatsby from '../CardBoxGatsby'

//transitions
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function FeaturedProducts({heading}) {
    useEffect(() => {
        Aos.init({
            duration: 1500
        });
    }, [])



    return (
        <OfferContainer>
            <OfferHeading>{heading}</OfferHeading>
            <OfferWrapper>
                <CardBoxGatsby />
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

/* const OfferCard = styled.div`
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

`


 */