import React, { useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

//transitions
import Aos from 'aos';
import 'aos/dist/aos.css';


export default function DayOffer({heading}) {

    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    }, [])
    const data = useStaticQuery(
        graphql`
          query {
            wpDayOffer {
                DayOffer {
                  date
                  dayname
                  dish1
                  dish2
                  dish3
                  dish4
                  fieldGroupName
                }
              }

            }
 

          
        `
      )

        const DayOffer = data.wpDayOffer.DayOffer

    return (
      <>
<DayOfferContainer>
            <DayOfferHeading>Oferta dnia</DayOfferHeading>

            <DayOfferBox
           >
            <DayOfferHead>
                <DayOfferDayName>
                    {DayOffer.dayname}
                </DayOfferDayName>
                <DayOfferDate>
                {DayOffer.date}
                </DayOfferDate>

            </DayOfferHead>
            <DayOfferDishesList>
               
            <DayOfferDish>{DayOffer.dish1}</DayOfferDish>
            <DayOfferDish>{DayOffer.dish2}</DayOfferDish>
            <DayOfferDish>{DayOffer.dish3}</DayOfferDish>
            <DayOfferDish>{DayOffer.dish4}</DayOfferDish>
                
            </DayOfferDishesList>
           </DayOfferBox>



        </DayOfferContainer>
</>
    )
}


const DayOfferContainer = styled.div`

            position: absolute;
            bottom: 0;
            right: 0;
            transform: translate(-10%, -10%);
            background: var(--day-offer-container-bg);
            padding: 10px;
            border: solid 5px var(--day-offer-container-border);
            z-index: 10;

            @media screen and (max-width: 768px) {
                width: 80vw;
                margin: auto;
                position: relative;
                transform: translate(0%, 0%);
            }
    

`

const DayOfferHeading = styled.div`
    font-size: clamp(1rem,2.5vw,3rem);
    text-align: right;
    color: var(--day-offer-heading);
`


const DayOfferHead = styled.div`
    text-align: right;
`

const DayOfferDayName = styled.h3`
    color: var(--day-offer-day-name);
    font-size: clamp(1rem,1vw,3rem);
`

const DayOfferDate = styled.span`
    color: var(--day-offer-date);
    font-style: italic;
    font-size: clamp(0.8rem,1vw,3rem);
`


const DayOfferDishesList = styled.ul`

`

const DayOfferDish = styled.li`
    color: var(--day-offer-dishes);
    list-style: none;
    line-height: 2em;
`

const DayOfferBox = styled.div`

`



