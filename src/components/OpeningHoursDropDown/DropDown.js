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

  const plDay = weekDaysPl[todayDay]
  
      items.push(
        openingData.map((item, idx) => (
        <li key={idx} className={"pure-menu-item"}>
          <span>{item.day} {item.hours}</span>
          {item.day == plDay ? item.day == plDay && item.open < todayHour  && item.close > todayHour ?  <StillOpen>wciąż otwarte</StillOpen> : <NowClose>już niestety zamknięte</NowClose> : "" }
        </li>
        )
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
