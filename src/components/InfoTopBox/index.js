import React, { useEffect } from 'react'
import styled from 'styled-components'

import { FiPhoneCall, FiMapPin } from 'react-icons/fi'


//transitions
/* import Aos from 'aos';
import 'aos/dist/aos.css'; */

export default function InfoTopBox({number, numberHref, adress, adressHref, background, color, colorHover }) {
/*     useEffect(() => {
        Aos.init({
            duration: 1000
        });
    }, []) */

        return (
            <TopBox
            css={`
            background: ${background};
            color: ${color};
            `}>
                <a href={adressHref}
                css={`
                color: ${color};
                transition: 1s;

                    &:hover{
                    color: ${colorHover}; 
                    }
                `}>
                    <ItemsBox>
                        <FiMapPin />
                        <AdressBox>
                            {adress}
                        </AdressBox>
                    </ItemsBox>
                </a>
                <a href={`tel:${numberHref}`}
                css={`
                color: ${color};
                transition: 1s;

                    &:hover{
                    color: ${colorHover}; 
                    }
                `}>
                    <ItemsBox>
                        <FiPhoneCall />
                        <NumberBox>
                            {number}
                        </NumberBox>
                    </ItemsBox>
                </a>


            </TopBox>
        )
}


const TopBox = styled.div`
    width: 100wv;
    display: flex;
    justify-content: flex-end;
    padding: 10px 0;
    height: 5vh;

    @media screen and (max-width: 768px) {
        justify-content: flex-start;
        font-size: 12px;
    }
`

const ItemsBox = styled.div`
    display: flex;
    margin: 0 10px;
`

const AdressBox = styled.h4`
    margin: 0 10px;
`

const NumberBox = styled.h4`
    margin: 0 10px;
`
