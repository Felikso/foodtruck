import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import { IoIosArrowDropupCircle } from 'react-icons/io'

const ScrollBtn = ({
    showBelow
}) => {


    const [show, setShow] = useState(showBelow ? false : true)

    const handleScroll = () => {
        if (window.pageYOffset > showBelow) {
            if (!show) setShow(true)
        } else {
            if (show) setShow(false)
        }
    }

    const handleClick = () => {
        window[`scrollTo`]({ top: 0, behavior: `smooth` })
    }

    useEffect(() => {
        if (showBelow) {
            window.addEventListener(`scroll`, handleScroll)
            return () => window.removeEventListener(`scroll`, handleScroll)
        }
    })

    return (
        <div>
            {show &&
                <ScrollButton onClick={handleClick}  aria-label="to top">
                    <ScrollIcon />
                </ScrollButton>
            }
        </div>
    )
}
export default ScrollBtn

const ShowScroll = keyframes`
from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
`

const ScrollButton = styled.button`
            z-index: 2;
            position: fixed;
            bottom: 2vh;
            right: 2vh;
            background-color: transparent;
            border: none;
            font-size: 50px;
            color: var(--scroll-top-btn-color);
            cursor: pointer;
            transition: 0.8s;
            animation: ${ShowScroll} .5s ease-in-out normal forwards;
            animation-iteration-count: 1;
            transition: all .2s ease-in-out;

        &:hover {
            transition: 0.5s;
            color: var(--scroll-top-btn-color-hover);
        }
`

const ScrollIcon = styled(IoIosArrowDropupCircle)`
            -webkit-filter: var(--scroll-icon-dropshadow);
            filter: var(--scroll-icon-dropshadow);
`