/* import React, { useEffect } from 'react'
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
            HWGraphQL {
                dayOffers {
                nodes {
                        DayOffer {
                        date
                        dayname
                        dish1
                        dish2
                        dish3
                        dish4
                        }
                    }
                }
            }

            }
 

          
        `
      )

        const DayOffer = data.HWGraphQL.dayOffers.nodes

    return (
      <>
<DayOfferContainer>
            <DayOfferHeading>Oferta dnia</DayOfferHeading>


                             {
    DayOffer.map((item, i) => (
        

           <DayOfferBox
           key={i}>
            <DayOfferHead>
                <DayOfferDayName>
                    {item.DayOffer.dayname}
                </DayOfferDayName>
                <DayOfferDate>
                {item.DayOffer.date}
                </DayOfferDate>

            </DayOfferHead>
            <DayOfferDishesList>
               
            <DayOfferDish>{item.DayOffer.dish1}</DayOfferDish>
            <DayOfferDish>{item.DayOffer.dish2}</DayOfferDish>
            <DayOfferDish>{item.DayOffer.dish3}</DayOfferDish>
            <DayOfferDish>{item.DayOffer.dish4}</DayOfferDish>
                
            </DayOfferDishesList>
           </DayOfferBox>

      
    ))
  } 

        </DayOfferContainer>
</>
    )
}


const DayOfferContainer = styled.div`

            position: absolute;
            bottom: 0;
            right: 0;
            transform: translate(-10%, -10%);
            background: #ffffff6e;
            padding: 10px;
            border: solid 5px white;
    

`

const DayOfferHeading = styled.div`
    font-size: clamp(1rem,2.5vw,3rem);
    text-align: right;
    color: #fff;
`


const DayOfferHead = styled.div`
    text-align: right;
`

const DayOfferDayName = styled.h3`
    color: white;
    font-size: clamp(1rem,1vw,3rem);
`

const DayOfferDate = styled.span`
    color: white;
    font-style: italic;
    font-size: clamp(0.8rem,1vw,3rem);
`


const DayOfferDishesList = styled.ul`

`

const DayOfferDish = styled.li`
    color: var(--color-1);
    list-style: none;
    line-height: 2em;
`

const DayOfferBox = styled.div`

`



 */