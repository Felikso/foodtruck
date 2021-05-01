import React, { useEffect } from 'react'
import styled from 'styled-components'

import { StatsData } from '../data/StatsData'

//transitions
import Aos from 'aos';
import 'aos/dist/aos.css';



function Stats() {
    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    }, [])

    console.log(StatsData)
    return (
        <StatsContainer>
            <Heading>Czemu tak chętnie jesz właśnie u nas?</Heading>
            <Wrapper>
                {StatsData.map((item, index) => (
                    
                <StatsBox 
                key={index}
                data-aos="fade-in"   
                data-aos-offset="200"
                data-aos-delay={100 * item.id}
                css={`
                    transition: 1s;

                    &:hover{
                        border: ${item.solid};
                    }
                    &:hover ${Icon}{
                        background: ${item.color};
                    }

                    &:hover .stats--icon{
                        color: white;
                    }

                 `}
                >
                    <Icon
                    css={`
                    color: ${item.color};
                    transition: 1s;

                 `}>{item.icon}</Icon>
                    <Title>{item.title}</Title>
                    <Question>{item.question}</Question>
                    <Description>{item.desc}</Description>
                </StatsBox>


                ))}
            </Wrapper>
        </StatsContainer>
    )
}

export default Stats

const StatsContainer = styled.div`
    width: 90vw;
    margin: auto;
    background: #fcfcfc;
    color: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4rem calc((100vw - 1300px) /2);

`
const Heading = styled.h1`
    text-align: start;
    font-size: clamp(1.5rem, 5vw, 2rem);
    margin-bottom: 3rem;
    padding: 0 2rem;

`
const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 3rem;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }

`



const Icon = styled.div`
    font-size: 3rem;
    margin-bottom: 1rem;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
    transition: 1s;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: transparent;
`

const StatsBox = styled.div`
    height: 100%;
    width: 40vw;
    padding: 2rem;
    transition: 1s !important;
    background: var(--stats-box-bg);
    border: solid var(--stats-border-color);
    margin: auto 2rem;

    &:hover {
        background: var(--stats-box-bg-hover);
    }
                        &:hover ${Icon}{
                        transform: translate(-50%, -50%) rotateY(1.5turn);
                        color: red !important;
                    }

    @media screen and (max-width: 768px) {
        width: 80vw;
    }

`

const Title = styled.p`
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    margin-bottom: 0.5rem;  
`

const Question = styled.p`
    font-size: clamp(0.5rem, 2vw, 0.8rem);
    font-style: italic;
    color: red;
    margin-bottom: 2em;
`

const Description = styled.p`
    font-size: clamp(0.6rem, 2.2vw, 1.1rem);
    line-height: 1.5rem;
`