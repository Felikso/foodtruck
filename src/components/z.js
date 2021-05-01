import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { SiGooglemybusiness, SiMessenger } from 'react-icons/si'

import { ImFacebook2 } from 'react-icons/im' 

import { RiInstagramFill } from 'react-icons/ri' 

//transitions
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Footer() {
    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    }, [])
    return (
        <>
        <FooterContainer
        data-aos="fade-in"   
        data-aos-offset="0"
        data-aos-delay="0"
        >

                <FooterDesc>
                    <h3>Lwowskie Smaki</h3>
                    <p>szybko, smacznie, świeżo</p>
                </FooterDesc>


            <FooterLinksWrapper>
            <FooterLinkItems>
                    <FooterLinkTitle>Skontaktuj się z nami</FooterLinkTitle>
                    <FooterLink to="/kontakt">Kontakt</FooterLink>
                    <FooterLink to="/o-nas">O nas</FooterLink>
                    <FooterLink to="/menu">Menu</FooterLink>
                </FooterLinkItems>
            <FooterLinkItems>
                    <FooterLinkTitle>Znajdź nas w sieci</FooterLinkTitle>
                    <FooterIconsBox>
                            <IconHref href="https://www.messenger.com/t/107362521495088"><MessengerIcon /></IconHref>
                            <IconHref href="#"><GoogleIcon /></IconHref>
                            <IconHref href="https://www.facebook.com/lwowskiesmaki"><FacebookIcon /></IconHref>
                            <IconHref href="#"><InstagramIcon/></IconHref>
                            
                            
                    </FooterIconsBox>
                </FooterLinkItems>
            </FooterLinksWrapper>

        </FooterContainer>
            <FooterBottomBox
                    data-aos="fade-in"   
                    data-aos-offset="0"
                    data-aos-delay="0">
            <FooterBottomBoxLink>regulamin</FooterBottomBoxLink>
            <FooterBottomBoxLink>polityka prywatoności</FooterBottomBoxLink>
            <FooterBottomBoxLink>materiały wykorzystane na stronie</FooterBottomBoxLink>
        </FooterBottomBox>
        </>
    )
}


const FooterContainer = styled.div`
    padding: 5rem calc((100vw - 1100px) /2);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    color: var(--footer-color);
    background: var(--footer-bg);

    @media screen and (max-width: 500px) {
        grid-template-columns: 1fr;
        justify-items: center;
    }

`

const FooterLinksWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

const FooterDesc = styled.div`
    padding: 0 2rem;

    h3 {
        margin-bottom: 3rem;
        color: var(--footer-h3-color);
    }

    @media screen and (max-width: 400px) {
        padding: 1rem;
    }
`

const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 2rem;

    @media screen and (max-width: 400px) {
        padding: 1rem;
    }
`

const FooterLinkTitle = styled.h2`
    font-size: 14px;
    margin-bottom: 16px;

`

const FooterLink = styled(Link)`
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    color: (--footer-link-color);
    transition: 0.3s ease-out;

    &:hover {
        color: (--footer-link-color-hover);
    }
`

const FooterIconsBox = styled.div`
    display: flex;
`

const MessengerIcon = styled(SiMessenger)`
    width: 1.5em;
    height: 1.5em;
    margin: 2px;
    cursor: pointer;
    transition: 1s;

    &:hover {
        fill: var(--messenger-icon);
    }

`

const GoogleIcon = styled(SiGooglemybusiness)`
    width: 1.5em;
    height: 1.5em;
    margin: 2px;
    cursor: pointer;
    transition: 1s;

    &:hover {
        fill: var(--google-icon);
    }
`

const FacebookIcon = styled(ImFacebook2)`
    width: 1.5em;
    height: 1.5em;
    margin: 2px;
    cursor: pointer;
    transition: 1s;

    &:hover {
        fill: var(--facebook-icon);
    }
`

const InstagramIcon = styled(RiInstagramFill)`
    width: 1.5em;
    height: 1.5em;
    margin: 2px;
    cursor: pointer;
    transition: 1s;

    &:hover {
        fill: var(--instagram-icon);
    }
`

const IconHref = styled.a`
    color: var(--footer-icons-color);

    &:visited {
        color: var(--footer-icons-color); 
    }

`

const FooterBottomBox = styled.div`
    background: var(--footer-bottom-box-bg);
    display: flex;
    justify-content: center;
    width: 100vw;
    border-top: solid var(--footer-bottom-box-border-color);

    @media screen and (max-width: 500px){
        flex-direction: column;
        align-items: center;
    }
`

const FooterBottomBoxLink = styled(Link)`
    margin: 10px;
    color: var(--footer-bottom-box-link-color);
    cursor: pointer;
    font-size: 12px;
    transition: 1s;



    &:hover {
        color: var(--footer-bottom-box-link-color-hover);
    }
`