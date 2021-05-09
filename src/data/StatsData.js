import React from 'react'
import { GiKnifeFork, GiLion, GiWindSlap } from "react-icons/gi";
import { FaRegSmileBeam } from "react-icons/fa";
import { HiEmojiHappy } from "react-icons/hi"

export const StatsData = [
    {
        id: 1,
        icon: (<GiKnifeFork
            css={`
            color: var(--stats-1-icon-color);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            `}
            className="stats--icon"
            />),
        title: "Domowe smaki",
        question: "Jesteś daleko od Domu? ",
        desc: "Zawsze przypominamy Twoje ulubione smaki.",
        solid: "solid var(--stats-1-icon-color)",
        color: "var(--stats-1-icon-color)"
    },
    {
        id: 2,
        icon: (<GiWindSlap
            css={`
            color: var(--stats-2-icon-color);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            `}
            className="stats--icon"
            />),
        title: "Szybki serwis",
        question: "Masz dość śmieciowego jedzenia?",
        desc: "Serwujemy Ci szybki i ciepły posiłek.",
        solid: "solid var(--stats-2-icon-color)",
        color: "var(--stats-2-icon-color)"
    },
    {
        id: 3,
        icon: (<GiLion
            css={`
            color: var(--stats-3-icon-color);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            

            &:hover {
                color: var(--stats-border-color); 
            }
            `}
            className="stats--icon"
            />),
        title: "Wschodni klimacik",
        question: "Chcesz poszerzyć gamę Własnych smaków?",
        desc: "Z przyjemnością częstujemy Cię wschodnimy kulinariami.",
        solid: "solid var(--stats-3-icon-color)",
        color: "var(--stats-3-icon-color)"
    },
    {
        id: 4,
        icon: (<HiEmojiHappy
            css={`
            color: var(--stats-4-icon-color);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            `}
            className="stats--icon"
            />),
        title: "Gwranatowane zadowolenie",
        question: "Doskwiera Ci gorszy nastrój?",
        desc: "Nasze potrawy zawsze poprawią Twój humor.",
        solid: "solid var(--stats-4-icon-color)",
        color: "var(--stats-4-icon-color)"
    },
]