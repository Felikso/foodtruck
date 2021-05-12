import React, { useEffect } from 'react'
import styled from 'styled-components'

import { HomeOrderData } from './HomeOrderData'

import HoverFillButton from '../HoverFillButton'


//transitions
import Aos from 'aos';
import 'aos/dist/aos.css';


function HomeOrderInfo() {
    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    }, [])
    return (
        <HomeOrderContainer>
            <HomeOrderHeading
                               data-aos="fade-in"   
                               data-aos-offset="100"
                               data-aos-delay="100"
            >Złóż zamówienie przez: </HomeOrderHeading>
            <HomeOrderWrapper>
                {HomeOrderData.map((item, index) => (
                <HomeOrderBox 
                key={index}
                data-aos="fade-in"   
                data-aos-offset="200"
                data-aos-delay={200 * item.id}
                >
                
                
                <HomeOrderHref href={item.href} target="_blank">
                    <HoverFillButton
                                style={{
                                width: '100%',
                                background: 'linear-gradient(333deg, rgba(255,255,255,0) 0%, rgba(57,57,57,0.9) 100%)'

                            }}>
                        <HomeOrderTitle>{item.title}</HomeOrderTitle>
                        <HomeOrderIcon>{item.icon}</HomeOrderIcon>
                    </HoverFillButton>
                </HomeOrderHref>
                </HomeOrderBox>


                ))}
            </HomeOrderWrapper>
        </HomeOrderContainer>
    )
}

export default HomeOrderInfo

const HomeOrderContainer = styled.div`
    width: 100%;
    background: var(--HomeOrder-container-stats-bg);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4rem calc((100vw - 1300px) /2);
 

`
const HomeOrderHeading = styled.h2`
    text-align: start;
    font-size: clamp(1.5rem, 5vw, 2rem);
    margin-bottom: 3rem;
    padding: 0 2rem;
    color: var(--HomeOrder-heading-color);
    line-height: 1.5em;

    @media screen and (max-width: 768px){
        text-align: center;
    }

`
const HomeOrderWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    grid-gap: 10px;
    margin: 10px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        font-size: 1.2em;
        width: 80%;
        margin: auto;
    }

`

const HomeOrderBox = styled.div`
    height: 100%;
    width: 25vw;
    text-align: center;
    -webkit-box-shadow: var(--customed-box-shadow); 
    box-shadow: var(--customed-box-shadow);
    transition: 1s;

    @media screen and (max-width: 1000px) {
        width: 30vw;

    }

    @media screen and (max-width: 768px) {
        width: 80vw;

    }


`

const HomeOrderIcon = styled.div`
    font-size: 3rem;

    @media screen and (max-width: 768px){
        font-size: 4.5rem;
        margin-bottom: 0.8rem;
    }
`
const HomeOrderTitle = styled.p`
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    margin-bottom: 0.5rem; 
    color: var(--HomeOrder-title-color);
    
    @media screen and (max-width: 768px){
        font-size: 1.2em;
    }
`

const HomeOrderTo = styled.p`
    font-size: clamp(0.6rem, 2.2vw, 1.1rem);
    line-height: 3em;
    color: var(--HomeOrder-to);
    transition: 1s;

    &:hover{
        color: var(--HomeOrder-to-hover);  
         
    }

    @media screen and (max-width: 768px) {
        font-size: 1.1rem; 
    }
`

const HomeOrderDesc = styled.p`
    font-size: clamp(0.6rem, 2.2vw, 1.1rem);
    line-height: 3em;
    color: var(--HomeOrder-p);

    @media screen and (max-width: 768px){
        font-size: 1.2em;
    }
`

const HomeOrderHref = styled.a`
    font-size: clamp(0.6rem, 2.2vw, 1.1rem);
    line-height: 1em;
    text-decoration: none;
    color: var(--HomeOrder-a);

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