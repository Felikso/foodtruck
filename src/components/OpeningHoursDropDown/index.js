import React from "react";
import Dropdown from "./DropDown";
import "./OpeningHoursDropDown.css";
import "react-slidedown/lib/slidedown.css";
import styled from 'styled-components'

import { IoIosArrowDropdownCircle } from 'react-icons/io'

export default class OpeningHoursDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = () => {
      this.setState(state => ({ open: !state.open }));
    };
    this.handleUpdate = () => {
      this.setState(_state => ({ itemCounts: this.generateItemCounts() }));
    };
    this.state = {
      open: false,
      itemCounts: 7
    };
  }

  

  render() {
    return (
      <div className={"main-container"}>
        <div className={"main-columns"}>
        <MainColumn>
          <ContactIconArrow
          onClick={this.handleToggle}
        style={{ transform: this.state.open ?'rotate(180deg)' : 'rotate(0deg)'}}
          ></ContactIconArrow>
        <Dropdown
          itemCount="7"
          open={this.state.open}
          overlay={false}
          alwaysRender={false}
        />
      </MainColumn>
        </div>
      </div>
    );
  }
}
const MainColumn = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  width: 100%;
`

const ContactIconArrow = styled(IoIosArrowDropdownCircle)`
  font-size: 3em;
  transition: .2s;
  cursor: pointer;
  color: var(--contact-icon-arrow-color-hover);

  &:hover{
    color: var(--contact-icon-arrow-color-hover);
  }
`
