import React from 'react'
import { RiMailSendFill } from "react-icons/ri";
import { SiGooglemaps } from "react-icons/si";
import { MdPhonelinkRing } from "react-icons/md";


export const ContactData = [
    {
        id: 1,
        icon: (<SiGooglemaps
            css={`
            color: #047bf1;
            `}
            />),
        title: "Lokalizacja",
        href: "mailto:kontakt@lwowskie-smaki.pl",
        p1: "Lwowskie Smaki - Wrocław",
        p2: "Ulica 30",
        p3: "Wrocław 55-555"
    },
    {
        id: 2,
        icon: (<MdPhonelinkRing
            css={`
            color: #f3a82e;
            `}
            />),
        title: "Telefon",
        href: "tel: 888-888-888",
        to: "+ 48 888-888-888",
        desc: "zadzwoń do nas"
    },
    {
        id: 3,
        icon: (<RiMailSendFill
            css={`
            color: #f34f2e;
            `}
            />),
        title: "Mail",
        href: "mailto:kontakt@lwowskie-smaki.pl",
        to: "kontakt@lwowskie-smaki.pl",
        desc: "wyślij maila"
    },

]