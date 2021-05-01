import React from 'react'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

import { Button } from "../../Button"

/* import DayOffer from '../../DayOffer' */

import BgImgBridge from '../../BgImgBridge'





function StyledHero({ 
    Video, 
    HeroPoster, 
    HeroTitle, 
    HeroMotto, 
    HeroBtnPath, 
    HeroBtnText, 
    sources, 
    HeroHeight, 
    HeroHeightMedia,
    bgImage
    }) {


    return (


        <StyledHeroBox
        css={`
        min-height: ${HeroHeight};

        @media screen and (max-width: 768px) {
            min-height: ${HeroHeightMedia}; 
        }
        `}>
        <StyledHeroContainer
        css={`
        height: ${HeroHeight};
        @media screen and (max-width: 768px) {
            height: ${HeroHeightMedia}; 
        }
        `}>
            <StyledHeroBg>
            <BgImgBridge
             bgImage={bgImage}
             css={`
            height: ${HeroHeight};
            @media screen and (max-width: 768px) {
                height: ${HeroHeightMedia}; 
        } 
         }
             `}/>
                <VideoBg src={Video} poster={HeroPoster}type="video/mp4" autoPlay loop muted playsInline />
               </StyledHeroBg>
            <StyledHeroContent>
                <StyledHeroItems
            css={`
            height: ${HeroHeight};
            @media screen and (max-width: 768px) {
            height: ${HeroHeightMedia}; 
        }
            `}
                >
                    <StyledHeroH1>
                        {HeroTitle}
                    </StyledHeroH1>
                    <StyledHeroP>
                        {HeroMotto}
                    </StyledHeroP>
                    <Button primary="true" round="true" big="true" to={HeroBtnPath}>
                        {HeroBtnText}
                    </Button>
                </StyledHeroItems>
            </StyledHeroContent>
        </StyledHeroContainer>

{/*         <DayOffer /> */}
        </StyledHeroBox>


    )
}

export default StyledHero


const StyledBackgroundHero = styled(BackgroundImage)`

@media screen and (max-width: 768px) {
  display: block;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background: linear-gradient(
    180deg, 
    rgba(0,0,0,0.5) 0%, 
    rgba(0,0,0,0.5) 35%,
    rgba(0,0,0,1) 100% 
    );
    background-size: cover;
}

`

const StyledHeroBox = styled.div`
    position: relative;
`

const StyledHeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
    position: relative;
    margin-top: -80px;
    color: #fff;

    :before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 2;
        background: linear-gradient(180deg, 
            rgba(0,0,0,0.2) 0%, 
            rgba(0,0,0,0.6) 100%
            ),
            linear-gradient(180deg, 
                rgba(0,0,0,0.2) 0%, 
                transparent 100%
                );
    }

`

const StyledHeroBg = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`


const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

const StyledHeroContent = styled.div`
    z-index: 3;
    height: calc(100vh - 80px);
    max-height: 100%;
    padding: 0rem calc((100vh - 1300px) /2);    
`

const StyledHeroItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    max-height: 100%;
    padding: 0;
    color: #fff;
    line-height: 1.1;
    font-weight: bold;
`

const StyledHeroH1 = styled.h1`
    font-size: clamp(1.5rem, 6vh, 4rem);
    margin-bottom: 1.5rem;
    letter-spacing: 3px;
    padding: 0 1rem;
`

const StyledHeroP = styled.p`
    font-size: clamp(1rem, 3vw, 3rem);
    margin-bottom: 2rem;
    font-weight: 400;
`

