import React from 'react'
import { RiMailSendFill } from "react-icons/ri";
import { SiGooglemaps } from "react-icons/si";
import { MdPhonelinkRing } from "react-icons/md";
import { GiFoodTruck } from "react-icons/gi"
import { TiTime } from "react-icons/ti"
import OpeningHoursDropDown from '../OpeningHoursDropDown'


export const HomeContactData = [
    {
        id: 0,
        icon: (<TiTime
            css={`
            color: #ba1111;
            `}
            />),
        title: "Godziny otwarcia",
        href: "",
        to: "",
        open: (<OpeningHoursDropDown />)
    },
    {
        id: 1,
        icon: (<SiGooglemaps
            css={`
            color: #ba1111;
            `}
            />),
        title: "Gdzie jesteśmy?",
        href: "https://www.google.com/maps/place/Dawida,+50-529+Wroc%C5%82aw/data=!4m2!3m1!1s0x470fc266af93489f:0x1f56d200be7fe04c?sa=X&ved=2ahUKEwjik86zvLLwAhXO16QKHWi-DW4Q8gEwAHoECAMQAQ",
        p1: "Lwowskie Smaki - Wrocław",
        p2: "Ulica 30",
        p3: "Wrocław 55-555",
        desc: "kliknij i wyznacz trasę"
    },
    {
        id: 2,
        icon: (<MdPhonelinkRing
            css={`
            color: #ba1111;
            `}
            />),
        title: "Telefon",
        href: "tel: 888-888-888",
        to: "+ 48 888-888-888",
        desc: "kliknij i zadzwoń"
    },
    {
        id: 3,
        icon: (<GiFoodTruck
            css={`
            color: #ba1111;
            `}
            />),
        title: "Telefon na dowóz",
        href: "tel: 888-888-888",
        to: "+ 48 888-888-888",
        desc: "kliknij i zadzwoń"
    },

]