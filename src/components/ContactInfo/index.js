import React, { useEffect } from 'react'
import styled from 'styled-components'

import { ContactData } from '../../data/ContactData'


//transitions
import Aos from 'aos';
import 'aos/dist/aos.css';


function ContactInfo() {
    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    }, [])
    return (
        <ContactContainer>
            <ContactHeading>Serdecznie zapraszamy do kontaktu</ContactHeading>
            <ContactWrapper>
                {ContactData.map((item, index) => (
                <ContactBox 
                key={index}
                data-aos="fade-in"   
                data-aos-offset="200"
                data-aos-delay={200 * item.id}
                >
                    <ContactIcon>{item.icon}</ContactIcon>
                    <ContactTitle>{item.title}</ContactTitle>



                    <AdressP>{item.p1}</AdressP>
                    <AdressP>{item.p2}</AdressP>
                    <AdressP>{item.p3}</AdressP>

                    <ContactHref href="#">
                    <ContactTo>{item.to}</ContactTo>
                    <ContactDesc>{item.desc}</ContactDesc>
                    </ContactHref>

                </ContactBox>


                ))}
            </ContactWrapper>
        </ContactContainer>
    )
}

export default ContactInfo

const ContactContainer = styled.div`
    width: 100%;
    background: #fcfcfc;
    color: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4rem calc((100vw - 1300px) /2);

`
const ContactHeading = styled.h1`
    text-align: start;
    font-size: clamp(1.5rem, 5vw, 2rem);
    margin-bottom: 3rem;
    padding: 0 2rem;

`
const ContactWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 500px) {
        grid-template-columns: 1fr;
    }

`

const ContactBox = styled.div`
    height: 100%;
    width: 100%;
    padding: 2rem;
    text-align: center;
`

const ContactIcon = styled.div`
    font-size: 3rem;
    margin-bottom: 1rem;
`
const ContactTitle = styled.p`
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    margin-bottom: 0.5rem;  
`

const ContactTo = styled.p`
    font-size: clamp(0.6rem, 2.2vw, 1.1rem);
    line-height: 3em;
    color: var(--contact-to);
    transition: 1s;

    &:hover{
        color: var(--contact-to-hover);    
    }
`

const ContactDesc = styled.p`
    font-size: clamp(0.6rem, 2.2vw, 1.1rem);
    line-height: 3em;
    color: var(--contact-p2)
`

const ContactHref = styled.a`
    font-size: clamp(0.6rem, 2.2vw, 1.1rem);
    line-height: 1em;
    text-decoration: none;
    color: var(--contact-a);
`

const AdressP = styled.p`
        font-size: clamp(0.6rem, 2.2vw, 1.1rem);
        line-height: 1em;
        text-decoration: none;
        color: var(--contact-p);  
        line-height: 2em;
`