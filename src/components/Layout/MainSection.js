import React from "react"

import styled from 'styled-components'

const MainSection = ({children}) => {

  return(
    <MainSectionContainer>
      {children}
    </MainSectionContainer>
  )
}

export default MainSection;

const MainSectionContainer = styled.section`
    margin: 0 10px;
`


