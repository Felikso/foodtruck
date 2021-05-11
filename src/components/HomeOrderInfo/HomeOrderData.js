import React from 'react'
import { RiMailSendFill } from "react-icons/ri";
import { SiGooglemaps } from "react-icons/si";
import { MdPhonelinkRing } from "react-icons/md";
import { GiFoodTruck } from "react-icons/gi"
import { TiTime } from "react-icons/ti"
import { RiMessengerLine } from 'react-icons/ri'
import { FiPhoneCall } from 'react-icons/fi'
import OpeningHoursDropDown from '../OpeningHoursDropDown'


export const HomeOrderData = [
    {
        id: 0,
        icon: (<RiMessengerLine
            />),
        title: "Messenger",
        href: "",
    },
    {
        id: 1,
        icon: (<RiMailSendFill
            />),
        title: "Mail",
        href: "mailto:kontakt@lwowskie-smaki.pl",
    },
    {
        id: 2,
        icon: (<FiPhoneCall
            />),
        title: "Telefon",
        href: "tel: 888-888-888",
    },

]