import React from "react";
import { SlideDown } from "react-slidedown";

import { openingData } from './openingData'

import styled from 'styled-components'

export default class Dropdown extends React.Component {
  render() {
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
  const todayMinutes = date.getMinutes()

  const todayDay = date.getDay()

  const plDay = weekDaysPl[todayDay]

  const todayObj = openingData.filter(item => item.day == plDay)



  const toCloseHours = (todayObj[0].close - todayHour) > 0 ?  todayObj[0].close - todayHour : todayHour - todayObj[0].close



  console.log(todayObj[0].close)

  let closeMin = 
  todayMinutes>0 ? 
  `${60 - todayMinutes} min.` :
  ""

  let closeHours = 
  toCloseHours>0 ? 
  `${toCloseHours} godz.` :
  ""

  let timeToClose = closeHours +" "+ closeMin

  let closeInfo = toCloseHours>0 ? timeToClose : "zamknięte"



  console.log(closeInfo)

  console.log(timeToClose)
  console.log('timeToClose')
  console.log(toCloseHours)
    let className = "dropdown-slidedown";
    let caption = this.props.open ? "zwiń listę" : `dziś ${plDay} godzina: ${todayHour}:${todayMinutes < 10 ? '0'+todayMinutes : todayMinutes}`;
    let render = this.props.open;
    let closed = false;





    return (
      <div className={"dropdown-container"}>
        <span className={"narrative"}>{caption}</span>
        <SlideDown
          className={"pure-menu pure-menu-scrollable " + className}
          closed={closed}
        >
          {render && this.renderList(this.props.itemCount)}
        </SlideDown>
      </div>
    );
  }
  renderList(itemCount) {
    const items = [];
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
  const todayMinutes = date.getMinutes()

  const plDay = weekDaysPl[todayDay]
  
      items.push(
        openingData.map((item, idx) => {
          const hoursCloseList = item.open - todayHour

          const hoursOpenList = item.close - todayHour

          const hoursOpenListPrev = todayHour > item.prevClose ? item.prevClose - todayHour : todayHour - item.prevClose

          const closeMin = 
          todayMinutes>0 ? 
          `${60 - todayMinutes} min.` :
          ""
        
          const closeHoursMore = 
          hoursCloseList>0 ?
          `${hoursCloseList-1} godz.` :
          ""

          const closeHoursLess = 
          hoursCloseList<0 ?
          `${(hoursCloseList*(-1))-1} godz.` :
          ""

          const openMin = 
          todayMinutes>0 ? 
          `${60 - todayMinutes} min.` :
          ""
        
          const openHoursMore = 
          hoursOpenList>0 ? 
          `${hoursOpenList-1 == 0 ? "" : hoursOpenList-1+" godz."}`  :
          ""

          const openHoursLess = 
          hoursOpenList<0 ?
          `${(hoursOpenList*(-1))-1 == 0 ? "" : hoursOpenList-1+" godz."}`  :
          ""

          const openHoursMorePrev = 
          hoursOpenListPrev>0 ? 
          `${hoursOpenListPrev-1 == 0 ? "" : hoursOpenListPrev-1+" godz."}`  :
          ""

          const openHoursLessPrev = 
          hoursOpenListPrev<0 ?
          ""  :
          `${(hoursOpenListPrev*(-1))-1 == 0 ? "" : hoursOpenListPrev-1+" godz."}`

          console.log(closeMin)

          console.log(hoursOpenListPrev)
          console.log(hoursCloseList)
          
          return(
        <OpeningLi key={idx} className={"pure-menu-item"}>
          <OpeningP><OpeningDay>{item.day}</OpeningDay> <OpeningHours>{item.hours}</OpeningHours></OpeningP>
          {item.day == plDay ? item.day == plDay && (item.open == todayHour || item.open < todayHour)   && item.close > todayHour ?
          <StillOpen>zamknięcie za: {openHoursMore ? openHoursMore+""+closeMin : openHoursLess+""+openMin}</StillOpen> : 
          <NowClose>
            zamknięte
            {/* {hoursCloseList==0 ? `otwarcie za: ${closeMin} min.` : "zamknięte" } */}
          </NowClose> : "" }

        </OpeningLi>
        )}
        )
      );


    return (
      <div>
        <ul className={"pure-menu-list dropdown-list"}>{items}</ul>
      </div>
    );
  }
}

const StillOpen = styled.p`
  color: green;
`
const NowClose = styled.p`
  color: red;
`

const OpeningLi = styled.li`
  list-style: none;

`

const OpeningDay = styled.span`
  font-weight: bold;
`

const OpeningHours = styled.span`
`

const OpeningP = styled.p`
    display: flex;
    justify-content: space-between;
    line-height: 1.5em;
`