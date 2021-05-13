import React, { useEffect } from 'react'
import styled from 'styled-components'

import StyledBackgroundEmailSection from '../StyledBackgroundEmailSection'
/* import EmailBg from '../assets/images/email-1.jpg' */
import { Button } from "../../components/Button"


//transitions
import Aos from 'aos';
import 'aos/dist/aos.css';

function Email() {
    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    }, [])
    return (

        <StyledBackgroundEmailSection
        data-aos="fade-in"   
        data-aos-offset="200"
        data-aos-delay="0">

            <EmailContent          
            data-aos="fade-in"   
            data-aos-offset="200"
            data-aos-delay="0"
>
                <h3>Uzyskaj dostęp do powiadomień o zbliżających się ofertach specjalnych</h3>
                <p>Zapisz się do naszego newslettera, żeby być na bieżąco!</p>
                <form action="#">
                <FormWrap>
                    <label htmlFor="email">
                        <input type="email" placeholder="wpisz Swój e-mail" id="email" />
                    </label>
                    <Button
                    as="button"
                    type="submit"
                    primary="true"
                    round="true"
                    css={`
                        height: 48px;

                        @media screen and (max-width: 768px) {
                            width: 100%;
                            min-width: 350px;
                        }

                        @media screen and (max-width: 400px) {
                            width: 100%;
                            min-width: 250px;
                        }
                    `}
                    >Wyślij</Button>
                </FormWrap>
                </form>
            </EmailContent>
 
      </StyledBackgroundEmailSection>
       
    )
}

export default Email

const EmailContent = styled.div`
    height: 100%;
    width: 100vw;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(42,42,42,0.7038165608040091) 30%, rgba(68,68,68,0.49933476808692223) 45%, rgba(199,199,199,0.3984944319524685) 80%, rgba(255,255,255,0.5021358885351015) 95%, rgba(238,238,238,1) 100%);


    h3 {
        text-align: center;
        margin-bottom: 1rem;
        font-size: clamp(1rem, 5vw, 3rem);
        padding: 0 1rem;
    }

    p {
        text-align: center;
        margin-bottom: 2rem;
        font-size: clamp(1rem, 2.5vw, 1.5rem);
        padding: 0 1rem;

    }

    form {
        z-index: 10;
    }
`

const FormWrap = styled.div`
    input {
        padding: 1rem 1.5rem;
        outline: none;
        width: 350px;
        height: 48px;
        border-radius: 50px;
        border: none;
        margin-right: 1rem;
    }

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        padding: 0 1rem;

        input {
            margin-bottom: 1rem;
            width: 100%;
            margin-right: 0;
        }
    }

`
