import React, { useEffect } from 'react'
import styled from 'styled-components'

//transitions
import Aos from 'aos';
import 'aos/dist/aos.css';

import { openingData } from './openingData'


export default function OpeningHoursBox({heading}) {

    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    }, [])

    const weekDaysPl = [
        "niedziela",
        "poniedziałek",
        "wtorek",
        "środa",
        "czwartek",
        "piątek",
        "sobota"
    ]

    const date = new Date();
    const todayHour = date.getHours()
    const todayDay = date.getDay()

    const plDay = weekDaysPl[todayDay]

    console.log(todayHour)

    return (
        <>
        <OpeningHoursContainer>
            <h2>Godziny otwarcia</h2>
            {openingData.map((item, i)=> (
                <OpeningHoursLine
                css={item.day == plDay && item.open < todayHour  && item.close > todayHour ? `
                background: rgba(90,90,90,0.5);
                `: ""}
                >
                        <OpeningDay 
                        css={item.day == plDay ? `
                        &:before {
                            content: "Dziś";
                            position: absolute;
                            transform: translate(-120%, 0);
                          }
                        `: ""}>
                            {item.day}
                            </OpeningDay>
                        <OpeningHoursTime                         
                        css={item.day == plDay ? `
                        &:before {
                            content: "${(item.day == plDay && item.open < todayHour  && item.close > todayHour ? "otwarte" : "zamknięte")}";
                            position: absolute;
                            transform: translate(-120%, 0);
                          }
                        `: ""}
                        /* css={todayHour>= item.open && todayHour < item.close ? `
                        background: blue !important;
                        &:before {
                            content: "otwarte";
                            position: absolute;
                            transform: translate(-120%, 0);
                          }
                        `: `
                        background: blue !important;
                        &:before {
                            content: "zamknięte";
                            position: absolute;
                            transform: translate(-120%, 0);
                          }
                        `} */
                        >
                            {item.hours}
                        </OpeningHoursTime>
                </OpeningHoursLine>

            ))

            }

        </OpeningHoursContainer>
        </>
    )
}


const OpeningHoursContainer = styled.div`
    background: var(--opening-data-bg);
    display: flex;
    flex-direction: column;
    flex-direction: column;
    display: flex;
    justify-content: space-evenly;
    padding: 10px;
    width: 100%;
    height: 100%;

    h2 {
        color: var(--opening-data-title);
        font-size: 14px;
        margin-bottom: 16px;  
        
        @media screen and (max-width: 768px) {
            font-size: 20px;
        }
    }
`

const OpeningHoursLine = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: solid 2px var(--opening-data-border-bottom);
`

const OpeningDay = styled.h5`
    color: var(--opening-data-day);
    font-size: 12px;

    @media screen and (max-width: 900px) {
        font-size: 16px;
    }
`

const OpeningHoursTime = styled.p`
    color: var(--opening-data-hours);
    font-size: 12px;

    @media screen and (max-width: 900px) {
        font-size: 16px;
    }
`

