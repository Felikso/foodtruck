import React, { useEffect} from 'react'
import styled from 'styled-components'


//transitions
import Aos from 'aos';
import 'aos/dist/aos.css';

function MenuContent({ menuTitle, menuDesc, menuInvitation }) {

            useEffect(() => {
                Aos.init({
                    duration: 1000
                });
            }, [])


                return (
                    <>

                        <MenuContentBox>
                            <MenuContentTitle>
                                {menuTitle}
                            </MenuContentTitle>
                            <MenuContentDesc>
                                {menuDesc}
                            </MenuContentDesc>
                            <MenuContentInvitation>
                                {menuInvitation}
                            </MenuContentInvitation>

                        </MenuContentBox>

                    
                    
                    
                    </>
                )
            }


export default MenuContent;

const MenuContentBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 80vw;
    margin: 40px auto;

    @media screen and (max-width: 768px) {
        width: 90vw;
      }
`

const MenuContentTitle = styled.h3`
        margin-bottom: 2em;
        font-size: 2em;
`

const MenuContentDesc = styled.p`
        line-height: 1.8em;
`

const MenuContentInvitation = styled.h5`
        text-align: center;
        font-size: 1.5em;
        margin-top: 2em;
        font-style: italic;
`