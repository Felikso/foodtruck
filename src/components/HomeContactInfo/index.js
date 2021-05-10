import React, { useEffect } from 'react'
import styled from 'styled-components'

import { HomeContactData } from './HomeContactData'


//transitions
import Aos from 'aos';
import 'aos/dist/aos.css';


function HomeContactInfo() {
    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    }, [])
    return (
        <HomeContactContainer>
            <HomeContactHeading
                               data-aos="fade-in"   
                               data-aos-offset="100"
                               data-aos-delay="100"
            >Dane kontaktowe</HomeContactHeading>
            <HomeContactWrapper>
                {HomeContactData.map((item, index) => (
                <HomeContactBox 
                key={index}
                data-aos="fade-in"   
                data-aos-offset="200"
                data-aos-delay={200 * item.id}
                >
                    <HomeContactIcon>{item.icon}</HomeContactIcon>
                    <HomeContactTitle>{item.title}</HomeContactTitle>



                    <AdressP>{item.p1}</AdressP>
                    <AdressP>{item.p2}</AdressP>
                    <AdressP>{item.p3}</AdressP>

                    <HomeContactHref href={item.href} target="_blank">
                    <HomeContactTo>{item.to}</HomeContactTo>
                    <HomeContactDesc>{item.desc}</HomeContactDesc>
                    
                    </HomeContactHref>
                    {item.open}
                </HomeContactBox>


                ))}
            </HomeContactWrapper>
        </HomeContactContainer>
    )
}

export default HomeContactInfo

const HomeContactContainer = styled.div`
    width: 100%;
    background: var(--HomeContact-container-stats-bg);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4rem calc((100vw - 1300px) /2);
 

`
const HomeContactHeading = styled.h2`
    text-align: start;
    font-size: clamp(1.5rem, 5vw, 2rem);
    margin-bottom: 3rem;
    padding: 0 2rem;
    color: var(--HomeContact-heading-color);
    line-height: 1.5em;

    @media screen and (max-width: 768px){
        text-align: center;
    }

`
const HomeContactWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        font-size: 1.2em;
    }

    @media screen and (max-width: 500px) {
        grid-template-columns: 1fr;
    }

`

const HomeContactBox = styled.div`
    height: 100%;
    width: 100%;
    padding: 2rem;
    text-align: center;
`

const HomeContactIcon = styled.div`
    font-size: 3rem;
    margin-bottom: 1rem;

    @media screen and (max-width: 768px){
        font-size: 4.5rem;
        margin-bottom: 0.8rem;
    }
`
const HomeContactTitle = styled.p`
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    margin-bottom: 0.5rem; 
    color: var(--HomeContact-title-color);
    
    @media screen and (max-width: 768px){
        font-size: 1.2em;
    }
`

const HomeContactTo = styled.p`
    font-size: clamp(0.6rem, 2.2vw, 1.1rem);
    line-height: 3em;
    color: var(--HomeContact-to);
    transition: 1s;

    &:hover{
        color: var(--HomeContact-to-hover);  
         
    }

    @media screen and (max-width: 768px) {
        font-size: 1.1rem; 
    }
`

const HomeContactDesc = styled.p`
    font-size: clamp(0.6rem, 2.2vw, 1.1rem);
    line-height: 3em;
    color: var(--HomeContact-p);

    @media screen and (max-width: 768px){
        font-size: 1.2em;
    }
`

const HomeContactHref = styled.a`
    font-size: clamp(0.6rem, 2.2vw, 1.1rem);
    line-height: 1em;
    text-decoration: none;
    color: var(--HomeContact-a);

    @media screen and (max-width: 768px){
        font-size: 1.2em;
    }
`

const AdressP = styled.p`
        font-size: clamp(0.6rem, 2.2vw, 1.1rem);
        line-height: 1em;
        text-decoration: none; 
        line-height: 2em;

        @media screen and (max-width: 768px){
            font-size: 1em;
        }
`